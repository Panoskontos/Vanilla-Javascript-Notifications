console.log('activating javascript')


//   create an array and add albums
// when you click on an album add class selected
// which is a css that adds some background
document.addEventListener('click', function handleClick(event) {
    event.target.classList.add('selected');
  });
  
// disable click
document.addEventListener('onclick', function drop_selected(event) {
    event.target.classList.remove('selected');
});
  
