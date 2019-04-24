window.onload=function(){
// declare variables
var url = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";
var xhr = document.querySelector("#Xhr");
var fetch = document.querySelector("#Fetch");
var jquerry  = document.querySelector("#Jquerry");
var axios = document.querySelector("#Axios");
var quote = document.querySelector("#Quotes");

// XHR 
xhr.addEventListener("click",function(){
    var xhr2 = new XMLHttpRequest();
    xhr2.onreadystatechange=function(){
      console.log(xhr2.responseText);
      quote.innerText=JSON.parse(xhr2.responseText);
    }
    xhr2.open("GET",url);
    xhr2.send();
      });


}