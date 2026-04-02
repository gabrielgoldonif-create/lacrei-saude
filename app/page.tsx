"use client";

import styled from "styled-components";
import { useState } from "react";
import { useRouter } from "next/navigation";
 import Header from "../components/Header";
 import Button from "../components/Button";
import Footer from "../components/Footer";

const Main = styled.main`
  min-height: 100vh;
`;

const Hero = styled.section`
  padding: 64px 40px;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
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
  max-width: 600px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ButtonGroup = styled.div`
  margin-top: 24px;
  display: flex;
  gap: 12px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const InfoSection = styled.section`
  padding: 0 40px 64px;

  @media (max-width: 768px) {
    padding: 0 20px 40px;
  }
`;

const InfoBox = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.white};
  padding: 24px;
  border-radius: 12px;
`;

export default function Home() {
  const [message, setMessage] = useState(
    "Escolha uma ação para continuar."
  );
  const router = useRouter();

  return (
    <Main>
      <Header />

      <Hero aria-labelledby="hero-title">
        <Container>
          <HeroContent>
            <Title id="hero-title">Bem-vindo ao Lacrei App</Title>

            <Text>
              Uma plataforma digital de impacto social que conecta pessoas da
              comunidade LGBTQIAPN+ a profissionais de saúde qualificados.
            </Text>

            <ButtonGroup>
              <Button
                onClick={() =>
                  setMessage(
                    "Você escolheu buscar profissionais. Em breve um de nossos atendentes entrará em contato. Aguarde!"
                  )
                }
              >
                Buscar profissionais
              </Button>

              <Button onClick={() => router.push("/sobre")}>
                Saiba mais
              </Button>

              <Button
                onClick={() =>
                  setMessage("Área de cadastro em preparação. Por favor, aguarde.")
                }
              >
                Quero me cadastrar
              </Button>
            </ButtonGroup>
          </HeroContent>
        </Container>
      </Hero>

      <InfoSection aria-live="polite">
        <Container>
          <InfoBox>
            <Text>{message}</Text>
          </InfoBox>
        </Container>
      </InfoSection>

      <Footer />
    </Main>
  );
}