const body = document.body
const header = body.querySelector('.header')
const burger = header.querySelector('.burger')

const toggleMenu = () => {
  body.classList.toggle('scroll-lock')
  header.classList.toggle('header--open-menu')
}

const closeMenu = (evt) => {
  const target = evt.target

  if(!target.classList.contains('nav') && !target.classList.contains('burger')) {
    body.classList.remove('scroll-lock')
    header.classList.remove('header--open-menu')
  }
}

burger.addEventListener(('click'), toggleMenu)
body.addEventListener(('click'), closeMenu)