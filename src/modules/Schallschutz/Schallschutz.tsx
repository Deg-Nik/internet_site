import Button from "components/Button/Button"
import { ROUTES } from "constants/routes"
import { Img } from "constants/styles"
import { H1, H2, MainContent } from "modules/Layout/styles"
import { useNavigate } from "react-router-dom"

export default function Schallschutz() {
  const navigate = useNavigate()
  return (
    // <PageWrapper>
    <MainContent>
      <H1>Schallschutz</H1>
      <Img src="/internet_site/schallschutz.jpg" />
      <H2>
        Zum Schutz der Gesundheit gewinnt der Schallschutz heute immer mehr
        <br />
        an Bedeutung. Schädliche Geräuschquellen lassen sich oft einschränken
        <br />
        und auf ein minimales Maß reduzieren. Wir führen alle Arten von <br />
        Schallisolierung, z. B. in Produktionsbetrieben, Großraumbüros, <br />
        Industrieanlagen, bei Maschinen und Anlagen aus. <br />
        <br />
        Wir planen entsprechende Konstruktionen und Aufbauten, um eine <br />
        optimale Schallreduzierung zu erzielen. <br />
        <br />
        Einsatzgebiete: <br />
        <br />
        Erstellen von Einhausungen für z.B. Generatoren, Motoren, Kompressoren.{" "}
        <br />
        Dämmung von Rohrleitungen / Behältern / Apparaten / Armaturen / <br />
        Lüftungsleitungen in verschiedenen Ausführungen mit <br />
        <br />
        * Mineralfaser-/Steinwolldämmstoffen <br />
        * Vinylkautschuk <br />
        <br />
        mit Oberflächenschutz, je nach Beanspruchung und Brandschutzanforderung{" "}
        <br />
        aus <br />
        <br />
        * Blechmantel <br />
        * Kunststoffmantel <br />
        * Grobkornmantel <br />
        * Arma-Chek <br />
      </H2>
      <Button
        name={"Zurück zur Startseite"}
        onClick={() => {
          navigate(ROUTES.HOME)
        }}
      ></Button>
    </MainContent>
    // </PageWrapper>
  )
}
