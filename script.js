const scriptURL = 'https://script.google.com/macros/s/AKfycby4pe0hiplQpxjoXu6tBIJmYKz1a33XBGFXLhx1nGT1LbTd4bjz6-yuwnPgpz3ZqH5Z/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Thank You Subscribing!"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})