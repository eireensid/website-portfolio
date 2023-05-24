export default defineEventHandler((event) => {
  return {
    about: {
      tabs: [
        {
          name: "Обо мне / хобби",
          order: 1
        },
        {
          name: "Образование / обучение",
          order: 2
        },
        {
          name: "Опыт работы",
          order: 3
        },
        {
          name: "Дополнительно / проекты",
          order: 4
        }
      ],
      content: [
        {
          code: 'about',
          title: 'jjj'
        }
      ]
    },
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
    ]
  }
})