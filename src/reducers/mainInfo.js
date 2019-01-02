const initialstate = {
  todayTaskCount: 2,
  todayMeasuresCount: 0,
  tomorroyTaskCount: 0,
  tomorroyMeasuresCount: 0,
  todayTimetable: [
    {
      lessonId: 1,
      lessonTime: 1,
      lesson: 'Математический анализ',
      haveTask: true,
    },
    {
      lessonId: 1,
      lessonTime: 2,
      lesson: 'Математический анализ',
      haveTask: true,
    },
    {
      lessonId: 2,
      lessonTime: 3,
      lesson: 'История',
      haveTask: true,
    },
    {
      lessonId: 3,
      lessonTime: 4,
      lesson: 'История',
      haveTask: false,
    }
  ],
  todayTasks: [
    {
      lessonId: 1, 
      title: 'Задание такое то',
      text: 'Описание задания...',
      done: false
    },
    {
      lessonId: 1, 
      title: 'Задание такое то по истории',
      text: 'Описание задания такого-то по истории...',
      done: true
    }
  ]
}

export const mainInfoReducer = (state = initialstate) => ({
  ...state
})