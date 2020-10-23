// document.readyState(alert('hello'))

// const Http = new XMLHttpRequest();
// const url='https://jsonplaceholder.typicode.com/posts';
// Http.open("GET", url);
// Http.send();

// Http.onreadystatechange = (e) => {
  
//   var res =  JSON.parse(Http.responseText)
//   console.log(res[10].userId)
// }


// SIMPLE FETCH REQUEST
// const Url='https://jsonplaceholder.typicode.com/posts';
// fetch(Url)
// .then(data=>{return data.json()})
// .then(risposta=>{console.log(risposta)})

// OPTION FETCH REQUEST
const Url='https://jsonplaceholder.typicode.com/posts';
const Dati = {
  name:"sam",
  id: 23
}
// optional params
const param={
  headers: {
    "content-type": "application/json; charset=UTF-8"
  },

  method:"GET"
}

fetch(Url, param)
.then(data=>{return data.json()})
.then(risposta=>{console.log(risposta)})
.catch(error=>console.log(error))



