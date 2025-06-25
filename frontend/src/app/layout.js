import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar"; // 1. Importa el Navbar

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sistema de Farmacia",
  description: "Gestión de laboratorios y medicamentos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      {/* 2. Añade un color de fondo al body para que se vea mejor */}
      <body className={`${inter.className} bg-gray-50`}>
        <Navbar /> {/* 3. Coloca el Navbar aquí, antes del contenido de la página */}
        <main className="container mx-auto px-6 py-8">
          {children} {/* children es el contenido de cada página individual */}
        </main>
      </body>
    </html>
  );
}