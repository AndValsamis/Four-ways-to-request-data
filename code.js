window.onload=function(){
// declare variables
var url = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";
var xhr = document.querySelector("#Xhr");
var fetch2 = document.querySelector("#Fetch");
// var Jquery  = document.querySelector("#Jquery");
var axios2 = document.querySelector("#Axios");
var quote = document.querySelector("#Quote");

// XHR 
xhr.addEventListener("click",function(){
    var xhr2 = new XMLHttpRequest();
    xhr2.onreadystatechange=function(){
      console.log(xhr2.responseText);
      quote.innerText=JSON.parse(xhr2.responseText);s
    }
    xhr2.open("GET",url);
    xhr2.send();
      });

// Fetch
fetch2.addEventListener("click",function(){
    fetch(url)
    .then(function(response){
      console.log(response);
      return response.json();
    })
    .then(function(response){
      console.log(response);
      quote.innerText=response[0];
    })
  });

// Jquery
$('#Jquery').click(function(){
    $.getJSON(url)
      .done(function(response){
       console.log(response);
      $("#Quote").text(response[0]);
    })
  });


// Axios
axios2.addEventListener("click",function(){
    axios(url)
      .then(function(response){
      console.log(response);
      quote.innerText=response.data[0];
      
   })
  });



}//onload