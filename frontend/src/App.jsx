import { Box } from "@chakra-ui/react"
import AllRoutes from "./AllRouters/AllRoutes"
import Footer from "./Components/Footer"
import MidNav from "./Components/MidNav"
import Navbar from "./Components/Navbar"
import TopNav from "./Components/TopNav"

function App() {
  return (
    <Box>
     <TopNav/>
     <MidNav/>
     <Navbar/>
     <AllRoutes/>
     <Footer/>
    </Box>
  )
}

export default App
