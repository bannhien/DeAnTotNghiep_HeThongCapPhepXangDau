import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, Eye, EyeOff } from 'lucide-react';

const ChangePasswordPage = () => {
  const navigate = useNavigate();
  
  const [showPopup, setShowPopup] = useState(false);
  const [showPwd1, setShowPwd1] = useState(false);
  const [showPwd2, setShowPwd2] = useState(false);
  const [showPwd3, setShowPwd3] = useState(false);

  // Thêm useEffect để tự động chuyển hướng sau 2 giây khi showPopup = true
  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        navigate('/tong-quan');
      }, 2000); // 2000ms = 2 giây
      
      // Dọn dẹp timer nếu component unmount
      return () => clearTimeout(timer);
    }
  }, [showPopup, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    setShowPopup(true); 
  };

  return (
    <div className="h-full flex flex-col items-center pt-16">
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-10 w-full max-w-xl">
        <h1 className="text-xl font-bold text-gray-800 uppercase text-center mb-10 tracking-wide">
          ĐỔI MẬT KHẨU
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6 px-4 md:px-8">
          
          <div className="space-y-2">
            <label className="text-[13px] font-bold text-gray-800">Mật khẩu hiện tại</label>
            <div className="relative">
              <input 
                type={showPwd1 ? "text" : "password"} 
                placeholder="Nhập mật khẩu hiện tại" 
                className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 pr-10 bg-white" 
                required 
              />
              <button type="button" onClick={() => setShowPwd1(!showPwd1)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none">
                {showPwd1 ? <Eye size={18} /> : <EyeOff size={18} />}
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[13px] font-bold text-gray-800">Mật khẩu mới</label>
            <div className="relative">
              <input 
                type={showPwd2 ? "text" : "password"} 
                placeholder="Nhập mật khẩu mới" 
                className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 pr-10 bg-white" 
                required 
              />
              <button type="button" onClick={() => setShowPwd2(!showPwd2)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none">
                {showPwd2 ? <Eye size={18} /> : <EyeOff size={18} />}
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[13px] font-bold text-gray-800">Nhập lại mật khẩu mới</label>
            <div className="relative">
              <input 
                type={showPwd3 ? "text" : "password"} 
                placeholder="Nhập lại mật khẩu mới" 
                className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 pr-10 bg-white" 
                required 
              />
              <button type="button" onClick={() => setShowPwd3(!showPwd3)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none">
                {showPwd3 ? <Eye size={18} /> : <EyeOff size={18} />}
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 pt-2">
            <input type="checkbox" id="remember" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer" />
            <label htmlFor="remember" className="text-[13px] text-gray-600 cursor-pointer font-medium">Nhớ mật khẩu</label>
          </div>

          <div className="flex justify-center gap-6 pt-6">
            <button 
              type="submit" 
              className="bg-[#4CAF50] hover:bg-green-600 text-white px-10 py-2 rounded-md font-bold text-sm shadow-sm transition-colors"
            >
              Xác nhận
            </button>
            <button 
              type="button" 
              onClick={() => navigate(-1)} 
              className="bg-[#FF0000] hover:bg-red-700 text-white px-12 py-2 rounded-md font-bold text-sm shadow-sm transition-colors"
            >
              Huỷ
            </button>
          </div>
        </form>
      </div>

      {/* ================= POPUP THÔNG BÁO THÀNH CÔNG ================= */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-[1px]">
          <div className="bg-white rounded-xl shadow-2xl p-8 w-[400px] flex flex-col items-center text-center border border-gray-200 animate-in fade-in zoom-in duration-200">
            <CheckCircle2 size={65} className="text-[#4CAF50] mb-5" strokeWidth={1.5} />
            <h3 className="font-bold text-xl mb-3 text-gray-800">Đổi mật khẩu thành công!</h3>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed px-4">
              Mật khẩu của bạn đã được cập nhật. Vui lòng sử dụng mật khẩu mới cho các lần đăng nhập tiếp theo.
            </p>
            
            {/* Vẫn giữ nút bấm cho ai nôn nóng muốn qua liền */}
            <button 
              onClick={() => { 
                setShowPopup(false); 
                navigate('/tong-quan'); 
              }} 
              className="bg-[#4CAF50] hover:bg-green-600 text-white px-10 py-2 rounded-md font-bold transition-colors shadow-sm"
            >
              Về trang chủ
            </button>
            
            {/* Dòng text báo hiệu tự động chuyển */}
            <p className="text-[11px] text-gray-400 mt-4 italic animate-pulse">
              Đang tự động chuyển về Tổng quan...
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChangePasswordPage;