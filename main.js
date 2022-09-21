let lis = document.querySelectorAll("li");
lis.forEach((li)=>{
  li.addEventListener("click", function (e) {
    let myId = e.currentTarget.getAttribute("id");
    document.querySelector(`div#${myId}`).style.backgroundColor= "pink";
  })
})
console.log(window)
let num = 8;
if ((num/2).toFixed()== num/2){
  console.log(true)
}