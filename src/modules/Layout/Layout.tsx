import {
  Footer,
  FooterContent,
  FooterLogo,
  H1,
  H2,
  Header,
  Img,
  Logo,
  LogoImg,
  Main,
  MainContent,
  PageWrapper,
  Paragraph,
  Paragraph2,
  Title,
} from "./styles"

export default function Layout() {
  return (
    <PageWrapper>
      <Header>
        <Logo>
          <LogoImg src="./image.png" />
          <Title>Siebert-Isolierungen</Title>
        </Logo>
      </Header>
      <Main>
        <MainContent>
          <H1>IHR PARTNER FÜR DAS ISOLIER-HANDWERK SEIT 2010</H1>
          <Img src="./main.gif"/>
        </MainContent>
      </Main>
      <Footer>
        <FooterLogo src="./image.png" />
        <Paragraph>So findet man uns:</Paragraph>
        <FooterContent>
          <Paragraph2>SIEBERT - ISOLIERUNGEN </Paragraph2>
        </FooterContent>
        <FooterContent>
          <Paragraph2>Alexander Siebert</Paragraph2>
          <Paragraph2>Urbanstr. 9, 93059 Regensburg</Paragraph2>
        </FooterContent>
        <FooterContent>
          <Paragraph2>Tel.: 0941 / 780 37 204</Paragraph2>
          <Paragraph2>Fax: 0941 / 780 37 209</Paragraph2>
        </FooterContent>
        <FooterContent>
          <Paragraph2>Mobil: 0173 / 876 13 60</Paragraph2>
          <Paragraph2>info@siebert-isolierungen.de</Paragraph2>
        </FooterContent>
        
      </Footer>
    </PageWrapper>
  )
}
