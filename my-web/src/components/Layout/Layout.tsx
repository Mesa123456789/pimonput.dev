import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-blue-50 text-gray-800">
      <Header />
      <main className="flex-1 pt-20 px-8">{children}</main>
      <Footer />
    </div>
  );
}
