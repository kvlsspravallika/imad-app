var button=document.getElementById("counter");

button.onclick=function()
{
    //make a request
     var request=new XMLHttpRequest();
    //capture the request
    
    request.onreadystatechange=function()
    {
     if(request.readystate===XMLHttpRequest.DONE)
     {
     //PERFORM SOME ACCTION
     
     if(request.status===200)
     {
        var counter= request.responseText;
        var span=getElementById('count');
        span.innerHTML=counter.toString();
     }
     }
     
    };

    
    request.open('GET','http://kvlsspravallika.imad.hasura-app.io/counter',true);
    request.send(null);
};
//submit name
var nameInput=document.getElementById('name');
var name=nameInput.value();
var submit=documn=ent.getelemnetById('submit_btn');
submit.onclick=function(){
    
    
    var name=['name1','name2','namae3'];
    var list='';
    for(var i=0;i<names.length();i++){
        list+='<li>'+names[i]+'</li';
        
    }
    var ul=documnet.getElementById('namelist');
    ul.innerHTML=list;
    
};





















