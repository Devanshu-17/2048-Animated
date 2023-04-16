import React from "react"
import BoardView from "./components/BoardView"
import Footer from "./components/Footer"

const App = () => {
    return (
        <div>
            <h1 className="header">2048</h1>
            <BoardView />
            <Footer />
        </div>
    )
}

export default App
