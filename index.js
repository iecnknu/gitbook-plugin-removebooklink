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
            }
            return page
        }
    }
}