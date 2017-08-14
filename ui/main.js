var button=document.getElementById("counter");
var counter=0;
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
        var span=getElementById("count");
        span.innerHTML=counter.toString();
     }
     }
     
    };

    
    request.open('GET','http://kvlsspravallika.imad.hasura-app.io/counter',true);
    request.send(null);
};