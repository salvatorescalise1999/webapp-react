// Importiamo le pagine
import HomePage from "./pages/HomePage"
import FilmPage from "./pages/FilmPage"

// importiamo il Layout
import DefaultLayout from "./layouts/DefaultLayout"

//importiamo le componenti della libreria delle rotte
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {

  return (
    <BrowserRouter >
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/films/:id" element={<FilmPage />} />
        </ Route >
      </Routes>
    </BrowserRouter>
  )
}

export default App
