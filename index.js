var cheerio = require( "cheerio" )


var removebooklink = function(page){

    var $ = cheerio.load(page.content);
    $('div.book-summary nav ul.summary li a.custom-link').each(function(){
        $(this).remove();
    });

    page.content = $.html();

    return page;
}

module.exports = {


    // Map of hooks
    hooks: {

    	'page': function(page){    		
    		return removebooklink(page);
    	}
    },

    // Map of new blocks
    blocks: {},

    // Map of new filters
    filters: {}
};
