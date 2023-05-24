export default defineEventHandler((event) => {
  return {
    about: [
      {
        code: 'about',
        name: "Обо мне / хобби",
        text: 'Привет, меня зовут Ира Люблю изучать языки Хобби',
        order: 4
      },
      {
        code: 'education',
        name: "Образование / обучение",
        text: '<p class="column-title">Образование</p> <p class="column-text">Высшее (Менеджмент)</p><p class="column-title">Дополнительное образование</p>',
        order: 3
      },
      {
        code: 'experience',
        name: "Опыт работы",
        text: 'Опыт работы',
        order: 1
      },
      {
        code: 'projects',
        name: "Дополнительно / проекты",
        text: '',
        order: 2
      }
    ],
    projects: [
      {
        photo: '/img/domenika.png',
        name: 'Domenika flowers',
        text: 'Интернет-магазин цветов',
        link: 'http://domenikaflowers.ru',
        order: 1
      },
      {
        photo: '/img/avtonomera.png',
        name: 'Автономера',
        text: 'Конструктор авто- и мотономеров',
        link: 'http://avtonomera.d-22.ru',
        order: 2
      },
      {
        photo: '/img/teremok.png',
        name: 'Приют Теремок',
        text: 'База данных животных, ищущих дом',
        link: 'https://teremok-priut.ru',
        order: 3
      },
      {
        photo: '/img/bigfish.png',
        name: 'Большая рыба',
        text: 'Заказать столик в баре',
        link: 'http://bigfish.d-22.ru',
        order: 4
      },
      {
        photo: '/img/aston.png',
        name: 'Астон',
        text: 'Производство продуктов питания',
        link: 'https://www.aston.ru',
        order: 5
      },
      {
        photo: '/img/semifur.png',
        name: 'Semifur',
        text: 'Интернет-магазин головных уборов',
        link: 'https://semifur.ru/',
        order: 6
      }
    ],
    technologies: [
      {
        name: 'HTML5'
      },
      {
        name: 'CSS3'
      },
      {
        name: 'JavaScript'
      },
      {
        name: 'Vue'
      },
      {
        name: 'React'
      },
      {
        name: 'Nuxt'
      },
      {
        name: 'Next'
      },
      {
        name: 'TypeScript'
      },
      {
        name: 'Pug'
      },
      {
        name: 'SASS, SCSS'
      },
      {
        name: 'Gulp'
      },
      {
        name: 'Firebase'
      },
      {
        name: 'Git'
      }
    ]
  }
})