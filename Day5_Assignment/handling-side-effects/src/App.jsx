import './App.css'
import DocumentTitleUpdater from './components/DocumentTitleUpdater'
import { FetchData } from './components/FetchData'
import MouseTracker from './components/MouseTracker'
import ScrollComponent from './components/ScrollComponent'
import { Timer } from './components/Timer'

function App() {

  return (
    <>
      <FetchData/>
      <MouseTracker/>
      <DocumentTitleUpdater/>
      <Timer/>
      <ScrollComponent/>
    </>
  )
}

export default App
