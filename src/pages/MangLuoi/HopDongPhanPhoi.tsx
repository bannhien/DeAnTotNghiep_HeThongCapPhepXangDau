import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { CheckCircle2, XCircle } from 'lucide-react';

const HopDongPhanPhoi = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Nhận mode từ trang Danh sách truyền sang: 'create' | 'view' | 'edit'
  const initialMode = location.state?.viewMode || 'create';
  const [mode, setMode] = useState<'create' | 'view' | 'edit'>(initialMode);

  const [popupState, setPopupState] = useState<'none' | 'success' | 'error'>('none');

  const getTitle = () => {
    switch (mode) {
      case 'create': return 'Tạo Thông tin hợp đồng phân phối của hàng xăng dầu mới';
      case 'view': return 'Thông tin hợp đồng phân phối cửa hàng xăng dầu';
      case 'edit': return 'Sửa Thông tin hợp đồng phân phối cửa hàng xăng dầu';
    }
  };

  const handleSave = () => {
    setPopupState('success');
  };

  const renderActionButtons = () => {
    if (mode === 'create') {
      return (
        <>
          <button onClick={handleSave} className="bg-[#4CAF50] hover:bg-green-600 text-white px-10 py-2 rounded text-sm font-bold shadow-sm w-32 transition-colors">Lưu</button>
          <button onClick={() => navigate('/hop-dong-phan-phoi')} className="bg-[#FF0000] hover:bg-red-700 text-white px-10 py-2 rounded text-sm font-bold shadow-sm w-32 transition-colors">Huỷ</button>
        </>
      );
    }
    if (mode === 'view') {
      return (
        <>
          <button onClick={() => setMode('edit')} className="bg-[#F59E0B] hover:bg-yellow-500 text-white px-10 py-2 rounded text-sm font-bold shadow-sm w-32 transition-colors">Sửa</button>
          <button className="bg-[#FF0000] hover:bg-red-700 text-white px-10 py-2 rounded text-sm font-bold shadow-sm w-32 transition-colors">Xoá</button>
        </>
      );
    }
    if (mode === 'edit') {
      return (
        <>
          <button onClick={handleSave} className="bg-[#4CAF50] hover:bg-green-600 text-white px-10 py-2 rounded text-sm font-bold shadow-sm w-32 transition-colors">Lưu</button>
          <button onClick={() => setMode('view')} className="bg-[#FF0000] hover:bg-red-700 text-white px-10 py-2 rounded text-sm font-bold shadow-sm w-32 transition-colors">Huỷ</button>
        </>
      );
    }
  };

  const isReadOnly = mode === 'view';
  const inputClass = `w-full border rounded px-4 py-2 text-[14px] font-semibold text-gray-800 transition-colors focus:outline-none ${
    isReadOnly ? 'border-gray-400 bg-transparent' : 'border-gray-500 bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
  }`;

  return (
    <div className="h-full flex flex-col items-center pt-4">
      <h1 className="text-xl font-bold text-gray-800 uppercase text-center mb-6 tracking-wide">
        Quản lý thông tin hợp đồng phân phối
      </h1>

      <h2 className="text-lg font-bold text-gray-800 mb-10 text-center">
        {getTitle()}
      </h2>

      <div className="w-full max-w-3xl space-y-6">
        
        {/* ================= CÁC TRƯỜNG NHẬP LIỆU (Đã căn lề thẳng tắp) ================= */}
        <div className="flex items-center gap-4 w-full">
          <label className="text-[14px] font-bold text-gray-800 w-48 flex-shrink-0 text-right">Nhà cung cấp (Bên A):</label>
          <div className="flex-1">
            <input type="text" readOnly={isReadOnly} defaultValue="Chi nhánh công ty CP Xăng dầu dầu khí PV Oil Miền Trung tại Đà Nẵng" className={inputClass} />
          </div>
        </div>
        
        <div className="flex items-center gap-4 w-full">
          <label className="text-[14px] font-bold text-gray-800 w-48 flex-shrink-0 text-right leading-tight">Cửa hàng phân phối<br/>(Bên B):</label>
          <div className="flex-1">
            <input type="text" readOnly={isReadOnly} defaultValue="CHXD Hoàng Văn Thái" className={inputClass} />
          </div>
        </div>

        <div className="flex items-center gap-4 w-full">
          <label className="text-[14px] font-bold text-gray-800 w-48 flex-shrink-0 text-right">Địa chỉ trụ sở:</label>
          <div className="flex-1">
            <input type="text" readOnly={isReadOnly} defaultValue="Đường Hoàng Văn Thái, tổ 6, phường Hoà Khánh" className={inputClass} />
          </div>
        </div>

        <div className="flex items-center gap-4 w-full">
          <label className="text-[14px] font-bold text-gray-800 w-48 flex-shrink-0 text-right">Số điện thoại:</label>
          <div className="flex-1">
            <input type="text" readOnly={isReadOnly} defaultValue="0236 3831133" className={inputClass} />
          </div>
        </div>

        <div className="flex items-center gap-4 w-full">
          <label className="text-[14px] font-bold text-gray-800 w-48 flex-shrink-0 text-right">Ngày bắt đầu:</label>
          <div className="flex-1">
            <input type="text" readOnly={isReadOnly} defaultValue="01/01/2026" className={`${inputClass} max-w-[200px]`} />
          </div>
        </div>

        <div className="flex items-center gap-4 w-full">
          <label className="text-[14px] font-bold text-gray-800 w-48 flex-shrink-0 text-right">Ngày hết hạn:</label>
          <div className="flex-1">
            <input type="text" readOnly={isReadOnly} defaultValue="31/12/2030" className={`${inputClass} max-w-[200px]`} />
          </div>
        </div>

        {/* Nút giả lập Lỗi */}
        {(mode === 'create' || mode === 'edit') && (
          <div className="flex justify-end pr-4">
             <span onClick={() => setPopupState('error')} className="text-xs text-gray-400 hover:text-red-500 cursor-pointer underline">
                (Test lỗi trùng mạng lưới)
             </span>
          </div>
        )}

        {/* ================= CỤM NÚT THAO TÁC ================= */}
        <div className="flex justify-end gap-10 pt-8 border-t border-gray-200 mt-4">
          {renderActionButtons()}
        </div>

      </div>

      {/* ================= POPUP THÔNG BÁO ================= */}
      {popupState === 'success' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-[1px]">
          <div className="bg-white rounded-xl shadow-2xl p-8 w-[400px] flex flex-col items-center text-center border border-gray-200 animate-in fade-in zoom-in duration-200">
            <CheckCircle2 size={65} className="text-[#4CAF50] mb-5" strokeWidth={1.5} />
            <p className="font-bold text-[16px] mb-6 text-gray-800 px-4 leading-relaxed">
              Hợp lệ: Không phát hiện trùng lặp mạng lưới
            </p>
            <button onClick={() => { setPopupState('none'); navigate('/hop-dong-phan-phoi'); }} className="bg-[#4CAF50] hover:bg-green-600 text-white px-10 py-2 rounded-md text-sm font-bold transition-colors">
              Đóng
            </button>
          </div>
        </div>
      )}

      {popupState === 'error' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-[1px]">
          <div className="bg-white rounded-xl shadow-2xl p-8 w-[450px] flex flex-col items-center text-center border border-gray-200 animate-in fade-in zoom-in duration-200">
            <XCircle size={65} className="text-red-500 mb-4" strokeWidth={1.5} />
            <p className="font-semibold text-[14px] mb-6 text-gray-800 px-4 leading-relaxed">
              Cửa hàng này đang thuộc mạng lưới của <span className="font-bold text-red-600">Công ty CP Xăng dầu Dầu khí (PV Oil)</span>. Hợp đồng cũ vẫn đang hiệu lực đến 31/12/2026. Vui lòng làm thủ tục thanh lý hợp đồng cũ trước khi thiết lập hợp đồng mới!
            </p>
            <button onClick={() => setPopupState('none')} className="bg-[#4CAF50] hover:bg-green-600 text-white px-10 py-2 rounded-md text-sm font-bold transition-colors">
              Đóng
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default HopDongPhanPhoi;