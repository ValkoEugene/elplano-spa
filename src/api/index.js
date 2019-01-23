const fakeApiCall = data =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, 1000)
  })

export const loginRequest = ({ login, password }) =>
  Promise.resolve({
    login,
    login_timestamp: new Date(),
  })

export const loadLessonsAPI = () =>
  fakeApiCall({
    data: [
      {
        id: 1,
        title: 'Математический анализ',
        rating: 4,
        teachers: [
          {
            id: 1,
            name: 'Иван Иванов',
            avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
          },
        ],
      },
      {
        id: 2,
        title: 'История Кубани',
        rating: 5,
        teachers: [
          {
            id: 2,
            name: 'Казим Нуримов',
            avatar: 'https://randomuser.me/api/portraits/men/83.jpg',
          },
        ],
      },
      {
        id: 3,
        title: 'БЖД',
        rating: null,
        teachers: [
          // {
          //   id: 2,
          //   name: 'Казим Нуримов',
          //   avatar: 'https://randomuser.me/api/portraits/men/83.jpg',
          // }
        ],
      },
      {
        id: 4,
        title: 'Экономика',
        rating: 4.2,
        teachers: [
          {
            id: 3,
            name: 'Ирина Петрова',
            avatar: 'https://randomuser.me/api/portraits/women/18.jpg',
          },
          {
            id: 1,
            name: 'Иван Иванов',
            avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
          },
        ],
      },
    ],
  })

export const loadTeachersAPI = () =>
  fakeApiCall({
    data: [
      {
        id: 1,
        name: 'Иван Иванов',
        avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
        lesson: [{ title: 'Математический анализ' }],
      },
      {
        id: 2,
        name: 'Казим Нуримов',
        avatar: 'https://randomuser.me/api/portraits/men/83.jpg',
        lesson: [{ title: 'История Кубани' }, { title: 'БЖД' }],
      },
      {
        id: 3,
        name: 'Ирина Петрова',
        avatar: 'https://randomuser.me/api/portraits/women/18.jpg',
        lesson: [{ title: 'Экономика' }],
      },
    ],
  })

export const loadTasksAPI = () =>
  fakeApiCall({
    data: [
      {
        id: 1,
        lesson: {
          id: 1,
          title: 'Математический анализ',
        },
        title: 'Aliquam sem elit, semper sed ante ut, aliquam molestie risus.',
        done: false,
        date: '2018-05-01',
        commentsCount: 2,
        author: {
          name: 'Семён Семеныч',
          avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
        },
        createdDate: '2018-02-01',
      },
      {
        id: 2,
        lesson: {
          id: 4,
          title: 'Экономика',
        },
        title:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac malesuada nisl. Maecenas quis ultrices tellus.',
        done: true,
        date: '2018-05-01',
        commentsCount: 2,
        author: {
          name: 'Семён Семеныч',
          avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
        },
        createdDate: '2018-01-01',
      },
      {
        id: 3,
        lesson: {
          id: 1,
          title: 'Математический анализ',
        },
        title:
          'Etiam venenatis varius lectus sed fermentum. Nullam hendrerit, massa sed tincidunt sagittis, leo nibh semper sapien, vitae interdum nisl erat ut sapien.',
        done: false,
        date: '2018-05-01',
        commentsCount: 2,
        author: {
          name: 'Семён Семеныч',
          avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
        },
        createdDate: '2018-02-01',
      },
      {
        id: 4,
        lesson: {
          id: 4,
          title: 'Экономика',
        },
        title: 'Suspendisse scelerisque nisi ac semper ornare.',
        done: true,
        date: '2018-05-01',
        commentsCount: 2,
        author: {
          name: 'Семён Семеныч',
          avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
        },
        createdDate: '2018-01-01',
      },
      {
        id: 5,
        lesson: {
          id: 1,
          title: 'Математический анализ',
        },
        title:
          'Pellentesque imperdiet nunc quis fringilla euismod. Nunc iaculis eu augue sit amet faucibus.',
        done: false,
        date: '2018-05-01',
        commentsCount: 2,
        author: {
          name: 'Семён Семеныч',
          avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
        },
        createdDate: '2018-02-01',
      },
      {
        id: 6,
        lesson: {
          id: 4,
          title: 'Экономика',
        },
        title:
          'Pellentesque imperdiet nunc quis fringilla euismod. Nunc iaculis eu augue sit amet faucibus.',
        done: true,
        date: '2018-05-01',
        commentsCount: 2,
        author: {
          name: 'Семён Семеныч',
          avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
        },
        createdDate: '2018-01-01',
      },
    ],
  })

export const loadTaskInfoAPI = id =>
  fakeApiCall({
    data: {
      id: 1,
      title: 'Задание по истории',
      done: false,
      date: '2018-05-01',
      text: 'текст задания...',
      attachments: [
        { name: 'учибник_такой_то.pdf' },
        { name: 'какой_нибудь_файл.doc' },
      ],
      author: {
        name: 'Семён Семеныч',
        avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
      },
      comments: [],
    },
  })

export const loadMeasuresAPI = () =>
  fakeApiCall({
    data: [
      {
        id: 1,
        date: '2018-06-01',
        author: {
          name: 'Семён Семеныч',
          avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
        },
        title: 'Флюрография',
        text: 'Над всем сходить на флюру',
      },
      {
        id: 2,
        date: '2018-08-01',
        author: {
          name: 'Семён Семеныч',
          avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
        },
        title: 'Тест по бжд',
        text: '',
      },
    ],
  })
