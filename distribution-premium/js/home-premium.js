$(function () {

    Messenger.options = {
        extraClasses: 'messenger-fixed messenger-on-top  messenger-on-right',
        theme: 'flat',
        messageDefaults: {
            showCloseButton: true
        }
    }
    Messenger().post({
        message: 'Hey, how are you?<br>Welcome to the Dark Admin Premium template by Bootstrapious.',
        type: 'success'
    });
});