(function() {

    const input = document.querySelector('.autoExpand');

    function disabledEvent(event) {
        event.preventDefault();

        switch (event.type) {
            case 'copy' : alert('Копирование текста заблокировано'); break;
            case 'paste' : alert('Вставка текста заблокировано'); break;
            case 'contextmenu' : alert('Контекстное меню заблокировано'); break;
        }
    }

    const events = ['copy', 'paste', 'contextmenu'];

    events.forEach((event) => {
        input.addEventListener(event, disabledEvent, true);
    })


})();