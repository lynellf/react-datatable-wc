class ReactTable extends HTMLElement {
  constructor() {
    super()
    const incomingConfig = this.config
    this.config = incomingConfig || { columns: [], data: [], isLoading: true }
    this.createElements()
    this.renderTable()
    this.appendTable()
  }

  createElements() {
    this.container = document.createElement('div')
    this.entryPoint = document.createElement('div')
    this.styleElement = document.createElement('style')
    // this.shaodowDOM = this.attachShadow({ mode: 'closed' })
  }

  renderTable() {
    const { config, entryPoint } = this
    ReactDOM.render(<App id={this.id} config={config} />, entryPoint)
  }

  appendTable() {
    const { styleElement, container,  entryPoint } = this
    styleElement.textContent = Styles
    container.appendChild(styleElement)
    container.appendChild(entryPoint)
    this.appendChild(container)
  }
}

customElements.define('react-table', ReactTable)
