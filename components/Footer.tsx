"use client";

import styled from "styled-components";


const Wrapper = styled.footer`
  padding: 32px 40px;
  background: ${({ theme }) => theme.colors.primary};
   color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;

const Text = styled.p`
  margin: 0;
  font-size: 14px;
`;

export default function Footer() {
  return (
    <Wrapper>
      <Text>© 2026 Lacrei Saúde — Projeto teste</Text>
    </Wrapper>
  );
}