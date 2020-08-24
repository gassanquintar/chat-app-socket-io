const socket = io()

// socket.on('countUpdated', (count) => {
//     console.log('The count has been updated!', count)
// })

// var el = document.getElementById('increment');
// el.addEventListener('click', () => {
//   console.log('Clicked')
//   socket.emit('increment')
// });

socket.on('message', (message) => {
  console.log(message)
})

// challenge II

const formMessage = document.querySelector('#formMessage')
const inputMessage = document.querySelector('#inputMessage')

formMessage.addEventListener('submit', (e) => {
  e.preventDefault()
  socket.emit('SendMessage', inputMessage.value)
})