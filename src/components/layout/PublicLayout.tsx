import { Outlet, NavLink, Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import logoSCT from '../../assets/logo-so-cong-thuong.png';

const PublicLayout = () => {
  const menuItems = [
    { path: '/nop-ho-so', name: 'Nộp hồ sơ cấp phép trực tuyến' },
    { path: '/tra-cuu-ho-so', name: 'Tra cứu hồ sơ' },
    { path: '/bo-sung-ho-so', name: 'Bổ sung, chỉnh sửa hồ sơ cấp phép' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#FCF9F0] text-[#1565C0]">
      
      {/* ================= HEADER ================= */}
      <header className="h-[100px] bg-[#FFC000] flex items-center justify-between px-10 shadow-sm z-30 flex-shrink-0">
        
        {/* CHỈNH SỬA TẠI ĐÂY: Thay '/trang-chu-dvc' bằng '/' */}
        <Link to="/" className="hover:opacity-90 transition-opacity" title="Quay về trang chủ hệ thống">
          <img 
            src={logoSCT} 
            alt="Sở Công Thương" 
            className="h-[75px] w-auto object-contain cursor-pointer" 
          />
        </Link>

        <div className="relative w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
          <input 
            type="text" 
            placeholder="Tìm kiếm" 
            className="w-full pl-9 pr-4 py-1.5 bg-white border-none rounded-full text-sm focus:outline-none shadow-inner"
          />
        </div>
      </header>

      {/* ================= BODY CHÍNH (SIDEBAR + CONTENT) ================= */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* SIDEBAR BÊN TRÁI */}
        <aside className="w-[280px] bg-transparent flex flex-col pt-10 flex-shrink-0">
          
          {/* TIÊU ĐỀ CLICK ĐƯỢC ĐỂ VỀ TRANG CHỦ */}
          <div className="px-8 mb-8">
            <Link to="/trang-chu-dvc" className="block group">
              <h2 className="text-2xl font-bold leading-tight uppercase group-hover:text-blue-800 transition-colors">
                Cổng dịch vụ công
              </h2>
            </Link>
          </div>
          
          <nav className="flex-1 space-y-8 px-8 border-r border-gray-300">
            {menuItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `block text-[17px] font-bold leading-relaxed transition-colors hover:text-blue-400 ${
                    isActive ? 'text-blue-800' : 'text-[#1565C0]'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </aside>

        {/* NỘI DUNG CHÍNH (OUTLET) */}
        <main className="flex-1 p-10 overflow-y-auto bg-white/30">
          <Outlet />
        </main>
      </div>

      {/* ================= FOOTER ================= */}
      <footer className="h-12 bg-[#F3E5D8] flex items-center px-8 border-t border-gray-200 flex-shrink-0">
        <p className="text-[#C69C3D] text-sm font-semibold uppercase tracking-wider">
          © 2026 - HỆ THỐNG CHUYỂN ĐỔI SỐ SỞ CÔNG THƯƠNG THÀNH PHỐ ĐÀ NẴNG
        </p>
      </footer>
      
    </div>
  );
};

export default PublicLayout;