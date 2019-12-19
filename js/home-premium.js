$(function () {

    Messenger.options = {
        extraClasses: 'messenger-fixed messenger-on-top  messenger-on-right',
        theme: 'flat',
        messageDefaults: {
            showCloseButton: true
        }
    }
    Messenger().post({
        message: 'Hey Sarah!<br>Your portfolio grew by 5.6% or $25,751 since your last visit!',
        type: 'success'
    });
});