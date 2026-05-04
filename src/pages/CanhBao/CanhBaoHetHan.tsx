import React, { useState } from 'react';
import { AlertTriangle, CheckCircle2, X, Send } from 'lucide-react';

// Dữ liệu giả lập (Mock Data) theo đúng hình ảnh thiết kế
const mockData = [
  { 
    id: 1, 
    soGiayPhep: 'HD-2025-03-001', 
    tenDN: 'Công ty TNHH MTV Hòa Khánh 1', 
    cuaHang: 'CHXD Hòa Khánh 11', 
    ngayHetHan: '31/12/2026', 
    trangThai: 'Còn 245 ngày', 
    isQuaHan: false 
  },
  { 
    id: 2, 
    soGiayPhep: 'HD-2025-03-001', 
    tenDN: 'Chi nhánh công ty CP Xăng dầu dầu khí PV Oil Miền Trung tại Đà Nẵng', 
    cuaHang: 'CHXD Tiểu La', 
    ngayHetHan: '31/12/2025', 
    trangThai: 'Đã quá hạn 90 ngày', 
    isQuaHan: true 
  },
  { 
    id: 3, 
    soGiayPhep: 'HD-2025-03-001', 
    tenDN: 'Công ty CP TM & Vận Tải Petrolimex ĐN', 
    cuaHang: 'Công ty CP TM & Vận Tải Petrolimex ĐN', 
    ngayHetHan: '31/12/2026', 
    trangThai: 'Còn 245 ngày', 
    isQuaHan: false 
  },
  { 
    id: 4, 
    soGiayPhep: 'HD-2025-03-001', 
    tenDN: 'CN Công ty TNHH TM&DV Vận Tải Ngọc Khánh', 
    cuaHang: 'CHXD số 7 Duy Tân', 
    ngayHetHan: '31/12/2026', 
    trangThai: 'Còn 245 ngày', 
    isQuaHan: false 
  },
];

const CanhBaoHetHan = () => {
  // Trạng thái quản lý Popup: 'none' | 'confirm' | 'success'
  const [popupState, setPopupState] = useState<'none' | 'confirm' | 'success'>('none');
  // Lưu trữ thông tin dòng đang được chọn để gửi nhắc nhở
  const [selectedItem, setSelectedItem] = useState<any>(null);

  // Mở popup xác nhận gửi
  const handleOpenConfirm = (item: any) => {
    setSelectedItem(item);
    setPopupState('confirm');
  };

  // Xử lý Gửi (Chuyển từ Xác nhận -> Thành công)
  const handleSendReminder = () => {
    setPopupState('success');
  };

  // Đóng toàn bộ Popup
  const handleClosePopup = () => {
    setPopupState('none');
    setSelectedItem(null);
  };

  return (
    <div className="h-full flex flex-col pt-4">
      <h1 className="text-xl font-bold text-gray-800 uppercase text-center mb-8 tracking-wide">
        CẢNH BÁO GIẤY PHÉP SẮP HẾT HẠN
      </h1>

      {/* ================= BỘ LỌC TÌM KIẾM ================= */}
      <div className="mb-6 flex items-center justify-between gap-4 w-full bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
        <div className="flex items-center gap-3 flex-1">
          <label className="text-[13px] font-bold text-gray-800 whitespace-nowrap w-28 text-right">Tên doanh nghiệp</label>
          <input type="text" className="w-full border border-gray-400 rounded-md px-3 py-1.5 focus:outline-none focus:border-blue-500 text-sm" />
        </div>
        
        <div className="flex items-center gap-3 flex-1">
          <label className="text-[13px] font-bold text-gray-800 whitespace-nowrap w-24 text-right">Số Giấy phép</label>
          <input type="text" className="w-full border border-gray-400 rounded-md px-3 py-1.5 focus:outline-none focus:border-blue-500 text-sm" />
        </div>

        <div className="flex items-center gap-3 flex-1">
          <label className="text-[13px] font-bold text-gray-800 whitespace-nowrap w-20 text-right">Trạng thái</label>
          <select className="w-full border border-gray-400 rounded-md px-3 py-1.5 focus:outline-none focus:border-blue-500 text-sm bg-white cursor-pointer">
            <option value="">Tất cả</option>
            <option value="sap-het-han">Sắp hết hạn</option>
            <option value="qua-han">Đã quá hạn</option>
          </select>
        </div>

        <button className="bg-[#4CAF50] hover:bg-green-600 text-white px-8 py-1.5 rounded-md transition-colors text-sm font-bold shadow-sm whitespace-nowrap">
          Tra cứu
        </button>
      </div>

      {/* ================= BẢNG DANH SÁCH ================= */}
      <div className="overflow-x-auto bg-white border border-gray-300 rounded shadow-sm flex-1 custom-scrollbar">
        <table className="w-full text-sm text-center">
          <thead className="text-[13px] text-gray-800 bg-[#CDE0F5] sticky top-0 z-10 shadow-sm border-b border-gray-300">
            <tr>
              <th className="px-3 py-4 border-r border-gray-300 w-12 font-semibold">STT</th>
              <th className="px-4 py-4 border-r border-gray-300 font-semibold w-32">Số giấy phép</th>
              <th className="px-4 py-4 border-r border-gray-300 font-semibold w-64">Tên doanh nghiệp</th>
              <th className="px-4 py-4 border-r border-gray-300 font-semibold w-64">Cửa hàng phân phối (B)</th>
              <th className="px-4 py-4 border-r border-gray-300 font-semibold w-32">Ngày hết hạn</th>
              <th className="px-4 py-4 border-r border-gray-300 font-semibold w-40">Trạng thái</th>
              <th className="px-4 py-4 font-semibold w-32">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {mockData.map((row, index) => (
              <tr key={row.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="px-3 py-4 border-r border-gray-200 font-medium">{index + 1}</td>
                <td className="px-4 py-4 border-r border-gray-200 font-bold text-gray-700">{row.soGiayPhep}</td>
                <td className="px-4 py-4 border-r border-gray-200 font-medium text-gray-800 text-left">{row.tenDN}</td>
                <td className="px-4 py-4 border-r border-gray-200 font-medium text-gray-600 text-left">{row.cuaHang}</td>
                <td className="px-4 py-4 border-r border-gray-200 font-medium text-gray-700">{row.ngayHetHan}</td>
                <td className="px-4 py-4 border-r border-gray-200 font-bold">
                  {/* Đổi màu text dựa trên trạng thái */}
                  <span className={row.isQuaHan ? "text-red-600" : "text-gray-800"}>
                    {row.trangThai}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <button 
                    onClick={() => handleOpenConfirm(row)}
                    className="bg-[#6FCF97] hover:bg-[#5EBC84] text-white px-4 py-1.5 rounded-md text-[12px] font-bold shadow-sm whitespace-nowrap flex items-center gap-1.5 mx-auto"
                  >
                    Gửi nhắc nhở
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ================= POPUP 1: XÁC NHẬN GỬI THÔNG BÁO ================= */}
      {popupState === 'confirm' && selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-[1px]">
          <div className="bg-white rounded-xl shadow-2xl p-6 w-[450px] border border-gray-200 animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg text-gray-800 flex items-center gap-2">
                <AlertTriangle className="text-[#F59E0B]" size={24} />
                Xác nhận gửi nhắc nhở
              </h3>
              <button onClick={handleClosePopup} className="text-gray-400 hover:text-gray-600"><X size={20} /></button>
            </div>
            
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              Bạn có chắc chắn muốn gửi Email/SMS thông báo nhắc nhở gia hạn giấy phép đến:
            </p>
            <div className="bg-gray-50 p-3 rounded border border-gray-200 mb-6 text-[13px]">
              <div className="mb-1"><span className="font-semibold w-24 inline-block">Doanh nghiệp:</span> {selectedItem.tenDN}</div>
              <div className="mb-1"><span className="font-semibold w-24 inline-block">Số GP:</span> {selectedItem.soGiayPhep}</div>
              <div><span className="font-semibold w-24 inline-block">Trạng thái:</span> <span className={selectedItem.isQuaHan ? "text-red-600 font-bold" : "text-orange-500 font-bold"}>{selectedItem.trangThai}</span></div>
            </div>

            <div className="flex justify-end gap-3">
              <button onClick={handleClosePopup} className="px-6 py-2 rounded text-sm font-semibold text-gray-600 hover:bg-gray-100 border border-transparent">
                Hủy bỏ
              </button>
              <button onClick={handleSendReminder} className="bg-[#F59E0B] hover:bg-yellow-500 text-white px-6 py-2 rounded font-bold text-sm shadow-sm flex items-center gap-2">
                <Send size={16} />
                Xác nhận gửi
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= POPUP 2: THÀNH CÔNG ================= */}
      {popupState === 'success' && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/20 backdrop-blur-[1px]">
          <div className="bg-white rounded-xl shadow-2xl p-8 w-[380px] flex flex-col items-center text-center border border-gray-200 animate-in fade-in zoom-in duration-200">
            <CheckCircle2 size={65} className="text-[#4CAF50] mb-5" strokeWidth={1.5} />
            <h3 className="font-bold text-xl mb-3 text-gray-800">Gửi nhắc nhở thành công!</h3>
            <p className="text-sm text-gray-600 mb-8 px-2 leading-relaxed">
              Hệ thống đã gửi thông báo qua Cổng DVC và SMS/Email đến đại diện doanh nghiệp.
            </p>
            <button 
              onClick={handleClosePopup}
              className="bg-[#4CAF50] hover:bg-green-600 text-white px-10 py-2 rounded-md font-bold transition-colors shadow-sm w-full"
            >
              Đóng
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default CanhBaoHetHan;