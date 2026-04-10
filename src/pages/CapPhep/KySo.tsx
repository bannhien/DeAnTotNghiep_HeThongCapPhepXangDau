import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ZoomIn, ZoomOut, RotateCw, Download, CheckCircle2, X } from 'lucide-react';

const KySo = () => {
  const navigate = useNavigate();

  // Quản lý các trạng thái popup
  const [popupState, setPopupState] = useState<'none' | 'reject' | 'reject_success' | 'smartca' | 'success'>('none');
  
  // State quản lý việc nhập mã PIN
  const [pinCode, setPinCode] = useState('');

  // Xử lý khi bấm nút Xác thực mã PIN SmartCA
  const handleConfirmPIN = () => {
    if (pinCode.trim() !== '') {
      setPopupState('success');
      setPinCode('');
    }
  };

  return (
    <div className="h-full flex flex-col items-center">
      <h1 className="text-xl font-bold text-gray-800 uppercase text-center mb-6 tracking-wide">
        KÝ SỐ GIẤY CHỨNG NHẬN
      </h1>

      <div className="flex-1 flex gap-6 h-full w-full max-w-6xl">
        
        {/* ================= CỘT TRÁI: THÔNG TIN TRÌNH DUYỆT ================= */}
        <div className="w-[450px] flex flex-col gap-5">
          {/* Khối trắng nội dung */}
          <div className="flex-1 bg-white border border-gray-400 rounded-lg p-8 flex flex-col shadow-sm relative">
            <h2 className="text-lg font-black text-gray-800 uppercase mb-8 text-center">
              THÔNG TIN TRÌNH DUYỆT
            </h2>

            <div className="space-y-6 text-[15px] text-gray-800 flex-1">
              <p><span className="font-semibold">Hồ sơ:</span> Cấp mới giấy chứng nhận<br/>cửa hàng xăng dầu</p>
              <p><span className="font-semibold">Doanh nghiệp:</span> Công ty TNHH MTV PV OIL<br/>(Cửa hàng xăng dầu số 11)</p>
              <p><span className="font-semibold">Người trình hồ sơ:</span> Nguyễn Thị Hiền</p>
              <p><span className="font-semibold">Ý kiến đề xuất:</span> Hồ sơ đủ điều kiện, kính trình<br/>lãnh đạo phê duyệt</p>
              <p><span className="font-semibold">Trạng thái:</span> Chờ lãnh đạo phê duyệt</p>
            </div>
          </div>
          
          {/* Nút thao tác nằm ngoài khối trắng, cân bằng với nút bên phải */}
          <div className="flex justify-center">
            <button 
              onClick={() => setPopupState('reject')}
              className="bg-[#FF0000] hover:bg-red-700 text-white px-12 py-2.5 rounded-md text-sm font-bold shadow-sm transition-colors"
            >
              Từ chối
            </button>
          </div>
        </div>

        {/* ================= CỘT PHẢI: TRÌNH XEM PDF ================= */}
        <div className="flex-1 flex flex-col gap-5">
          {/* Khối trắng nội dung (Trình xem PDF) */}
          <div className="flex-1 bg-white border border-gray-400 rounded-lg flex flex-col overflow-hidden shadow-sm">
            {/* Toolbar PDF */}
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
            {/* Vùng xem PDF */}
            <div className="flex-1 bg-gray-50 flex justify-center p-4 overflow-y-auto">
              {/* Giả lập tờ PDF - Chiều cao linh hoạt thay vì cố định */}
              <div className="w-full max-w-xl min-h-[600px] h-full bg-white shadow-md border border-gray-200"></div>
            </div>
          </div>
          
          {/* Nút thao tác nằm ngoài khối trắng */}
          <div className="flex justify-end">
            <button 
              onClick={() => setPopupState('smartca')}
              className="bg-[#4CAF50] hover:bg-green-600 text-white px-10 py-2.5 rounded-md text-sm font-bold shadow-sm transition-colors"
            >
              Ký số phê duyệt
            </button>
          </div>
        </div>
      </div>

      {/* ================= CÁC POPUP THÔNG BÁO GIỮ NGUYÊN NHƯ CŨ ================= */}

      {/* POPUP TỪ CHỐI */}
      {popupState === 'reject' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-[1px]">
          <div className="bg-white rounded-xl shadow-2xl w-[500px] border border-gray-200 overflow-hidden">
            <div className="p-6">
              <h3 className="text-center font-bold text-lg mb-4 text-gray-800">Lý do từ chối hồ sơ</h3>
              <textarea 
                className="w-full h-32 border border-gray-400 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-400 resize-none"
                placeholder="Nhập chi tiết lý do từ chối hồ sơ trình duyệt..."
              ></textarea>
            </div>
            <div className="flex justify-center gap-6 pb-6">
              <button onClick={() => setPopupState('reject_success')} className="bg-[#F59E0B] hover:bg-yellow-500 text-white px-8 py-2 rounded font-bold text-sm transition-colors">
                Gửi thông báo
              </button>
              <button onClick={() => setPopupState('none')} className="bg-[#FF0000] hover:bg-red-600 text-white px-8 py-2 rounded font-bold text-sm transition-colors">
                Huỷ
              </button>
            </div>
          </div>
        </div>
      )}

      {/* POPUP TỪ CHỐI THÀNH CÔNG */}
      {popupState === 'reject_success' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-[1px]">
          <div className="bg-white rounded-xl shadow-2xl p-8 w-[420px] flex flex-col items-center text-center relative border border-gray-200 animate-in fade-in zoom-in duration-200">
            <CheckCircle2 size={65} className="text-[#F59E0B] mb-5" strokeWidth={1.5} />
            <h3 className="font-bold text-xl mb-3 text-gray-800">Đã gửi thông báo!</h3>
            <p className="text-sm text-gray-600 mb-8 leading-relaxed">
              Thông báo từ chối phê duyệt hồ sơ đã được gửi lại cho chuyên viên trình duyệt.
            </p>
            <button 
              onClick={() => {
                setPopupState('none');
                navigate('/ky-so'); 
              }} 
              className="bg-[#F59E0B] hover:bg-yellow-500 text-white px-10 py-2 rounded-md font-bold transition-colors shadow-sm"
            >
              Hoàn tất
            </button>
          </div>
        </div>
      )}

      {/* POPUP SMART CA */}
      {popupState === 'smartca' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-[1px]">
          <div className="bg-white rounded-xl shadow-2xl w-[500px] border border-gray-200 overflow-hidden relative">
            <div className="bg-[#1565C0] px-6 py-4 flex justify-between items-center">
              <h3 className="font-bold text-white text-lg w-full text-center tracking-wide">Xác thực Chữ ký số (SmartCA)</h3>
              <button onClick={() => setPopupState('none')} className="text-white hover:text-gray-200 absolute right-4"><X size={24} strokeWidth={2.5}/></button>
            </div>
            
            <div className="p-8 flex flex-col items-center">
              <p className="text-gray-700 font-semibold mb-4">Vui lòng nhập mã PIN Chứng thư số</p>
              
              <input 
                type="password"
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
                placeholder="Nhập mã PIN..."
                className="border border-gray-400 rounded p-3 w-full max-w-sm text-center text-lg tracking-widest focus:outline-none focus:border-[#1565C0] focus:ring-1 focus:ring-[#1565C0] transition-colors bg-gray-50 focus:bg-white"
                autoFocus
              />

              <button 
                onClick={handleConfirmPIN}
                disabled={pinCode.trim() === ''}
                className={`mt-6 px-10 py-2 rounded text-sm font-bold shadow-sm transition-colors ${
                  pinCode.trim() !== '' ? 'bg-[#1565C0] hover:bg-blue-800 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Xác thực
              </button>
              
              <p className="text-[11px] text-gray-400 mt-4 italic text-center">
                Yêu cầu ký số sẽ được gửi về thiết bị di động đã đăng ký.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* POPUP KÝ SỐ THÀNH CÔNG */}
      {popupState === 'success' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-[1px]">
          <div className="bg-white rounded-xl shadow-2xl p-8 w-[420px] flex flex-col items-center text-center relative border border-gray-200 animate-in fade-in zoom-in duration-200">
            <CheckCircle2 size={65} className="text-[#4CAF50] mb-5" strokeWidth={1.5} />
            <h3 className="font-bold text-[17px] mb-8 text-gray-800 leading-relaxed px-4">
              Đã ký số giấy chứng nhận cấp phép thành công
            </h3>
            <button 
              onClick={() => {
                setPopupState('none');
                navigate('/ky-so'); 
              }} 
              className="bg-[#4CAF50] hover:bg-green-600 text-white px-10 py-2 rounded-md font-bold transition-colors shadow-sm"
            >
              Đóng
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default KySo;