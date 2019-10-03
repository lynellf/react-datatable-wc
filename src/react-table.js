import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

class ReactTable extends HTMLElement {
  constructor() {
    super()
    const id = this.id
    const mountPoint = document.createElement('div')
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint)

    ReactDOM.render(<App id={id} />, mountPoint)
  }
}

customElements.define('react-table', ReactTable)
