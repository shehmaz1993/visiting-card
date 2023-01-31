function placeInput(){

    var textInput=[{"Id":1,"Name":"Harun","Designation":"HR","Phone":"01710761711"}];
    
    /*var container=document.getElementById("myData");
    for(var i=0;i<textInput.length;i++){
       var div=document.createElement("div");
 
    }*/
    $(document).ready(function() {
       $.getJSON(textInput, function(data) {
         console.log(data) //just to log in console as well
         var res = data.filter(function(o) {
           return o.id == 4
         }).pop();
         console.log(res)
         var article_data = '';
     
         article_data += '<div class="page-id">' + res.id + '</div>';
     
         $('#container').append(article_data);
       });
     });
 
 
 
 }