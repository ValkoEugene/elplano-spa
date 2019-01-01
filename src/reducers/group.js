const initialState = {
  groupList: [
    {
      id: 1,
      name: 'Петров Петрович',
      avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
      tel: '8-961-582-56-52',
      email: 'wefwef@fewfwe.ru',
      isAdmin: false
    },
    {
      id: 2,
      name: 'Роман Романович',
      avatar: 'https://randomuser.me/api/portraits/men/83.jpg',
      tel: '8-961-234-23-23',
      email: 'fewhetht@heheth.ru',
      isAdmin: true
    },
    {
      id: 3,
      name: 'Наталья Петрова',
      avatar: 'https://randomuser.me/api/portraits/women/18.jpg',
      tel: '8-961-141-11-51',
      email: 'ergerger@erge.ru',
      isAdmin: false
    }
  ]
}

export const groupReducer = (state = initialState) => {
  return state
}