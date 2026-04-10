import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { CheckCircle2, UploadCloud } from 'lucide-react';

const DinhChiThuHoi = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const mode = location.state?.mode || 'create';
  const isReadOnly = mode === 'view';

  // Quản lý hình thức xử lý để hiện popup cho đúng
  const [hinhThuc, setHinhThuc] = useState('Đình chỉ có thời hạn');
  const [showPopup, setShowPopup] = useState(false);

  const handleConfirm = () => {
    setShowPopup(true);
  };

  const inputClass = `w-full border rounded-md px-4 py-2 text-[14px] font-medium text-gray-800 transition-colors focus:outline-none ${
    isReadOnly 
      ? 'border-gray-300 bg-gray-100 cursor-not-allowed' 
      : 'border-gray-400 bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
  }`;

  return (
    <div className="h-full flex flex-col items-center pt-4 pb-10 overflow-y-auto custom-scrollbar">
      <h1 className="text-xl font-bold text-gray-800 uppercase text-center mb-2 tracking-wide">
        ĐÌNH CHỈ / THU HỒI GIẤY PHÉP
      </h1>
      <h2 className="text-[16px] font-semibold text-gray-600 mb-8 text-center">
        {isReadOnly ? 'Chi tiết Quyết định xử phạt' : 'Lập Quyết định xử phạt mới'}
      </h2>

      {/* ================= KHỐI FORM CHUẨN ================= */}
      <div className="w-full max-w-4xl bg-white border border-gray-200 rounded-xl shadow-sm p-8">
        
        {/* Lưới 2 cột cho các thông tin ngắn */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-bold text-gray-800">Tên Cửa hàng / Doanh nghiệp</label>
            <input type="text" readOnly={isReadOnly} defaultValue={isReadOnly ? "CHXD Hòa Khánh 11" : ""} placeholder="Nhập tên cửa hàng..." className={inputClass} />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-bold text-gray-800">Số Giấy phép</label>
            <input type="text" readOnly={isReadOnly} defaultValue={isReadOnly ? "HD-2025-03-001" : ""} placeholder="Nhập số giấy phép..." className={inputClass} />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-bold text-gray-800">Hình thức xử lý</label>
            <select 
              disabled={isReadOnly} 
              value={hinhThuc}
              onChange={(e) => setHinhThuc(e.target.value)}
              className={inputClass}
            >
              <option value="Đình chỉ có thời hạn">Đình chỉ có thời hạn</option>
              <option value="Thu hồi vĩnh viễn">Thu hồi vĩnh viễn</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-bold text-gray-800">Ngày bắt đầu hiệu lực</label>
            <input type="text" readOnly={isReadOnly} defaultValue="01/01/2026" className={inputClass} />
          </div>

          {/* Chỉ hiện Ngày hết hạn nếu là Đình chỉ có thời hạn */}
          {hinhThuc === 'Đình chỉ có thời hạn' && (
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-bold text-gray-800">Ngày kết thúc đình chỉ</label>
              <input type="text" readOnly={isReadOnly} defaultValue="31/12/2026" className={inputClass} />
            </div>
          )}

        </div>

        <div className="border-t border-gray-200 my-8"></div>

        {/* Lưới 2 cột cho Lý do và Upload File */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 items-start">
          
          <div className="flex flex-col gap-2">
            <label className="text-[13px] font-bold text-gray-800">Lý do xử phạt</label>
            <textarea 
              readOnly={isReadOnly}
              placeholder="Nhập chi tiết lý do vi phạm..."
              defaultValue={isReadOnly ? "Cửa hàng đã vi phạm nghiêm trọng các quy định về An toàn Phòng cháy chữa cháy trong đợt thanh tra tháng 12/2025." : ""}
              className={`w-full h-36 border rounded-lg p-3 text-[14px] focus:outline-none resize-none leading-relaxed ${isReadOnly ? 'border-gray-300 bg-gray-100 text-gray-700 cursor-not-allowed' : 'border-gray-400 bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500'}`}
            ></textarea>
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-[13px] font-bold text-gray-800">Quyết định xử phạt (File đính kèm)</label>
            <div className={`w-full h-36 border-2 border-dashed rounded-lg flex flex-col items-center justify-center gap-2 transition-colors ${isReadOnly ? 'border-gray-300 bg-gray-50' : 'border-blue-300 bg-blue-50 hover:bg-blue-100 cursor-pointer'}`}>
              <UploadCloud size={32} className={isReadOnly ? "text-gray-400" : "text-blue-500"} />
              {isReadOnly ? (
                <div className="text-center">
                  <p className="text-[13px] font-bold text-blue-600 hover:underline cursor-pointer">QD_XuPhat_HoaKhanh11.pdf</p>
                  <p className="text-[11px] text-gray-500 mt-1">Đã đính kèm (2.4 MB)</p>
                </div>
              ) : (
                <div className="text-center px-4">
                  <p className="text-[13px] font-bold text-gray-700">Nhấn để tải lên Quyết định</p>
                  <p className="text-[11px] text-gray-500 mt-1">Định dạng hỗ trợ: PDF. Dung lượng tối đa: 5MB</p>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* NÚT THAO TÁC */}
        <div className="flex justify-end gap-4 mt-10">
          <button 
            onClick={() => navigate('/dinh-chi-thu-hoi')} 
            className="bg-white border border-gray-400 hover:bg-gray-50 text-gray-700 px-8 py-2 rounded-md text-sm font-bold shadow-sm transition-colors"
          >
            {isReadOnly ? 'Quay lại' : 'Huỷ'}
          </button>
          
          {!isReadOnly && (
            <button 
              onClick={handleConfirm} 
              className="bg-[#F59E0B] hover:bg-yellow-500 text-white px-10 py-2 rounded-md text-sm font-bold shadow-sm transition-colors"
            >
              Phát hành Quyết định
            </button>
          )}
        </div>

      </div>

      {/* ================= POPUP THÀNH CÔNG ================= */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-[1px]">
          <div className="bg-white rounded-xl shadow-2xl p-8 w-[400px] flex flex-col items-center text-center border border-gray-200 animate-in fade-in zoom-in duration-200">
            <CheckCircle2 size={65} className="text-[#4CAF50] mb-5" strokeWidth={1.5} />
            <h3 className="font-bold text-xl mb-3 text-gray-800">Thành công!</h3>
            <p className="text-[14px] mb-8 text-gray-600 leading-relaxed px-2">
              {hinhThuc === 'Đình chỉ có thời hạn' 
                ? 'Đã ban hành quyết định đình chỉ hoạt động có thời hạn đối với cửa hàng.' 
                : 'Đã ban hành quyết định thu hồi vĩnh viễn giấy phép hoạt động của cửa hàng.'}
            </p>
            <button 
              onClick={() => { setShowPopup(false); navigate('/dinh-chi-thu-hoi'); }} 
              className="bg-[#4CAF50] hover:bg-green-600 text-white px-10 py-2 rounded-md font-bold transition-colors w-full"
            >
              Hoàn tất
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default DinhChiThuHoi;