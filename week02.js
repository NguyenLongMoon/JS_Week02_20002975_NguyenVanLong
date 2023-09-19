// let url = "https://api.restful-api.dev/objects";
//Fetch Get
// id = 1
// fetch(url + `/${id}`)
//     .then((Response) => Response.json())
//     .then((json) => console.log(json));


//Fetch POST 

// fetch(url, {
//         method: 'POST',
//         body: JSON.stringify({
//             "name": "Samsung Galaxy A50",
//             "data": {
//                 "capacity": "64gb",
//                 "color": "orange"
//             }
//         }),
//         headers: {
//             'Content-Type': 'application/json; charset=UTF-8',
//         },
//     })
//     .then((response) => response.json())
//     .then((json) => console.log(json));

//Fetch Put 
// let idUpdate = 1
// fetch(url + `/${idUpdate}`, {
//         method: 'PUT',
//         body: JSON.stringify({
//             "name": "Google Pixel 6 Pro",
//             "data": {
//                 "capacity": "256gb",
//                 "color": "red"
//             }
//         }),
//         headers: {
//             'Content-Type': 'application/json; charset=UTF-8',
//         },
//     })
//     .then((Response) => Response.json())
//     .then((json) => console.log(json));

//Fetch Delete

// let idDelete = 5
// fetch(url + `/${idDelete}`, {
//     method: 'DELETE',
// });


// const urlBacon =
// "https://baconipsum.com/api/?type=all-meat";

const urlBacon = "https://api.dictionaryapi.dev/api/v2/entries/en/human";
(function() {
    $.ajax({
            method: "GET",
            url: urlBacon,
            dataType: "json"
        })
        .done(function(data) {
            console.log(data[0]);
        })
        .fail(function() {
            alert("no good");
        });
})()