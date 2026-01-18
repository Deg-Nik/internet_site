import styled from "@emotion/styled";
import { NavLink, type NavLinkRenderProps, Link } from "react-router-dom";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 180px;
  border-bottom: 1px solid black;
  background: linear-gradient(to right, blue, rgba(0, 10, 66, 0.99));
  padding: 20px 40px;
  color: white;

  @media (max-width: 1024px) {
    height: auto;
    padding: 20px;
    gap: 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;

export const Title = styled.h1`
  font-family: fantasy;
  font-size: 32px;
  padding: 20px;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 24px;
    padding: 10px;
  }
`;

export const H1 = styled.h1`
  font-weight: bold;
  font-size: 30px;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

export const Paragraph = styled.p`
  font-family: fantasy;
  font-size: 30px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Paragraph2 = styled.p`
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  height: 170px;
  width: 180px;
  cursor: pointer;

  @media (max-width: 768px) {
    height: 100px;
    width: 120px;
  }
`;

export const LogoImg = styled.img`
  width: 70%;
  height: 80%;
  border-radius: 50%;
`;

export const Img = styled.img`
  width: 450px;
  height: 250px;

  @media (max-width: 1024px) {
    width: 100%;
    height: auto;
  }
`;

export const NavigationContainer = styled.nav`
  display: flex;
  gap: 30px;
  align-items: center;

  @media (max-width: 1024px) {
    gap: 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;

export const HeaderLink = styled(NavLink)`
  color: white;
  font-size: 20px;
  font-weight: normal;
  text-decoration: none;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 40px;
  gap: 40px;
  background-image: url("/internet_site/background.jpg");
  background-size: cover;
  background-position: center;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 30px;
    gap: 30px;
  }

  @media (max-width: 768px) {
    padding: 20px;
    gap: 20px;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

export const MainImages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 150px;
  border-top: 1px solid black;
  background: linear-gradient(to left, blue, rgba(0, 10, 66, 0.9));
  padding: 40px;
  color: white;

  @media (max-width: 1024px) {
    flex-direction: column;
    height: auto;
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

  @media (max-width: 768px) {
    margin: 20px;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 80px;

  @media (max-width: 768px) {
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
