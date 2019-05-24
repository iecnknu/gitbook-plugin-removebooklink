require([
    'gitbook',
    'jquery'
], function (gitbook, $) {
    function changeLink() {
        var link = $('a.custom-link')
        link.attr('href', 'https://www.nknucsec.com')
        link.text('Published with IEC, NKNU')

        var icon_link = $('link[rel=\'shortcut icon\']')
        icon_link.attr('href', 'https://drive.google.com/uc?export=download&id=1hvAlY4gOjjzHm4XA-Wv64A1_dX9z0pk0')
    }
    changeLink()
    gitbook.events.on('page.change', function () {
        changeLink()
    })


})