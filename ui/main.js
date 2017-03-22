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

//submit name

var nameInput=document.getElementById("name");
var name = nameInput.value;
var submit=document.getElementById("submit_btn");
submit.onclick=function(){
    
    //make request to server
    var names=['name1','name2','name3','name4','name5'];
    var list='';
    for(var i=0;i=names.length;i++){
        list=='<li>'+names[i]+'</li>';
        
    }
    //capture list of name and render it
    var ul=document.getElementById("namelist");
    ul.innerHTML=list;
    
};