export const AlertError = {

    alertadeError: document.querySelector('.alert-error'),

    open(){
        AlertError.alertadeError.classList.add('open')
    }
    ,
    close() {
        AlertError.alertadeError.classList.remove('open')
    }
}