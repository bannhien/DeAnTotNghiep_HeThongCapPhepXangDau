import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  // Hàm xử lý khi bấm nút Đăng nhập
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Phát chìa khóa giả lập và chuyển hướng thẳng vào hệ thống nội bộ
    localStorage.setItem('isLoggedIn', 'true');
    navigate('/tong-quan'); 
  };

  return (
    <div className="w-full">
      {/* Tiêu đề Form */}
      <h3 className="text-center text-[15px] font-black text-gray-800 uppercase tracking-wide mb-8">
        Đăng nhập hệ thống
      </h3>

      <form onSubmit={handleLogin} className="space-y-5">
        
        {/* ================= Ô NHẬP TÀI KHOẢN ================= */}
        <div>
          <div className="flex justify-between items-center mb-1.5 px-1">
            <label className="text-[13px] font-bold text-gray-800">Tài khoản</label>
            <a href="#" className="text-[11px] font-semibold text-blue-600 hover:text-blue-800 hover:underline transition-colors">
              Quên mật khẩu
            </a>
          </div>
          <input
            type="text"
            placeholder="Tên đăng nhập"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 text-sm transition-all"
            required
          />
        </div>

        {/* ================= Ô NHẬP MẬT KHẨU ================= */}
        <div>
          <label className="text-[13px] font-bold text-gray-800 block mb-1.5 px-1">
            Mật khẩu
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Mật khẩu"
              className="w-full pl-4 pr-10 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 text-sm transition-all"
              required
            />
            {/* Nút bật/tắt con mắt */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {/* ================= CHECKBOX NHỚ MẬT KHẨU ================= */}
        <div className="flex items-center gap-2 mt-1 px-1">
          <input 
            type="checkbox" 
            id="remember" 
            className="w-3.5 h-3.5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer" 
          />
          <label htmlFor="remember" className="text-xs font-semibold text-gray-600 cursor-pointer select-none">
            Nhớ mật khẩu
          </label>
        </div>

        {/* ================= NÚT ĐĂNG NHẬP ================= */}
        <button
          type="submit"
          className="w-full bg-[#1A73E8] hover:bg-blue-700 text-white font-bold py-2.5 rounded-lg transition-all shadow-md mt-2 text-sm"
        >
          Đăng nhập
        </button>

      </form>
    </div>
  );
};

export default LoginPage;