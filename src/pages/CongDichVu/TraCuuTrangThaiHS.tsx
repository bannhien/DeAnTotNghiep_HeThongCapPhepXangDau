import React, { useState } from 'react';
import { Check, XCircle, WifiOff } from 'lucide-react';

const TraCuuTrangThaiHS = () => {
  // Quản lý các trạng thái: chưa tra cứu, thành công, không tìm thấy, lỗi mạng
  const [searchState, setSearchState] = useState<'idle' | 'success' | 'not_found' | 'network_error'>('idle');

  // Hàm xử lý khi bấm nút Tra cứu chính
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Mặc định nộp form sẽ cho ra thành công để xem thanh tiến trình
    setSearchState('success');
  };

  // Cấu hình thanh tiến trình (Stepper)
  const steps = [
    'Tiếp nhận',
    'Đang thẩm định pháp lý',
    'Đang thẩm định thực tế',
    'Chờ phê duyệt',
    'Trả kết quả'
  ];
  const currentStep = 1; // Giả sử đang ở bước 2

  return (
    <div className="bg-[#FCF9F0] h-full relative">
      <div className="max-w-4xl mx-auto pt-4 pb-12">
        
        {/* ================= PHẦN 1: FORM TRA CỨU ================= */}
        <h1 className="text-xl font-bold text-gray-800 uppercase text-center mb-8 tracking-wide">
          Tra cứu trạng thái hồ sơ
        </h1>

        <form onSubmit={handleSearch} className="mb-12">
          <h2 className="font-bold text-gray-800 mb-6 text-[15px]">1. Thông tin doanh nghiệp</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <div className="flex items-center gap-4">
              <label className="text-[13px] font-bold text-gray-800 w-28 text-right leading-tight">
                Mã số thuế<br/>doanh nghiệp
              </label>
              <input 
                type="text" 
                className="flex-1 border border-gray-400 rounded-lg py-1.5 px-3 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm bg-white" 
                required
              />
            </div>
            
            <div className="flex items-center gap-4">
              <label className="text-[13px] font-bold text-gray-800 w-24 text-right leading-tight">
                Mã biên<br/>nhận hồ sơ
              </label>
              <input 
                type="text" 
                className="flex-1 border border-gray-400 rounded-lg py-1.5 px-3 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm bg-white" 
                required
              />
            </div>
          </div>

          {/* Cụm nút bấm */}
          <div className="flex flex-col items-end gap-3">
            <button 
              type="submit"
              className="bg-[#4CAF50] hover:bg-green-600 text-white font-medium px-10 py-2 rounded-md transition-colors shadow-sm text-sm"
            >
              Tra cứu
            </button>
            
            {/* Dành cho bạn Test giao diện: Click vào các dòng chữ này để xem Pop-up */}
            <div className="flex gap-4 text-xs font-semibold text-gray-400">
              <span className="cursor-pointer hover:text-red-500 hover:underline transition-colors" onClick={() => setSearchState('not_found')}>
                (Test: Không tìm thấy hồ sơ)
              </span>
              <span className="cursor-pointer hover:text-red-500 hover:underline transition-colors" onClick={() => setSearchState('network_error')}>
                (Test: Lỗi mất kết nối mạng)
              </span>
            </div>
          </div>
        </form>


        {/* ================= PHẦN 2: KẾT QUẢ THÀNH CÔNG ================= */}
        {searchState === 'success' && (
          <div className="animate-fade-in border-t border-gray-300 pt-10">
            <h2 className="text-xl font-bold text-gray-800 uppercase text-center mb-10 tracking-wide">
              Kết quả tra cứu trạng thái hồ sơ
            </h2>

            <div className="space-y-6 max-w-2xl mx-auto mb-16">
              <div className="flex gap-6 items-start">
                <span className="w-40 font-bold text-gray-800 text-right text-[15px]">Tên doanh nghiệp:</span>
                <span className="font-medium text-gray-800 text-[15px]">Công ty TNHH Xăng dầu ABC</span>
              </div>
              <div className="flex gap-6 items-start">
                <span className="w-40 font-bold text-gray-800 text-right text-[15px]">Loại thủ tục:</span>
                <span className="font-medium text-gray-800 text-[15px]">Cấp mới Giấy chứng nhận đủ điều kiện kinh doanh</span>
              </div>
              <div className="flex gap-6 items-start">
                <span className="w-40 font-bold text-gray-800 text-right text-[15px]">Ngày nộp hồ sơ:</span>
                <span className="font-medium text-gray-800 text-[15px]">25/03/2026</span>
              </div>
              <div className="flex gap-6 items-start">
                <span className="w-40 font-bold text-gray-800 text-right text-[15px]">Tình trạng hồ sơ:</span>
                
                {/* Thanh tiến trình */}
                <div className="flex-1 mt-2">
                  <div className="flex items-center w-full relative">
                    {steps.map((step, index) => {
                      const isCompleted = index < currentStep;
                      const isActive = index === currentStep;

                      return (
                        <React.Fragment key={index}>
                          <div className="flex flex-col items-center relative z-10">
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center border-2 bg-[#FCF9F0]
                              ${isCompleted ? 'border-[#4CAF50] text-[#4CAF50]' : 'border-gray-400 text-transparent'}
                            `}>
                              {isCompleted && <Check size={14} strokeWidth={3} />}
                            </div>
                            <span className="absolute top-8 text-[10px] font-bold text-center w-24 text-gray-700 leading-tight">
                              {step}
                            </span>
                          </div>

                          {index < steps.length - 1 && (
                            <div className={`flex-1 h-[2px] -mx-1 z-0
                              ${index < currentStep ? 'bg-[#4CAF50]' : 'bg-gray-400'}
                            `}></div>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* ================= POP-UP 1: KHÔNG TÌM THẤY HỒ SƠ ================= */}
        {searchState === 'not_found' && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/5 backdrop-blur-[1px]">
            <div className="bg-white rounded-lg shadow-xl p-8 w-[400px] flex flex-col items-center text-center border border-gray-300 transform transition-all">
              <XCircle size={55} className="text-red-500 mb-5" strokeWidth={1.5} />
              <p className="font-bold text-gray-800 text-[15px] mb-8 leading-snug">
                Không tìm thấy hồ sơ! Vui lòng<br/>kiểm tra lại Mã số thuế và Mã<br/>biên nhận
              </p>
              <button 
                onClick={() => setSearchState('idle')}
                className="bg-[#4CAF50] hover:bg-green-600 text-white px-8 py-1.5 rounded transition-colors text-sm font-medium"
              >
                Đóng
              </button>
            </div>
          </div>
        )}

        {/* ================= POP-UP 2: LỖI KẾT NỐI MẠNG ================= */}
        {searchState === 'network_error' && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/5 backdrop-blur-[1px]">
            <div className="bg-white rounded-lg shadow-xl p-8 w-[400px] flex flex-col items-center text-center border border-gray-300 transform transition-all">
              <WifiOff size={55} className="text-gray-800 mb-5" strokeWidth={1.5} />
              <p className="font-bold text-gray-800 text-[15px] mb-8 leading-snug">
                Không thể kết nối đến máy chủ<br/>dữ liệu lúc này, vui lòng thử lại<br/>sau
              </p>
              <button 
                onClick={() => setSearchState('idle')}
                className="bg-[#4CAF50] hover:bg-green-600 text-white px-8 py-1.5 rounded transition-colors text-sm font-medium"
              >
                Đóng
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default TraCuuTrangThaiHS;