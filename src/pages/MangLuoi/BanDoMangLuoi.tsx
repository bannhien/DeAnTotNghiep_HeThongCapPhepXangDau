import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, MapPin } from 'lucide-react';

const BanDoMangLuoi = () => {
  const navigate = useNavigate();
  
  // State quản lý việc ẩn/hiện popup thông tin cây xăng. Mặc định là true để hiển thị sẵn.
  const [showPopup, setShowPopup] = useState(true);

  return (
    <div className="h-full flex flex-col">
      <h1 className="text-xl font-bold text-gray-800 uppercase text-center mb-6 tracking-wide">
        Bản đồ mạng lưới xăng dầu
      </h1>

      <div className="flex-1 flex gap-6 h-full min-h-[600px] w-full max-w-6xl mx-auto">
        
        {/* CỘT TRÁI: BỘ LỌC VÀ THỐNG KÊ */}
        <div className="w-[300px] bg-white border border-gray-400 rounded-lg p-6 shadow-sm flex flex-col gap-8 flex-shrink-0">
          <div>
            <h3 className="font-bold text-[15px] mb-4 text-gray-800">Bộ lọc thông tin</h3>
            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-700">Phường/ Xã</label>
                <select className="w-full border border-gray-400 rounded-full px-3 py-1.5 text-sm bg-white focus:outline-none"><option></option></select>
              </div>
              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-700">Trạng thái</label>
                <select className="w-full border border-gray-400 rounded-full px-3 py-1.5 text-sm bg-white focus:outline-none"><option></option></select>
              </div>
              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-700">Thương nhân phân phối</label>
                <select className="w-full border border-gray-400 rounded-full px-3 py-1.5 text-sm bg-white focus:outline-none"><option></option></select>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-[15px] mb-4 text-gray-800">Thống kê</h3>
            <div className="space-y-4 text-sm font-bold text-gray-800">
              <div className="flex justify-between"><span>Số lượng cửa hàng</span><span className="text-black">289</span></div>
              <div className="flex justify-between"><span>Đang hoạt động</span><span className="text-green-600">276</span></div>
              <div className="flex justify-between"><span>Bị đình chỉ/ Thu hồi</span><span className="text-red-500">13</span></div>
            </div>
          </div>
        </div>

        {/* CỘT PHẢI: BẢN ĐỒ VÀ OVERLAY (LỚP PHỦ) */}
        <div className="flex-1 border border-gray-400 rounded-lg relative overflow-hidden shadow-sm bg-gray-100">
          
          {/* Iframe bản đồ (Link Embed thực tế nhắm thẳng vào Cách Mạng Tháng 8, Đà Nẵng) */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.7937402096053!2d108.20367207577583!3d16.0242220405101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421a15cfb2b62d%3A0x5a556ff957723901!2zMzIyIMSQLiBDw6FjaCBN4bqhbmcgVGjDoW5nIDgsIEhvw6AgVGjhu40gxJDDtG5nLCBD4bqpbSBM4buHLCDEkMOgIE7hurVuZywgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1715000000000!5m2!1svi!2s" 
            className="w-full h-full"
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          
          {/* Nút Lấy tọa độ ảo ở góc trái */}
          <div className="absolute top-4 left-4 z-10 pointer-events-none">
             <button className="bg-white text-xs px-4 py-2 rounded shadow-md border border-gray-300 font-bold text-gray-700">
               Lấy toạ độ GPS thực tế
             </button>
          </div>

          {/* ================= GIAO DIỆN MARKER & POPUP NHƯ THIẾT KẾ ================= */}

          {/* Biểu tượng Map Pin (Điểm ghim) ở chính giữa bản đồ */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer drop-shadow-md transition-transform hover:scale-110"
            onClick={() => setShowPopup(!showPopup)} // Bấm vào ghim để bật/tắt popup
          >
            <MapPin size={45} className="text-red-600 fill-red-500" strokeWidth={1.5} />
          </div>

          {/* Thẻ thông tin Popup (Chỉ hiện khi showPopup === true) */}
          {showPopup && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[135%] z-20 bg-white rounded-xl shadow-2xl border border-gray-200 w-80 p-5 animate-in fade-in zoom-in duration-200">
              
              {/* Nút tắt Popup (X) */}
              <button 
                onClick={() => setShowPopup(false)}
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-800 transition-colors bg-gray-100 rounded-full p-1"
              >
                <X size={16} />
              </button>

              {/* Thông tin Cửa hàng */}
              <h4 className="font-bold text-[#1565C0] text-[15px] mb-2 pr-5 leading-tight">
                Cửa Hàng Xăng Dầu Số 21 - PVOIL
              </h4>
              
              <div className="text-[13px] text-gray-600 mb-3 leading-relaxed">
                322 Đ. Cách Mạng Tháng 8, Hoà Thọ Đông, Cẩm Lệ, Đà Nẵng
              </div>
              
              <div className="flex items-center gap-2 mb-5">
                <span className="text-[13px] font-semibold text-gray-700">Trạng thái:</span>
                <span className="text-[12px] font-bold text-[#4CAF50] bg-green-50 px-2 py-0.5 rounded border border-green-200 uppercase tracking-wide">
                  Đang hoạt động
                </span>
              </div>

              {/* Nút Xem chi tiết */}
              <button 
                onClick={() => navigate('/quan-ly-ha-tang/chi-tiet')} // Click sẽ nhảy qua màn hình chi tiết hạ tầng
                className="w-full bg-[#F59E0B] hover:bg-yellow-500 text-white font-bold text-[13px] py-2 rounded-md transition-colors shadow-sm"
              >
                Xem chi tiết
              </button>

              {/* Mũi tên nhọn trỏ xuống (Tạo bằng CSS) */}
              <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-5 h-5 bg-white border-b border-r border-gray-200 transform rotate-45"></div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default BanDoMangLuoi;