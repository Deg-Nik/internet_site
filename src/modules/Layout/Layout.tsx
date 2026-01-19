import { Outlet, useNavigate } from "react-router"
import {
  Footer,
  FooterContent,
  FooterLogo,
  Header,
  Logo,
  LogoImg,
  Main,
  PageWrapper,
  Paragraph,
  Paragraph2,
  Title,
} from "./styles"
import { ROUTES } from "constants/routes"

export default function Layout() {
  const navigate = useNavigate()
  return (
    <PageWrapper>
      <Header>
        <Logo
          onClick={() => {
            navigate(ROUTES.HOME)
          }}
        >
          <LogoImg src="./image.png" />
          <Title>Siebert-Isolierungen</Title>
        </Logo>
      </Header>
      <Main>
        <Outlet />
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
          <Paragraph2>Mobil: 0173 / 876 13 60</Paragraph2>
        </FooterContent>
        <FooterContent>
          <Paragraph2>info@siebert-isolierungen.de</Paragraph2>
        </FooterContent>
      </Footer>
    </PageWrapper>
  )
}
