import StyledComponentsRegistry from "../lib/registry";
import Providers from "../lib/providers";
import { Nunito } from "next/font/google";

   const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

    export default function RootLayout({
      children,
    }: {
      children: React.ReactNode;
    }) {
      return (
        <html lang="pt-BR">
      <body className={nunito.className}>
       <StyledComponentsRegistry>
              <Providers>{children}</Providers>
            </StyledComponentsRegistry>
          </body>
        </html>
      );
    }