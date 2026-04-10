import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, FileImage } from 'lucide-react';

const QuanLyHaTang = () => {
  const navigate = useNavigate();

  // State quản lý chế độ View / Edit
  const [isEditing, setIsEditing] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleSave = () => {
    setShowSuccessPopup(true);
  };

  const handleClosePopup = () => {
    setShowSuccessPopup(false);
    setIsEditing(false); // Đóng popup thì về lại chế độ View
  };

  return (
    <div className="h-full flex flex-col items-center">
      <div className="mb-8 w-full">
        <h1 className="text-xl font-bold text-gray-800 uppercase text-center mb-2 tracking-wide">
          Quản lý thông tin hạ tầng cơ sở
        </h1>
        <h2 className="text-[17px] font-bold text-gray-800 text-center">
          Thông tin chi tiết hạ tầng cơ sở cửa hàng xăng dầu
        </h2>
      </div>

      <div className="w-full max-w-5xl bg-transparent flex gap-10 relative">
        
        {/* Nút Sửa / Lưu nằm tít bên góc phải */}
        <div className="absolute top-0 right-0 flex gap-2">
          {!isEditing ? (
            <button onClick={() => setIsEditing(true)} className="bg-[#6FCF97] hover:bg-green-500 text-white px-6 py-1.5 rounded text-sm font-bold shadow-sm transition-colors">
              Sửa thông tin
            </button>
          ) : (
            <>
              <button onClick={handleSave} className="bg-[#6FCF97] hover:bg-green-500 text-white px-6 py-1.5 rounded text-sm font-bold shadow-sm transition-colors">
                Lưu thông tin
              </button>
              <button onClick={() => setIsEditing(false)} className="bg-[#FF0000] hover:bg-red-600 text-white px-6 py-1.5 rounded text-sm font-bold shadow-sm transition-colors">
                Huỷ
              </button>
            </>
          )}
        </div>

        {/* NỬA TRÁI: THÔNG TIN */}
        <div className="flex-1 space-y-6">
          {/* 1. Thông tin pháp lý */}
          <div>
            <h3 className="font-bold text-[15px] mb-3 text-gray-800">1. Thông tin pháp lý cửa hàng</h3>
            <div className="space-y-3 text-[14px] pl-4">
              <div className="flex items-center"><span className="w-32 font-semibold text-gray-700 flex-shrink-0">Tên cửa hàng:</span><span className="flex-1 font-bold text-gray-800">CHXD Hòa Khánh 11</span></div>
              <div className="flex items-center"><span className="w-32 font-semibold text-gray-700 flex-shrink-0">Địa chỉ trụ sở:</span><span className="flex-1 font-semibold text-gray-800">423 Ngô Quyền, phường Sơn Trà</span></div>
              <div className="flex items-center"><span className="w-32 font-semibold text-gray-700 flex-shrink-0">Số điện thoại:</span><span className="flex-1 font-semibold text-gray-800">0905557995</span></div>
            </div>
          </div>

          {/* 2. Thông tin hạ tầng (Có thể sửa) */}
          <div>
            <h3 className="font-bold text-[15px] mb-3 text-gray-800">2. Thông tin hạ tầng</h3>
            <div className="flex gap-8 pl-4 items-center">
              <div className="flex items-center gap-3">
                <span className="font-semibold text-gray-700 w-32 flex-shrink-0">SL trụ bơm:</span>
                {isEditing ? (
                  <input type="text" defaultValue="4" className="border border-gray-400 rounded px-3 py-1 w-20 text-center focus:outline-none focus:border-blue-500 bg-white" />
                ) : (
                  <span className="font-bold text-gray-800">4</span>
                )}
              </div>
              <div className="flex items-center gap-3">
                <span className="font-semibold text-gray-700 w-32 text-right flex-shrink-0">Tổng dung<br/>tích bể chứa:</span>
                {isEditing ? (
                  <input type="text" defaultValue="50" className="border border-gray-400 rounded px-3 py-1 w-24 text-center focus:outline-none focus:border-blue-500 bg-white" />
                ) : (
                  <span className="font-bold text-gray-800">50</span>
                )}
              </div>
            </div>
          </div>

          {/* 3. Tài liệu */}
          <div>
            <h3 className="font-bold text-[15px] mb-3 text-gray-800">3. Thành phần hồ sơ</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-5 pl-4">
              
              {/* File 1 */}
              <div className="flex flex-col gap-1">
                <span className="text-[13px] font-bold text-gray-700 leading-tight">Giấy xác nhận Bảo vệ môi trường</span>
                <div className="w-full border border-gray-400 rounded-full px-3 py-1.5 flex items-center gap-2 bg-gray-50 overflow-hidden">
                  <FileImage size={14} className="text-gray-400 flex-shrink-0" />
                  <span className="text-[10px] text-gray-400 italic truncate w-full">Đính dạng hỗ trợ: pdf, dung lượng tối đa 5MB</span>
                </div>
              </div>

              {/* File 2 */}
              <div className="flex flex-col gap-1">
                <span className="text-[13px] font-bold text-gray-700 leading-tight">Hợp đồng đại lý</span>
                <div className="w-full border border-gray-400 rounded-full px-3 py-1.5 flex items-center gap-2 bg-gray-50 overflow-hidden">
                  <FileImage size={14} className="text-gray-400 flex-shrink-0" />
                  <span className="text-[10px] text-gray-400 italic truncate w-full">Đính dạng hỗ trợ: pdf, dung lượng tối đa 5MB</span>
                </div>
              </div>

              {/* File 3 */}
              <div className="flex flex-col gap-1">
                <span className="text-[13px] font-bold text-gray-700 leading-tight">Giấy chứng nhận PCCC</span>
                <div className="w-full border border-gray-400 rounded-full px-3 py-1.5 flex items-center gap-2 bg-gray-50 overflow-hidden">
                  <FileImage size={14} className="text-gray-400 flex-shrink-0" />
                  <span className="text-[10px] text-gray-400 italic truncate w-full">Đính dạng hỗ trợ: pdf, dung lượng tối đa 5MB</span>
                </div>
              </div>

              {/* File 4 */}
              <div className="flex flex-col gap-1">
                <span className="text-[13px] font-bold text-gray-700 leading-tight">Hợp đồng nhượng quyền</span>
                <div className="w-full border border-gray-400 rounded-full px-3 py-1.5 flex items-center gap-2 bg-gray-50 overflow-hidden">
                  <FileImage size={14} className="text-gray-400 flex-shrink-0" />
                  <span className="text-[10px] text-gray-400 italic truncate w-full">Đính dạng hỗ trợ: pdf, dung lượng tối đa 5MB</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* NỬA PHẢI: LÝ DO CHỈNH SỬA (Chỉ hiện khi Edit) */}
        <div className="w-[350px]">
          {isEditing && (
            <div className="animate-fade-in mt-14">
              <label className="text-sm font-bold text-gray-800 block mb-2">Lý do chỉnh sửa thông tin</label>
              <textarea 
                className="w-full h-32 border border-gray-400 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none shadow-sm bg-white"
              ></textarea>
            </div>
          )}
        </div>
      </div>

      {/* POPUP: LƯU THÀNH CÔNG */}
      {showSuccessPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-[1px]">
          <div className="bg-white rounded-xl shadow-2xl p-8 w-[400px] flex flex-col items-center text-center relative border border-gray-200 animate-in fade-in zoom-in duration-200">
            <CheckCircle2 size={65} className="text-[#4CAF50] mb-5" strokeWidth={1.5} />
            <h3 className="font-bold text-xl mb-6 text-gray-800">Đã lưu thông tin!</h3>
            <button 
              onClick={handleClosePopup} 
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

export default QuanLyHaTang;