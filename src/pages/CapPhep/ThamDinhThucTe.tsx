import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Search, MapPin, Map, FileImage, CheckCircle2 } from 'lucide-react';

const ThamDinhThucTe = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Nhận dữ liệu từ trang danh sách, nếu không có thì mặc định là 'Chưa thẩm định'
  const trangThaiHoSo = location.state?.trangThaiPassed || 'Chưa thẩm định';

  // Nếu 'Chưa thẩm định' thì tự động bật chế độ Edit ngay lập tức
  const [isEditing, setIsEditing] = useState(trangThaiHoSo === 'Chưa thẩm định');

  // Trạng thái kết luận: 'none' (chưa chọn) | 'dat' (Đạt) | 'khong_dat' (Không đạt)
  const [ketLuan, setKetLuan] = useState<'none' | 'dat' | 'khong_dat'>('none');

  // STATE MỚI: Quản lý hiển thị Popup thành công
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  // Xử lý khi nhấn nút Lưu hoặc Lưu biên bản
  const handleSave = () => {
    // Mở popup thay vì dùng alert() mặc định của trình duyệt
    setShowSuccessPopup(true);
  };

  return (
    <div className="h-full flex flex-col pt-4">
      <h1 className="text-xl font-bold text-gray-800 uppercase text-center mb-6 tracking-wide">
        Hồ sơ thẩm định thực tế
      </h1>

      <div className="flex-1 flex flex-col lg:flex-row gap-6 h-full min-h-[650px]">
        
        {/* ================= CỘT TRÁI: FORM NHẬP KẾT QUẢ THẨM ĐỊNH ================= */}
        <div className="w-full lg:w-[500px] bg-white border border-gray-400 rounded-lg p-6 flex flex-col shadow-sm">
          <h2 className="text-lg font-black text-gray-800 uppercase mb-4 text-center">THÔNG TIN THẨM ĐỊNH THỰC TẾ</h2>

          <div className="flex-1 overflow-y-auto pr-2 space-y-6 custom-scrollbar">
            
            {/* 1. Pháp lý */}
            <div>
              <h3 className="font-bold text-[14px] mb-2 text-gray-800">1. Thông tin pháp lý doanh nghiệp</h3>
              <div className="space-y-2 text-[13px]">
                <div className="flex"><span className="w-28 font-semibold text-right pr-3">Tên doanh nghiệp:</span><span className="flex-1 font-medium">Chi nhánh công ty CP Xăng dầu dầu khí PV Oil Miền Trung tại Đà Nẵng</span></div>
                <div className="flex"><span className="w-28 font-semibold text-right pr-3">Loại thủ tục:</span><span className="flex-1 font-medium">Cấp mới</span></div>
                <div className="flex"><span className="w-28 font-semibold text-right pr-3">Trạng thái hiện tại:</span><span className="flex-1 font-bold text-gray-800">Đang thẩm định thực tế</span></div>
              </div>
            </div>

            {/* 2. Bảng thông số */}
            <div>
              <h3 className="font-bold text-[14px] mb-2 text-gray-800">2. Bảng đối chiếu Thông số</h3>
              <table className="w-full text-center text-[13px] border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50 text-gray-700">
                    <th className="border border-gray-300 p-2 font-semibold">Tiêu chí thẩm định</th>
                    <th className="border border-gray-300 p-2 font-semibold">Số liệu DN khai báo</th>
                    <th className="border border-gray-300 p-2 font-semibold w-1/3">Số liệu thực tế đo được</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2 font-medium">Số trụ bơm:</td>
                    <td className="border border-gray-300 p-2">04</td>
                    <td className="border border-gray-300 p-2">
                      <input type="text" readOnly={!isEditing} defaultValue={isEditing ? "" : "04"} className={`w-full text-center p-1 border rounded ${isEditing ? 'border-gray-400 bg-white focus:outline-none focus:border-blue-500' : 'border-transparent bg-transparent outline-none'}`} />
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 font-medium">Tổng dung tích bể:</td>
                    <td className="border border-gray-300 p-2">50.00</td>
                    <td className="border border-gray-300 p-2">
                      <input type="text" readOnly={!isEditing} defaultValue={isEditing ? "" : "50.00"} className={`w-full text-center p-1 border rounded ${isEditing ? 'border-gray-400 bg-white focus:outline-none focus:border-blue-500' : 'border-transparent bg-transparent outline-none'}`} />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 3. Kết luận của Đoàn thẩm định */}
            <div>
              <h3 className="font-bold text-[14px] mb-4 text-gray-800">3. Kết luận của Đoàn thẩm định{ketLuan === 'dat' && ': Đạt yêu cầu'}{ketLuan === 'khong_dat' && ': Không đạt yêu cầu'}</h3>
              
              {/* TRẠNG THÁI: CHỈ XEM (ĐÃ THẨM ĐỊNH TỪ TRƯỚC) */}
              {!isEditing && (
                <div className="pl-4">
                  <span className="text-green-600 font-bold mr-6">Đạt yêu cầu</span>
                  <button onClick={() => setIsEditing(true)} className="bg-[#F59E0B] hover:bg-yellow-500 text-white px-6 py-1.5 rounded font-bold text-xs shadow-sm">
                    Sửa hồ sơ
                  </button>
                </div>
              )}

              {/* TRẠNG THÁI: ĐANG SỬA VÀ CHƯA CHỌN KẾT LUẬN NÀO */}
              {isEditing && ketLuan === 'none' && (
                <div className="flex gap-4 justify-center mt-2">
                  <button onClick={() => setKetLuan('dat')} className="bg-[#4CAF50] hover:bg-green-600 text-white px-6 py-2 rounded font-bold text-xs shadow-sm">Đạt yêu cầu</button>
                  <button onClick={() => setKetLuan('khong_dat')} className="bg-[#FF0000] hover:bg-red-600 text-white px-6 py-2 rounded font-bold text-xs shadow-sm">Không đạt yêu cầu</button>
                </div>
              )}

              {/* TRẠNG THÁI: CHỌN "ĐẠT YÊU CẦU" */}
              {isEditing && ketLuan === 'dat' && (
                <div className="mt-4">
                  <button onClick={handleSave} className="bg-[#4CAF50] hover:bg-green-600 text-white px-6 py-2 rounded font-bold text-xs shadow-sm w-full transition-colors">
                    Lưu biên bản & Sinh file Dự thảo Giấy phép
                  </button>
                  <button onClick={() => setKetLuan('none')} className="text-xs text-gray-500 underline mt-2 block text-center w-full">Hủy chọn</button>
                </div>
              )}

              {/* TRẠNG THÁI: CHỌN "KHÔNG ĐẠT YÊU CẦU" */}
              {isEditing && ketLuan === 'khong_dat' && (
                <div className="mt-2 space-y-3">
                  <label className="text-[13px] font-semibold text-gray-700 block">Lý do không đạt yêu cầu</label>
                  <textarea className="w-full border border-gray-400 rounded-md p-2 text-sm h-24 focus:outline-none focus:border-blue-500 resize-none"></textarea>
                  <div className="flex justify-end gap-3">
                    <button onClick={() => setKetLuan('none')} className="text-gray-500 text-xs font-semibold hover:underline">Hủy</button>
                    <button onClick={handleSave} className="bg-[#4CAF50] hover:bg-green-600 text-white px-8 py-1.5 rounded font-bold text-xs shadow-sm transition-colors">
                      Lưu
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>

        {/* ================= CỘT PHẢI: BẢN ĐỒ GIS & HÌNH ẢNH ================= */}
        <div className="flex-1 bg-white border border-gray-400 rounded-lg flex flex-col overflow-hidden shadow-sm p-4 space-y-4">
          
          {/* Thanh công cụ Map */}
          <div className="flex items-center gap-4 bg-gray-100 p-2 rounded border border-gray-300">
            <span className="text-xs font-bold text-gray-700 w-24">Địa chỉ cây xăng:</span>
            <div className="flex-1 relative">
              <input type="text" defaultValue="197 Cách Mạng Tháng 8, Khuê Trung, Cẩm Lệ, Đà Nẵng" className="w-full border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none bg-white" readOnly />
            </div>
            <button className="bg-white border border-gray-300 rounded px-3 py-1 text-xs font-semibold text-gray-600 hover:bg-gray-50 transition-colors">Tìm kiếm</button>
          </div>

          {/* KHU VỰC BẢN ĐỒ GOOGLE MAPS BẰNG IFRAME (ĐÃ FIX LINK ĐỊA CHỈ THẬT) */}
          <div className="flex-1 border border-gray-400 rounded-md relative overflow-hidden bg-gray-100 group">
            
            {/* KHU VỰC BẢN ĐỒ GOOGLE MAPS BẰNG IFRAME ĐÃ FIX LỖI */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.629731671239!2d108.20573931485802!3d16.03277798890288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219927976906f%3A0x6b24bc99bc7b2520!2zQ-G7rWEgSMOgbmcgWMSDbmcgROG6p3UgU-G7kSAyMQ!5e0!3m2!1svi!2s!4v1700000000000!5m2!1svi!2s" 
            className="w-full h-full"
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
            
            {/* Lớp phủ nhỏ mô phỏng nút Lấy tọa độ GPS */}
            <div className="absolute top-3 left-3 z-10">
               <button className="bg-white/95 text-[11px] px-3 py-1.5 rounded shadow-md border border-gray-300 font-bold text-gray-700 flex items-center gap-1.5 hover:bg-gray-50 transition-colors">
                 <MapPin size={12} className="text-red-500"/>
                 Lấy toạ độ GPS thực tế
               </button>
            </div>

            {/* Điểm ghim mô phỏng (MapPin) trỏ ngay giữa màn hình */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none drop-shadow-lg">
                <MapPin size={36} className="text-red-600 fill-red-500" strokeWidth={1.5} />
            </div>
          </div>

          {/* Upload Hình ảnh hiện trường */}
          <div className="flex items-center gap-4 border-t border-gray-200 pt-4">
            <span className="text-[13px] font-bold text-gray-800 w-32">Hình ảnh hiện trường:</span>
            <div className="flex-1 border border-gray-400 rounded px-3 py-1.5 flex items-center gap-2 cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
              <FileImage size={14} className="text-gray-500" />
              <span className="text-[11px] text-gray-400 italic">Đính kèm hình ảnh thực tế (jpg, png...)</span>
            </div>
          </div>

        </div>
      </div>

      {/* ================= POPUP THÀNH CÔNG ================= */}
      {showSuccessPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/20 backdrop-blur-[1px]">
          <div className="bg-white rounded-xl shadow-2xl p-8 w-[420px] flex flex-col items-center text-center relative border border-gray-200 animate-in fade-in zoom-in duration-200">
            <CheckCircle2 size={65} className="text-[#4CAF50] mb-5" strokeWidth={1.5} />
            <h3 className="font-bold text-xl mb-3 text-gray-800">Lưu kết quả thành công!</h3>
            <p className="text-sm text-gray-600 mb-8 leading-relaxed px-2">
              Biên bản thẩm định và bản Dự thảo Giấy phép đã được lưu vào hệ thống thành công.
            </p>
            <button 
              onClick={() => {
                setShowSuccessPopup(false);
                navigate('/tham-dinh-thuc-te'); // Quay về màn hình danh sách thẩm định
              }} 
              className="bg-[#4CAF50] hover:bg-green-600 text-white px-10 py-2 rounded-md font-bold transition-colors shadow-sm w-full"
            >
              Hoàn tất
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default ThamDinhThucTe;