// App.tsx
import { Outlet } from "react-router-dom";
import Header from "./components/Layout/Header";
import ScrollToTop from "./components/ScrollToTop"; // Import เข้ามา

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 text-gray-800 font-sans antialiased overflow-x-hidden">
      {/* วางไว้ตรงนี้เพื่อให้ทำงานทุกครั้งที่เปลี่ยนหน้า */}
      <ScrollToTop /> 
      
      <Header />
      <main className="max-w-[1600px] mx-auto px-0 md:px-12 lg:px-16 w-full">
        <Outlet />
      </main>
    </div>
  );
}