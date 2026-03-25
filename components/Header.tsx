"use client";

import styled from "styled-components";
import Link from "next/link";

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 40px;
  background: ${({ theme }) => theme.colors.white};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`;

const Logo = styled.h1`
  margin: 0;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primary};
`;

  const Nav = styled.nav`
    display: flex;
    gap: 24px;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 12px;
    }
  `;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  font-weight: 500;
`;

export default function Header() {
  return (
     <Wrapper role="banner">
      <Logo>Lacrei Saúde</Logo>

      <Nav aria-label="Navegação principal">
        <NavLink href="/">Início</NavLink>
        <NavLink href="/sobre">Sobre</NavLink>
      </Nav>
    </Wrapper>
  );
}