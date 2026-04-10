import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ZoomIn, ZoomOut, RotateCw, Download, CheckCircle2, XCircle } from 'lucide-react';

const ChoThuLy = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Lấy ra loại hồ sơ từ State. Nếu người dùng F5 hoặc không có data, mặc định là 'Cấp mới'
  const loaiTuDanhSach = location.state?.loaiHoSoPassed || 'Cấp mới';

  const [loaiHoSo, setLoaiHoSo] = useState<'Cấp mới' | 'Cấp sửa đổi bổ sung' | 'Cấp lại'>(loaiTuDanhSach);

  const getTieuDeHoSo = () => {
    switch (loaiHoSo) {
      case 'Cấp mới': return 'HỒ SƠ XIN CẤP PHÉP MỚI';
      case 'Cấp sửa đổi bổ sung': return 'HỒ SƠ XIN CẤP SỬA ĐỔI BỔ SUNG';
      case 'Cấp lại': return 'HỒ SƠ XIN CẤP LẠI';
      default: return 'HỒ SƠ XIN CẤP PHÉP';
    }
  };

  // ĐÃ THÊM 2 TRẠNG THÁI MỚI CHO VIỆC TỪ CHỐI: 'confirm_reject' và 'success_reject'
  const [popupState, setPopupState] = useState<
    'none' | 'check_success' | 'check_error' | 'request_supplement' | 'success_supplement' | 'success_tham_dinh' | 'confirm_reject' | 'success_reject'
  >('none');

  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-center items-end mb-6 relative">
        <h1 className="text-xl font-bold text-gray-800 uppercase tracking-wide">
          Hồ sơ chờ thụ lý
        </h1>
      </div>

      <div className="flex-1 flex gap-6 h-full min-h-[650px]">
        
        {/* ================= CỘT TRÁI: THÔNG TIN HỒ SƠ ================= */}
        <div className="w-[430px] bg-white border border-gray-400 rounded-lg p-6 flex flex-col shadow-sm">
          
          <h2 className="text-lg font-black text-[#1565C0] uppercase mb-4 transition-all">
            {getTieuDeHoSo()}
          </h2>

          <div className="flex-1 overflow-y-auto pr-2 space-y-6 custom-scrollbar">
            
            {/* 1. Thông tin chung */}
            <div>
              <h3 className="font-bold text-[15px] mb-3 text-gray-800">1. Thông tin pháp lý doanh nghiệp</h3>
              <div className="space-y-3 text-[13px]">
                <div className="flex"><span className="w-28 font-semibold text-right pr-3">Tên doanh nghiệp:</span><span className="flex-1 font-medium">Chi nhánh công ty CP Xăng dầu dầu khí PV Oil Miền Trung tại Đà Nẵng</span></div>
                <div className="flex"><span className="w-28 font-semibold text-right pr-3">Loại thủ tục:</span><span className="flex-1 font-bold text-[#F59E0B]">{loaiHoSo}</span></div>
                <div className="flex items-center"><span className="w-28 font-semibold text-right pr-3">Trạng thái hiện tại:</span><span className="flex-1 font-bold text-gray-800">Đang thụ lý</span></div>
              </div>
            </div>

            {/* 2. Nút Kiểm tra mạng lưới */}
            <div>
              <h3 className="font-bold text-[15px] mb-3 text-gray-800">2. Kiểm tra điều kiện mạng lưới</h3>
              <div className="pl-6 flex items-center gap-3">
                <button 
                  onClick={() => setPopupState('check_success')} 
                  className="border border-blue-400 text-blue-500 px-6 py-1.5 rounded-full text-xs font-bold hover:bg-blue-50 transition-colors"
                >
                  Kiểm tra tự động
                </button>
                <span 
                  onClick={() => setPopupState('check_error')} 
                  className="text-[10px] text-gray-400 hover:text-red-500 cursor-pointer underline"
                >
                  (Test lỗi mạng lưới)
                </span>
              </div>
            </div>

            {/* 3. Danh sách tài liệu */}
            <div>
              <h3 className="font-bold text-[15px] mb-3 text-gray-800">3. Danh sách tài liệu</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center justify-between"><span className="text-[11px] font-semibold w-24 leading-tight text-right pr-2">Giấy xác nhận Bảo vệ môi trường</span><button className="border border-gray-400 rounded px-2 py-0.5 text-xs hover:bg-gray-100">Mở</button></div>
                <div className="flex items-center justify-between"><span className="text-[11px] font-semibold w-24 leading-tight text-right pr-2">Hợp đồng đại lý</span><button className="border border-gray-400 rounded px-2 py-0.5 text-xs hover:bg-gray-100">Mở</button></div>
                <div className="flex items-center justify-between"><span className="text-[11px] font-semibold w-24 leading-tight text-right pr-2">Giấy chứng nhận PCCC</span><button className="border border-gray-400 rounded px-2 py-0.5 text-xs hover:bg-gray-100">Mở</button></div>
                <div className="flex items-center justify-between"><span className="text-[11px] font-semibold w-24 leading-tight text-right pr-2">Hợp đồng nhượng quyền</span><button className="border border-gray-400 rounded px-2 py-0.5 text-xs hover:bg-gray-100">Mở</button></div>
              </div>
            </div>
          </div>

          <div className="flex justify-between gap-2 pt-5 border-t border-gray-200 mt-2">
            <button onClick={() => setPopupState('request_supplement')} className="bg-[#F59E0B] hover:bg-yellow-500 text-white px-3 py-2 rounded font-bold text-[12px] shadow-sm transition-colors">Yêu cầu bổ sung</button>
            <button onClick={() => setPopupState('success_tham_dinh')} className="bg-[#4CAF50] hover:bg-green-600 text-white px-3 py-2 rounded font-bold text-[12px] shadow-sm transition-colors flex-1">Thẩm định thực tế</button>
            
            {/* ĐÃ GẮN SỰ KIỆN CHO NÚT TỪ CHỐI */}
            <button onClick={() => setPopupState('confirm_reject')} className="bg-[#FF0000] hover:bg-red-700 text-white px-5 py-2 rounded font-bold text-[12px] shadow-sm transition-colors">Từ chối</button>
          </div>
        </div>

        {/* ================= CỘT PHẢI: TRÌNH XEM PDF ================= */}
        <div className="flex-1 bg-white border border-gray-400 rounded-lg flex flex-col overflow-hidden shadow-sm">
          <div className="h-10 bg-[#E5E7EB] border-b border-gray-400 flex items-center justify-between px-4">
            <div className="w-20"></div>
            <div className="text-xs font-semibold text-gray-700 bg-white px-3 py-1 rounded border border-gray-300">Page: 1/5</div>
            <div className="flex gap-3 text-gray-600">
              <ZoomIn size={18} className="cursor-pointer hover:text-gray-900" />
              <ZoomOut size={18} className="cursor-pointer hover:text-gray-900" />
              <RotateCw size={18} className="cursor-pointer hover:text-gray-900" />
              <Download size={18} className="cursor-pointer hover:text-gray-900" />
            </div>
          </div>
          <div className="flex-1 bg-gray-50 flex justify-center p-4 overflow-y-auto">
            <div className="w-full max-w-2xl bg-white shadow-md border border-gray-200 h-[800px]"></div>
          </div>
        </div>
      </div>

      {/* ================= POPUPS ================= */}
      
      {/* 1. Popups Kiểm tra mạng lưới */}
      {popupState === 'check_success' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-[1px]">
          <div className="bg-white rounded-xl shadow-2xl p-8 w-[400px] flex flex-col items-center text-center border border-gray-200 animate-in fade-in zoom-in duration-200">
            <CheckCircle2 size={60} className="text-[#4CAF50] mb-4" strokeWidth={1.5} />
            <p className="font-bold text-[15px] mb-6 text-gray-800 px-4">Hợp lệ: Không phát hiện trùng lặp mạng lưới</p>
            <button onClick={() => setPopupState('none')} className="bg-[#4CAF50] hover:bg-green-600 text-white px-8 py-1.5 rounded transition-colors text-sm font-bold">Đóng</button>
          </div>
        </div>
      )}

      {popupState === 'check_error' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-[1px]">
          <div className="bg-white rounded-xl shadow-2xl p-8 w-[420px] flex flex-col items-center text-center border border-gray-200 animate-in fade-in zoom-in duration-200">
            <XCircle size={60} className="text-red-500 mb-4" strokeWidth={1.5} />
            <p className="font-bold text-[15px] mb-6 text-gray-800 px-6 leading-relaxed">Cửa hàng đang ký hợp đồng Đang hiệu lực với Doanh nghiệp khác</p>
            <button onClick={() => setPopupState('none')} className="bg-[#4CAF50] hover:bg-green-600 text-white px-8 py-1.5 rounded transition-colors text-sm font-bold">Đóng</button>
          </div>
        </div>
      )}

      {/* 2. Popups Yêu cầu bổ sung */}
      {popupState === 'request_supplement' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-[1px]">
          <div className="bg-white rounded-xl shadow-2xl w-[500px] border border-gray-200 overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="p-6">
              <h3 className="text-center font-bold text-lg mb-4 text-gray-800">Lý do yêu cầu bổ sung</h3>
              <textarea className="w-full h-32 border border-gray-400 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none shadow-sm" placeholder="Nhập chi tiết các loại giấy tờ doanh nghiệp cần nộp lại hoặc làm rõ..."></textarea>
            </div>
            <div className="flex justify-center gap-6 pb-6">
              <button onClick={() => setPopupState('success_supplement')} className="bg-[#F59E0B] hover:bg-yellow-500 text-white px-8 py-2 rounded font-bold text-sm transition-colors shadow-sm">Gửi thông báo</button>
              <button onClick={() => setPopupState('none')} className="bg-white border border-gray-400 hover:bg-gray-50 text-gray-800 px-8 py-2 rounded font-bold text-sm transition-colors shadow-sm">Huỷ</button>
            </div>
          </div>
        </div>
      )}

      {popupState === 'success_supplement' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-[1px]">
          <div className="bg-white rounded-xl shadow-2xl p-8 w-[420px] flex flex-col items-center text-center relative border border-gray-200 animate-in fade-in zoom-in duration-200">
            <CheckCircle2 size={65} className="text-[#F59E0B] mb-5" strokeWidth={1.5} />
            <h3 className="font-bold text-xl mb-3 text-gray-800">Đã gửi thông báo!</h3>
            <p className="text-sm text-gray-600 mb-8 leading-relaxed">Yêu cầu bổ sung hồ sơ đã được gửi thành công đến doanh nghiệp qua hệ thống.</p>
            <button onClick={() => { setPopupState('none'); navigate('/thu-ly'); }} className="bg-[#F59E0B] hover:bg-yellow-500 text-white px-10 py-2 rounded-md font-bold transition-colors shadow-sm">Hoàn tất</button>
          </div>
        </div>
      )}

      {/* 3. Popup Chuyển Thẩm định thực tế */}
      {popupState === 'success_tham_dinh' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-[1px]">
          <div className="bg-white rounded-xl shadow-2xl p-8 w-[450px] flex flex-col items-center text-center relative border border-gray-200 animate-in fade-in zoom-in duration-200">
            <CheckCircle2 size={65} className="text-[#4CAF50] mb-5" strokeWidth={1.5} />
            <h3 className="font-bold text-xl mb-3 text-gray-800">Cập nhật thành công!</h3>
            <p className="text-sm text-gray-600 mb-8 leading-relaxed px-4">Đã chuyển hồ sơ sang trạng thái <span className="font-bold text-gray-800">Thẩm định thực tế</span>. Vui lòng lập kế hoạch kiểm tra cơ sở.</p>
            <button onClick={() => { setPopupState('none'); navigate('/thu-ly'); }} className="bg-[#4CAF50] hover:bg-green-600 text-white px-10 py-2 rounded-md font-bold transition-colors shadow-sm">Hoàn tất</button>
          </div>
        </div>
      )}

      {/* ================= 4. POPUPS TỪ CHỐI (MỚI THÊM) ================= */}
      
      {/* 4A. Nhập lý do từ chối */}
      {popupState === 'confirm_reject' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-[1px]">
          <div className="bg-white rounded-xl shadow-2xl w-[500px] border border-gray-200 overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="p-6">
              <h3 className="text-center font-bold text-lg mb-2 text-gray-800">Lý do từ chối hồ sơ</h3>
              <p className="text-[13px] text-gray-500 mb-4 text-center">Hồ sơ sẽ được hoàn trả về Bộ phận Một cửa sau khi bạn xác nhận.</p>
              <textarea 
                className="w-full h-32 border border-gray-400 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-400 resize-none shadow-sm" 
                placeholder="Nhập lý do từ chối để thông báo cho Bộ phận một cửa và Doanh nghiệp..."
              ></textarea>
            </div>
            <div className="flex justify-center gap-6 pb-6">
              <button onClick={() => setPopupState('success_reject')} className="bg-[#FF0000] hover:bg-red-700 text-white px-8 py-2 rounded font-bold text-sm transition-colors shadow-sm">Xác nhận trả hồ sơ</button>
              <button onClick={() => setPopupState('none')} className="bg-white border border-gray-400 hover:bg-gray-50 text-gray-800 px-8 py-2 rounded font-bold text-sm transition-colors shadow-sm">Huỷ</button>
            </div>
          </div>
        </div>
      )}

      {/* 4B. Thông báo từ chối thành công */}
      {popupState === 'success_reject' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-[1px]">
          <div className="bg-white rounded-xl shadow-2xl p-8 w-[420px] flex flex-col items-center text-center relative border border-gray-200 animate-in fade-in zoom-in duration-200">
            {/* Sử dụng Icon đỏ để biểu thị việc từ chối */}
            <CheckCircle2 size={65} className="text-[#FF0000] mb-5" strokeWidth={1.5} />
            <h3 className="font-bold text-xl mb-3 text-gray-800">Đã trả hồ sơ!</h3>
            <p className="text-sm text-gray-600 mb-8 leading-relaxed">Hồ sơ đã bị từ chối và hoàn trả về <span className="font-bold text-gray-800">Bộ phận Một cửa</span> kèm theo văn bản trả lời lý do.</p>
            <button onClick={() => { setPopupState('none'); navigate('/thu-ly'); }} className="bg-[#FF0000] hover:bg-red-700 text-white px-10 py-2 rounded-md font-bold transition-colors shadow-sm">Hoàn tất</button>
          </div>
        </div>
      )}

    </div>
  );
};

export default ChoThuLy;