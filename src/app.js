import React, { useEffect, useState } from 'react'
import ReactTable from 'react-table'
import Loading from './loading'

/**
 * @param {string} id
 */
function getParentWebComponent(id) {
  const parentComponent = document.getElementById(id)
  const parentComponents = document.querySelectorAll(`#${id}`)
  const hasParent = parentComponent !== null
  const hasParents = parentComponents.length > 1
  const hasError = !hasParent || hasParents

  if (hasError) {
    throw new Error('This Element Is Improperly Configured')
  }
  return parentComponent
}

/**
 * @param {({}: { [key: string]: any }) => void} [cb]
 * @param {string} [id]
 */
function attachCallbackToParent(cb, id) {
  const parentComponent = getParentWebComponent(id)
  parentComponent['setState'] = cb
  parentComponent['state'] = { data: [], columns: [] }
}

/**
 * @param {{ id: string; config: {[key: string]: any} }} props
 */
export default function App({ id, config }) {
  const [state, setState] = useState(config)

  useEffect(() => {
    attachCallbackToParent(setState, id)
  }, [id, setState])

  const { isLoading } = state
  
  if (isLoading) {
    return <Loading />
  }

  return <ReactTable {...state} />
}
