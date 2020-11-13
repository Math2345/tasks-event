(function() {

    const input = $('.autoExpand');

    function disabledEvent(event) {
        switch (event.type) {
            case 'copy' : alert('Копирование текста заблокировано'); break;
            case 'paste' : alert('Вставка текста заблокировано'); break;
            case 'contextmenu' : alert('Контекстное меню заблокировано'); break;
        }

        return false;
    }

    input.on('copy paste contextmenu', disabledEvent)
})();