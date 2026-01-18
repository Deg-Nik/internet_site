import { ROUTES } from "constants/routes"
import Brandschutz from "modules/Brandschutz/Brandschutz"
import Home from "modules/Home/Home"
import Kaeltedaemmung from "modules/Kaeltedaemmung/Kaeltedaemmung"
import Layout from "modules/Layout/Layout"
import Schallschutz from "modules/Schallschutz/Schallschutz"
import Waermedaemmung from "modules/Waermedaemmung/Waermedaemmung"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <BrowserRouter basename="/internet_site">
      <Routes>
        <Route path={ROUTES.HOME} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={ROUTES.WAERMEDAEMMUNG} element={<Waermedaemmung />} />
          <Route path={ROUTES.KAELTEDAEMMUNG} element={<Kaeltedaemmung />} />
          <Route path={ROUTES.SCHALLSCHUTZ} element={<Schallschutz />} />
          <Route path={ROUTES.BRANDSCHUTZ} element={<Brandschutz />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
