// create quote class 

var Quote = (function() {

        function Quote(author, fullQuote) {
            this.author = author;
            this.quote = fullQuote;
            this._renderedObject = null;
            this._rating = null;
            this._rateBox = null;
        };
        Quote.prototype.render = function() {
            this._renderedObject = $('<div class="quote-container"></div>');

            var quoteBox = $('<div class="quote-box"></div>');
            var theQuote = $('<strong class="quote">{0}</strong>'.supplant(this.quote));

            var quoteFoot = $('<div class="quote-foot"></div>');
            var quoteAuthor = ('<div class="author"><em>{0}</em></div>'.supplant(this.author));
            // get rate box dom element

            // create full quote dom element
            _renderedObject.append(quoteBox.append(theQuote), quoteFoot.append(quoteAuthor, !rateBox!);


            };
            return Quote;
        })();

    // create list of quotes

    var QuoteList = (function() {
        function QuoteList($target) {
            this.$target = $target;
        };
        return QuoteList;
    })();

    $(document).on('ready', function() {

    });