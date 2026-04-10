import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ZoomIn, ZoomOut, RotateCw, Download, CheckCircle2 } from 'lucide-react';

const PhanLoaiHoSo = () => {
  const navigate = useNavigate();
  
  // Thêm trạng thái 'success_supplement' vào danh sách quản lý
  const [popupState, setPopupState] = useState<'none' | 'request_supplement' | 'success_transfer' | 'success_supplement'>('none');

  return (
    <div className="h-full flex flex-col">
      <h1 className="text-xl font-bold text-gray-800 uppercase text-center mb-6 tracking-wide">
        Phân loại hồ sơ
      </h1>

      <div className="flex-1 flex gap-6 h-full min-h-[600px]">
        
        {/* ================= CỘT TRÁI: THÔNG TIN HỒ SƠ ================= */}
        <div className="w-[400px] bg-white border border-gray-400 rounded-lg p-6 flex flex-col shadow-sm">
          <h2 className="text-lg font-black text-gray-800 uppercase mb-1">HỒ SƠ XIN CẤP PHÉP MỚI</h2>
          <p className="text-[#F59E0B] font-bold text-sm mb-4">Chờ tiếp nhận</p>

          <div className="flex-1 overflow-y-auto pr-2 space-y-5 custom-scrollbar">
            {/* 1. Pháp lý */}
            <div>
              <h3 className="font-bold text-[15px] mb-2 text-gray-800">1. Thông tin pháp lý doanh nghiệp</h3>
              <div className="space-y-2 text-sm">
                <div className="flex"><span className="w-24 font-semibold text-right pr-2">Tên DN:</span><span className="flex-1">Chi nhánh công ty CP Xăng dầu dầu khí PV Oil Miền Trung tại Đà Nẵng</span></div>
                <div className="flex"><span className="w-24 font-semibold text-right pr-2">MST:</span><span className="flex-1">4300603574-002</span></div>
                <div className="flex"><span className="w-24 font-semibold text-right pr-2">Địa chỉ:</span><span className="flex-1">197 Cách mạng Tháng Tám, Phường Khuê Trung, Cẩm Lệ, TP Đà Nẵng</span></div>
              </div>
            </div>

            {/* 2. Hạ tầng */}
            <div>
              <h3 className="font-bold text-[15px] mb-2 text-gray-800">2. Thông tin hạ tầng</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex"><span className="font-semibold pr-2">SL trụ bơm:</span><span>4</span></div>
                <div className="flex"><span className="font-semibold pr-2">Tổng dung tích:</span><span>100m3</span></div>
              </div>
            </div>

            {/* 3. Tài liệu đính kèm */}
            <div>
              <h3 className="font-bold text-[15px] mb-3 text-gray-800">3. Danh sách tài liệu</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center justify-between"><span className="text-xs font-semibold w-24 leading-tight text-right pr-2">Giấy xác nhận Bảo vệ môi trường</span><button className="border border-gray-400 rounded px-2 py-0.5 text-xs hover:bg-gray-100">Mở</button></div>
                <div className="flex items-center justify-between"><span className="text-xs font-semibold w-24 leading-tight text-right pr-2">Hợp đồng đại lý</span><button className="border border-gray-400 rounded px-2 py-0.5 text-xs hover:bg-gray-100">Mở</button></div>
                <div className="flex items-center justify-between"><span className="text-xs font-semibold w-24 leading-tight text-right pr-2">Giấy chứng nhận PCCC</span><button className="border border-gray-400 rounded px-2 py-0.5 text-xs hover:bg-gray-100">Mở</button></div>
                <div className="flex items-center justify-between"><span className="text-xs font-semibold w-24 leading-tight text-right pr-2">Hợp đồng nhượng quyền</span><button className="border border-gray-400 rounded px-2 py-0.5 text-xs hover:bg-gray-100">Mở</button></div>
              </div>
            </div>
          </div>

          {/* Nút thao tác dưới cùng */}
          <div className="flex gap-4 pt-4 border-t border-gray-200 mt-2">
            <button onClick={() => setPopupState('request_supplement')} className="flex-1 bg-[#F59E0B] hover:bg-yellow-500 text-white py-2 rounded-md font-bold text-sm shadow-sm transition-colors">
              Yêu cầu bổ sung
            </button>
            <button onClick={() => setPopupState('success_transfer')} className="flex-1 bg-[#4CAF50] hover:bg-green-600 text-white py-2 rounded-md font-bold text-sm shadow-sm transition-colors">
              Tiếp nhận hồ sơ
            </button>
          </div>
        </div>

        {/* ================= CỘT PHẢI: TRÌNH XEM PDF GIẢ LẬP ================= */}
        <div className="flex-1 bg-white border border-gray-400 rounded-lg flex flex-col overflow-hidden shadow-sm">
          {/* Toolbar */}
          <div className="h-10 bg-[#E5E7EB] border-b border-gray-400 flex items-center justify-between px-4">
            <div className="w-20"></div> {/* Spacer */}
            <div className="text-xs font-semibold text-gray-700 bg-white px-3 py-1 rounded border border-gray-300">Page: 1/5</div>
            <div className="flex gap-3 text-gray-600">
              <ZoomIn size={18} className="cursor-pointer hover:text-gray-900" />
              <ZoomOut size={18} className="cursor-pointer hover:text-gray-900" />
              <RotateCw size={18} className="cursor-pointer hover:text-gray-900" />
              <Download size={18} className="cursor-pointer hover:text-gray-900" />
            </div>
          </div>
          {/* PDF Content Area */}
          <div className="flex-1 bg-gray-50 flex justify-center p-4 overflow-y-auto">
            <div className="w-full max-w-2xl bg-white shadow-md border border-gray-200 h-[800px]">
              {/* Trang giấy A4 giả lập */}
            </div>
          </div>
        </div>
      </div>

      {/* ================= POPUP 1: NHẬP LÝ DO YÊU CẦU BỔ SUNG ================= */}
      {popupState === 'request_supplement' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-[1px]">
          <div className="bg-white rounded-xl shadow-2xl w-[500px] border border-gray-200 overflow-hidden">
            <div className="p-6">
              <h3 className="text-center font-bold text-lg mb-4 text-gray-800">Lý do yêu cầu bổ sung</h3>
              <textarea 
                className="w-full h-32 border border-gray-400 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                placeholder="Nhập chi tiết các loại giấy tờ doanh nghiệp cần nộp lại hoặc làm rõ..."
              ></textarea>
            </div>
            <div className="flex justify-center gap-6 pb-6">
              {/* Nút gửi: Đổi trạng thái sang Popup Thông báo thành công */}
              <button onClick={() => setPopupState('success_supplement')} className="bg-[#F59E0B] hover:bg-yellow-500 text-white px-8 py-2 rounded font-bold text-sm transition-colors">
                Gửi thông báo
              </button>
              <button onClick={() => setPopupState('none')} className="bg-[#F44336] hover:bg-red-600 text-white px-8 py-2 rounded font-bold text-sm transition-colors">
                Huỷ
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= POPUP 2: ĐÃ GỬI YÊU CẦU BỔ SUNG THÀNH CÔNG ================= */}
      {popupState === 'success_supplement' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-[1px]">
          <div className="bg-white rounded-xl shadow-2xl p-8 w-[420px] flex flex-col items-center text-center relative border border-gray-200 animate-in fade-in zoom-in duration-200">
            <CheckCircle2 size={65} className="text-[#F59E0B] mb-5" strokeWidth={1.5} />
            <h3 className="font-bold text-xl mb-3 text-gray-800">Đã gửi thông báo!</h3>
            <p className="text-sm text-gray-600 mb-8 leading-relaxed">
              Yêu cầu bổ sung hồ sơ đã được gửi thành công đến doanh nghiệp qua hệ thống Cổng Dịch Vụ Công.
            </p>
            <button 
              onClick={() => {
                setPopupState('none');
                navigate('/phan-loai'); // Đóng popup và tự động quay lại màn hình Danh sách
              }} 
              className="bg-[#F59E0B] hover:bg-yellow-500 text-white px-10 py-2 rounded-md font-bold transition-colors shadow-sm"
            >
              Hoàn tất
            </button>
          </div>
        </div>
      )}

      {/* ================= POPUP 3: CHUYỂN HỒ SƠ (TIẾP NHẬN) THÀNH CÔNG ================= */}
      {popupState === 'success_transfer' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-[1px]">
          <div className="bg-white rounded-xl shadow-2xl p-8 w-[420px] flex flex-col items-center text-center relative border border-gray-200 animate-in fade-in zoom-in duration-200">
            <CheckCircle2 size={65} className="text-[#4CAF50] mb-5" strokeWidth={1.5} />
            <h3 className="font-bold text-xl mb-3 text-gray-800">Tiếp nhận thành công!</h3>
            <p className="text-sm text-gray-600 mb-8 leading-relaxed">
              Đã chuyển hồ sơ sang <span className="font-bold text-gray-800">Phòng Quản lý Thương mại</span> để tiến hành bước Thẩm định và Xét duyệt.
            </p>
            <button 
              onClick={() => {
                setPopupState('none');
                navigate('/phan-loai'); // Đóng popup và tự động quay lại màn hình Danh sách
              }} 
              className="bg-[#4CAF50] hover:bg-green-600 text-white px-10 py-2 rounded-md font-bold transition-colors shadow-sm"
            >
              Hoàn tất
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default PhanLoaiHoSo;