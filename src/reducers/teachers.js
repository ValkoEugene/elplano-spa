const initialState = {
  teachersList: [
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
}

export const teachersReducer = (state = initialState) => {
  return state
}