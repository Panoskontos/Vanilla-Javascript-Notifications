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

var albums_selected = []
var i = 0
while (i<albums.length){
    albums[i].onclick = function(e){
        // grabbing tittle text content
        // always grab the exact class in javascript
        var album_title = this.querySelector('.title').textContent
        console.log(album_title)

        // control flow to add class
        if (this.classList.contains('selected') == false) {
            this.classList.add('selected')
            albums_selected.push(album_title)

        } else {
            this.classList.remove('selected')
            albums_selected.pop(album_title)
        }
        console.log(albums_selected)

        

    }

    save_button[0].onclick = function (e){

        notify_items_total.textContent = albums_selected.length + ' Items were saved'

        if (notify.classList.contains('active') == false){
            notify.classList.add('active')
        }

    }
    
    i++
}

//   create an array and add albums
// when you click on an album add class selected
// which is a css that adds some background
// document.addEventListener('click', function handleClick(event) {
//     event.target.classList.add('selected');
//   });
  

  
