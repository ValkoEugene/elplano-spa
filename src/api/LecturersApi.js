import axios from '../plugins/axios'

const REST_URL = '/lecturers'

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

const loadData = async () => {
  const respone = await axios.get(REST_URL)

  return respone.data.data.map(item => formatDataFromApi(item))
}

const loadById = async id => {
  const response = await axios.get(`${REST_URL}/${id}`)

  return formatDataFromApi(response.data.data)
}

const create = async data => {
  const response = await axios.post(REST_URL, { data: formatDataForApi(data) })

  return formatDataFromApi(response.data.data)
}

const update = async (data, id) => {
  const response = await axios.put(`${REST_URL}/${id}`, {
    data: formatDataForApi(data),
  })

  return formatDataFromApi(response.data.data)
}

const deleteById = async id => {
  await axios.delete(`${REST_URL}/${id}`)
}

export default {
  loadData,
  loadById,
  create,
  update,
  deleteById,
  REST_URL,
  formatDataFromApi,
  formatDataForApi,
}
