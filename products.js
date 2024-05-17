var sidenav = document.getElementById("sideNav")
var closenav = document.getElementById("closeNav")
var menuicon = document.getElementById("menuIcon")

menuicon.addEventListener("click", function(){
    sidenav.style.right=0
})

closenav.addEventListener("click", function(){
    sidenav.style.right="-50%"
})