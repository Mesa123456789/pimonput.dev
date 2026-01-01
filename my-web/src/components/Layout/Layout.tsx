import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-blue-50 text-gray-800 w-full overflow-x-hidden">
      <Header />
      {/* ลบ px-8 ออก และใช้ w-full เพื่อให้เนื้อหาขยายใหญ่ที่สุด */}
      <main className="flex-1 pt-20 px-0 w-full">{children}</main>
      <Footer />
    </div>
  );
}