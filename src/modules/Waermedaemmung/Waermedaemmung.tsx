import { PageWrapper, Img } from "constants/styles"
import { H1, MainContent } from "modules/Layout/styles"

export default function Waermedaemmung() {
  return (
    <PageWrapper>
      <MainContent>
        <H1>Wärmedämmung</H1>
        <Img src="./warmedammung.jpg" />
        <H1>
          Energieeinsparung und Klimaschutz sind die wichtigsten Grundlagen<br />
          der Wärmedämmung. Durch den richtigen Einsatz von Dämmstoffen lässt <br />
          sich Energie sparen und Emission verringern. <br />
          Wir beraten, planen und sorgen für die sach- und fachgerechte <br />
          Ausführung unter Einhaltung des Gebäudeenergiegesetzes (GEG) bzw. <br />
          der Energieeinsparverordnung (ENEV). <br /><br />
          Einsatzgebiete:<br /><br /> 
          Dämmung von Rohrleitungen / Behältern / Apparaten / Armaturen / <br />
          Lüftungsleitungen in verschiedenen Ausführungen mit <br /><br /> 
          * Mineralfaser-/Steinwolldämmstoffen <br /> 
          * Vinylkautschuk <br /><br />
          mit Oberflächenschutz, je nach Beanspruchung <br /> <br />
          * Blechmantel <br />
          * Kunststoffmantel <br />
          * Grobkornmantel <br />
          * Arma-Check
        </H1>
      </MainContent>
    </PageWrapper>
  )
}
