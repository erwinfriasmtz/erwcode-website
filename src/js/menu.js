export const menu = () => {
  // Active Menu
  const menu = document.getElementById('menu')
  if (menu) {
      const links = Array.from(menu.querySelectorAll('a'))
      links.map(link => {
          if (link.href === location.href || link.href === location.href.slice(0,-1)) link.classList.add('active-menu')
      })
  }

  // Scroll toggler
  let lastScrollTop = 0, header = document.getElementById('header');
  window.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollTop > lastScrollTop) {
      header.style.top="-90px";
    } else {
      header.style.top="0px"
    }
    lastScrollTop = scrollTop
  })
}
