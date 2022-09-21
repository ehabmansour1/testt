let lis = document.querySelectorAll("li");
lis.forEach((li)=>{
  li.addEventListener("click", function (e) {
    let myId = e.currentTarget.getAttribute("id");
    document.querySelector(`div#${myId}`).style.backgroundColor= "pink";
  })
})
