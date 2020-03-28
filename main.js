var path_json = 'api/gradiAuthors.json';

function cargarJSON() {
    const xhttp = new XMLHttpRequest();
    xhttp.overrideMimeType("application/json");
    xhttp.open('GET', path_json, true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == "200") {
            var photos = JSON.parse(this.responseText);
            let container = document.querySelector('#container');
            container.innerHTML = '';

            for (let photo of photos) {
                container.innerHTML += 
                    `<div>
                        <h2>${photo.id}</h2>
                        <img src="${photo.download_url}">
                        <h3>${photo.author}</h3>
                        <div class="overlay"></div>
                    </div>`;                
            }
            console.log(photos);
        }
    };
 }

 document.addEventListener("DOMContentLoaded", cargarJSON());