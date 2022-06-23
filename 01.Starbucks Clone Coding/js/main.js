const searchEl = document.querySelector('.search') // document === html
const searchInputEl = searchEl.querySelector('input')

searchEl.addEventListener('click', function() {
  // Logic..
  searchInputEl.focus()
})

searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused')
  searchInputEl.setAttribute('placeholder', '통합검색')
})
// focus가 제거되면
searchInputEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused')
  searchInputEl.setAttribute('placeholder', '')
})


const badgeEl = document.querySelector('header .badges')
// window === 탭 === 브라우저 하나 자체
window.addEventListener('scroll', _.throttle(function() {
  console.log(window.scrollY)
  if (window.scrollY > 500){
    // 배지 숨기기
    // gsap.to(요소, 지속시간, 옵션)
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    })
  } else {
    // 배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    })
  }
}, 300))
// _.throttle(함수, 시간) : 시간마다 함수 실행


const fadeEls = document.querySelectorAll('.visual .fade-in')
// 자동화시켜주는게 중요
fadeEls.forEach(function(fadeEl, index) {
  // gsap.to(요소, 지속시간, 옵션)
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, // 0.7, 1.4, 2.1, 2.7
    opacity: 1,
  })
})


// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper', {
  direction: 'vertical', // 수직 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true // 반복 재생 여부
})