import { Outlet } from "react-router-dom"
import { Header } from "./components/header"

function App() {
  return (
    <div>
       <Header />
       <Outlet />
     </div>
  )
}

export default App
