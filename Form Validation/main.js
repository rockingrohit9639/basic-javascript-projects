console.log("This is our Project 4 based on form validation.");

const uname = document.getElementById('uname');
const email = document.getElementById('emailId');
const number = document.getElementById('phone'); 
const car = document.getElementById('cars');
const address = document.getElementById('address');
const mesg = document.getElementById('message');
const form = document.getElementById('form');


// console.log(uname, email, number);
uname.addEventListener('input', () =>
{
    let regex = /[a-zA-Z]([0-9a-zA-Z]){5,10}$/;
    let str = uname.value;
    if (regex.test(str))
    {
        if (!uname.classList.contains("is-valid"))
        {
            uname.classList.add("is-valid");
        }

        if (uname.classList.contains("is-invalid"))
        {
            uname.classList.remove("is-invalid");
        }
    }
    else
    {
        if (uname.classList.contains("is-valid"))
        {
            uname.classList.remove("is-valid");
        }
        if (!uname.classList.contains("is-invalid"))
        {

            uname.classList.add("is-invalid");
        }

    }

})


email.addEventListener('input', () =>
{
    let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let str = email.value;
    if (regex.test(str))
    {
        if (!email.classList.contains("is-valid"))
        {
            email.classList.add("is-valid");
        }

        if (email.classList.contains("is-invalid"))
        {
            email.classList.remove("is-invalid");
        }
    }
    else
    {
        if (email.classList.contains("is-valid"))
        {
            email.classList.remove("is-valid");
        }
        if (!email.classList.contains("is-invalid"))
        {

            email.classList.add("is-invalid");
        }

    }
})


number.addEventListener('input', () => 
{
    let regex = /(\d+){10}$/;
    let str = number.value;
    if (regex.test(str))
    {
        if (!number.classList.contains("is-valid"))
        {
            number.classList.add("is-valid");
        }

        if (number.classList.contains("is-invalid"))
        {
            number.classList.remove("is-invalid");
        }
    }
    else
    {
        if (number.classList.contains("is-valid"))
        {
            number.classList.remove("is-valid");
        }
        if (!number.classList.contains("is-emailid"))
        {
            number.classList.add("is-invalid");
        }

    }
})


form.addEventListener('submit', (e) =>
{ 
    e.preventDefault();
    let div = document.getElementById('content');
    div.innerHTML = `<ul>
    <li> Username : ${ uname.value }</li>
    <li> Email Id : ${ email.value }</li>
    <li> Phone No. : ${ number.value }</li>
    <li> Car : ${ car.value }</li>
    <li> Address : ${ address.value }</li>
    <li> Message : ${ mesg.value }</li>
     </ul>`;
    form.reset();
    
})