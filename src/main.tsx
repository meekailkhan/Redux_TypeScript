import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider} from 'react-redux'
import store from './app/store.js'
import App from './App.jsx'

// const rootElement = document.getElementById('root');

// if (!rootElement) throw new Error("Root element not found");

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  
  <StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </StrictMode>
)
