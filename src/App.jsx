import { Outlet } from "react-router-dom"
import { Header,Footer,Home,About,Blog,Post,Contact } from "./component/index"
function App() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App