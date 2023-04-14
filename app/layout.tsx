import NavBar from "./components/NavBar";
import AuthContext from "./context/AuthContext";
import "./globals.css";
import "react-datepicker/dist/react-datepicker.css";

export const metadata = {
  title: "Booking App",
  description: "Restaurant Booking App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="bg-gray-100 min-h-screen w-screen">
          <AuthContext>
            <main className="max-w-screen-2xl m-auto bg-white">
              <NavBar />
              {children}
            </main>
          </AuthContext>
        </main>
      </body>
    </html>
  );
}
