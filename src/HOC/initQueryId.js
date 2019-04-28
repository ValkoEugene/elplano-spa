import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router'
import queryString from 'query-string'

/**
 * HOC компонент при инициализации берёт из query параметр id
 * передаёт параметр оборачеваему компоненту вместе с функцией setId - которая устанавливает значение id
 * также через props передаёт location и history
 */
export default function initQueryById(WrappedComponent) {
  return withRouter(props => {
    const [id, setId] = useState(null)

    useEffect(() => {
      const { id } = queryString.parse(props.location.search)

      setId(id || '')
    }, [])

    return id === null ? null : (
      <WrappedComponent id={ id } setId={ setId } { ...props } />
    )
  })
}
