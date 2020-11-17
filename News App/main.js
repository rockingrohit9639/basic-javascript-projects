console.log("Welcome to Today News");

api_key = "93aa36a48c83413ba9553ea1cf609c7f";


function fetchNews(heading)
{
    const xhr = new XMLHttpRequest();

    xhr.open("GET", `https://newsapi.org/v2/top-headlines?${ heading }&apiKey=${ api_key }`, true);

    xhr.onprogress = function ()
    {
        let div = document.getElementById('news-headlines');
        div.innerHTML = `<div class="spinner-border text-success" role="status">
        </div>
        <p class="">Fetching the news...</p>`;
    }

    xhr.onload = function ()
    {
        if (this.status === 200)
        {
            let data = JSON.parse(this.responseText);
            let div = document.getElementById('news-headlines');
            let accordianHtml = ``;
            accordianHtml += `<h1>Source : ${ data.articles[0].source.name }</h1>`;
            data.articles.forEach(function (element, index)
            {
                if (element.description != null)
                {
                    accordianHtml += `<div class="accordion" id="accordionExample">
                <div class="card">
                  <div class="card-header" id="headingOne">
                    <h2 class="mb-1">
                      <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse${ index }" aria-expanded="true" aria-controls="collapseOne">
                        ${ element.title }
                      </button>
                    </h2>
                  </div>
              
                  <div id="collapse${ index }" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <div class="card-body">
                      ${ element.description }
                    </div>
                  </div>
                </div>
              </div>`;
                }
            })

            div.innerHTML = accordianHtml;

        }
        else
        {
            console.log("There was some error occured");
        }
    }


    xhr.send();
}
