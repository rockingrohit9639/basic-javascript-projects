console.log("CV Screener");

// Suppose this data is coming from api
const data = [
    {
        name: "Rohit Sani",
        age: 19,
        city: "Khurja",
        laguage: "Python",
        framework: "Django",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
        name: "Lalit Singh",
        age: 19,
        city: "Ghaziabad",
        laguage: "C",
        framework: "None",
        avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
        name: "Khushi Sharma",
        age: 18,
        city: "Delhi",
        laguage: "C",
        framework: "None",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
        name: "Himanshu Thakur",
        age: 19,
        city: "Delhi",
        laguage: "C",
        framework: "None",
        avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    },
]

// CV Iterator
function cvItr(profiles)
{
    let nextIndex = 0;

    return {
        next: function ()
        {
            return nextIndex < profiles.length ? { value: profiles[nextIndex++], done: false } : { done: true }
        }
    }
}
const candidates = cvItr(data);

nextCV();

// Button for iterating to the next profile
let nextBtn = document.getElementById('nextBtn');
nextBtn.addEventListener('click', nextCV);


function nextCV()
{
    const currentCandiodate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');

    if (currentCandiodate != undefined)
    {
        image.innerHTML = `<img src="${ currentCandiodate.avatar }"  class="image-fluid m-2">`;
        profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name : ${ currentCandiodate.name }</li>
    <li class="list-group-item">Age : ${ currentCandiodate.age }</li>
    <li class="list-group-item">Lives In : ${ currentCandiodate.city }</li>
    <li class="list-group-item">Works On : ${ currentCandiodate.laguage }</li>
    <li class="list-group-item">Framework Uses : ${ currentCandiodate.framework }</li>
  </ul>`;
    } else
    {
        alert("End of Applications");
        window.location.reload();
    }


}