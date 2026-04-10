import { useNavigate } from 'react-router-dom';
import logoSCT from '../assets/logo-so-cong-thuong.png';
import { 
  Settings, FileText, Droplet, User, 
  ShieldCheck, Lock, CreditCard, BarChart2, Globe
} from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-[#FCF9F0] font-sans">
      
      {/* HEADER VÀNG */}
      <header className="h-[100px] bg-[#FFC000] flex items-center px-10 shadow-sm flex-shrink-0">
        <img 
          src={logoSCT} 
          alt="Sở Công Thương" 
          className="h-[75px] w-auto object-contain" 
        />
      </header>

      {/* BODY TRANG CHỦ */}
      <main className="flex-1 flex flex-col items-center pt-10 pb-16 px-6">
        
        {/* Tiêu đề chính */}
        <h2 className="text-[#C69C3D] text-2xl font-black uppercase tracking-wide mb-10 text-center">
          Hệ thống quản lý mạng lưới và cấp phép kinh doanh xăng dầu
        </h2>

        {/* Khối chứa 2 thẻ chọn */}
        <div className="flex flex-col md:flex-row gap-8 max-w-5xl w-full justify-center">
          
          {/* ================= THẺ 1: CỔNG DỊCH VỤ CÔNG (BÊN TRÁI) ================= */}
          <div 
            onClick={() => navigate('/trang-chu-dvc')} // Lệnh chuyển trang khi Click
            className="flex-1 bg-[#EAF3FD] border border-blue-200 rounded-xl p-8 flex flex-col items-center text-center cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
          >
            <h3 className="text-[#1C355E] text-xl font-bold uppercase mb-6">Cổng dịch vụ công trực tuyến</h3>
            
            {/* Cụm hình minh họa giả lập bằng CSS và Icon */}
            <div className="relative w-48 h-40 mb-6 flex items-center justify-center">
              <Settings size={100} className="text-blue-300 absolute left-0 opacity-50" />
              <div className="bg-white p-4 rounded shadow-md z-10 border border-gray-100 absolute bottom-4 left-4">
                <FileText size={40} className="text-blue-600" />
              </div>
              <div className="bg-white p-3 rounded-lg shadow-md z-10 border border-gray-100 absolute right-0 top-4">
                <Droplet size={48} className="text-yellow-500 fill-yellow-200" />
              </div>
              <div className="bg-[#1C355E] text-white p-3 rounded-full absolute -bottom-2 z-20 shadow-lg">
                <User size={40} />
              </div>
            </div>

            <h3 className="text-[#1C355E] text-xl font-bold uppercase mb-3">Cổng dịch vụ công trực tuyến</h3>
            <p className="text-sm text-gray-600 mb-8 px-4 font-medium">
              "Tra cứu quy hoạch, nộp hồ sơ xin cấp phép và theo dõi tiến độ giải quyết thủ tục hành chính dành cho doanh nghiệp."
            </p>

            <button className="bg-[#3B82F6] text-white px-6 py-2.5 rounded shadow-md font-semibold text-sm flex items-center gap-2 group-hover:bg-blue-600 transition-colors">
              [ <Globe size={16} /> Truy cập Cổng Dịch vụ công ]
            </button>
            <span className="text-blue-500 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
          </div>


          {/* ================= THẺ 2: HỆ THỐNG QUẢN TRỊ NỘI BỘ (BÊN PHẢI) ================= */}
          <div 
            onClick={() => navigate('/dang-nhap')} // Lệnh chuyển trang khi Click
            className="flex-1 bg-[#1C355E] border border-slate-700 rounded-xl p-8 flex flex-col items-center text-center cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
          >
            <h3 className="text-white text-xl font-bold uppercase mb-6">Hệ thống quản trị nội bộ</h3>
            
            {/* Cụm hình minh họa giả lập bằng CSS và Icon */}
            <div className="relative w-48 h-40 mb-6 flex items-center justify-center">
              <Settings size={100} className="text-slate-600 absolute right-0 opacity-50" />
              <ShieldCheck size={110} className="text-blue-400 absolute left-4 z-10" />
              <div className="bg-[#FFC000] p-4 rounded-xl shadow-lg z-20 border-2 border-[#1C355E] absolute right-8">
                <Lock size={40} className="text-[#1C355E] fill-[#1C355E]" />
              </div>
              <div className="bg-white p-2 rounded shadow-md z-30 absolute bottom-0 right-0 flex gap-2">
                <CreditCard size={24} className="text-blue-600" />
                <BarChart2 size={24} className="text-yellow-500" />
              </div>
            </div>

            <h3 className="text-white text-xl font-bold uppercase mb-3">Hệ thống quản trị nội bộ</h3>
            <p className="text-slate-300 text-sm mb-8 px-4 font-medium">
              "Phân hệ tiếp nhận, thẩm định hồ sơ và quản lý mạng lưới GIS dành riêng cho Cán bộ Sở Công Thương."
            </p>

            <button className="bg-[#D9A036] text-[#1C355E] px-6 py-2.5 rounded shadow-md font-bold text-sm flex items-center gap-2 group-hover:bg-yellow-500 transition-colors">
              [ <Lock size={16} /> Đăng nhập Hệ thống ]
            </button>
            <span className="text-yellow-500 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
          </div>

        </div>
      </main>
    </div>
  );
};

export default LandingPage;