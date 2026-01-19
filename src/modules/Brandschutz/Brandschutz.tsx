import Button from "components/Button/Button"
import { ROUTES } from "constants/routes"
import { Img } from "constants/styles"
import { H1, H2, MainContent } from "modules/Layout/styles"
import { useNavigate } from "react-router-dom"

export default function Brandschutz() {
  const navigate = useNavigate()
  return (
    // <PageWrapper>
    <MainContent>
      <H1>Brandschutz</H1>
      <Img src="/internet_site/brandschutz.jpg" />
      <H2>
        Der vorbeugende bauliche Brandschutz dient der Sicherung von Flucht
        <br />
        und Rettungswegen und der Unterstützung der Feuerwehren durch die
        <br />
        Eingrenzung von Rauch und Feuer auf die vorgesehenen Brandabschnitte.
        <br />
        <br />
        Um immer auf dem neusten Stand der Technik zu bleiben, veranlassen wir
        <br />
        in regelmäßigen Intervallen Schulungen, unserer Mitarbeiter, durch
        unsere <br />
        Systemhersteller. <br />
        <br />
        Einsatzgebiete: <br />
        <br />
        Abschotten von Leitungsdurchführungen (Rohre/Kabel/etc.) in <br />
        raumabschließenden Bauteilen, für die eine Feuerwiderstandsfähigkeit
        <br />
        vorgeschrieben ist, mittels
        <br />
        * Brandschutzmanschette <br />
        * Intumeszierende Bandage <br />
        * Weichschott <br />
        * Mörtelschott <br />
        * Intumeszierendes Schott <br />
        * Kabelbox <br />
        <br />
        Brandschutztechnische Bekleidungen für Installationen (Installations-
        und <br />
        Funktionserhaltskanäle) und Lüftungsleitungen in verschiedenen
        Ausführungen, <br />
        mittels <br />
        <br />
        * Calciumsilikat-Platte <br />
        * Steinwolle-Platte / Matte / Schale <br />
        <br />
        Verpressen von Brandschutzklappen und Aussparungen, mittels <br />
        <br />* Mörtel MG lll
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
