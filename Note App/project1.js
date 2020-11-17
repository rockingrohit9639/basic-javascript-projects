console.log("This is our first project in JavaScript");

if (localStorage.length > 0)
{
    showNotes();
}

    

// Adding the note
let addBtn = document.getElementById('addBtn');
var counter = 1;

addBtn.addEventListener('click', addNote);

function addNote(e)
{
    let title = document.getElementById('title');
    let addText = document.getElementById('addText');
    let priority = document.getElementById('priority');
    let notes = localStorage.getItem("notes");
    if (notes == null)
    {
        notesObj = [];
    }
    else
    {
        notesObj = JSON.parse(notes);
    }

    if (addText.value != "" && title.value != "")
    {
        data = {
            title: title.value,
            note: addText.value,
            priority : priority.value,
        }
        notesObj.push(data);
        localStorage.setItem("notes", JSON.stringify(notesObj));
        addText.value = "";
        title.value = "";
        priority.value = "Less Important";
        showNotes();
    }
}


//Function to show all the notes from localStorage
function showNotes()
{
    let notes = localStorage.getItem("notes");
    if (notes == null)
    {
        notesObj = [];
    }
    else
    {
        notesObj = JSON.parse(notes);
    }

    let html = "";

    if (notesObj.length > 0)
    {
        notesObj.forEach(function (element, i)
        {
            html += `
        <div class="card bg-${ getPriorityBg(notesObj[i].priority) } text-white mx-2 my-2 noteCard" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title"> ${ notesObj[i].title } </h5>
            <p class="card-text">
              ${ notesObj[i].note }
            </p>
            <button id="${ i }" onclick="deleteNote(this.id)" class="btn btn-light">Delete Note</button>
          </div>
        </div>
        `
        });

        let noteElem = document.getElementById('notes');
        noteElem.innerHTML = html;
    } else
    {
        let noteElem = document.getElementById('notes');
        noteElem.innerHTML = "";
    }
}

function getPriorityBg(prior)
{
    if (prior.toLowerCase() == "less important")
    {
        return "dark";
    }
    else if (prior.toLowerCase() == "important")
    {
        return "warning";
    }
    else if (prior.toLowerCase() == "very important")
    {
        return "danger";
    }
    
}

//Function to delete a note from localStorage
function deleteNote(id)
{
    let notes = localStorage.getItem("notes");
    if (notes == null)
    {
        notesObj = [];
    }
    else
    {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(id, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

let searchQuery = document.getElementById('searchQuery');

searchQuery.addEventListener('input', function ()
{
    let inputVal = searchQuery.value.toLowerCase();

    let noteCard = document.getElementsByClassName("noteCard");
    
    Array.from(noteCard).forEach(function (element)
    {
        let cardTitle = element.getElementsByTagName("h5")[0].innerText;
        let cardText = element.getElementsByTagName("p")[0].innerText;
        console.log(cardTitle, cardText);
        
        if (cardText.includes(inputVal) || cardTitle.includes(inputVal))
        {
            element.style.display = "block";
        }
        else
        {
            element.style.display = "none";
        }
        
    })
})

