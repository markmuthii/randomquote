var quoteText = '';
var authorText = '';
// var current = 0;

function callQuote() {

	var quote = [];
	var author = [];

	$.getJSON("quotes/quotes.json", function(json){

		var q = Math.floor(Math.random() * json.length);

		json.forEach((json) => {
			quote.push(json.quote);
			author.push(json.name);
		});

	quoteText = quote[q];
	authorText = author[q];

	console.log(q + " " + quoteText + " " + authorText)

	$('#quote').html(quoteText);
	$('#authorName').html(authorText);

	});
}

$(document).ready(() => {

	callQuote();

	$('#newQuote').click(() => {

		callQuote();

	});

	$('#tweet').click(() => {
      window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + quoteText + '" ~' + authorText));
    
  });
});