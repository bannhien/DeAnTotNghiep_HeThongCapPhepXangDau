import { Outlet, NavLink, useNavigate, Link, useLocation } from 'react-router-dom';
import { Search, Bell, Key, User, LogOut, ChevronRight, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import logoSCT from '../../assets/logo-so-cong-thuong.png';

type MenuItem = {
  id: string;
  name: string;
  path?: string;
  activePaths?: string[]; 
  children?: MenuItem[];
};

const AdminLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});
  
  // State quản lý hiển thị Popup
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const [showNotiPopup, setShowNotiPopup] = useState(false);

  // Dữ liệu thông báo giả lập
  const notifications = [
    { id: 1, content: 'Có 05 hồ sơ mới chờ bạn tiếp nhận.', time: '5 phút trước', isRead: false },
    { id: 2, content: 'Hồ sơ CHXD Khuê Trung đã được lãnh đạo ký số.', time: '2 giờ trước', isRead: true },
    { id: 3, content: 'Cảnh báo: 1 hồ sơ sắp quá hạn thẩm định thực tế.', time: '1 ngày trước', isRead: false },
    { id: 4, content: 'Tài khoản của bạn vừa được cập nhật quyền hạn mới.', time: '2 ngày trước', isRead: true },
  ];

  useEffect(() => {
    if (location.pathname === '/tong-quan') {
      setOpenMenus({});
    }
  }, [location.pathname]);

  const toggleMenu = (id: string) => {
    setOpenMenus(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const confirmLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/dang-nhap');
  };

  const menuItems: MenuItem[] = [
    { id: 'tong-quan', path: '/tong-quan', name: 'Tổng quan (Dashboard)' },
    {
      id: 'ql-ho-so',
      name: 'QL Hồ sơ Cấp phép',
      activePaths: ['/tiep-nhan', '/phan-loai', '/phan-cong', '/thu-ly', '/tham-dinh-thuc-te', '/lap-du-thao', '/ky-so', '/giao-tra'], 
      children: [
        {
          id: 'tiep-nhan-phan-loai',
          name: 'Tiếp nhận & Phân loại hồ sơ',
          children: [
            { id: 'tiep-nhan', path: '/tiep-nhan', name: 'Tiếp nhận hồ sơ' },
            { id: 'phan-loai', path: '/phan-loai', name: 'Phân loại hồ sơ' },
          ]
        },
        { 
          id: 'xu-ly-tham-dinh', 
          name: 'Xử lý & Thẩm định hồ sơ',
          children: [
            { id: 'phan-cong', path: '/phan-cong', name: 'Phân công thụ lý' },
            { id: 'tham-dinh-phap-ly', path: '/thu-ly', name: 'Thẩm định pháp lý hồ sơ' },
            { id: 'tham-dinh-thuc-te', path: '/tham-dinh-thuc-te', name: 'Thẩm định thực tế' },
            { id: 'lap-du-thao', path: '/lap-du-thao', name: 'Lập bản dự thảo' },
          ]
        },
        {
          id: 'ky-so-tra-kq',
          name: 'Ký số & Trả kết quả',
          children: [
            { id: 'ky-so', path: '/ky-so', name: 'Ký số phê duyệt' },
            { id: 'giao-tra', path: '/giao-tra', name: 'Giao trả kết quả' }
          ]
        }
      ]
    },
    { 
      id: 'ql-mang-luoi', 
      name: 'QL Mạng lưới & Bản đồ',
      activePaths: ['/ban-do', '/quan-ly-ha-tang', '/hop-dong-phan-phoi'],
      children: [
        { id: 'ban-do', path: '/ban-do', name: 'Bản đồ số Mạng lưới Xăng dầu' },
        { id: 'quan-ly-ha-tang', path: '/quan-ly-ha-tang', name: 'Quản lý Thông tin Hạ tầng cơ sở' },
        { id: 'hop-dong-phan-phoi', path: '/hop-dong-phan-phoi', name: 'Quản lý Hợp đồng Phân phối' }
      ]
    },
    { 
      id: 'canh-bao', 
      name: 'Cảnh báo & Tiện ích',
      activePaths: ['/canh-bao-het-han', '/dinh-chi-thu-hoi'],
      children: [
        { id: 'canh-bao-het-han', path: '/canh-bao-het-han', name: 'Cảnh báo Giấy phép sắp hết hạn' },
        { id: 'dinh-chi-thu-hoi', path: '/dinh-chi-thu-hoi', name: 'Đình chỉ / Thu hồi Giấy phép' }
      ]
    },
    { id: 'bao-cao', path: '/bao-cao', name: 'Báo cáo Thống kê' },
    { 
      id: 'quan-tri', 
      name: 'Quản trị Hệ thống',
      activePaths: ['/quan-tri/tai-khoan', '/quan-tri/tai-khoan/tao-moi', '/quan-tri/danh-muc/phuong-xa', '/quan-tri/danh-muc/thu-tuc'],
      children: [
        { id: 'ql-tai-khoan', path: '/quan-tri/tai-khoan', name: 'Quản lý Tài khoản & Phân quyền' },
        {
          id: 'ql-danh-muc',
          name: 'Quản lý Danh mục',
          children: [
            { id: 'dm-phuong-xa', path: '/quan-tri/danh-muc/phuong-xa', name: 'Phường/ Xã' },
            { id: 'dm-thu-tuc', path: '/quan-tri/danh-muc/thu-tuc', name: 'Loại thủ tục' }
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FCF9F0] font-sans text-gray-800">
      
      {/* ================= HEADER ================= */}
      <header className="h-[100px] bg-[#FFC000] flex items-center justify-between px-10 shadow-sm z-40 flex-shrink-0">
        <Link to="/tong-quan">
          <img src={logoSCT} alt="Sở Công Thương Thành phố Đà Nẵng" className="h-[75px] w-auto object-contain drop-shadow-sm cursor-pointer" />
        </Link>
        <div className="flex items-center gap-8">
          <div className="relative w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input type="text" placeholder="Tìm kiếm" className="w-full pl-10 pr-4 py-2 bg-white border border-yellow-500 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-inner" />
          </div>
          <div className="flex items-center gap-5 text-gray-800 relative">
            
            {/* NÚT THÔNG BÁO VỚI DROPDOWN */}
            <div className="relative">
              <button 
                onClick={() => setShowNotiPopup(!showNotiPopup)}
                title="Thông báo" 
                className={`hover:text-blue-700 transition focus:outline-none relative ${showNotiPopup ? 'text-blue-700' : ''}`}
              >
                <Bell size={26} />
                <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 border-2 border-white rounded-full"></span>
              </button>

              {showNotiPopup && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setShowNotiPopup(false)}></div>
                  <div className="absolute right-0 mt-3 w-80 bg-white border border-gray-200 shadow-xl rounded-xl z-50 overflow-hidden animate-in fade-in zoom-in duration-150 origin-top-right">
                    <div className="px-4 py-3 border-b border-gray-100 bg-gray-50/50 flex justify-between items-center">
                      <span className="font-bold text-gray-800 text-sm uppercase">Thông báo</span>
                      <button className="text-[11px] text-blue-600 font-bold hover:underline">Đánh dấu đã đọc</button>
                    </div>
                    <div className="max-h-[350px] overflow-y-auto custom-scrollbar">
                      {notifications.map((noti) => (
                        <div 
                          key={noti.id} 
                          className={`px-4 py-3 border-b border-gray-50 cursor-pointer hover:bg-blue-50/50 transition-colors flex gap-3 ${!noti.isRead ? 'bg-blue-50/20' : ''}`}
                        >
                          <div className="mt-1.5 flex-shrink-0">
                            {!noti.isRead && <div className="w-2 h-2 bg-blue-600 rounded-full"></div>}
                          </div>
                          <div>
                            <p className={`text-[13px] leading-tight ${!noti.isRead ? 'text-gray-900 font-semibold' : 'text-gray-600'}`}>
                              {noti.content}
                            </p>
                            <p className="text-[11px] text-gray-400 mt-1">{noti.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="p-2 border-t border-gray-100 text-center">
                      <button className="text-xs font-bold text-gray-500 hover:text-blue-700 w-full py-1">
                        Xem tất cả thông báo
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>

            <Link to="/doi-mat-khau" title="Đổi mật khẩu" className="hover:text-blue-700 transition"><Key size={26} /></Link>
            <button title="Hồ sơ cá nhân" className="hover:text-blue-700 transition focus:outline-none"><User size={26} /></button>
            <button 
              onClick={() => setShowLogoutPopup(true)}
              title="Đăng xuất" 
              className="hover:text-red-600 transition focus:outline-none"
            >
              <LogOut size={26} />
            </button>
          </div>
        </div>
      </header>

      {/* ================= BODY CHÍNH ================= */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* ================= SIDEBAR MENU ACCORDION ================= */}
        <aside className="w-[300px] bg-transparent flex flex-col pt-8 pb-4 flex-shrink-0 overflow-y-auto custom-scrollbar border-r-2 border-gray-300">
          <nav className="flex-1 space-y-2 px-6">
            {menuItems.map((item) => {
              const isItemActive = item.path === location.pathname || (item.activePaths && item.activePaths.some(p => location.pathname.includes(p)));

              return (
                <div key={item.id}>
                  {item.children ? (
                    <button 
                      onClick={() => toggleMenu(item.id)}
                      className={`w-full flex items-center justify-between py-3 px-2 font-bold text-[16px] transition-colors ${isItemActive ? 'text-blue-700' : 'text-[#1565C0] hover:text-blue-500'}`}
                    >
                      <span>{item.name}</span>
                      {openMenus[item.id] ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                    </button>
                  ) : (
                    <NavLink 
                      to={item.path || '#'} 
                      className={`block py-3 px-2 text-[16px] font-bold transition-colors ${isItemActive ? 'text-blue-700' : 'text-[#1565C0] hover:text-blue-500'}`}
                    >
                      {item.name}
                    </NavLink>
                  )}

                  {item.children && openMenus[item.id] && (
                    <div className="ml-4 pl-2 border-l-2 border-blue-200 mt-1 space-y-1 animate-in slide-in-from-top-2 fade-in duration-200">
                      {item.children.map((child) => (
                        <div key={child.id}>
                          {child.children ? (
                            <button 
                              onClick={() => toggleMenu(child.id)}
                              className="w-full flex items-center justify-between py-2.5 px-2 text-[14px] font-bold text-gray-700 hover:text-[#1565C0] transition-colors"
                            >
                              <span className="text-left">{child.name}</span>
                              {openMenus[child.id] ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                            </button>
                          ) : (
                            <NavLink 
                              to={child.path || '#'} 
                              className={({ isActive }) => `block py-2.5 px-2 text-[14px] font-bold transition-colors ${isActive ? 'text-[#1565C0] bg-blue-50 rounded' : 'text-gray-700 hover:text-[#1565C0]'}`}
                            >
                              {child.name}
                            </NavLink>
                          )}

                          {child.children && openMenus[child.id] && (
                            <div className="ml-4 mt-1 mb-2 space-y-1">
                              {child.children.map((subChild) => (
                                <NavLink 
                                  key={subChild.id} 
                                  to={subChild.path || '#'} 
                                  className={({ isActive }) => `block py-2 px-3 text-[13px] font-bold transition-colors rounded ${isActive ? 'text-white bg-[#1565C0]' : 'text-gray-600 hover:text-[#1565C0] hover:bg-gray-100'}`}
                                >
                                  • {subChild.name}
                                </NavLink>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </aside>

        {/* ================= NỘI DUNG TRANG (MAIN) ================= */}
        <main className="flex-1 p-8 overflow-y-auto bg-white/40">
          <Outlet />
        </main>

      </div>

      {/* ================= FOOTER ================= */}
      <footer className="h-12 bg-[#F3E5D8] flex items-center px-8 border-t border-gray-200 flex-shrink-0 z-40">
        <p className="text-[#C69C3D] text-sm font-semibold uppercase tracking-wider">
          © 2026 - HỆ THỐNG CHUYỂN ĐỔI SỐ SỞ CÔNG THƯƠNG THÀNH PHỐ ĐÀ NẴNG
        </p>
      </footer>

      {/* ================= POPUP XÁC NHẬN ĐĂNG XUẤT ================= */}
      {showLogoutPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/20 backdrop-blur-[1px]">
          <div className="bg-white rounded-xl shadow-2xl p-8 w-[400px] flex flex-col items-center text-center border border-gray-200 animate-in fade-in zoom-in duration-200">
            <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-5 border border-red-100">
              <LogOut size={32} />
            </div>
            <h3 className="font-bold text-xl mb-3 text-gray-800">Xác nhận đăng xuất</h3>
            <p className="text-sm text-gray-600 mb-8 leading-relaxed">
              Bạn có chắc chắn muốn đăng xuất khỏi hệ thống không?
            </p>
            <div className="flex gap-4 w-full">
              <button 
                onClick={() => setShowLogoutPopup(false)} 
                className="flex-1 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 py-2 rounded-md font-bold transition-colors shadow-sm"
              >
                Hủy
              </button>
              <button 
                onClick={confirmLogout} 
                className="flex-1 bg-[#FF0000] hover:bg-red-700 text-white py-2 rounded-md font-bold transition-colors shadow-sm"
              >
                Đăng xuất
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default AdminLayout;