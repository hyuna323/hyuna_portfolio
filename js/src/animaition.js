
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

observer.observe(scrolling[0])
observer.observe(scrolling[1])
observer.observe(scrolling[2])
observer.observe(scrolling[3])
observer.observe(scrolling[4])
observer.observe(scrolling[5])
observer.observe(scrolling[6])
observer.observe(scrolling[7])
observer.observe(scrolling[8])
observer.observe(scrolling[9])
observer.observe(scrolling[10]) // html 요소 감시
observer.observe(scrolling[11]) // html 요소 감시
observer.observe(scrolling[12]) // html 요소 감시
observer.observe(scrolling[13]) // html 요소 감시
observer.observe(scrolling[14]) // html 요소 감시
