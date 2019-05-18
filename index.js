var cheerio = require( "cheerio" )


var wrapImageTags = function(page){

    var $ = cheerio.load(page.content);

    $('.summary a .custom-link').remove();
    
    page.content = $.html();

    return page;

}

module.exports = {


    // Map of hooks
    hooks: {

    	'page': function(page){    		
    		return wrapImageTags(page);
    	}
    },

    // Map of new blocks
    blocks: {},

    // Map of new filters
    filters: {}
};
