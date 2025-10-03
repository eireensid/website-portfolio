import { AboutTab } from "~/types/about"
import { Contact } from "~/types/contact"
import { Project } from "~/types/projects"
import { Technology } from "~/types/technology"

export default defineEventHandler((event) => {
  const about: AboutTab[] = [
    {
      code: 'about',
      name: "Немного о себе",
      'en-name': 'My interests',
      'fr-name': 'Mes intérêts',
      text: `<p class="column-title">Привет <img style="width:30px;position:relative;top:9px" src="/img/waving.svg" /> меня зовут Ира</p>
      <p>Нравится учиться и узнавать что-то новое, поэтому я в программировании</p>
      <ul>
      <li>Прыгала с парашютом</li>
      <li>Изучаю французский</li>
      <li>Была волонтером Олимпийских игр</li>
      <li>Люблю путешестовать</li>
      </ul>`,
      'en-text': `<p class="column-title">Hi <img style="width:30px;position:relative;top:9px" src="/img/waving.svg" /> my name is Ira</p>
      <p>I like to study and learn new things, that's why I'm into programming</p>
      <ul>
      <li>Skydived</li>
      <li>Learning french</li>
      <li>Was a volunteer at the Olympic Games</li>
      <li>Love to travel</li>
      </ul>`,
      'fr-text': `<p class="column-title">Salut <img style="width:30px;position:relative;top:9px" src="/img/waving.svg" /> je m'appelle Ira</p>
      <p>J'aime étudier et apprendre quelque chose de nouveau, donc je suis dans la programmation</p>
      <ul>
      <li>J'ai sauté en parachute</li>
      <li>J'apprends le français</li>
      <li>J'étais bénévole pour les Jeux Olympiques</li>
      <li>J'adore voyager</li>
      </ul>`,
      order: 1
    },
    {
      code: 'education',
      name: "Образование",
      'en-name': 'Education',
      'fr-name': 'Éducation',
      text: `<p class="column-title">Южный федеральный университет, бакалавр</p> 
      <p>Факультет Управления, специальность “Финансовый менеджмент”</p>
      <p class="column-title">Южная Школа Программирования, Ростов-на-Дону</p>
      <p>Очный полугодовой курс “Основы алгоритмизации и программирования (С++)”</p>`,
      'en-text': `<p class="column-title">Southern Federal University, bachelor degree</p> 
      <p>Faculty of Management, specialty “Financial Management”</p>
      <p class="column-title">Southern School of Programming, Rostov on Don</p>
      <p>Semi-annual course “Fundamentals of algorithmization and programming (С++)”</p>`,
      'fr-text': `<p class="column-title">Université fédérale du Sud, licencié</p> 
      <p>Faculté de gestion, spécialité “Gestion Financière”</p>
      <p class="column-title">L'école de programmation du Sud, Rostov sur le Don</p>
      <p>Cours semestriel “Les bases de l'algorithmisation et de la programmation (С++)”</p>`,
      order: 3
    },
    {
      code: 'experience',
      name: "Опыт работы",
      'en-name': 'Work experience',
      'fr-name': 'Expérience de travail',
      text: `<p class="column-title">Samedia, Frontend Разработчик</p>
      <p>Разработка адаптивных кроссбраузерных сайтов на Vue.js (лендинги с анимациями, многостраничные сайты, личные кабинеты, админ-панели)</p>
      <p class="column-title">+ Проектная деятельность</p>`,
      'en-text': `<p class="column-title">Samedia, Frontend Web Developer</p>
      <p>Development of adaptive cross-browser sites on Vue.js (landing pages with animations, multi-page websites, personal accounts, admin panels)</p>
      <p class="column-title">+ Independent projects</p>`,
      'fr-text': `<p class="column-title">Samedia, Développeuse frontend</p>
      <p>Développement de sites Web multiplateformes adaptatifs sur Vue.js (landing pages avec animations, sites Web multipages, comptes personnels, panneaux d'administration)</p>
      <p class="column-title">+ Projets indépendants</p>`,
      order: 2
    },
    {
      code: 'projects',
      name: "В разработке",
      'en-name': 'In development',
      'fr-name': 'En développement',
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
      'en-text': `<p>React project with infrastructure setup <span class="column-title">(Webpack)</span>, test environment, server/data management, etc.</p>
      <ul>
      <li>FSD architecture</li>
      <li>СI/CD и pre-commit hooks</li>
      <li>Unit, React Testing Library, e2e tests</li>
      <li>i18n</li>
      <li>Storybook</li>
      <li>Redux toolkit</li>
      <li>RTK query</li>
      </ul>`,
      'fr-text': `<p>Projet sur React avec la configuration de l'infrastructure  <span class="column-title">(Webpack)</span>, l'environnement de test, le travail avec le serveur / données, etc.</p>
      <ul>
      <li>FSD architecture</li>
      <li>СI/CD и pre-commit hooks</li>
      <li>tests Unit, React Testing Library, e2e</li>
      <li>i18n</li>
      <li>Storybook</li>
      <li>Redux toolkit</li>
      <li>RTK query</li>
      </ul>`,
      order: 4
    }
  ]

  const projects: Project[] = [
    {
      photo: '/img/lemonpie-min.png',
      name: 'ЛемонПай',
      'en-name': 'LemonPie',
      'fr-name': 'LemonPie',
      text: 'Управленческий учет для НКО',
      'en-text': 'Management accounting for non-profit organizations',
      'fr-text': 'Contrôle de gestion pour les association à but non lucratif',
      link: 'https://app.lemonpie.tech',
      labels: ['Nuxt', 'Vue', 'Scss'],
      order: 1
    },
    {
      photo: '/img/avtonomera-min.png',
      name: 'Автономера',
      'en-name': 'Auto numbers',
      'fr-name': 'Numéros auto',
      text: 'Конструктор авто- и мотономеров',
      'en-text': 'Constructor of car and bike number',
      'fr-text': 'Constructeur de numéro de voiture et de moto',
      link: 'http://avtonomera.d-22.ru',
      labels: ['Vue', 'Vuex', 'Pug', 'Stylus'],
      order: 2
    },
    {
      photo: '/img/teremok-min.png',
      name: 'Приют Теремок',
      'en-name': 'Teremok animal shelter',
      'fr-name': 'Le refuge pour animaux',
      text: 'База данных животных, ищущих дом',
      'en-text': 'Database of animals looking for a home',
      'fr-text': 'Base de données des animaux à la recherche d\'une maison',
      link: 'https://animal-shelter-git-main-eireensid.vercel.app',
      labels: ['Next', 'React', 'CSS modules'],
      order: 3
    },
    {
      photo: '/img/bigfish-min.png',
      name: 'Большая рыба',
      'en-name': 'Big fish',
      'fr-name': 'Grande poisson',
      text: 'Заказать столик в баре',
      'en-text': 'Book a table at the bar',
      'fr-text': 'Réserver une table au bar',
      link: 'http://bigfish.d-22.ru',
      labels: ['Vue', 'Pug', 'Stylus'],
      order: 4
    },
    {
      photo: '/img/aston-min.png',
      name: 'Астон',
      'en-name': 'Aston',
      'fr-name': 'Aston',
      text: 'Производство продуктов питания',
      'en-text': 'Food production',
      'fr-text': 'Production alimentaire',
      link: 'https://www.aston.ru',
      labels: ['Gulp', 'Pug', 'Sass'],
      order: 5
    },
    {
      photo: '/img/semifur-min.png',
      name: 'Semifur',
      'en-name': 'Semifur',
      'fr-name': 'Semifur',
      text: 'Интернет-магазин головных уборов',
      'en-text': 'Online hats store',
      'fr-text': 'Boutique de chapeaux en ligne',
      link: 'https://semifur.ru/',
      labels: ['Vue', 'Pug', 'Stylus'],
      order: 6
    }
  ]

  const technologies: Technology[] = [
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
  ]

  const contacts: Contact[] = [
    {
      name: 'Резюме',
      'en-name': 'CV',
      'fr-name': 'CV',
      btn: {
        name: 'Открыть',
        'en-name': 'Open',
        'fr-name': 'Ouvrir',
        href: 'https://myresume.ru/resume/8z5PrOuAES9/'
      }
    },
    {
      name: 'Telegram',
      link: {
        name: '@sirenesereine',
        href: 'https://t.me/sirenesereine'
      }
    },
    {
      name: 'E-mail',
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

  return {
    about,
    projects,
    technologies,
    contacts
  }
})