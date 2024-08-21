import { Outlet } from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <div className='md:w-[90%] m-auto md:p-0 px-4'>
      <Header></Header>
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
