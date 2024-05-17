var sidenav = document.getElementById("sideNav")
var closenav = document.getElementById("closeNav")
var menuicon = document.getElementById("menuIcon")

menuicon.addEventListener("click", function(){
    sidenav.style.right=0
})

closenav.addEventListener("click", function(){
    sidenav.style.right="-50%"
})

// search functionality

var search = document.getElementById("search")
var productcontainer = document.getElementById("productContainer")
var productlist = productcontainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredvalue = event.target.value.toUpperCase()
    
    for(count=0;count<productlist.length;count++){
        
        var productname = productlist[count].querySelector("h1").textContent
        
        if(productname.toUpperCase().indexOf(enteredvalue)<0){
            productlist[count].style.display="none"
        }
        else{
            productlist[count].style.display="block"
        }
    }
    
})