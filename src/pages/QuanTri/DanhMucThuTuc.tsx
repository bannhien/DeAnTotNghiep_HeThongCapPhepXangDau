import { useState } from 'react';
import { CheckCircle2, X } from 'lucide-react';

const DanhMucThuTuc = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const mockData = [
    { stt: 1, ma: 'TT_001', ten: 'Cấp mới', thoiGian: '20 ngày', lePhi: '1.200.000 VNĐ' },
    { stt: 2, ma: 'TT_002', ten: 'Cấp sửa đổi', thoiGian: '20 ngày', lePhi: '600.000 VNĐ' },
    { stt: 3, ma: 'TT_003', ten: 'Cấp lại', thoiGian: '20 ngày', lePhi: '0 VNĐ' },
  ];

  const handleSaveEdit = () => {
    setShowEditModal(false);
    setShowSuccessPopup(true);
  };

  return (
    <div className="h-full flex flex-col pt-4">
      <h1 className="text-xl font-bold text-gray-800 uppercase text-center mb-8 tracking-wide">
        HỆ THỐNG QUẢN LÝ DANH MỤC LOẠI THỦ TỤC
      </h1>

      <div className="overflow-x-auto bg-white border border-gray-300 rounded shadow-sm max-w-5xl mx-auto w-full">
        <table className="w-full text-sm text-center">
          <thead className="text-[13px] text-gray-800 bg-[#CDE0F5] border-b border-gray-300">
            <tr>
              <th className="px-4 py-4 border-r border-gray-300 w-16">STT</th>
              <th className="px-4 py-4 border-r border-gray-300 w-1/5">Mã thủ tục</th>
              <th className="px-4 py-4 border-r border-gray-300 w-1/4">Tên thủ tục</th>
              <th className="px-4 py-4 border-r border-gray-300">Thời gian quy định</th>
              <th className="px-4 py-4 border-r border-gray-300">Lệ phí</th>
              <th className="px-4 py-4 font-semibold">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {mockData.map((row, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="px-4 py-5 border-r border-gray-200 font-medium">{row.stt}</td>
                <td className="px-4 py-5 border-r border-gray-200 font-medium">{row.ma}</td>
                <td className="px-4 py-5 border-r border-gray-200 font-bold text-gray-800">{row.ten}</td>
                <td className="px-4 py-5 border-r border-gray-200 font-medium">{row.thoiGian}</td>
                <td className="px-4 py-5 border-r border-gray-200 font-bold text-gray-700">{row.lePhi}</td>
                <td className="px-4 py-5">
                  <button onClick={() => setShowEditModal(true)} className="bg-[#F59E0B] hover:bg-yellow-500 text-white px-6 py-1.5 rounded-md text-[12px] font-bold shadow-sm">Sửa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL CHỈNH SỬA */}
      {showEditModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-[1px]">
          <div className="bg-white rounded-xl shadow-2xl w-[450px] border border-gray-200 overflow-hidden">
            <div className="bg-[#1565C0] px-5 py-3 flex justify-between items-center">
              <h3 className="font-bold text-white tracking-wide">Chỉnh sửa danh mục thủ tục</h3>
              <button onClick={() => setShowEditModal(false)} className="text-white hover:text-gray-200"><X size={20} /></button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1">Thời gian giải quyết (ngày)</label>
                <input type="number" defaultValue="20" className="w-full border border-gray-400 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1">Chi phí / Lệ phí (VNĐ)</label>
                <input type="text" defaultValue="1.200.000" className="w-full border border-gray-400 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500" />
              </div>
            </div>
            <div className="bg-gray-50 px-6 py-4 flex justify-end gap-3 border-t border-gray-200">
              <button onClick={() => setShowEditModal(false)} className="bg-white border border-gray-400 text-gray-700 px-6 py-1.5 rounded text-sm font-semibold hover:bg-gray-100">Huỷ</button>
              <button onClick={handleSaveEdit} className="bg-[#4CAF50] hover:bg-green-600 text-white px-8 py-1.5 rounded text-sm font-bold shadow-sm">Lưu thay đổi</button>
            </div>
          </div>
        </div>
      )}

      {/* POPUP LƯU THÀNH CÔNG */}
      {showSuccessPopup && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/10 backdrop-blur-[1px]">
          <div className="bg-white rounded-xl shadow-2xl p-8 w-[450px] flex flex-col items-center text-center border border-gray-200 animate-in fade-in zoom-in duration-200">
            <CheckCircle2 size={65} className="text-[#4CAF50] mb-5" strokeWidth={1.5} />
            <h3 className="font-bold text-lg mb-8 text-gray-800 leading-relaxed px-4">Đã chỉnh sửa thông tin danh mục cấp phép</h3>
            <button onClick={() => setShowSuccessPopup(false)} className="bg-[#4CAF50] hover:bg-green-600 text-white px-10 py-2 rounded-md font-bold transition-colors">Đóng</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DanhMucThuTuc;