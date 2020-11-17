console.log("Postman Clone");

// Initilizing number of parameter
let paramCount = 0;

//Utility functions 

function toElement(str)
{
    let div = document.createElement('div');
    div.innerHTML = str;
    return div.firstElementChild;
}


// Hiding custom parameter box initially
let paraBox = document.getElementById('paraBox');
paraBox.style.display = "none";


// SHowing param box and hiding json box
let paramsRadio = document.getElementById('custom');
paramsRadio.addEventListener('click', () =>
{
    document.getElementById('jsonText').style.display = "none";
    paraBox.style.display = "block";
})

let jsonRadio = document.getElementById('json');
jsonRadio.addEventListener('click', () =>
{
    document.getElementById('jsonText').style.display = "block";
    paraBox.style.display = "none";
})

// Adding more options by clicking on plus button
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', () =>
{
    let params = document.getElementById('params');
    let string = `<div class="form-row my-2">
                <label for="url" class="col-md-2 col-form-label"
                >Parameter ${ paramCount + 2 } :
                </label>
                <div class="col-md-4">
                <input
                    type="text"
                    class="form-control"
                    id="parametrerKey${ paramCount + 2 }"
                    placeholder="Enter Parameter Key"
                />
                </div>
                <div class="col-md-4">
                <input
                    type="text"
                    class="form-control"
                    id="parametrerValue${ paramCount + 2 }"
                    placeholder="Enter Parameter Value"
                />
                </div>
                <button class="btn btn-info deleteElement">-</button>
            </div>`;
    paramCount++;

    // Converting the string to the element and appending to DOM
    let elem = toElement(string);
    params.appendChild(elem);

    // Deleting an element on clicking - button
    let deleteElem = document.getElementsByClassName('deleteElement');
    for (let item of deleteElem)
    {
        item.addEventListener('click', (e) =>
        {
            let choice = confirm("Are your sure you want to delete this ?");
            if (choice)
            {
                e.target.parentElement.remove();
            }
        })
    }


})

// Adding functionality of fetching the data
let submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', () =>
{
    // Showing the processing message
    let response = document.getElementById("responsePrism");
    response.innerHTML = "Please wait while we process your request ...";

    // Getting all the values providd by user
    let url = document.getElementById('url').value;
    let requestType = document.querySelector("input[name='requestType']:checked").value;
    let contentType = document.querySelector("input[name='contentType']:checked").value;


    if (contentType == 'custom')
    {
        data = {};
        for (i = 0; i < paramCount + 1; i++)
        {
            if (document.getElementById('parametrerKey' + (i + 1)) != undefined)
            {
                let key = document.getElementById('parametrerKey' + (i + 1)).value;
                let value = document.getElementById('parametrerValue' + (i + 1)).value;
                data[key] = value;
            }
        }
        data = JSON.stringify(data);
    }
    else
    {
        data = document.getElementById('jsonText').value;
    }

    // Confirmation for the purpose of debugging
    // console.log("Url ", url);
    // console.log("requestType ", requestType);
    // console.log("Content TYep ", contentType);
    // console.log("Data ", data);

    // Making the rquest on the basdis if its type
    if (requestType == "GET")
    {
        fetch(url, {
            method: 'GET',
        })
            .then(response => response.text())
            .then((text) =>
            {
                response.innerHTML = text;
                Prism.highlightAll();
            })
    }
    else
    { 
        fetch(url, {
            method: 'POST',
            body: data,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
        })
            .then(response => response.text())
            .then((text) =>
            {
                response.innerHTML = text;
                Prism.highlightAll();
            })
    }

})

