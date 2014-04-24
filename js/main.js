// create quote class 

var Quote = (function() {

    function Quote(author, fullQuote) {
        this.author = author;
        this.quote = fullQuote;
        this._renderedObject = null;
        this._renderedRateBox = null;
        this._rating = 0;
        this.render();
    };
    Quote.prototype.render = function() {

        // render initial quote object
        this._renderedObject = $('<div class="quote-container"></div>');
        console.log('created:', this._renderedObject)

        var quoteBox = $('<div class="quote-box"></div>');
        var theQuote = $('<strong class="quote">{quote}</strong>'.supplant(this));
        console.log('created:', quoteBox, theQuote);

        var quoteFoot = $('<div class="quote-foot"></div>');
        var quoteAuthor = ('<div class="author"><em>{author}</em></div>'.supplant(this));

        // render rate box dom element
        this.renderRateBox();

        // create full quote dom element
        this._renderedObject.append(quoteBox.append(theQuote), quoteFoot.append(quoteAuthor, this._renderedRateBox));

        return this._renderedObject;

    };

    Quote.prototype.renderRateBox = function() {
        this._renderedRateBox = $('<div class="rate-box"></div>');
        var stars = $('<span class="star rated">★</span><span class="star">★</span><span class="star">★</span><span class="star">★</span><span class="star">★</span>');
        this._renderedRateBox.append(stars);
    };
    Quote.prototype.setRating = function(rating) {
        // for (var i = 1; i <= rating; i++) {
        //     Things[i]
        // };
            };
    Quote.prototype.updateQuote = function(author, fullQuote) {
        // body...
    };
    return Quote;
})();

// create list of quotes

var QuoteList = (function() {
    function QuoteList($target) {
        this.$target = $target;
        this.quotes = [];
    };
    QuoteList.prototype.renderQuotes = function() {
        this.$target.empty();
        for (var i = 0; i < this.quotes.length; i++) {
            this.$target.append(this.quotes[i]._renderedObject);
        };
    };
    QuoteList.prototype.addQuote = function(quote) {
        this.quotes.unshift(quote);
        this.renderQuotes();
    };
    return QuoteList;
})();

// create a bunch of starting quotes
var carlS = new Quote('Carl Sagan', 'Somewhere, something incredible is waiting to be known.');
var homer = new Quote('Homer Simpson', 'Oh, so they have internet on computers now!');
var plato = new Quote('Plato', 'At the touch of love everyone becomes a poet.')
var yoda = new Quote('Yoda', 'When nine hundred years old you reach, look as good you will not.')



$(document).on('ready', function() {

    var allQuotes = new QuoteList($('.all-quotes-container'));

    allQuotes.addQuote(carlS);
    allQuotes.addQuote(homer);
    allQuotes.addQuote(plato);
    allQuotes.addQuote(yoda);



});