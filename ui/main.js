var button=document.getElementById("counter");


button.onclick= function() {
    //create request
    
    var request= new XMLhttprequest();
    
    request.onreadystatechange=function(){
        if(request.readystate ==XMLhttprequest.DONE){
            if(request.status==200){
                var counter=request.responseText;
                var span=document.getElementById("count");
                span.innerHTML=counter.toString();
            }
        }
    };
  //make request
  request.open("GET","http://indrayani-surase.imad.hasura-app.io/",true);
  request.send(null);
};