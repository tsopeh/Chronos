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
        .then(response => response.json().then((response) => response.reverse().forEach(element => {

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
                del.addEventListener("click", () => {
                        fetch(`http://localhost:3000/markers/${element.id}`, {
                                headers: {
                                        'Accept': 'application/json',
                                        'Content-Type': 'application/json'
                                },
                                method: "DELETE"
                        }).catch((err) => {
                                console.log(err)
                        });
                        del.parentNode.parentNode.removeChild(del.parentNode);
                })


                const url = document.createElement("div");
                marker.appendChild(url);
                url.innerHTML = `Note: <a href="${element.url}&chronosTimestamp=${element.currentPlayTime}">${element.note}</a>`;

                const currentPlayTime = document.createElement("div");
                marker.appendChild(currentPlayTime);
                currentPlayTime.innerHTML = `Timestamp: ${element.currentPlayTime} sec`;

                const dateCreated = document.createElement("div");
                marker.appendChild(dateCreated);
                dateCreated.innerHTML = `Date of creation: ${element.dateCreated}`
        })));