window.onload = function () {
    // create a new XMLHttpRequest object
 var xhr = new XMLHttpRequest();
    
 // specify the URL of the Node.js file
 var url = "http://127.0.0.1:8124/";

 xhr.open("GET", url, true);

 // add a load event listener to the XMLHttpRequest object
 xhr.addEventListener("load", function(){
     var element = document.getElementById('display');

     // the response from the server is stored in the `responseText` property of the XMLHttpRequest object
     console.log(xhr.responseText);
     var data = JSON.parse(xhr.responseText);
     

     data.forEach(function (row) {
         var item = document.createElement('li');
         item.innerHTML = 'Welcome ' + row[Object.keys(row)[0]];
         element.appendChild(item);
       });
   });

 // send the request
 xhr.send();    
} 