import { Route, Routes } from "react-router-dom"


function App() {


  return (
      <div>
        <Routes>

          <Route path="/" element={<Layout />}/>
          <Route path="/" element={<IndexPage />}/>
          <Route path="/phone/:id" element={<PhonePage /> }/>


        </Routes>
      </div>      
  )
}

export default App
