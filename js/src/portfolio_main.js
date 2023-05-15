(function(){

  ('#main_contant').headinner({
		//options here
    anchors: ['portfolio', 'about', 'skills', 'project_m', 'clone', 'contact'],
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



document.querySelectorAll(".btn").forEach(element => element.addEventListener("click", () => {
  document.querySelector(".modal").style.display = "block";
}));
document.querySelectorAll(".close").forEach(element => element.addEventListener("click", () => {
  document.querySelector(".modal").style.display = "none";
}));



// page move -----------------------------
function home(){
  let url = "https://hyuna323.github.io/hyuna_portfolio/html/portfolio_main.html";
  window.location = url;
}

function ohou(){
  let url = "https://hyuna323.github.io/ohou_project/html/01_prototype_1280_main.html";
  window.location = url;
}
function ediya(){
  let url = "https://hyuna323.github.io/ediya_project/html/01_ediya_main.html";
  window.location = url;
}

function portfolio(){
  let url = "https://hyuna323.github.io/hyuna_portfolio/html/portfolio_main.html";
  window.location = url;
}

function ofproject(){
  let url = "https://hyuna323.github.io/OF_project/html/ofproject.html";
  window.location = url;
}



// 페이지 넘김 animation
  const observer = new IntersectionObserver((e)=>{
    e.forEach((Scrolling)=>{
      if (Scrolling.isIntersecting){
        Scrolling.target.style.opacity = 1;
      } else {
        Scrolling.target.style.opacity = 0;
      }
      Scrolling.intersectionRatio
    })
  }) // 감시 중 박스가 화면 등장 시 해당코드 실행

  const scrolling = document.querySelectorAll('.scrolling')

  observer.observe(scrolling[0]) // html 요소 감시
  observer.observe(scrolling[1]) // html 요소 감시
  observer.observe(scrolling[2]) // html 요소 감시
  observer.observe(scrolling[3]) // html 요소 감시
  observer.observe(scrolling[4]) // html 요소 감시
  observer.observe(scrolling[5]) // html 요소 감시
  observer.observe(scrolling[6]) // html 요소 감시
  observer.observe(scrolling[7]) // html 요소 감시
  observer.observe(scrolling[8]) // html 요소 감시
  observer.observe(scrolling[9]) // html 요소 감시
  observer.observe(scrolling[10]) // html 요소 감시
  observer.observe(scrolling[11]) // html 요소 감시
  observer.observe(scrolling[12]) // html 요소 감시
  observer.observe(scrolling[13]) // html 요소 감시


  (function() {
    
    var controller = new ScrollMagic.Controller();
    var scene1 = new ScrollMagic.Scene({
      triggerElement: ".project_list",
      triggerHook: 0.8
    })

  var revealElements = document.getElementsByClassName("project_list_item");
  for (var i = 0; i < revealElements.length; i++) {

    var scene2 = new ScrollMagic.Scene({
      triggerElement: revealElements[i],
      offset: 50,
      triggerHook: 0.9
    })
    .setClassToggle(revealElements[i], "visible")
    .addTo(controller)
  }

  }())



