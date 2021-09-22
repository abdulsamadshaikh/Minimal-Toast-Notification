/*  
Project Name: Minimal Toast Notification
Description: Give me a thumbs-up, If you like it. Enjoy!
Author: Abdul Samad
Author URI: https://getabdulsamad.com/
*/

const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
    'Toast Notification One',
    'Toast Notification Two',
    'Toast Notification Three'
]

const types = ['info', 'success', 'error']

button.addEventListener('click', () => createNotification())

function createNotification(message = null, type = null) {
    const notify = document.createElement('div')
    notify.classList.add('toast')
    notify.classList.add(type ? type : getRandomType())

    notify.innerText = message ? message : getRandomMessage()

    toasts.appendChild(notify)

    setTimeout(() => {
        notify.remove()
    }, 3000)
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomType() {
    return types[Math.floor(Math.random() * types.length)]
}