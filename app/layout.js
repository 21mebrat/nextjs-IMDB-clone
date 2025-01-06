import Headers from "@components/commons/Headers";
import "./globals.css";
import Providers from "./Providers";
import NavBar from "@components/NavBar";
import SearchBox from "@components/commons/SearchBox";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div>
            {/* header is here */}
            <Headers />
            <NavBar />
            <SearchBox />
            <main className="mt-8">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
