import axios from '../plugins/axios'

export default ({ restUrl, formatDataFromApi, formatDataForApi }) => ({
  /**
   * Форматирование данных от api
   * @type {Function}
   */
  formatDataFromApi,

  /**
   * Форматирование данных для api
   * @type {Function}
   */
  formatDataForApi,

  /**
   * REST URL по работе с api
   * @type {String}
   */
  REST_URL: restUrl,

  /**
   * Получить список элементов
   * @returns {Array} форматированный список элементов
   */
  async loadData() {
    try {
      console.log('loadData')
      const respone = await axios.get(restUrl)

      return respone.data.data.map(item => formatDataFromApi(item))
    } catch (error) {
      return Promise.reject(error)
    }
  },

  /**
   * Получить подробную инфорамцию о элементе
   * @param {String|Number} id - id элемента
   * @returns {Object} форматированный элемент
   */
  async loadById(id) {
    try {
      console.log('loadById')
      const response = await axios.get(`${restUrl}/${id}`)

      return formatDataFromApi(response.data.data)
    } catch (error) {
      return Promise.reject(error)
    }
  },

  /**
   * Создать элемент
   * @param {Object} data - данные о элементе
   * @returns {Object} форматированный элемент
   */
  async create(data) {
    try {
      console.log('create')
      const response = await axios.post(restUrl, {
        data: formatDataForApi(data),
      })

      return formatDataFromApi(response.data.data)
    } catch (error) {
      return Promise.reject(error)
    }
  },

  /**
   * Обновить элемент
   * @param {Object} data - данные о элементе
   * @param {String|Number} id - id элемента
   * @returns {Object} форматированный элемент
   */
  async update(data, id) {
    try {
      console.log('update')
      const response = await axios.put(`${restUrl}/${id}`, {
        data: formatDataForApi(data),
      })

      return formatDataFromApi(response.data.data)
    } catch (error) {
      return Promise.reject(error)
    }
  },

  /**
   * Удалить элемент
   * @param {String|Number} id - id элемента
   */
  async deleteById(id) {
    try {
      console.log('deleteById')
      await axios.delete(`${restUrl}/${id}`)
    } catch (error) {
      return Promise.reject(error)
    }
  },
})
