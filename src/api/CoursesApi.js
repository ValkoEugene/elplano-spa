import axios from '../plugins/axios'

const REST_URL = '/courses'

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
