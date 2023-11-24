

document.addEventListener("click", function(e){
   if(e.target.classList.contains("card-img")){
    let src = e.target.getAttribute("src");
   
    document.getElementById("targetImg").src=src;
    const modal = new bootstrap.Modal(document.getElementById('modal'));
    modal.show();
  
}
});
  





// var photoEl=document.getElementById("Img")
// document.querySelectorAll("card-img").forEach(Element => (
//     Element.addEventListener('click', ()=>{
//  photoEl.src=Element.src;
//  modal.show();
//     }
//     )
// ))

// const myModal = document.getElementById('myModal')
// const myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', () => {
//   myInput.focus()
//})