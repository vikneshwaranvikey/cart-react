import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './Redux/store.jsx'
import { ConfigProvider } from "antd"
import { antDdefaultComponent, antDdefaultTheme } from "./Components/Constant/index.jsx"


const defaultThemeConfig = {
  token: antDdefaultTheme,
  components: antDdefaultComponent,
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider theme={defaultThemeConfig}>
        <App />
      </ConfigProvider>
    </Provider>
  </React.StrictMode>,
)
