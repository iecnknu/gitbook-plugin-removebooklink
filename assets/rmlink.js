require([
    'gitbook',
    'jquery'
], function (gitbook, $) {
    function removelink() {
        var link = $('a.custom-link')
        link.remove()
    }
    removelink()
    gitbook.events.on('page.change', function () {
        removelink()
    })


})