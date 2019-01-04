const fakeApiCall = data => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(data)
  }, 1000)
})

export const loginRequest = ({ login, password }) => Promise.resolve({
  login, login_timestamp: new Date()
})

export const loadLessonsAPI = () => fakeApiCall({
  data: [
    {
      id: 1,
      title: 'Математический анализ',
      rating: 4,
      teachers: [
        {
          id: 1,
          name: 'Иван Иванов',
          avatar: 'https://randomuser.me/api/portraits/men/75.jpg'
        }
      ]
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
        }
      ]
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
      ]
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
          avatar: 'https://randomuser.me/api/portraits/men/75.jpg'
        }
      ]
    }
  ]
})

export const loadTeachersAPI = () => fakeApiCall({
  data: [
    {
      id: 1,
      name: 'Иван Иванов',
      avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
      lesson: [
        { title: 'Математический анализ' }
      ]
    },
    {
      id: 2,
      name: 'Казим Нуримов',
      avatar: 'https://randomuser.me/api/portraits/men/83.jpg',
      lesson: [
        { title: 'История Кубани' },
        { title: 'БЖД' }
      ]
    },
    {
      id: 3,
      name: 'Ирина Петрова',
      avatar: 'https://randomuser.me/api/portraits/women/18.jpg',
      lesson: [
        { title: 'Экономика' }
      ]
    }
  ]
})