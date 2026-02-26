// Importiamo le pagine
import HomePage from "./pages/HomePage"
import FilmPage from "./pages/FilmPage"
import NotFoundPage from "./pages/NotFoundPage"


// import del provider del contesto globale
import { GlobalProvider } from "./contexts/GlobalContext"

// importiamo il Layout
import DefaultLayout from "./layouts/DefaultLayout"

//importiamo le componenti della libreria delle rotte
import { BrowserRouter, Routes, Route } from "react-router-dom"



function App() {

  return (
    <GlobalProvider >
      <BrowserRouter >
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/films/:id" element={<FilmPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </ Route >
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App
