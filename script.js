const div = document.querySelector('#notepad-container')
const createbtn = document.querySelector('#notesAddBtn')
let notes = document.querySelectorAll(".input-box")


function shownotes() {
  const storedNotes = localStorage.getItem('notes');
    if (storedNotes) {
      div.innerHTML = storedNotes;
    } else {
      div.innerHTML = ''; 
     }
  }
shownotes()
function updateStorage() {
  localStorage.setItem('notes', div.innerHTML)
}
createbtn.addEventListener('click', () => {
  let inputBox = document.createElement('p')
  let img=document.createElement('img')
  inputBox.className = "input-box"
  inputBox.setAttribute("contenteditable","true")
  img.className='img'
  img.src='./assets/delete.png'
  div.appendChild(inputBox).appendChild(img)
  updateStorage()
})
div.addEventListener("click", function(e){
  if (e.target.tagName === 'IMG') {
    e.target.parentElement.remove()
    updateStorage()
  }
  else if (e.target.tagName === 'P') {
    notes = document.querySelectorAll(".input-box")
    notes.forEach(note => {
    note.onkeyup = function () {
       updateStorage();
   };
 });
  }
})

// const div = document.querySelector('.notepad-container');
// const createbtn = document.querySelector('.notesAddBtn');
// let notes = document.querySelectorAll(".input-box");

// function shownotes() {
//   console.log('Shownotes');
//   const storedNotes = localStorage.getItem('notes');
//   if (storedNotes) {
//     div.innerHTML = storedNotes;
//   } else {
//     div.innerHTML = ''; // Initialize empty if nothing is in localStorage
//   }
// }
// shownotes();

// function updateStorage() {
//   console.log('Update');
//   localStorage.setItem('notes', div.innerHTML);
// }

// createbtn.addEventListener('click', () => {
//   let inputBox = document.createElement('p');
//   let img = document.createElement('img');
//   inputBox.className = "input-box";
//   inputBox.setAttribute("contenteditable", "true");
//   img.className = 'img';
//   img.src = './delete.png';
//   inputBox.appendChild(img);
//   div.appendChild(inputBox);
//   updateStorage(); // Update storage after adding a new note
// });

// div.addEventListener("click", function (e) {
//   if (e.target.tagName === 'IMG') {
//     e.target.parentElement.remove();
//     updateStorage();
//   } else if (e.target.tagName === 'P') {
//     console.log("Editing note");
//     notes = document.querySelectorAll(".input-box");
//     notes.forEach(note => {
//       note.onkeyup = function () {
//         updateStorage();
//       };
//     });
//   }
// });
