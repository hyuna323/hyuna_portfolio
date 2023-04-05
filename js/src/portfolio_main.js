$(function(){

  $('#headBox').headinner({
		//options here
    anchors: ['portfolio', 'about', 'skills', 'project', 'clone', 'contact'],
		autoScrolling:true,
    navigation:true,
    navigationPosition:'right'
	});
});

// modal --------------------------
// Modal을 가져오기
var modals = document.getElementsByClassName("modal");
// Modal을 띄우는 클래스 이름을 가져오기
var btns = document.getElementsByClassName("btn");
// Modal을 닫는 close 클래스를 가져오기
var spanes = document.getElementsByClassName("close");
var funcs = [];

// Modal을 띄우고 닫는 클릭 이벤트를 정의한 함수
function Modal(num) {
  return function() {
    // 해당 클래스의 내용을 클릭하면 Modal을 띄움
    btns[num].onclick =  function() {
        modals[num].style.display = "block";
        console.log(num);
    };

    // <span> 태그(X 버튼)를 클릭하면 Modal이 닫기
    spanes[num].onclick = function() {
        modals[num].style.display = "none";
    };
  };
}

// 원하는 Modal 수만큼 Modal 함수를 호출해서 funcs 함수에 정의
for(var i = 0; i < btns.length; i++) {
  funcs[i] = Modal(i);
}

// 원하는 Modal 수만큼 funcs 함수를 호출
for(var j = 0; j < btns.length; j++) {
  funcs[j]();
}

// Modal 영역 밖을 클릭하면 Modal을 닫기
window.onclick = function(event) {
  if (event.target.className == "modal") {
      event.target.style.display = "none";
  }
};



// page move -----------------------------
function home(){
  let url = "https://hyuna323.github.io/hyuna_portfolio/html/portfolio_main.html";
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

// 페이지 넘김 animation
const observer = new IntersectionObserver((e)=>{
  e.forEach((skill)=>{
    if (skill.isIntersecting){
      skill.target.style.opacity = 1;
    } else {
      skill.target.style.opacity = 0;
    }
  })
})

const Section = document.querySelectorAll("section")


observer.observe(Section[1])
observer.observe(Section[2])
observer.observe(Section[3])
observer.observe(Section[4])
observer.observe(Section[5])
