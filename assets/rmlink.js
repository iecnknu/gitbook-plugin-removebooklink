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
        
        var link = $('.gitbook-link')
        link.before('<li class="divider"></li>')
    }
    removelink()
    gitbook.events.on('page.change', function () {
        removelink()
    })


})
