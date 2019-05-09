import createApi from './createApi'

const restUrl = '/courses'

const formatDataFromApi = data => {
  const {
    id,
    attributes: { title },
    relationships: { lecturers },
  } = data

  return {
    id,
    title,
    lecturers: lecturers.data.map(({ id }) => id),
  }
}

const formatDataForApi = ({ title, lecturers = [] }) => ({
  type: 'course',
  attributes: {
    title,
  },
  relationships: {
    courses: {
      data: lecturers.map(id => ({
        id,
        type: 'lecturer',
      })),
    },
  },
})

const lecturersApi = createApi({ restUrl, formatDataForApi, formatDataFromApi })

export default lecturersApi
