import styled from "@emotion/styled";
import { NavLink, type NavLinkRenderProps, Link } from "react-router-dom";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 100vh;
  width: 100%;
`;

export const Title = styled.h1`
  font-family: fantasy;
  font-size: 32px;
  padding: 20px;
  cursor: pointer;

  @media (max-width: 1024px) {
    font-size: 28px;
    padding: 15px;
  }

  @media (max-width: 768px) {
    font-size: 22px;
    padding: 10px;
  }
`;

export const Paragraph = styled.p`
  font-family: fantasy;
  font-size: 30px;
  line-height: 1.3;

  @media (max-width: 1024px) {
    font-size: 24px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const Paragraph2 = styled.p`
  padding: 20px;
  font-size: 22px;
  line-height: 1.4;

  @media (max-width: 1024px) {
    font-size: 20px;
    padding: 15px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 10px;
  }
`;

export const H1 = styled.h1`
  display: flex;
  font-weight: bold;
  font-size: 30px;
  line-height: 1.2;

  @media (max-width: 1024px) {
    font-size: 26px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const H2 = styled.h2`
  display: flex;
  font-weight: bold;
  font-size: 25px;
  line-height: 1.2;
  padding-left: 30px;

  @media (max-width: 1024px) {
    font-size: 26px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
/* ---------------- HEADER ---------------- */

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 180px;
  padding: 20px 40px;
  background: linear-gradient(to right, blue, rgba(0, 10, 66, 0.99));
  color: white;

  @media (max-width: 1024px) {
    height: auto;
    padding: 20px;
    flex-wrap: wrap;
    gap: 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 170px;
  width: 180px;
  cursor: pointer;

  @media (max-width: 1024px) {
    height: 120px;
    width: 140px;
  }

  @media (max-width: 768px) {
    height: 100px;
    width: 120px;
  }
`;

export const LogoImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export const NavigationContainer = styled.nav`
  display: flex;
  gap: 30px;
  align-items: center;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;

/* ---------------- MAIN ---------------- */

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 40px;
  padding: 40px;
  flex: 1;
  background-image: url("/internet_site/background.jpg");
  background-size: 100% 100%;
  background-position: center;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 30px;
    padding: 30px;
    background-size: cover;
  }

  @media (max-width: 768px) {
    gap: 20px;
    padding: 20px;
    background-size: cover;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: 1024px) {
    gap: 30px;
  }

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

export const MainLink = styled(NavLink)`
  color: white;
  font-size: 20px;
  text-decoration: none;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const MainImages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: 1024px) {
    gap: 30px;
  }

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

export const Img = styled.img`
  display: block;
  width: 850px;
  height: auto;

  @media (max-width: 1024px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

/* ---------------- FOOTER ---------------- */

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: auto;
  padding: 10px;
  background: linear-gradient(to left, blue, rgba(0, 10, 66, 0.9));
  color: white;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 30px;
    gap: 20px;
  }

  @media (max-width: 768px) {
    padding: 20px;
    gap: 20px;
  }
`;

export const FooterLogo = styled.img`
  height: 80px;
  width: 80px;
  cursor: pointer;
  margin: 40px;

  @media (max-width: 1024px) {
    margin: 20px;
  }

  @media (max-width: 768px) {
    margin: 10px;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30px;

  @media (max-width: 1024px) {
    padding-left: 0;
    align-items: center;
    text-align: center;
  }
`;

export const FooterNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FooterLink = styled(Link)`
  color: white;
  font-size: 14px;
  font-weight: bold;
`;

export const getActiveStyles = ({ isActive }: NavLinkRenderProps) => ({
  fontWeight: isActive ? "bold" : "normal",
  textDecoration: isActive ? "underline" : "none",
});
