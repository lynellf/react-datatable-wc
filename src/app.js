import React, { useEffect, useState } from 'react'

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
}

/**
 * @param {{ id: string }} props
 */
export default function App({ id }) {
  const [state, setState] = useState({ greeting: 'Hello World!' })

  useEffect(() => {
    attachCallbackToParent(setState, id)
  }, [id, setState])

  const { greeting } = state
  return <span>{greeting}</span>
}
