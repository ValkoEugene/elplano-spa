import createApi from './createApi'

const restUrl = '/lecturers'

const formatDataFromApi = data => {
  const {
    id,
    attributes: { first_name, last_name, patronymic },
    relationships: { courses },
  } = data

  return {
    id,
    first_name,
    last_name,
    patronymic,
    courses: courses.data.map(({ id }) => id),
  }
}

const formatDataForApi = ({ first_name, last_name, patronymic, courses }) => ({
  type: 'lecturer',
  attributes: {
    first_name,
    last_name,
    patronymic,
  },
  relationships: {
    courses: {
      data: courses.map(id => ({
        id,
        type: 'courses',
      })),
    },
  },
})

const lecturersApi = createApi({ restUrl, formatDataForApi, formatDataFromApi })

export default lecturersApi
