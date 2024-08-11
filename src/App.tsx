
import './App.css'
import Mainlayout from './layouts/Mainlayout'
import Gotop from './pages/commonPage/Gotop'
import ScrollToTop from './pages/commonPage/ScrollToTop'

function App() {

  return (
    <>
      <ScrollToTop />
      <Mainlayout></Mainlayout>
      <Gotop />
    </>
  )
}

export default App
