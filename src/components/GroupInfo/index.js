// TODO переделать через async/await чтобы не дублировать логику с setSubmitting

import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from '../../plugins/axios'
import GroupInfoForm from './GroupInfoForm'
import AddGroupMemberForm from './AddGroupMemberForm'
import GropuInvites from './GropuInvites'
import Portlet from '../UI-core/Portlet'
import Loader from '../Loader'
import Typography from '@material-ui/core/Typography'
import { withSnackbar } from 'notistack'

GroupInfo.propTypes = {
  enqueueSnackbar: PropTypes.func.isRequired,
}

function GroupInfo({ enqueueSnackbar }) {
  const REST_URL = '/group'

  const ADD_MEMBER_URL = '/group/invites'

  const [group, setGroup] = useState({ title: '', number: '' })
  const [haveGroup, setHaveGroup] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  /**
   * Формотирование данных для api
   * @param {Object} data - данные для сохранения (required)
   * @param {String} type - тип (default - 'group')
   */
  const formatDataForApi = (data, type = 'group') => ({
    type,
    attributes: {
      ...data,
    },
  })

  /**
   * Обновление данных о группе
   * @param {Object} data - данные о группе (required)
   * @param {Object} actions  - объект c методами из Formik (передаётся по умолчанию)
   */
  const update = (data, actions) => {
    axios
      .put(REST_URL, { data })
      .then(() => {
        actions.setSubmitting(false)
        enqueueSnackbar('Сохранено')
        return
      })
      .catch(error => {
        actions.setSubmitting(false)
        setError(error)
      })
  }

  /**
   * Создание группы
   * @param {Object} data - данные о группе (required)
   * @param {Object} actions  - объект c методами из Formik (передаётся по умолчанию)
   */
  const create = (data, actions) => {
    axios
      .post(REST_URL, { data })
      .then(() => {
        actions.setSubmitting(false)
        enqueueSnackbar('Сохранено')
        return
      })
      .catch(error => {
        actions.setSubmitting(false)
        setError(error)
      })
  }

  /**
   * Сохранение группы
   * @param {Object} group - данные о группе (required)
   * @param {Object} actions  - объект c методами из Formik (передаётся по умолчанию)
   */
  const save = (group, actions) => {
    const data = formatDataForApi(group)

    haveGroup ? update(data, actions) : create(data, actions)
  }

  /**
   * Добавление участника в группу
   * @param {Object} member - данные о регистрируемом аккаунте { email }
   * @param {Object} actions - объект c методами из Formik (передаётся по умолчанию)
   */
  const addMember = (member, actions) => {
    const data = formatDataForApi(member, 'invite')

    axios
      .post(ADD_MEMBER_URL, { data })
      .then(() => {
        actions.setSubmitting(false)
        actions.setFieldValue('email', '')
        actions.setFieldTouched('email', '')
        enqueueSnackbar('Приглашение отправленно')
        return
      })
      .catch(error => {
        actions.setSubmitting(false)
        setError(error)
      })
  }

  /**
   * Загрузка данных
   */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(REST_URL)

        const response = result.data.data

        if (!response) {
          setLoading(false)
          return
        }

        const group = response.attributes

        setHaveGroup(true)
        setGroup(group)
        setLoading(false)
      } catch (e) {
        setError(e)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      { loading ? (
        <Loader />
      ) : (
        <div>
          <Portlet>
            <Typography variant="h6" color="primary">
              О группе
            </Typography>

            <GroupInfoForm initialValues={ group } onSubmit={ save } />
          </Portlet>

          { haveGroup && (
            <Portlet>
              <Typography variant="h6" color="primary">
                Пригласить в группу
              </Typography>

              <AddGroupMemberForm onSubmit={ addMember } />
            </Portlet>
          ) }

          <GropuInvites />
        </div>
      ) }
    </div>
  )
}

export default withSnackbar(GroupInfo)
