console.log("THis is using ES6");



// Class Book start
class Book
{
    constructor(name, author, type)
    {
        this.name = name;
        this.author = author;
        this.type = type;
    }


}
// Class Book End


// Class Display Start
class Display
{
    add(book)
    {
        let localBooks = localStorage.getItem("books");
        let booksObj;
        if (localBooks == null)
        {
            booksObj = [];
        }
        else
        {
            booksObj = JSON.parse(localBooks);
        }

        let data = {
            name: book.name,
            author: book.author,
            type: book.type
        }

        booksObj.push(data);
        localStorage.setItem("books", JSON.stringify(booksObj));
    };

    displayItems()
    {
        let tbody = document.getElementById('table-body');
        let localBooks = localStorage.getItem("books");
        localBooks = JSON.parse(localBooks);
        let html = ``;

        for (let i = 0; i < localBooks.length; i++)
        {
            html += `<tr>
            <td>${ localBooks[i].name }</td>
            <td>${ localBooks[i].author }</td>
            <td>${ localBooks[i].type }</td>
            <td> <button class="btn small btn-danger" id=${ i } onclick="display.deleteItem(this.id)">Delete</button> </td>
            </tr>`;
        }
        tbody.innerHTML = html;
    }

    clear()
    {
        let libForm = document.getElementById("lib-form");
        libForm.reset();
    };

    showMesg()
    {
        document.getElementById('mesg').innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Success</strong> Book Added Successfully
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
        </div>`;
        setTimeout(() =>
        {
            document.getElementById('mesg').innerHTML = "";
        }, 2000);
    };

    deleteItem(id)
    {
        let localBooks = localStorage.getItem("books");
        let booksObj;
        if (localBooks == null)
        {
            booksObj = [];
        }
        else
        {
            booksObj = JSON.parse(localBooks);
        }

        booksObj.splice(id, 1);
        localStorage.setItem("books", JSON.stringify(booksObj));
        display.displayItems();
    }

}
// Class Display Ends Here
var display = new Display();
display.displayItems();


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
    

    display.add(book);
    display.showMesg();
    display.displayItems();
    display.clear();

    console.log(book);
}


