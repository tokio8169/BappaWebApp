

document.getElementById("btn").addEventListener("click" , function(){
     
    const search1=document.querySelector(".txtsearch").value;
    if(search1==""){
      alert("Please type something here");
      return false;
    }else{
      return true;
    }
  
    })
  
  
  
     document.querySelector(".header").addEventListener("click", function(){
  
       
       var head =document.querySelector(".home").value;
        console.log("home");
         
  
        var head =document.querySelector(".service").value;
        console.log("service");
  
        var head =document.querySelector(".download").value;
        console.log("download");
  
        var head =document.querySelector(".news").value;
        console.log(" Latest news");
  
        var head =document.querySelector(".login").value;
        console.log("Log in");
      
    })
  
  