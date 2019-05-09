import React from 'react'
import Loader from '../Loader'
import Alert from './Alert'

/**
 * Компонент обёртка для запросов к api
 * Отображает лоудер или сообщение об ошибке или контент
 */
function ApiWrapper({
  loading = false,
  error = null,
  haveData = true,
  emptyText = 'Нет данных',
  children,
}) {
  /**
   * Получить отображение ошибки
   * @param {Object | String} error
   */
  const getErrorView = error => {
    if (typeof error === 'string') {
      return error
    }

    if (typeof error === 'object' && error.message) {
      return error.message
    }

    return 'Извините, произошла ошибка'
  }

  return (
    <div>
      { (() => {
        if (error) {
          return <Alert color="error">{ getErrorView(error) }</Alert>
        } else if (loading) {
          return <Loader />
        } else {
          return (
            <>
              { haveData ? children : <Alert color="warning">{ emptyText }</Alert> }
            </>
          )
        }
      })() }
    </div>
  )
}

export default ApiWrapper
