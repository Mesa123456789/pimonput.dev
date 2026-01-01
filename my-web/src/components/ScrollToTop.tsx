import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // บังคับให้หน้าต่างเลื่อนไปที่ตำแหน่ง x=0, y=0
    window.scrollTo(0, 0);
  }, [pathname]); // ทำงานทุกครั้งที่ pathname (ชื่อหน้า) เปลี่ยนแปลง

  return null; // Component นี้ไม่ต้องแสดงผลอะไรบนหน้าจอ
}