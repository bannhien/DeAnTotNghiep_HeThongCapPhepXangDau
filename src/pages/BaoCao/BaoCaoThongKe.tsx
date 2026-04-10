import { useState } from 'react';

const BaoCaoThongKe = () => {
  const [viewMode, setViewMode] = useState<'cap-phep' | 'mang-luoi'>('mang-luoi'); // Đặt mặc định là mạng lưới để bạn dễ test
  const [year, setYear] = useState(2026);

  // ================= RENDER: THỐNG KÊ CẤP PHÉP =================
  const renderCapPhep = () => (
    <>
      <div className="flex justify-between items-center mb-8 pr-20">
        <div>
          <p className="text-[13px] font-bold text-gray-700 uppercase mb-2">Tổng hồ sơ</p>
          <p className="text-2xl font-black text-gray-900">153</p>
        </div>
        <div>
          <p className="text-[13px] font-bold text-gray-700 uppercase mb-2">Đã duyệt</p>
          <p className="text-2xl font-black text-gray-900">123</p>
        </div>
        <div>
          <p className="text-[13px] font-bold text-gray-700 uppercase mb-2">Đang xử lý</p>
          <p className="text-2xl font-black text-gray-900">25</p>
        </div>
        <div>
          <p className="text-[13px] font-bold text-gray-700 uppercase mb-2">Trễ</p>
          <p className="text-2xl font-black text-red-600">5</p>
        </div>
      </div>

      <div className="flex-1 flex gap-6">
        {/* Biểu đồ Donut: Tỷ lệ xử lý */}
        <div className="flex-1 bg-white border border-gray-300 rounded-lg shadow-sm p-6 flex flex-col items-center">
          <h3 className="font-bold text-[15px] text-gray-800 mb-8">TỶ LỆ XỬ LÝ HỒ SƠ</h3>
          <div className="flex-1 flex items-center justify-center w-full gap-10">
            <div 
              className="relative w-48 h-48 rounded-full" 
              style={{ background: 'conic-gradient(#15803d 0% 96.7%, #dc2626 96.7% 100%)' }} 
            >
              <div className="absolute inset-0 m-auto w-[110px] h-[110px] bg-white rounded-full"></div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3"><div className="w-4 h-4 bg-green-700"></div><span className="text-sm font-semibold text-gray-700">Đúng hạn: 147</span></div>
              <div className="flex items-center gap-3"><div className="w-4 h-4 bg-red-600"></div><span className="text-sm font-semibold text-gray-700">Trễ hạn: 5</span></div>
            </div>
          </div>
        </div>

        {/* Biểu đồ Cột: Số lượng loại thủ tục (Đã fix lề) */}
        <div className="flex-1 bg-white border border-gray-300 rounded-lg shadow-sm p-6 flex flex-col items-center">
          <h3 className="font-bold text-[15px] text-gray-800 mb-8">SỐ LƯỢNG THEO LOẠI THỦ TỤC</h3>
          
          <div className="flex-1 w-full flex flex-col justify-end items-center relative pb-2">
            {/* Vùng chứa các cột bám đáy */}
            <div className="w-full h-[180px] flex items-end justify-center gap-16 border-b border-gray-300">
               <div className="flex flex-col items-center w-16">
                 <span className="text-xs font-bold text-gray-600 mb-2">61</span>
                 <div className="w-full bg-[#1565C0] rounded-t-sm" style={{ height: '140px' }}></div>
               </div>
               <div className="flex flex-col items-center w-16">
                 <span className="text-xs font-bold text-gray-600 mb-2">51</span>
                 <div className="w-full bg-[#1565C0] rounded-t-sm" style={{ height: '115px' }}></div>
               </div>
               <div className="flex flex-col items-center w-16">
                 <span className="text-xs font-bold text-gray-600 mb-2">41</span>
                 <div className="w-full bg-[#1565C0] rounded-t-sm" style={{ height: '90px' }}></div>
               </div>
            </div>
            
            {/* Vùng chứa nhãn riêng biệt */}
            <div className="w-full flex justify-center gap-16 mt-3">
               <span className="text-xs font-bold text-gray-700 text-center w-16">Cấp mới</span>
               <span className="text-xs font-bold text-gray-700 text-center w-16">Cấp lại</span>
               <span className="text-xs font-bold text-gray-700 text-center w-16">Sửa đổi</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  // ================= RENDER: THỐNG KÊ MẠNG LƯỚI =================
  const renderMangLuoi = () => (
    <>
      <div className="flex justify-start gap-24 items-center mb-8">
        <div>
          <p className="text-[13px] font-bold text-gray-700 uppercase mb-2">Tổng cửa hàng</p>
          <p className="text-2xl font-black text-gray-900">278</p>
        </div>
        <div>
          <p className="text-[13px] font-bold text-gray-700 uppercase mb-2">Đang hoạt động</p>
          <p className="text-2xl font-black text-gray-900">250</p>
        </div>
        <div>
          <p className="text-[13px] font-bold text-gray-700 uppercase mb-2">Bị đình chỉ</p>
          <p className="text-2xl font-black text-red-600">28</p>
        </div>
      </div>

      <div className="flex-1 flex gap-6">
        
        {/* Biểu đồ Cột: Top 5 Mật độ (Đã fix lề tuyệt đối) */}
        <div className="flex-1 bg-white border border-gray-300 rounded-lg shadow-sm p-6 flex flex-col items-center">
          <h3 className="font-bold text-[14px] text-gray-800 mb-6 text-center uppercase">
            Top 5 phường/ xã có mật độ<br/>cây xăng nhiều nhất
          </h3>
          
          <div className="flex-1 w-full flex flex-col relative pb-2 px-2">
            {/* Các đường Grid ngầm */}
            <div className="absolute left-8 right-0 top-0 bottom-[10px] flex flex-col justify-between pointer-events-none z-0">
               <div className="border-t border-gray-200 border-dashed w-full"></div>
               <div className="border-t border-gray-200 border-dashed w-full"></div>
               <div className="border-t border-gray-200 border-dashed w-full"></div>
               <div className="border-t border-gray-200 border-dashed w-full"></div>
            </div>
            
            {/* Trục Y và Vùng chứa cột */}
            <div className="flex w-full h-[180px] z-10">
               {/* Trục Y */}
               <div className="w-8 flex flex-col justify-between h-full text-[9px] text-gray-400 text-right pr-2">
                  <span>12</span><span>8</span><span>4</span><span>0</span>
               </div>

               {/* Chân cột */}
               <div className="flex-1 flex items-end justify-around border-b border-gray-300">
                  <div className="flex flex-col items-center w-12">
                    <span className="text-[10px] font-bold text-gray-600 mb-1">12.6</span>
                    <div className="w-full bg-[#3b82f6]" style={{ height: '150px' }}></div>
                  </div>
                  <div className="flex flex-col items-center w-12">
                    <span className="text-[10px] font-bold text-gray-600 mb-1">10.5</span>
                    <div className="w-full bg-[#22c55e]" style={{ height: '125px' }}></div>
                  </div>
                  <div className="flex flex-col items-center w-12">
                    <span className="text-[10px] font-bold text-gray-600 mb-1">9.2</span>
                    <div className="w-full bg-[#eab308]" style={{ height: '110px' }}></div>
                  </div>
                  <div className="flex flex-col items-center w-12">
                    <span className="text-[10px] font-bold text-gray-600 mb-1">8.0</span>
                    <div className="w-full bg-[#a855f7]" style={{ height: '95px' }}></div>
                  </div>
                  <div className="flex flex-col items-center w-12">
                    <span className="text-[10px] font-bold text-gray-600 mb-1">7.1</span>
                    <div className="w-full bg-[#14b8a6]" style={{ height: '85px' }}></div>
                  </div>
               </div>
            </div>

            {/* Trục X: Nhãn tên (Tách riêng biệt không ảnh hưởng tới cột) */}
            <div className="flex w-full pl-8 mt-3 justify-around items-start">
               <span className="w-12 text-[10px] font-bold text-gray-700 text-center leading-tight">Hải Châu</span>
               <span className="w-12 text-[10px] font-bold text-gray-700 text-center leading-tight">Thanh Khê</span>
               <span className="w-12 text-[10px] font-bold text-gray-700 text-center leading-tight">An Hải</span>
               <span className="w-12 text-[10px] font-bold text-gray-700 text-center leading-tight">Liên Chiểu</span>
               <span className="w-12 text-[10px] font-bold text-gray-700 text-center leading-tight">Ngũ Hành Sơn</span>
            </div>
          </div>
        </div>

        {/* Biểu đồ Pie: Thị phần (Đã canh lại tọa độ tỷ lệ Vàng) */}
        <div className="flex-1 bg-white border border-gray-300 rounded-lg shadow-sm p-6 flex flex-col items-center">
          <h3 className="font-bold text-[15px] text-gray-800 mb-8 uppercase">Thị phần nhà cung cấp</h3>
          <div className="flex-1 flex items-center justify-center w-full gap-8">
            <div 
              className="w-52 h-52 rounded-full relative drop-shadow-sm" 
              style={{ background: 'conic-gradient(#1d4ed8 0% 45%, #15803d 45% 75%, #eab308 75% 90%, #dc2626 90% 100%)' }}
            >
              {/* Sử dụng absolute + translate để ghim đúng tâm lát cắt */}
              <span className="absolute top-[35%] left-[75%] -translate-x-1/2 -translate-y-1/2 text-white font-bold text-[13px] drop-shadow-md">45%</span>
              <span className="absolute top-[72%] left-[35%] -translate-x-1/2 -translate-y-1/2 text-white font-bold text-[13px] drop-shadow-md">30%</span>
              <span className="absolute top-[35%] left-[20%] -translate-x-1/2 -translate-y-1/2 text-white font-bold text-[13px] drop-shadow-md">15%</span>
              <span className="absolute top-[12%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-white font-bold text-[13px] drop-shadow-md">10%</span>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3"><div className="w-4 h-4 bg-[#1d4ed8]"></div><span className="text-sm font-semibold text-gray-700">Petrolimex</span></div>
              <div className="flex items-center gap-3"><div className="w-4 h-4 bg-[#15803d]"></div><span className="text-sm font-semibold text-gray-700">PVOIL</span></div>
              <div className="flex items-center gap-3"><div className="w-4 h-4 bg-[#eab308]"></div><span className="text-sm font-semibold text-gray-700">Hòa Khánh</span></div>
              <div className="flex items-center gap-3"><div className="w-4 h-4 bg-[#dc2626]"></div><span className="text-sm font-semibold text-gray-700">Khác</span></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="h-full flex flex-col pt-4 max-w-6xl mx-auto w-full">
      <h1 className="text-xl font-bold text-gray-800 uppercase text-center mb-8 tracking-wide">
        HỆ THỐNG QUẢN LÝ KINH DOANH XĂNG DẦU
      </h1>

      <div className="flex-1 flex flex-col">
        {viewMode === 'cap-phep' ? renderCapPhep() : renderMangLuoi()}
      </div>

      <div className="mt-8 flex justify-between items-center bg-transparent pt-4 pb-2">
        <div className="flex items-center gap-4">
          <span className="font-bold text-[14px] text-gray-800 uppercase">Năm báo cáo</span>
          <div className="flex gap-3">
            {[2024, 2025, 2026].map(y => (
              <button 
                key={y}
                onClick={() => setYear(y)}
                className={`px-6 py-1.5 rounded-full text-sm font-bold border transition-colors ${
                  year === y 
                    ? 'bg-[#EAE4F2] border-[#EAE4F2] text-[#6b21a8]' 
                    : 'bg-white border-gray-300 text-gray-600 hover:bg-gray-50'
                }`}
              >
                {y}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="font-bold text-[14px] text-gray-800 uppercase">Chế độ xem</span>
          <select 
            value={viewMode}
            onChange={(e) => setViewMode(e.target.value as 'cap-phep' | 'mang-luoi')}
            className="border border-gray-400 rounded-full px-4 py-1.5 focus:outline-none focus:border-blue-500 text-[14px] font-semibold bg-white w-56 cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <option value="cap-phep">Tình hình cấp phép</option>
            <option value="mang-luoi">Quy hoạch mạng lưới</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default BaoCaoThongKe;