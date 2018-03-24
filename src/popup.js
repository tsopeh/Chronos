//import { Timestamp } from "./timestamp.js";
const content = document.getElementById("content");
const main = document.querySelector("article");

// ((main) => {
//         return fetch("http://localhost:3000/movies")
//                 .then(response => {
//                         console.log(response);
//                         return response;
//                 })

// })(main);

fetch("http://localhost:3000/markers")
        .then(response => response.json().then((response) => response.forEach(element => {

                const marker = document.createElement("div");
                main.appendChild(marker);
                marker.className += " marker";

                // const id = document.createElement("div");
                // marker.appendChild(id);
                // id.innerHTML = element.id;

                const url = document.createElement("div");
                marker.appendChild(url);
                url.innerHTML = `<a href="${element.url}">${element.note}</a>` ;

                const currentPlayTime = document.createElement("div");
                marker.appendChild(currentPlayTime);
                currentPlayTime.innerHTML = element.currentPlayTime;

                const dateCreated = document.createElement("div");
                marker.appendChild(dateCreated);
                dateCreated.innerHTML = element.dateCreated;
        })));