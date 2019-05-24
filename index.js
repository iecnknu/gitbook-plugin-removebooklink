var cheerio = require( "cheerio" )


var removebooklink = function(page){

    var $ = cheerio.load(page.content);
    
    $(document).ready(function(){
        $('.summary li .custom-link').remove();
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
