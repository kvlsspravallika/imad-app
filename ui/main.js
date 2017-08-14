var button=document.getElementById("counter");
button.onclick=function()
{
    //make a request
    
    //capture the request
    
    
    //render the variable to correct span
    counter=counter+1;
    var span=document.getelementById("counter");
    span.innerHTML=counter.toString();
    
};