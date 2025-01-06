import Headers from "@components/commons/Headers";
import "./globals.css";
import Providers from "./Providers";
import NavBar from "@components/NavBar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div>
            {/* header is here */}
            <Headers />
            <NavBar />
            <main>
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
