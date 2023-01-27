$(function(){

  $('#fullpage').fullpage({
		//options here
    anchors: ['portfolio', 'about', 'skills', 'project', 'clone', 'contact'],
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

// let observer = new IntersectionObserver((e)=>{
//   e.forEach((박스)=>{
//     if (박스.isIntersecting){
//       박스.target.style.opacity = 1;
//     } else {
//       박스.target.style.opacity = 0;
//     }
//   })
// })

// let section = document.querySelectorAll('section')
// observer.observe(section[2])

// const trigger = new ScrollTrigger.default();
// trigger.add('[data-trigger]');

