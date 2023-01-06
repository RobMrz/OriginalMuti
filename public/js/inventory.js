window.onload = function() {
   // create a new XMLHttpRequest object
   var xhr = new XMLHttpRequest();

   // specify the URL of the Node.js file
   var url = "http://127.0.0.1:8124/";

   xhr.open("GET", url, true);

   // add a load event listener to the XMLHttpRequest object
   xhr.addEventListener("load", function(){
       var element = document.getElementById('display');

       // the response from the server is stored in the `responseText` property of the XMLHttpRequest object
       var data = JSON.parse(xhr.responseText);
       console.log(data);
       

       data.forEach(function (row) {
             // Get a reference to the container element
            var container = document.querySelector('.container .row');
  
            // Create a new item element
            var item = document.createElement('div');
            item.innerHTML = '<div class="col"><div class="p-3 border bg-light text-center">Item Image</div><div class="text-center"><h8>' + row.Title + '</h8></div></div>';
 
            // Add the item element to the container
            container.appendChild(item);

         });
     });

   // send the request
   xhr.send();
   

  
  }
  