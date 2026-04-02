# Lacrei Saúde — Front-end


## tecnologias utilizadas

- Next.js
- TypeScript
- Styled-components
- Jest + Testing Library

---

## funcionalidades

- Duas páginas:
  - Home 
  - Sobre 
- Navegação entre páginas sem recarregamento
- Botões interativos com feedback ao usuário
- Estrutura semântica e acessível
- Layout responsivo (mobile e desktop)
- Simulação de busca de profissionais com campo de input

---

##  acessibilidade

- Uso de elementos semânticos (`header`, `main`, `section`, `footer`)
- `aria-label` para navegação
- `aria-labelledby` para seções
- `aria-live` para atualização dinâmica de conteúdo
- Campo de busca com descrição acessível

---

## testes

- Header (renderização)
- Button (renderização)
- Home (interação com clique)

- Os três testes rodam com eficiência, conforme apresenta npmruntest.png

---

## evidência de qualidade
- Desempenho: 86
- Acessibilidade: 90
- Demonstração de métricas
public/lighthouse-mobile.png
public/npmruntest.png

### Rodar testes

```bash
npm run test