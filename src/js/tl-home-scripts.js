const isHome = document.querySelector('.page-home')

if (isHome) {
  window.onscroll = function() {
    const fixedMenu =  document.querySelector('.tl-main-header--fixed')
    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop
    scrollPosition > 225 ? fixedMenu.classList.add("show") : fixedMenu.classList.remove("show")
  }  
}
