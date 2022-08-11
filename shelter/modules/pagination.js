const pets = [
  {
    "name": "Jennifer",
    "img": "../../assets/images/jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Sophia",
    "img": "../../assets/images/sophia.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Woody",
    "img": "../../assets/images/woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "name": "Scarlett",
    "img": "../../assets/images/scarlett.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Katrine",
    "img": "../../assets/images/katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Timmy",
    "img": "../../assets/images/timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "name": "Freddie",
    "img": "../../assets/images/freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Charly",
    "img": "../../assets/images/charly.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  }
]

let petsArr = []
const sliderWrapper = document.querySelector('.slider__wrapper')
const sliderBtns = document.querySelector('.slider__btns')
if (sliderBtns) {

let sliderPaginationBtn = sliderBtns.querySelector('.slider__pagination-btn')
let sliderBtnLeftEnd = sliderBtns.querySelector('.slider__btn--left-end')
let sliderBtnRightEnd = sliderBtns.querySelector('.slider__btn--right-end')
let sliderBtnLeft = sliderBtns.querySelector('.slider__btn--left')
let sliderBtnRight = sliderBtns.querySelector('.slider__btn--right')
let numberPage = +sliderPaginationBtn.textContent
let countOnPage = 8
let countPages = 6
let bigArr = []

for (let i = 0; i < 6; i++) {
  pets.forEach((el) => bigArr.push(el))
}

if (window.matchMedia('(max-width: 1279px)').matches) {
  countOnPage = 6
  countPages = 8
}

if (window.matchMedia('(max-width: 767px)').matches) {
  countOnPage = 3
  countPages = 16
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    let k = array[i]
    array[i] = array[j]
    array[j] = k
  }
}

const createCard = (arrElem) => {
  let card = document.createElement('li')
  card.classList.add('slider__slide')

  card.innerHTML = `
    <picture>
      <source srcset="assets/images/${arrElem.name.toLowerCase()}.webp">
      <img class="slider__img" src="assets/images/${arrElem.name.toLowerCase()}.png" width="270" height="270" alt="${arrElem.name}" loading="lazy">
    </picture>

    <div class="slider__inner">
      <h3 class="slider__title sub-title">${arrElem.name}</h3>

      <button class="slider__more btn">Learn more</button>
    </div>
  `
  
  return card
}
let result = []

let fragmentArr = []
for (let i = 0; i < countPages; i++) {
  let fromEl = (numberPage - 1) * countOnPage
  let toEl = fromEl + countOnPage
  fragmentArr = bigArr.splice(fromEl, toEl)
  shuffle(fragmentArr)
  result.push(fragmentArr)
}
result = result.reduce((acc, arr) => acc.concat(arr))

const createPage = () => {
  let fromEl = (numberPage - 1) * countOnPage
  let toEl = fromEl + countOnPage
  let template = result.slice(fromEl, toEl)
  
  sliderWrapper.innerHTML = ''
  template.forEach((el) => {
    sliderWrapper.append(createCard(el))
  })
}
createPage()

const changePages = (evt) => {
  let target = evt.target
  
  if (target === sliderBtnLeftEnd) {
    numberPage = '1'
    sliderPaginationBtn.textContent = numberPage
    sliderBtnRight.removeAttribute('disabled')
    sliderBtnRightEnd.removeAttribute('disabled')
  }

  if (target === sliderBtnLeft) {
    numberPage = `${--numberPage}`
    sliderPaginationBtn.textContent = numberPage
    sliderBtnRight.removeAttribute('disabled')
    sliderBtnRightEnd.removeAttribute('disabled')
  }

  if (target === sliderBtnRight) {
    numberPage = `${++numberPage}`
    sliderPaginationBtn.textContent = numberPage
    sliderBtnLeft.removeAttribute('disabled')
    sliderBtnLeftEnd.removeAttribute('disabled')
  }

  if (target === sliderBtnRightEnd) {
    numberPage = `${countPages}`
    sliderPaginationBtn.textContent = numberPage
    sliderBtnLeft.removeAttribute('disabled')
    sliderBtnLeftEnd.removeAttribute('disabled')
  }

  if (numberPage === '1') {
    sliderBtnLeftEnd.setAttribute('disabled', '')
    sliderBtnLeft.setAttribute('disabled', '')
  } else if (numberPage == `${countPages}`) {
    sliderBtnRightEnd.setAttribute('disabled', '')
    sliderBtnRight.setAttribute('disabled', '')
  }
  createPage()
}
sliderBtns.addEventListener('click', changePages)
}
