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

        var quoteContent = $('<div class="quote-content"></div>');

        var quoteBox = $('<div class="quote-box"></div>');
        var theQuote = $('<span class="quote">{quote}</span>'.supplant(this));

        var quoteFoot = $('<div class="quote-foot"></div>');
        var quoteAuthor = $('<div class="author"><em>{author}</em></div>'.supplant(this));

        var closeButton = $('<div class="remove">✖</div>');

        // render rate box dom element
        this.renderRateBox(0);

        // create full quote dom element
        quoteContent.append(quoteBox.append(theQuote), quoteFoot.append(quoteAuthor, this._renderedRateBox), closeButton);
        this._renderedObject.append(quoteContent);

        return this._renderedObject;

    };
    // render rating box
    Quote.prototype.renderRateBox = function(rating) {
        this._renderedRateBox = $('<div class="rate-box"></div>');
        var stars = $('<span class="star">★</span><span class="star">★</span><span class="star">★</span><span class="star">★</span><span class="star">★</span>');
        this._renderedRateBox.append(stars);

    };
    Quote.prototype.setRateBox = function(rating) {
        this._rating = rating;
        // clear all ratings before setting new ones
        this._renderedRateBox.find('span').removeClass('rated');
        // cycle through all stars and highlight based on rating
        for (var i = 1; i <= rating; i++) {
            this._renderedRateBox.find('span:nth-child(' + i + ')').addClass('rated');
        };
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
        this._lastRemovedQuote = null
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
    QuoteList.prototype.sortQuotes = function() {
        this.quotes.sort(function(a, b) {
            return a._rating < b._rating ? 1 : -1;
        });
        this.renderQuotes();
    };
    QuoteList.prototype.removeQuote = function(quote) {
        this._lastRemovedQuote = this.quotes.splice(this.quotes.indexOf(quote), 1)[0];
        this.renderQuotes();
    };
    QuoteList.prototype.restoreLastQuote = function() {
        this.addQuote(this._lastRemovedQuote);
        this.renderQuotes();
    };
    return QuoteList;
})();

// create a bunch of starting quotes
var carlS = new Quote('Carl Sagan', 'Somewhere, something incredible is waiting to be known.');
var homer = new Quote('Homer Simpson', 'Oh, so they have internet on computers now!');
var plato = new Quote('Plato', 'At the touch of love everyone becomes a poet.')
var yoda = new Quote('Yoda', 'When nine hundred years old you reach, look as good you will not.')

var allQuotes = new QuoteList($('.all-quotes-container'));

allQuotes.addQuote(carlS);
allQuotes.addQuote(homer);
allQuotes.addQuote(plato);
allQuotes.addQuote(yoda);

$(document).on('ready', function() {

    $(document).on('click', '.star', function() {
        var newRating = $(this).index() + 1;
        quoteContainer = $(this).closest('.quote-container');
        var theStaredQuote = allQuotes.quotes.filter(function(a) {
            return a._renderedObject.get(0) === quoteContainer.get(0)
        })[0];
        theStaredQuote.setRateBox(newRating);
    });
    $(document).on('click', '.remove', function() {
        quoteContainer = $(this).closest('.quote-container');
        var theStaredQuote = allQuotes.quotes.filter(function(a) {
            return a._renderedObject.get(0) === quoteContainer.get(0)
        })[0];
        allQuotes.removeQuote(theStaredQuote);
    });
    $(document).on('click', '.add', function() {
        $('.outside').toggle();
    });
    $(document).on('click', '.submit', function() {
        $('.outside').toggle();
        if (($('#get-author').val() === '') || ($('#get-quote').val() === '')) {
            console.log("nothing added");
        } else {

            var author = $('#get-author').val();
            var quote = $('#get-quote').val();
            console.log('make this:', author, quote);
            $('#get-author').val('');
            $('#get-quote').val('');
            allQuotes.addQuote(new Quote(author, quote));
        }

        return false;
    });
    $(document).on('click', '.sort', function() {
        allQuotes.sortQuotes();
    })



});