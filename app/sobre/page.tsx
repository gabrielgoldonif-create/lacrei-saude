"use client";

import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Main = styled.main`
  min-height: 100vh;
`;

const Section = styled.section`
  padding: 64px 40px;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 32px;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
  line-height: 1.6;
  max-width: 700px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export default function Sobre() {
  return (
    <Main>
      <Header />

      <Section aria-labelledby="sobre-title">
        <Container>
          <Title id="sobre-title">Sobre a Lacrei Saúde</Title>

          <Text>
            A Lacrei Saúde é uma plataforma que conecta pessoas da comunidade
            LGBTQIAPN+ a profissionais de saúde preparados para oferecer um
            atendimento respeitoso, seguro e inclusivo.
          </Text>

          <Text style={{ marginTop: "16px" }}>
            Nosso objetivo é garantir que todas as pessoas possam buscar cuidado
       sem medo, com acolhimento e qualidade.
          </Text>
        </Container>
      </Section>

      <Footer />
    </Main>
  );
}