// // modal --------------------------
// // Modal을 가져오기
// var modals = document.getElementsByClassName("modal");
// // Modal을 띄우는 클래스 이름을 가져오기
// var btns = document.getElementsByClassName("btn");
// // Modal을 닫는 close 클래스를 가져오기
// var spanes = document.getElementsByClassName("close");
// var funcs = [];

// // Modal을 띄우고 닫는 클릭 이벤트를 정의한 함수
// function Modal(num) {
//   return function() {
//     // 해당 클래스의 내용을 클릭하면 Modal을 띄움
//     btns[num].onclick =  function() {
//         modals[num].style.display = "block";
//         console.log(num);
//     };

//     // <span> 태그(X 버튼)를 클릭하면 Modal이 닫기
//     spanes[num].onclick = function() {
//         modals[num].style.display = "none";
//     };
//   };
// }

// // 원하는 Modal 수만큼 Modal 함수를 호출해서 funcs 함수에 정의
// for(var i = 0; i < btns.length; i++) {
//   funcs[i] = Modal(i);
// }

// // 원하는 Modal 수만큼 funcs 함수를 호출
// for(var j = 0; j < btns.length; j++) {
//   funcs[j]();
// }

// // Modal 영역 밖을 클릭하면 Modal을 닫기
// window.onclick = function(event) {
//   if (event.target.className == "modal") {
//       event.target.style.display = "none";
//   }
// };



// document.querySelectorAll(".btn").forEach(element => element.addEventListener("click", () => {
//   document.querySelector(".modal").style.display = "block";
// }));
// document.querySelectorAll(".close").forEach(element => element.addEventListener("click", () => {
//   document.querySelector(".modal").style.display = "none";
// }));
