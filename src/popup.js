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

                const del = document.createElement("div");
                marker.appendChild(del);
                del.className += " del";
                del.innerHTML = "X";

                const url = document.createElement("div");
                marker.appendChild(url);
                url.innerHTML = `Note: <a href="${element.url}&chronosTimeStamp=${element.currentPlayTime}">${element.note}</a>` ;

                const currentPlayTime = document.createElement("div");
                marker.appendChild(currentPlayTime);
                currentPlayTime.innerHTML = `Timestamp: ${element.currentPlayTime} sec`;

                const dateCreated = document.createElement("div");
                marker.appendChild(dateCreated);
                dateCreated.innerHTML = `Date of creation: ${element.dateCreated}`
        })));