import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

const PhanCongThuLy = () => {
  const navigate = useNavigate();
  
  // State quản lý chế độ: Đang xem (false) hay Đang sửa (true)
  const [isEditing, setIsEditing] = useState(false);
  
  // State quản lý Popup thông báo thành công
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  // Xử lý khi bấm nút "Lưu"
  const handleSave = () => {
    // Hiện popup thành công
    setShowSuccessPopup(true);
  };

  // Xử lý khi đóng Popup
  const handleClosePopup = () => {
    setShowSuccessPopup(false);
    setIsEditing(false); // Trở về chế độ Xem
    navigate('/phan-cong'); // (Tuỳ chọn) Đẩy về trang danh sách
  };

  return (
    <div className="h-full flex flex-col items-center pt-10">
      <h1 className="text-xl font-bold text-gray-800 uppercase text-center mb-16 tracking-wide">
        Phân công thụ lý
      </h1>

      <div className="w-full max-w-4xl space-y-8">
        
        {/* ================= HÀNG 1 ================= */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex items-center gap-4 flex-1 w-full">
            <label className="text-[14px] font-bold text-gray-800 w-32 text-right leading-tight">
              Tên<br/>doanh nghiệp
            </label>
            <input 
              type="text" 
              readOnly={!isEditing}
              defaultValue="Chi nhánh công ty CP Xăng dầu dầu khí PV Oil Miền Trung tại Đà Nẵng"
              className={`flex-1 border rounded-full px-4 py-2 text-sm transition-colors ${
                isEditing ? 'border-blue-400 bg-white focus:outline-none focus:ring-2 focus:ring-blue-300' : 'border-gray-300 bg-gray-50 outline-none'
              }`} 
            />
          </div>
          
          <div className="flex items-center gap-4 md:w-1/3">
            <label className="text-[14px] font-bold text-gray-800 w-24 text-right leading-tight">
              Ngày nộp<br/>hồ sơ
            </label>
            <input 
              type="text" 
              readOnly={!isEditing}
              defaultValue="02/01/2026"
              className={`flex-1 border rounded-full px-4 py-2 text-sm transition-colors ${
                isEditing ? 'border-blue-400 bg-white focus:outline-none focus:ring-2 focus:ring-blue-300' : 'border-gray-300 bg-gray-50 outline-none'
              }`} 
            />
          </div>
        </div>

        {/* ================= HÀNG 2 ================= */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex items-center gap-4 flex-1">
            <label className="text-[14px] font-bold text-gray-800 w-32 text-right leading-tight">
              Người thụ lý<br/>hồ sơ
            </label>
            {isEditing ? (
              <select className="flex-1 border border-blue-400 rounded-full px-4 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-300 cursor-pointer">
                <option>Chọn chuyên viên...</option>
                <option>Phùng Thị Kim Long</option>
                <option>Nguyễn Thị Hiền</option>
              </select>
            ) : (
              <input 
                type="text" 
                readOnly
                defaultValue="Chờ phân công"
                className="flex-1 border border-gray-300 bg-gray-50 rounded-full px-4 py-2 text-sm outline-none" 
              />
            )}
          </div>
          
          <div className="flex items-center gap-4 flex-1">
            <label className="text-[14px] font-bold text-gray-800 w-24 text-right">
              Loại thủ tục
            </label>
            <input 
              type="text" 
              readOnly={!isEditing}
              defaultValue="Cấp sửa đổi bổ sung"
              className={`flex-1 border rounded-full px-4 py-2 text-sm transition-colors ${
                isEditing ? 'border-blue-400 bg-white focus:outline-none focus:ring-2 focus:ring-blue-300' : 'border-gray-300 bg-gray-50 outline-none'
              }`} 
            />
          </div>

          <div className="flex items-center gap-4 md:w-1/3">
            <label className="text-[14px] font-bold text-gray-800 w-20 text-right">
              Trạng thái
            </label>
            <input 
              type="text" 
              readOnly={!isEditing}
              defaultValue="Chờ phân công"
              className={`flex-1 border rounded-full px-4 py-2 text-sm transition-colors ${
                isEditing ? 'border-blue-400 bg-white focus:outline-none focus:ring-2 focus:ring-blue-300' : 'border-gray-300 bg-gray-50 outline-none'
              }`} 
            />
          </div>
        </div>

        {/* ================= NHÓM NÚT ĐIỀU KHIỂN ================= */}
        <div className="flex justify-center gap-10 pt-10">
          {!isEditing ? (
            // Trạng thái View
            <>
              <button 
                onClick={() => setIsEditing(true)} 
                className="bg-[#F59E0B] hover:bg-yellow-500 text-white px-10 py-2 rounded text-sm font-bold transition-colors shadow-sm w-32"
              >
                Sửa
              </button>
              <button 
                className="bg-[#FF0000] hover:bg-red-700 text-white px-10 py-2 rounded text-sm font-bold transition-colors shadow-sm w-32"
              >
                Xoá
              </button>
            </>
          ) : (
            // Trạng thái Edit
            <>
              <button 
                onClick={handleSave} 
                className="bg-[#6FCF97] hover:bg-[#5EBC84] text-white px-10 py-2 rounded text-sm font-bold transition-colors shadow-sm w-32"
              >
                Lưu
              </button>
              <button 
                onClick={() => setIsEditing(false)} 
                className="bg-[#FF0000] hover:bg-red-700 text-white px-10 py-2 rounded text-sm font-bold transition-colors shadow-sm w-32"
              >
                Huỷ
              </button>
            </>
          )}
        </div>
      </div>

      {/* ================= POPUP THÀNH CÔNG ================= */}
      {showSuccessPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-[1px]">
          <div className="bg-white rounded-xl shadow-2xl p-8 w-[450px] flex flex-col items-center text-center relative border border-gray-200 animate-in fade-in zoom-in duration-200">
            <CheckCircle2 size={65} className="text-[#4CAF50] mb-5" strokeWidth={1.5} />
            <h3 className="font-bold text-xl mb-3 text-gray-800">Phân công thành công!</h3>
            <p className="text-sm text-gray-600 mb-8 leading-relaxed px-4">
              Đã phân công chuyên viên tiếp nhận thụ lý hồ sơ vào hệ thống.
            </p>
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

export default PhanCongThuLy;