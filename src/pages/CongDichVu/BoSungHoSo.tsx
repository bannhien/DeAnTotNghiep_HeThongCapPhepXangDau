import React, { useState } from 'react';
import { FileUp, CheckCircle2, XCircle, X } from 'lucide-react';

const BoSungHoSo = () => {
  // Quản lý trạng thái hiển thị Popup: 'none' | 'success' | 'error'
  const [popupState, setPopupState] = useState<'none' | 'success' | 'error'>('none');

  // Hàm giả lập kiểm tra (Hiển thị popup lỗi file PDF)
  const handleCheck = () => {
    setPopupState('error');
  };

  // Hàm giả lập nộp hồ sơ bổ sung (Hiển thị popup thành công)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPopupState('success');
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 relative">
      <h1 className="text-xl font-bold text-gray-800 uppercase text-center mb-8 leading-relaxed">
        Bổ sung chỉnh sửa hồ sơ cấp giấy chứng nhận đủ điều kiện<br/>kinh doanh xăng dầu
      </h1>

      <form onSubmit={handleSubmit} className="space-y-8">
        
        {/* ================= 1. Thông tin doanh nghiệp ================= */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-gray-800">1. Thông tin doanh nghiệp</h2>
            <button 
              type="button" 
              onClick={handleCheck} // Bấm vào đây để test Pop-up Lỗi
              className="bg-[#4CAF50] hover:bg-green-600 text-white text-sm px-6 py-1.5 rounded transition-colors"
            >
              Kiểm tra
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Hàng 1 */}
            <div className="flex items-center gap-3">
              <label className="text-sm text-gray-700 w-28 text-right">Mã số thuế<br/>doanh nghiệp</label>
              <input type="text" className="flex-1 border border-gray-400 rounded-md p-1.5 focus:outline-none focus:border-blue-500 text-sm bg-gray-50" readOnly defaultValue="0401234567" />
            </div>
            <div className="flex items-center gap-3">
              <label className="text-sm text-gray-700 w-24 text-right">Số điện<br/>thoại</label>
              <input type="text" className="flex-1 border border-gray-400 rounded-md p-1.5 focus:outline-none focus:border-blue-500 text-sm" />
            </div>
            <div className="flex items-center gap-3">
              <label className="text-sm text-gray-700 w-24 text-right">Loại hình<br/>cấp phép</label>
              <select className="flex-1 border border-gray-400 rounded-md p-1.5 focus:outline-none focus:border-blue-500 text-sm bg-white">
                <option>Cấp mới</option>
                <option>Cấp lại</option>
              </select>
            </div>

            {/* Hàng 2 */}
            <div className="flex items-center gap-3">
              <label className="text-sm text-gray-700 w-28 text-right">Tên<br/>doanh nghiệp</label>
              <input type="text" className="flex-1 border border-gray-400 rounded-md p-1.5 focus:outline-none focus:border-blue-500 text-sm bg-gray-50" readOnly defaultValue="Công ty TNHH Xăng dầu ABC" />
            </div>
            <div className="flex items-center gap-3 col-span-2 md:col-span-1">
              <label className="text-sm text-gray-700 w-24 text-right">Địa chỉ<br/>trụ sở</label>
              <input type="text" className="flex-1 border border-gray-400 rounded-md p-1.5 focus:outline-none focus:border-blue-500 text-sm" />
            </div>
            <div className="flex items-center gap-3">
              <label className="text-sm text-gray-700 w-24 text-right">Phường/<br/>Xã</label>
              <select className="flex-1 border border-gray-400 rounded-md p-1.5 focus:outline-none focus:border-blue-500 text-sm bg-white">
                <option>Hải Châu 1</option>
                <option>Thạch Thang</option>
              </select>
            </div>
          </div>
        </section>

        {/* ================= 2. Thông tin hạ tầng ================= */}
        <section>
          <h2 className="font-bold text-gray-800 mb-4">2. Thông tin hạ tầng</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="flex items-center gap-3">
              <label className="text-sm text-gray-700 w-28 text-right">SL trụ bơm</label>
              <input type="number" className="flex-1 border border-gray-400 rounded-md p-1.5 focus:outline-none focus:border-blue-500 text-sm" />
            </div>
            <div className="flex items-center gap-3">
              <label className="text-sm text-gray-700 w-24 text-right">Tổng dung<br/>tích bể chứa</label>
              <input type="text" className="flex-1 border border-gray-400 rounded-md p-1.5 focus:outline-none focus:border-blue-500 text-sm" />
            </div>
            <div className="flex items-center gap-3">
              <label className="text-sm text-gray-700 w-32 text-right">Địa chỉ cửa<br/>hàng xăng dầu</label>
              <input type="text" className="flex-1 border border-gray-400 rounded-md p-1.5 focus:outline-none focus:border-blue-500 text-sm" />
            </div>
          </div>
        </section>

        {/* ================= 3. Thành phần hồ sơ ================= */}
        <section>
          <h2 className="font-bold text-gray-800 mb-4">3. Thành phần hồ sơ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            
            {/* File 1 */}
            <div className="flex items-center gap-3">
              <label className="text-sm font-semibold text-gray-700 w-36 text-right leading-tight">Giấy xác nhận<br/>Bảo vệ môi trường</label>
              <div className="flex-1 border border-gray-400 rounded-full px-3 py-1.5 flex items-center gap-2 cursor-pointer bg-gray-50 hover:bg-gray-100">
                <FileUp size={14} className="text-gray-500" />
                <span className="text-[10px] text-gray-400 italic">định dạng file pdf, dung lượng tối đa 5MB</span>
              </div>
            </div>

            {/* File 2 */}
            <div className="flex items-center gap-3">
              <label className="text-sm font-semibold text-gray-700 w-32 text-right">Hợp đồng đại lý</label>
              <div className="flex-1 border border-gray-400 rounded-full px-3 py-1.5 flex items-center gap-2 cursor-pointer bg-gray-50 hover:bg-gray-100">
                <FileUp size={14} className="text-gray-500" />
                <span className="text-[10px] text-gray-400 italic">định dạng file pdf, dung lượng tối đa 5MB</span>
              </div>
            </div>

            {/* File 3 (Đang bị highlight lỗi trong suy nghĩ của người dùng) */}
            <div className="flex items-center gap-3">
              <label className="text-sm font-semibold text-gray-700 w-36 text-right leading-tight">Giấy chứng nhận<br/>PCCC</label>
              <div className="flex-1 border border-gray-400 rounded-full px-3 py-1.5 flex items-center gap-2 cursor-pointer bg-gray-50 hover:bg-gray-100">
                <FileUp size={14} className="text-gray-500" />
                <span className="text-[10px] text-gray-400 italic">định dạng file pdf, dung lượng tối đa 5MB</span>
              </div>
            </div>

            {/* File 4 */}
            <div className="flex items-center gap-3">
              <label className="text-sm font-semibold text-gray-700 w-32 text-right leading-tight">Hợp đồng<br/>nhượng quyền</label>
              <div className="flex-1 border border-gray-400 rounded-full px-3 py-1.5 flex items-center gap-2 cursor-pointer bg-gray-50 hover:bg-gray-100">
                <FileUp size={14} className="text-gray-500" />
                <span className="text-[10px] text-gray-400 italic">định dạng file pdf, dung lượng tối đa 5MB</span>
              </div>
            </div>

          </div>
        </section>

        {/* ================= Nút Action ================= */}
        <div className="flex justify-end gap-6 pt-6">
          <button 
            type="submit" // Bấm vào đây để test Pop-up Thành công
            className="bg-[#4CAF50] hover:bg-green-600 text-white px-10 py-2 rounded transition-colors text-sm font-medium"
          >
            Nộp hồ sơ
          </button>
          <button 
            type="button"
            className="bg-[#F44336] hover:bg-red-600 text-white px-8 py-2 rounded transition-colors text-sm font-medium"
          >
            Huỷ
          </button>
        </div>
      </form>

      {/* ================= POP-UP LỖI (FILE KHÔNG HỢP LỆ) ================= */}
      {popupState === 'error' && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-[1px] rounded-xl">
          <div className="bg-white rounded-xl shadow-2xl p-6 w-[350px] flex flex-col items-center text-center relative border border-gray-200">
            <button onClick={() => setPopupState('none')} className="absolute top-3 right-3 text-gray-400 hover:text-gray-600">
              <X size={20} />
            </button>
            <XCircle size={50} className="text-red-500 mb-4" strokeWidth={1.5} />
            <h3 className="font-bold text-lg mb-2">Bổ sung hồ sơ không hợp lệ!</h3>
            <p className="text-sm text-gray-600 mb-6 px-2">
              Tệp đính kèm ở mục Giấy chứng nhận PCCC không đúng định dạng. Vui lòng chỉ tải lên tệp PDF.
            </p>
            <button 
              onClick={() => setPopupState('none')}
              className="bg-[#4CAF50] hover:bg-green-600 text-white px-8 py-1.5 rounded transition-colors text-sm"
            >
              Đóng
            </button>
          </div>
        </div>
      )}

      {/* ================= POP-UP THÀNH CÔNG ================= */}
      {popupState === 'success' && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-[1px] rounded-xl">
          <div className="bg-white rounded-xl shadow-2xl p-8 w-[350px] flex flex-col items-center text-center relative border border-gray-200">
            <button onClick={() => setPopupState('none')} className="absolute top-3 right-3 text-gray-400 hover:text-gray-600">
              <X size={20} />
            </button>
            <CheckCircle2 size={60} className="text-[#4CAF50] mb-4" strokeWidth={1.5} />
            <h3 className="font-bold text-lg mb-6">Bổ sung hồ sơ thành công!</h3>
            <button 
              onClick={() => setPopupState('none')}
              className="bg-[#4CAF50] hover:bg-green-600 text-white px-8 py-1.5 rounded transition-colors text-sm"
            >
              Đóng
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default BoSungHoSo;