import { AboutTab } from "~/types/about"

export default defineEventHandler((event) => {
  const about: AboutTab[] = [
    {
      code: 'about',
      name: "Немного о себе",
      text: `<p class="column-title">Привет <img style="width:30px;position:relative;top:9px" src="/img/waving.svg" /> меня зовут Ира</p>
      <p>Нравится учиться и узнавать что-то новое, поэтому я в программировании</p>
      <ul>
      <li>Прыгала с парашютом</li>
      <li>Изучаю французский</li>
      <li>Была волонтером Олимпийских игр</li>
      <li>Люблю путешестовать</li>
      </ul>`,
      order: 1
    },
    {
      code: 'education',
      name: "Образование",
      text: `<p class="column-title">Южный федеральный университет, бакалавр</p> 
      <p>Факультет Управления, специальность “Финансовый менеджмент”</p>
      <p class="column-title">Южная Школа Программирования, Ростов-на-Дону</p>
      <p>Очный полугодовой курс “Основы алгоритмизации и программирования (С++)”</p>`,
      order: 3
    },
    {
      code: 'experience',
      name: "Опыт работы",
      text: `<p class="column-title">Samedia, Frontend Разработчик</p>
      <p>Разработка адаптивных кроссбраузерных сайтов на Vue.js (лендинги с анимациями, многостраничные сайты, личные кабинеты, админ-панели)</p>
      <p class="column-title">+ Проектная деятельность</p>`,
      order: 2
    },
    {
      code: 'projects',
      name: "В разработке",
      text: `<p>Production проект на React с настройкой всей инфраструктуры <span class="column-title">(Webpack)</span>, тестовой среды, работой с сервером/данными и тд</p>
      <ul>
      <li>FSD архитектура</li>
      <li>СI/CD и pre-commit hooks</li>
      <li>Unit, React Testing Library, e2e тесты</li>
      <li>i18n</li>
      <li>Storybook</li>
      <li>Redux toolkit</li>
      <li>RTK query</li>
      </ul>`,
      order: 4
    }
  ]

  return {
    about,
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
        name: 'HTML5',
        gradient: true
      },
      {
        name: 'CSS3',
        gradient: false
      },
      {
        name: 'JavaScript',
        gradient: true
      },
      {
        name: 'Vue',
        gradient: false
      },
      {
        name: 'React',
        gradient: false
      },
      {
        name: 'Nuxt',
        gradient: true
      },
      {
        name: 'Next',
        gradient: false
      },
      {
        name: 'TypeScript',
        gradient: true
      },
      {
        name: 'Pug',
        gradient: true
      },
      {
        name: 'SASS, SCSS',
        gradient: false
      },
      {
        name: 'Gulp',
        gradient: true
      },
      {
        name: 'Git',
        gradient: false
      }
    ],
    contacts: [
      {
        name: 'Резюме',
        btn: {
          name: 'Скачать',
          href: 'https://docs.google.com/document/d/1C1hiBV71hpbMLT83pfPZQDImgIy3UET46HqCGzhzCmg/edit#'
        }
      },
      {
        name: 'Telegram',
        link: {
          name: '@eireen_sid',
          href: 'https://t.me/eireen_sid'
        }
      },
      {
        name: 'Почта',
        link: {
          name: 'sidoren-irina@yandex.ru',
          href: 'mailto:sidoren-irina@yandex.ru'
        }
      },
      {},
      {
        name: 'Github',
        link: {
          name: 'https://github.com/eireensid',
          href: 'https://github.com/eireensid'
        }
      },
      {
        name: 'LinkedIn',
        link: {
          name: 'https://www.linkedin.com',
          href: 'https://www.linkedin.com/in/irina-sidorenko-3a565212a/'
        }
      }
    ]
  }
})