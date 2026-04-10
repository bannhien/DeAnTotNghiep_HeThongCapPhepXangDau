import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ZoomIn, ZoomOut, RotateCw, Download, CheckCircle2, Edit3, X } from 'lucide-react';

const LapDuThao = () => {
  const navigate = useNavigate();

  // Quản lý các Popup
  const [popupState, setPopupState] = useState<'none' | 'edit' | 'success'>('none');

  return (
    <div className="h-full flex flex-col">
      <h1 className="text-xl font-bold text-gray-800 uppercase text-center mb-6 tracking-wide">
        Xem trước dự thảo giấy chứng nhận
      </h1>

      <div className="flex-1 flex gap-8 h-full min-h-[650px] max-w-6xl mx-auto w-full">
        
        {/* ================= PHẦN TRÁI: TRÌNH XEM PDF ================= */}
        <div className="flex-1 bg-white border border-gray-400 rounded-lg flex flex-col overflow-hidden shadow-sm">
          {/* Toolbar */}
          <div className="h-10 bg-[#E5E7EB] border-b border-gray-400 flex items-center justify-between px-4">
            <div className="w-20"></div> {/* Spacer */}
            <div className="text-xs font-semibold text-gray-700 bg-white px-3 py-1 rounded border border-gray-300">Page: 1/1</div>
            <div className="flex gap-3 text-gray-600">
              <ZoomIn size={18} className="cursor-pointer hover:text-gray-900" />
              <ZoomOut size={18} className="cursor-pointer hover:text-gray-900" />
              <RotateCw size={18} className="cursor-pointer hover:text-gray-900" />
              <Download size={18} className="cursor-pointer hover:text-gray-900" />
            </div>
          </div>
          {/* PDF Content Area */}
          <div className="flex-1 bg-gray-50 flex justify-center p-6 overflow-y-auto">
            {/* Giả lập tờ giấy A4 */}
            <div className="w-full max-w-2xl bg-white shadow-md border border-gray-200 h-[800px] p-10 flex flex-col items-center relative">
               <div className="text-center mb-8">
                 <h2 className="font-bold text-lg">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</h2>
                 <p className="font-semibold underline">Độc lập - Tự do - Hạnh phúc</p>
               </div>
               <h1 className="text-xl font-black text-red-600 mb-6">GIẤY CHỨNG NHẬN ĐỦ ĐIỀU KIỆN</h1>
               <h2 className="text-lg font-bold mb-10">CỬA HÀNG BÁN LẺ XĂNG DẦU</h2>
               
               <div className="w-full space-y-4 text-[15px] leading-relaxed">
                 <p><strong>Cấp cho doanh nghiệp:</strong> Chi nhánh công ty CP Xăng dầu dầu khí PV Oil Miền Trung tại Đà Nẵng</p>
                 <p><strong>Mã số thuế:</strong> 4300603574-002</p>
                 <p><strong>Địa chỉ trụ sở chính:</strong> 197 Cách mạng Tháng Tám, Phường Khuê Trung, Quận Cẩm Lệ, TP Đà Nẵng</p>
                 <p><strong>Địa điểm cửa hàng:</strong> PVOIL CHXD Khuê Trung</p>
                 <p>Đủ điều kiện kinh doanh xăng dầu theo quy định tại Nghị định số 83/2014/NĐ-CP và Nghị định số 95/2021/NĐ-CP.</p>
               </div>
               
               <div className="absolute bottom-20 right-20 text-center">
                 <p className="italic mb-2">Đà Nẵng, ngày ... tháng ... năm 2026</p>
                 <p className="font-bold">GIÁM ĐỐC SỞ</p>
                 <div className="h-24"></div>
                 <p className="font-bold">(Chữ ký số)</p>
               </div>
            </div>
          </div>
        </div>

        {/* ================= PHẦN PHẢI: CÁC NÚT THAO TÁC ================= */}
        <div className="w-[220px] flex flex-col gap-4 pt-12">
          <button 
            onClick={() => setPopupState('edit')}
            className="w-full bg-[#F59E0B] hover:bg-yellow-500 text-white py-2.5 rounded-md font-bold text-[13px] shadow-sm transition-colors flex items-center justify-center gap-2"
          >
            <Edit3 size={16} />
            Chỉnh sửa
          </button>
          
          <button 
            onClick={() => setPopupState('success')}
            className="w-full bg-[#6FCF97] hover:bg-[#5EBC84] text-white py-2.5 rounded-md font-bold text-[13px] shadow-sm transition-colors"
          >
            Trình HS lên Lãnh đạo
          </button>
        </div>
      </div>

      {/* ================= POPUP 1: CHỈNH SỬA DỰ THẢO ================= */}
      {popupState === 'edit' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-[1px]">
          <div className="bg-white rounded-xl shadow-2xl w-[600px] border border-gray-200 overflow-hidden">
            <div className="bg-[#1565C0] px-6 py-3 flex justify-between items-center">
              <h3 className="font-bold text-white uppercase tracking-wide">Chỉnh sửa thông tin dự thảo</h3>
              <button onClick={() => setPopupState('none')} className="text-white hover:text-gray-200"><X size={20} /></button>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700">Tên doanh nghiệp</label>
                <input type="text" defaultValue="Chi nhánh công ty CP Xăng dầu dầu khí PV Oil Miền Trung tại Đà Nẵng" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500" />
              </div>
              <div className="flex gap-4">
                <div className="space-y-1 flex-1">
                  <label className="text-xs font-bold text-gray-700">Mã số thuế</label>
                  <input type="text" defaultValue="4300603574-002" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500" />
                </div>
                <div className="space-y-1 flex-1">
                  <label className="text-xs font-bold text-gray-700">Người đại diện</label>
                  <input type="text" defaultValue="Nguyễn Văn A" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700">Địa chỉ trụ sở</label>
                <input type="text" defaultValue="197 Cách mạng Tháng Tám, Phường Khuê Trung, Quận Cẩm Lệ, TP Đà Nẵng" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700">Tên Cửa hàng / Địa điểm</label>
                <input type="text" defaultValue="PVOIL CHXD Khuê Trung" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500" />
              </div>
            </div>

            <div className="bg-gray-50 px-6 py-4 flex justify-end gap-3 border-t border-gray-200">
              <button onClick={() => setPopupState('none')} className="bg-white border border-gray-400 text-gray-700 px-6 py-1.5 rounded text-sm font-semibold hover:bg-gray-100">Huỷ</button>
              <button onClick={() => setPopupState('none')} className="bg-[#1565C0] hover:bg-blue-700 text-white px-8 py-1.5 rounded text-sm font-bold shadow-sm">Lưu thay đổi</button>
            </div>
          </div>
        </div>
      )}

      {/* ================= POPUP 2: TRÌNH LÃNH ĐẠO THÀNH CÔNG ================= */}
      {popupState === 'success' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-[1px]">
          <div className="bg-white rounded-xl shadow-2xl p-8 w-[450px] flex flex-col items-center text-center relative border border-gray-200 animate-in fade-in zoom-in duration-200">
            <CheckCircle2 size={65} className="text-[#4CAF50] mb-5" strokeWidth={1.5} />
            <h3 className="font-bold text-xl mb-3 text-gray-800">Trình Lãnh đạo thành công!</h3>
            <p className="text-sm text-gray-600 mb-8 leading-relaxed px-4">
              Bản dự thảo Giấy chứng nhận đã được gửi lên hệ thống của <span className="font-bold text-gray-800">Ban Lãnh Đạo</span> để chờ phê duyệt và ký số.
            </p>
            <button 
              onClick={() => {
                setPopupState('none');
                navigate('/tham-dinh-thuc-te'); // Thường sau khi trình xong sẽ đẩy về trang danh sách
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

export default LapDuThao;