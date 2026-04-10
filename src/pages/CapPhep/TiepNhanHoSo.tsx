import React, { useState } from 'react';
import { FileUp, CheckCircle2, XCircle, X } from 'lucide-react';

const TiepNhanHoSo = () => {
  // Trạng thái hiển thị form (chưa tra cứu -> ẩn form, tra cứu xong -> hiện form)
  const [isSearched, setIsSearched] = useState(false);
  
  // Quản lý trạng thái Popup: 'none' | 'success' | 'error_duplicate' | 'error_file'
  const [popupState, setPopupState] = useState<'none' | 'success' | 'error_duplicate' | 'error_file'>('none');

  // Xử lý khi Cán bộ bấm Tra cứu Mã số thuế
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Giả lập load dữ liệu
    setIsSearched(true);
  };

  // Xử lý khi Cán bộ bấm Tạo hồ sơ
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPopupState('success');
  };

  return (
    <div className="bg-transparent h-full relative">
      <div className="max-w-4xl mx-auto pt-4 pb-12">
        
        <h1 className="text-xl font-bold text-gray-800 uppercase text-center mb-10 tracking-wide">
          Tiếp nhận hồ sơ
        </h1>

        {/* ================= PHẦN 1: TRA CỨU MÃ SỐ THUẾ ================= */}
        <form onSubmit={handleSearch} className="mb-10 flex items-center gap-6 max-w-2xl mx-auto">
          <label className="text-[14px] font-bold text-gray-800 w-32 text-right leading-tight">
            Mã số thuế<br/>doanh nghiệp
          </label>
          <input 
            type="text" 
            className="flex-1 border border-gray-400 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm bg-white" 
            placeholder="Nhập mã số thuế..."
            required
          />
          <button 
            type="submit"
            className="bg-[#4CAF50] hover:bg-green-600 text-white font-medium px-8 py-2 rounded-md transition-colors shadow-sm text-sm"
          >
            Tra cứu
          </button>
        </form>

        {/* Nút Test giao diện (Chỉ hiển thị khi đã tra cứu để test các loại popup) */}
        {isSearched && (
          <div className="flex justify-center gap-4 text-xs font-semibold text-gray-400 mb-6">
             <span className="cursor-pointer hover:text-red-500 hover:underline" onClick={() => setPopupState('error_duplicate')}>
                (Test Lỗi: Trùng hồ sơ)
             </span>
             <span className="cursor-pointer hover:text-red-500 hover:underline" onClick={() => setPopupState('error_file')}>
                (Test Lỗi: Sai file PCCC)
             </span>
          </div>
        )}

        {/* ================= PHẦN 2: FORM TIẾP NHẬN (HIỆN SAU KHI TRA CỨU) ================= */}
        {isSearched && (
          <form onSubmit={handleSubmit} className="animate-fade-in space-y-8">
            
            {/* Khối 1: Thông tin pháp lý (Read-only) */}
            <section>
              <h2 className="font-bold text-gray-800 mb-4 text-[15px]">1. Thông tin pháp lý doanh nghiệp</h2>
              <div className="pl-4 space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-sm font-bold text-gray-700 w-32 text-right">Tên doanh nghiệp:</span>
                  <span className="text-sm font-semibold text-gray-800 flex-1">Chi nhánh công ty CP Xăng dầu dầu khí PV Oil Miền Trung tại Đà Nẵng</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-sm font-bold text-gray-700 w-32 text-right">Địa chỉ trụ sở:</span>
                  <span className="text-sm font-semibold text-gray-800 flex-1">197 Cách mạng Tháng Tám, Khuê Trung, TP Đà Nẵng</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-sm font-bold text-gray-700 w-32 text-right">Số điện thoại:</span>
                  <span className="text-sm font-semibold text-gray-800 flex-1">0905557995</span>
                </div>
              </div>
            </section>

            {/* Khối 2: Thông tin hạ tầng (Inputs) */}
            <section>
              <h2 className="font-bold text-gray-800 mb-4 text-[15px]">2. Thông tin hạ tầng</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pl-4">
                <div className="flex items-center gap-4">
                  <label className="text-sm font-bold text-gray-700 w-32 text-right">SL trụ bơm</label>
                  <input type="number" className="flex-1 border border-gray-400 rounded-md p-1.5 focus:outline-none focus:border-blue-500 text-sm" />
                </div>
                <div className="flex items-center gap-4">
                  <label className="text-sm font-bold text-gray-700 w-32 text-right leading-tight">Tổng dung<br/>tích bể chứa</label>
                  <input type="text" className="flex-1 border border-gray-400 rounded-md p-1.5 focus:outline-none focus:border-blue-500 text-sm" />
                </div>
              </div>
            </section>

            {/* Khối 3: Thành phần hồ sơ (File Uploads) */}
            <section>
              <h2 className="font-bold text-gray-800 mb-4 text-[15px]">3. Thành phần hồ sơ</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 pl-4">
                {/* Dòng 1 */}
                <div className="flex items-center gap-3">
                  <label className="text-sm font-bold text-gray-700 w-36 text-right leading-tight">Giấy xác nhận<br/>Bảo vệ môi trường</label>
                  <div className="flex-1 border border-gray-400 rounded-full px-3 py-1.5 flex items-center gap-2 cursor-pointer bg-white hover:bg-gray-50">
                    <FileUp size={14} className="text-gray-500" />
                    <span className="text-[10px] text-gray-400 italic truncate">định dạng file pdf, dung lượng tối đa 5MB</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <label className="text-sm font-bold text-gray-700 w-32 text-right">Hợp đồng đại lý</label>
                  <div className="flex-1 border border-gray-400 rounded-full px-3 py-1.5 flex items-center gap-2 cursor-pointer bg-white hover:bg-gray-50">
                    <FileUp size={14} className="text-gray-500" />
                    <span className="text-[10px] text-gray-400 italic truncate">định dạng file pdf, dung lượng tối đa 5MB</span>
                  </div>
                </div>
                {/* Dòng 2 */}
                <div className="flex items-center gap-3">
                  <label className="text-sm font-bold text-gray-700 w-36 text-right leading-tight">Giấy chứng nhận<br/>PCCC</label>
                  <div className="flex-1 border border-gray-400 rounded-full px-3 py-1.5 flex items-center gap-2 cursor-pointer bg-white hover:bg-gray-50">
                    <FileUp size={14} className="text-gray-500" />
                    <span className="text-[10px] text-gray-400 italic truncate">định dạng file pdf, dung lượng tối đa 5MB</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <label className="text-sm font-bold text-gray-700 w-32 text-right leading-tight">Hợp đồng<br/>nhượng quyền</label>
                  <div className="flex-1 border border-gray-400 rounded-full px-3 py-1.5 flex items-center gap-2 cursor-pointer bg-white hover:bg-gray-50">
                    <FileUp size={14} className="text-gray-500" />
                    <span className="text-[10px] text-gray-400 italic truncate">định dạng file pdf, dung lượng tối đa 5MB</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Nút Submit */}
            <div className="flex justify-end gap-6 pt-6 pr-8">
              <button 
                type="submit"
                className="bg-[#4CAF50] hover:bg-green-600 text-white px-10 py-2 rounded transition-colors text-sm font-bold"
              >
                Tạo hồ sơ
              </button>
              <button 
                type="button"
                className="bg-[#F44336] hover:bg-red-600 text-white px-8 py-2 rounded transition-colors text-sm font-bold"
              >
                Huỷ
              </button>
            </div>
          </form>
        )}

        {/* ================= MODAL: THÀNH CÔNG ================= */}
        {popupState === 'success' && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-[1px]">
            <div className="bg-white rounded-xl shadow-2xl p-8 w-[380px] flex flex-col items-center text-center relative border border-gray-200 animate-in fade-in zoom-in duration-200">
              <CheckCircle2 size={60} className="text-[#4CAF50] mb-4" strokeWidth={1.5} />
              <h3 className="font-bold text-lg mb-1">Nộp hồ sơ thành công!</h3>
              <p className="text-sm text-gray-800 mb-4">Mã biên nhận của bạn là:<br/><span className="font-bold text-base">002-XD-2026</span></p>
              <p className="text-sm text-gray-600 mb-6">Vui lòng lưu lại mã biên nhận<br/>này để tra cứu tiến độ hồ sơ!</p>
              <button onClick={() => {setPopupState('none'); setIsSearched(false);}} className="bg-[#4CAF50] hover:bg-green-600 text-white px-8 py-1.5 rounded transition-colors text-sm">
                Đóng
              </button>
            </div>
          </div>
        )}

        {/* ================= MODAL: LỖI TRÙNG HỒ SƠ ================= */}
        {popupState === 'error_duplicate' && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-[1px]">
            <div className="bg-white rounded-xl shadow-2xl p-8 w-[380px] flex flex-col items-center text-center relative border border-gray-200">
              <button onClick={() => setPopupState('none')} className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"><X size={20} /></button>
              <XCircle size={55} className="text-red-500 mb-4" strokeWidth={1.5} />
              <h3 className="font-bold text-lg mb-2">Hồ sơ không hợp lệ!</h3>
              <p className="text-sm text-gray-600 mb-6 px-2 leading-relaxed">Mã số thuế này hiện đang có một hồ sơ khác chờ xử lý. Doanh nghiệp không thể nộp thêm hồ sơ cùng lúc.</p>
              <button onClick={() => setPopupState('none')} className="bg-[#4CAF50] hover:bg-green-600 text-white px-8 py-1.5 rounded transition-colors text-sm">
                Đóng
              </button>
            </div>
          </div>
        )}

        {/* ================= MODAL: LỖI FILE PCCC ================= */}
        {popupState === 'error_file' && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-[1px]">
            <div className="bg-white rounded-xl shadow-2xl p-8 w-[380px] flex flex-col items-center text-center relative border border-gray-200">
              <button onClick={() => setPopupState('none')} className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"><X size={20} /></button>
              <XCircle size={55} className="text-red-500 mb-4" strokeWidth={1.5} />
              <h3 className="font-bold text-lg mb-2">Hồ sơ không hợp lệ!</h3>
              <p className="text-sm text-gray-600 mb-6 px-2 leading-relaxed">Tệp đính kèm ở mục Giấy chứng nhận PCCC không đúng định dạng. Vui lòng chỉ tải lên tệp PDF.</p>
              <button onClick={() => setPopupState('none')} className="bg-[#4CAF50] hover:bg-green-600 text-white px-8 py-1.5 rounded transition-colors text-sm">
                Đóng
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default TiepNhanHoSo;