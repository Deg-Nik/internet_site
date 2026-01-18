import Button from "components/Button/Button"
import { ROUTES } from "constants/routes"
import { H1, Img, MainContent } from "modules/Layout/styles"
import { useNavigate } from "react-router"


export default function Home() {
  const navigate = useNavigate()
  return (
    <MainContent>
          <H1>IHR PARTNER FÜR DAS ISOLIER-HANDWERK SEIT 2010</H1>

          <Img src="./main.gif" />
          <Button
            name={"Wärmedämmung"}
            onClick={() => {
              navigate(ROUTES.WAERMEDAEMMUNG)
            }}
          ></Button>
          <Button
            name={"Kältedämmung"}
            onClick={() => {
              navigate(ROUTES.KAELTEDAEMMUNG)
            }}
          ></Button>
          <Button
            name={"Schallschutz"}
            onClick={() => {
              navigate(ROUTES.SCHALLSCHUTZ)
            }}
          ></Button>
          <Button
            name={"Brandschutz"}
            onClick={() => {
              navigate(ROUTES.BRANDSCHUTZ)
            }}
          ></Button>
        </MainContent>
  )
}

