window.addEventListener('scroll', hideMoreInfoBtn)
document.querySelector("#mobile_nav_btn_wrapper").addEventListener('click', rotateMenuBtn)
document.querySelector("#mobile_nav_btn_wrapper").addEventListener('click', showMenu)
document.querySelector("#more_info_btn").addEventListener('click', moreInfoScroll)
window.addEventListener('scroll', myFunction)

var prevScrollpos = window.pageYOffset;
function hideMoreInfoBtn() {
  var currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos && window.pageYOffset < 200){
    let title  = document.querySelector("#more_info_btn")
    title.classList.remove("invisible")
   
  } else {
    let title  = document.querySelector("#more_info_btn")
    title.classList.add("invisible")
  }
  prevScrollpos = currentScrollPos;
}


function rotateMenuBtn(){
  document.querySelector("#mobile_nav_btn_wrapper").classList.toggle("button_rotate")

}


function showMenu(){
  document.querySelector(".mobile_nav").classList.toggle("menu_show")

}

function moreInfoScroll(){
  document.querySelector("#scroll_to").scrollIntoView({ behavior: 'smooth', block: 'end'});
}








