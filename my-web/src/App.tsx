import { Outlet } from "react-router-dom";
import Header from "./components/Layout/Header";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 text-gray-800 font-sans antialiased">
      <Header />
<main className="max-w-[1600px] mx-auto px-8 md:px-12 lg:px-16">
  <Outlet />
</main>

    </div>
  );
}
