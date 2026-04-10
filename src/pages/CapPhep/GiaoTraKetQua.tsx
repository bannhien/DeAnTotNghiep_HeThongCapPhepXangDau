import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

const GiaoTraKetQua = () => {
  // Quản lý trạng thái Popup: 'none' | 'success'
  const [popupState, setPopupState] = useState<'none' | 'success'>('none');

  // Dữ liệu giả lập dựa trên thiết kế
  const mockData = [
    { stt: 1, tenDN: 'Chi nhánh công ty CP Xăng dầu dầu khí PV Oil Miền Trung tại Đà Nẵng', soGP: '123/GP-XD-SCT', hinhThuc: 'Nhận trực tiếp tại Quầy', ngay: '30/3/2026' },
    { stt: 2, tenDN: 'CN Công ty TNHH TM&DV Vận Tải Ngọc Khánh', soGP: '124/GP-XD-SCT', hinhThuc: 'Nhận trực tiếp tại Quầy', ngay: '23/03/2026' },
    { stt: 3, tenDN: 'Công ty CP TM &Vận Tải Petrolimex ĐN', soGP: '125/GP-XD-SCT', hinhThuc: 'Nhận trực tiếp tại Quầy', ngay: '25/4/2026' },
    { stt: 4, tenDN: 'Công ty TNHH TM&DVTH Hòa Khánh', soGP: '126/GP-XD-SCT', hinhThuc: 'Nhận qua Bưu điện', ngay: '12/4/2026' },
  ];

  // Xử lý khi bấm nút Hoàn tất
  const handleComplete = () => {
    setPopupState('success');
  };

  return (
    <div className="h-full flex flex-col pt-4">
      <h1 className="text-xl font-bold text-gray-800 uppercase text-center mb-8 tracking-wide">
        Giao trả kết quả
      </h1>

      {/* ================= BỘ LỌC TÌM KIẾM ĐÃ CHUẨN HÓA LẠI ================= */}
      <div className="mb-8 flex items-center justify-between gap-5 max-w-6xl mx-auto w-full">
        
        {/* Số Giấy phép */}
        <div className="flex items-center gap-3 flex-1">
          <label className="text-[13px] font-bold text-gray-800 flex-shrink-0 whitespace-nowrap">Số Giấy phép</label>
          <input type="text" className="w-full border border-gray-400 rounded-full px-4 py-1.5 focus:outline-none focus:border-blue-500 text-sm bg-white" />
        </div>
        
        {/* Tên Doanh nghiệp */}
        <div className="flex items-center gap-3 flex-1">
          <label className="text-[13px] font-bold text-gray-800 flex-shrink-0 whitespace-nowrap">Tên Doanh nghiệp</label>
          <input type="text" className="w-full border border-gray-400 rounded-full px-4 py-1.5 focus:outline-none focus:border-blue-500 text-sm bg-white" />
        </div>
        
        {/* Hình thức trả (Đã chuyển thành Dropdown) */}
        <div className="flex items-center gap-3 flex-[0.8]">
          <label className="text-[13px] font-bold text-gray-800 flex-shrink-0 whitespace-nowrap">Hình thức trả</label>
          <select className="w-full border border-gray-400 rounded-full px-4 py-1.5 focus:outline-none focus:border-blue-500 text-sm bg-white cursor-pointer appearance-none">
            <option value="">Tất cả hình thức</option>
            <option value="truc-tiep">Nhận trực tiếp tại Quầy</option>
            <option value="buu-dien">Nhận qua Bưu điện</option>
            <option value="truc-tuyen">Nhận bản điện tử</option>
          </select>
        </div>
        
        {/* Nút Tra cứu */}
        <button className="bg-[#4CAF50] hover:bg-green-600 text-white px-8 py-1.5 rounded-md transition-colors text-sm font-bold shadow-sm flex-shrink-0 ml-2">
          Tra cứu
        </button>

      </div>

      {/* ================= BẢNG DANH SÁCH ================= */}
      <div className="overflow-x-auto bg-white border border-gray-300 rounded shadow-sm flex-1 custom-scrollbar">
        <table className="w-full text-sm text-center">
          <thead className="text-[13px] text-gray-800 bg-[#CDE0F5] sticky top-0 z-10 shadow-sm border-b border-gray-300">
            <tr>
              <th className="px-3 py-3 border-r border-gray-300 font-semibold w-12">STT</th>
              <th className="px-4 py-3 border-r border-gray-300 font-semibold w-1/4">Tên Doanh nghiệp</th>
              <th className="px-4 py-3 border-r border-gray-300 font-semibold w-32">Số Giấy phép</th>
              <th className="px-4 py-3 border-r border-gray-300 font-semibold w-48">Hình thức trả</th>
              <th className="px-4 py-3 border-r border-gray-300 font-semibold w-32">Ngày trả</th>
              <th className="px-4 py-3 font-semibold w-32">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {mockData.map((row, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="px-3 py-4 border-r border-gray-200 font-medium">{row.stt}</td>
                <td className="px-4 py-4 border-r border-gray-200 font-bold text-gray-800 text-[13px] leading-relaxed text-left">{row.tenDN}</td>
                <td className="px-4 py-4 border-r border-gray-200 font-semibold text-blue-700">{row.soGP}</td>
                
                {/* Cột Hình thức trả (Dropdown trong bảng) */}
                <td className="px-4 py-4 border-r border-gray-200">
                  <select 
                    className="border border-gray-400 rounded-full px-3 py-1 text-[12px] text-gray-800 font-medium focus:outline-none focus:border-blue-500 cursor-pointer bg-white w-full max-w-[200px] text-center"
                    defaultValue={row.hinhThuc}
                  >
                    <option value="Nhận trực tiếp tại Quầy">Nhận trực tiếp tại Quầy</option>
                    <option value="Nhận qua Bưu điện">Nhận qua Bưu điện</option>
                    <option value="Nhận bản điện tử">Nhận bản điện tử</option>
                  </select>
                </td>
                
                <td className="px-4 py-4 border-r border-gray-200 font-medium text-gray-800">{row.ngay}</td>
                <td className="px-4 py-4">
                  <button 
                    onClick={handleComplete}
                    className="bg-[#6FCF97] hover:bg-[#5EBC84] text-white px-5 py-1.5 rounded-md text-[11px] font-bold shadow-sm transition-colors whitespace-nowrap"
                  >
                    Hoàn tất
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ================= POPUP THÀNH CÔNG ================= */}
      {popupState === 'success' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-[1px]">
          <div className="bg-white rounded-xl shadow-2xl p-8 w-[450px] flex flex-col items-center text-center relative border border-gray-200 animate-in fade-in zoom-in duration-200">
            <CheckCircle2 size={65} className="text-[#4CAF50] mb-5" strokeWidth={1.5} />
            <h3 className="font-bold text-xl mb-3 text-gray-800">Hoàn tất thành công!</h3>
            <p className="text-sm text-gray-600 mb-8 leading-relaxed px-4">
              Đã hoàn tất hồ sơ cấp phép, thông tin cấp phép đã được lưu trữ trên hệ thống dịch vụ công.
            </p>
            <button 
              onClick={() => setPopupState('none')} 
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

export default GiaoTraKetQua;