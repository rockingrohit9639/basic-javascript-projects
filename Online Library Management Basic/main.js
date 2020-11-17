console.log("Online Library Management");

/* 
TODO : 
1. Store all the data in localstorage
2. Add an option to delte book
3. Add ScrollView
*/

// Book constructor
function Book(name, author, type)
{
    this.name = name;
    this.author = author;
    this.type = type;
}

// Display Constructor
function Display()
{

}

// Add methods to display prototype
Display.prototype.add = function (book)
{
    let tbody = document.getElementById('table-body');
    let html = `<tr>
    <td>${ book.name }</td>
    <td>${ book.author }</td>
    <td>${ book.type }</td>
    </tr>`;

    tbody.innerHTML += html;
};


Display.prototype.clear = function ()
{
    let libForm = document.getElementById("lib-form");
    libForm.reset();
};

Display.prototype.show = function ()
{
    document.getElementById('mesg').innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
    <strong>Success</strong> Book Added Successfully
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>`;
    setTimeout(() => {
        document.getElementById('mesg').innerHTML = "";
    }, 2000);
    
};



// Adding form submit listner -> lib-form
let form = document.getElementById("lib-form");

form.addEventListener("submit", onSubmit);

function onSubmit(e)
{
    e.preventDefault();
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('authorName').value;


    let scifi = document.getElementById('scifi');
    let edu = document.getElementById('education');
    let bio = document.getElementById('biography');
    let type;

    if (scifi.checked)
    {
        type = scifi.value;
    }
    else if (edu.checked)
    {
        type = edu.value;
    } else if (bio.checked)
    {
        type = bio.value;
    }

    let book = new Book(name, author, type);
    let display = new Display();

    display.add(book);
    display.show();
    display.clear();

    console.log(book);
}

