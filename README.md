# react-table-wc
React Table as a Web Component

## Attaching React Hooks to Web Components

TLDR;

Web Components have their own lifecycle methods
When the web component mounts, render a React app within it
Pass the web component's id (or any unique attribute) as a prop to the React app
The React app searches the DOM for its parent Web Component with the id
The React app appends its setState hook to the parent component's prototype
We now can invoke the hook and update the React App as needed


# How to use

```html
<head>
  <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/react-table/6.10.3/react-table.css"
    />
  <script src="<bundleOutput>.js" defer></script>
  <script>
        function initializeState() {
          const tableConfigs = [
            {
              id: 'table0',
              config: {
                columns: [
                  {
                    Header: 'Test Column 1',
                    accessor: 'testColumn1'
                  },
                  {
                    Header: 'Test Column 2',
                    accessor: 'testColumn2'
                  }
                ],
                data: [
                  {
                    testColumn1: 'Hello',
                    testColumn2: 'World'
                  },
                  {
                    testColumn1: 'Hello',
                    testColumn2: 'World'
                  },
                ]
              }
            }
          ]
          tableConfigs.forEach(item => {
            const { id, config } = item
            const component = document.getElementById(id)
            const hasComponent = component !== null

            if (!hasComponent) {
              console.error('Component does not exist')
            }

            if (hasComponent) {
              setTimeout(() => {
                component.setState({ ...config, isLoading: false })
              }, 500)
            }
          })
        }
        window.addEventListener('DOMContentLoaded', () => {
          initializeState()
        });
    </script>
</head>
<body>
  <react-table id="table0"></react-table>
  <script src="react-table.js"></script>
</body>

```
