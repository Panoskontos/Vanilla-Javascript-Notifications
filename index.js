console.log('activating javascript')

// grabing div items
var notify = document.querySelector('.notify')
var notify_items_total = document.querySelector('.items-total')
var albums = document.querySelectorAll('.album')
var save_button = document.querySelectorAll('.button')

console.log(albums)
console.log(notify)
console.log(notify_items_total)
console.log(save_button)

//   create an array and add albums
// when you click on an album add class selected
// which is a css that adds some background
document.addEventListener('click', function handleClick(event) {
    event.target.classList.add('selected');
  });
  

  
