require([
    'gitbook',
    'jquery'
], function (gitbook, $) {
    function removelink() {
        var link = $('a.custom-link')
        var divider = $('li.divider')
        link.remove()
        divider.remove()
        var searchText = $('#book-search-input input')
        searchText.attr('placeholder','開始搜尋')
    }
    removelink()
    gitbook.events.on('page.change', function () {
        removelink()
    })


})