//selecting side navbar,menuicone

var sidenav=document.getElementById("sidenav")
var menuicon=document.getElementById("menuicon")
var closenav = document.getElementById("closenav")

menuicon.addEventListener("click",function()
{

sidenav.style.right=0
})

closenav.addEventListener("click",function(){
sidenav.style.right="-50%"

})

//product search functionality

var productcontainer = document.getElementById("product-container");
var search = document.getElementById("search"); 
var productlist = productcontainer.querySelectorAll(".text-center");

search.addEventListener("keyup", function (event) {
  var enteredValue = event.target.value.toUpperCase();

  for (var count = 0; count < productlist.length; count++) {
    var productname = productlist[count].querySelector("h1").textContent.toUpperCase();

    if (productname.indexOf(enteredValue) < 0) {
      productlist[count].style.display = "none";
    } 
    else {
      productlist[count].style.display = "block";
}

}})
