# react-datatable-wc
React Datatable as a Web Component

## Attaching React Hooks to Web Components

TLDR;

Web Components have their own lifecycle methods
When the web component mounts, render a React app within it
Pass the web component's id (or any unique attribute) as a prop to the React app
The React app searches the DOM for its parent Web Component with the id
The React app appends its setState hook to the parent component's prototype
We now can invoke the hook and update the React App as needed
