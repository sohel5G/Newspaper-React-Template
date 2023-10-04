import { Outlet } from "react-router-dom"
import Footer from "../footer/Footer"

function Layout() {

  return (
    <>

      <Outlet></Outlet>

      <Footer></Footer>

    </>
  )
}

export default Layout
