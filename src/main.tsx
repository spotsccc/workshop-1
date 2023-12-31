import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './app.tsx'

const root = document.querySelector('#root') as HTMLElement

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
