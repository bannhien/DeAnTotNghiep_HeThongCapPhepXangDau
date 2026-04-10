import { useNavigate } from 'react-router-dom';
import { FilePlus, Search, Edit, PhoneCall, HelpCircle, ArrowRight } from 'lucide-react';

const TrangChuCDV = () => {
  const navigate = useNavigate();

  // Danh sách các thẻ dịch vụ nhanh (Link tới các trang tương ứng)
  const quickServices = [
    {
      title: 'Nộp hồ sơ trực tuyến',
      description: 'Lựa chọn thủ tục và nộp hồ sơ xin cấp phép kinh doanh xăng dầu mới.',
      icon: <FilePlus size={40} className="text-blue-600" />,
      path: '/nop-ho-so',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      title: 'Tra cứu hồ sơ',
      description: 'Theo dõi tiến độ, trạng thái xử lý hồ sơ đã nộp bằng mã số biên nhận.',
      icon: <Search size={40} className="text-green-600" />,
      path: '/tra-cuu-ho-so',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      title: 'Bổ sung, chỉnh sửa',
      description: 'Cập nhật tài liệu, bổ sung thông tin cho hồ sơ theo yêu cầu của Cán bộ.',
      icon: <Edit size={40} className="text-yellow-600" />,
      path: '/bo-sung-ho-so',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200'
    }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* KHỐI 1: LỜI CHÀO & GIỚI THIỆU */}
      <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
        <h1 className="text-2xl font-black text-[#1565C0] uppercase mb-3">
          Chào mừng đến với Cổng Dịch vụ công trực tuyến
        </h1>
        <p className="text-gray-600 leading-relaxed text-[15px]">
          Hệ thống cung cấp dịch vụ công trực tuyến mức độ 4 trong lĩnh vực quản lý mạng lưới và cấp phép kinh doanh xăng dầu trên địa bàn Thành phố Đà Nẵng. Giúp doanh nghiệp tiết kiệm thời gian, chi phí và minh bạch hóa quá trình giải quyết thủ tục hành chính.
        </p>
      </div>

      {/* KHỐI 2: DỊCH VỤ NỔI BẬT (QUICK ACTIONS) */}
      <div>
        <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
          <HelpCircle size={20} className="text-[#FFC000]" />
          BẠN MUỐN THỰC HIỆN GIAO DỊCH GÌ?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quickServices.map((service, index) => (
            <div 
              key={index}
              onClick={() => navigate(service.path)}
              className={`p-6 rounded-xl border ${service.borderColor} ${service.bgColor} hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group flex flex-col h-full`}
            >
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-[#1565C0] transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 mb-6 flex-1">
                {service.description}
              </p>
              <div className="flex items-center text-[#1565C0] font-semibold text-sm">
                Thực hiện ngay <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* KHỐI 3: HỖ TRỢ & ĐƯỜNG DÂY NÓNG */}
      <div className="bg-[#1565C0] text-white rounded-xl p-6 shadow-md flex items-center justify-between">
        <div>
          <h3 className="font-bold text-lg mb-1">Cần hỗ trợ kỹ thuật hoặc hướng dẫn thủ tục?</h3>
          <p className="text-blue-200 text-sm">Bộ phận một cửa Sở Công Thương luôn sẵn sàng hỗ trợ bạn trong giờ hành chính.</p>
        </div>
        <div className="flex items-center gap-3 bg-white text-[#1565C0] px-6 py-3 rounded-lg font-black text-xl shadow-inner">
          <PhoneCall size={24} className="animate-pulse" />
          1900 1234
        </div>
      </div>

    </div>
  );
};

export default TrangChuCDV;