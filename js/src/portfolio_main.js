$(function(){

  $('#fullpage').fullpage({
		//options here
    anchors: ['portfolio', 'about', 'skills', 'project', 'contact'],
		autoScrolling:true,
    navigation:true,
    navigationPosition:'right'
	});
});

// modal --------------------------
const openButton = document.getElementById("open");
const modal = document.querySelector(".modal");
const overlay = modal.querySelector(".modal_overlay");
const closeBtn = modal.querySelector("button");
const openModal = () => {
  modal.classList.remove("on");
}
const colseModal = () => {
  modal.classList.add("on");
}
overlay.addEventListener("click", colseModal);
closeBtn.addEventListener("click", colseModal);
openButton.addEventListener("click", openModal);

// page move -----------------------------
function home(){
  let url = "https://hyunao.github.io/ediya_project/html/01_ediya_main.html";
  window.location = url;
}