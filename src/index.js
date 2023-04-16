import React from "react"
import ReactDOMClient from "react-dom/client"
import App from "./App"
import "./main.scss"
import "./styles.scss"

const app = document.getElementById("root")
const root = ReactDOMClient.createRoot(app)

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
