import { Outlet } from 'react-router-dom';
// Import file logo gốc của bạn từ thư mục assets
import logoSCT from '../../assets/logo-so-cong-thuong.png';

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#FCF9F0]">
      
      {/* ================= HEADER VÀNG ĐẶC TRƯNG ================= */}
      <header className="h-[100px] bg-[#FFC000] flex items-center px-10 shadow-md">
        {/* Thay thế toàn bộ cụm Logo + Chữ bằng 1 thẻ img */}
        <img 
          src={logoSCT} 
          alt="Sở Công Thương Thành phố Đà Nẵng" 
          className="h-[75px] w-auto object-contain drop-shadow-sm" 
        />
      </header>

      {/* ================= PHẦN NỘI DUNG GIỮA ================= */}
      <main className="flex-1 flex flex-col items-center pt-16 relative">
        <h2 className="text-[#C69C3D] text-3xl font-black uppercase text-center leading-snug mb-10 tracking-wide">
          Hệ thống chuyển đổi số Sở Công Thương<br />Thành phố Đà Nẵng
        </h2>

        <div className="max-w-md w-full bg-white p-10 rounded-xl shadow-xl border border-gray-100 z-10">
          <Outlet />
        </div>
      </main>

    </div>
  );
};

export default AuthLayout;