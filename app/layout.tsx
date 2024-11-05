import type { Metadata } from "next";
import "./globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import NavBar from "./components/ui/navbar";

export const metadata: Metadata = {
  title: "Yacu Selva",
  description: "Delivery Yacu Selva",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <UserProvider>
          <header>
            <NavBar/>
          </header>
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
