module.exports = {
    book:{
        assets:'./assets',
        js:[
            'rmlink.js'
        ]
    },
    hooks:{
        'page':function(page){
            if(page.path==='pages.md'){
                // console.log(page.content)
            }
            // page.content = page.content.replace('https://www.gitbook.com','http://www.joinforwin.com:90').replace('Published with GitBook','Published by Joinforwin')
            return page
        }
    }
}