import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ClipboardList, Map, AlertTriangle, BarChart3, 
  Clock, CheckCircle2, FileText, Bell, ChevronRight,
  ShieldAlert, Activity
} from 'lucide-react';

const DashboardPage = () => {
  const navigate = useNavigate();
  
  // State tạo đồng hồ chạy thời gian thực
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date: Date) => {
    const days = ['Chủ nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
    const dayName = days[date.getDay()];
    const d = String(date.getDate()).padStart(2, '0');
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const y = date.getFullYear();
    return `${dayName}, ${d}/${m}/${y}`;
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('vi-VN');
  };

  // Dữ liệu giả lập cho danh sách công việc cần làm
  const myTasks = [
    { id: 1, title: 'Thẩm định thực tế CHXD Hòa Khánh 11', type: 'Thẩm định', time: 'Hôm nay', color: 'text-blue-600 bg-blue-100', path: '/tham-dinh-thuc-te' },
    { id: 2, title: 'Ký số giấy phép PV Oil Miền Trung', type: 'Ký số', time: 'Trễ hạn 1 ngày', color: 'text-red-600 bg-red-100', path: '/ky-so' },
    { id: 3, title: 'Xét duyệt hồ sơ cấp mới Cửa hàng Dũng Sông Hàn', type: 'Thụ lý', time: 'Ngày mai', color: 'text-orange-600 bg-orange-100', path: '/thu-ly' },
  ];

  return (
    <div className="h-full flex flex-col pt-2 max-w-7xl mx-auto w-full space-y-6 overflow-y-auto custom-scrollbar pb-10">
      
      {/* ================= 1. BANNER CHÀO MỪNG ================= */}
      <div className="bg-gradient-to-r from-[#1565C0] to-[#1E88E5] rounded-2xl p-6 md:p-8 text-white shadow-md flex flex-col md:flex-row items-start md:items-center justify-between relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 right-32 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl translate-y-1/3"></div>
        
        <div className="relative z-10">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Xin chào, Ban Nhiên! 👋</h1>
          <p className="text-blue-100 text-sm md:text-base">Chúc bạn một ngày làm việc hiệu quả. Bạn hiện có <span className="font-bold text-yellow-300">3 công việc</span> cần xử lý.</p>
        </div>
        <div className="relative z-10 mt-4 md:mt-0 text-right">
          <p className="text-3xl font-black tracking-wider">{formatTime(time)}</p>
          <p className="text-blue-100 text-sm font-medium">{formatDate(time)}</p>
        </div>
      </div>

      {/* ================= 2. THẺ CHỈ SỐ (KPI CARDS) ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1 */}
        <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
            <ClipboardList size={24} />
          </div>
          <div>
            <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Hồ sơ chờ xử lý</p>
            <div className="flex items-baseline gap-2"><h3 className="text-2xl font-black text-gray-800">25</h3><span className="text-xs text-gray-400">hồ sơ</span></div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
            <Activity size={24} />
          </div>
          <div>
            <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">CHXD Đang hoạt động</p>
            <div className="flex items-baseline gap-2"><h3 className="text-2xl font-black text-gray-800">276</h3><span className="text-xs text-gray-400">cửa hàng</span></div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 flex-shrink-0">
            <ShieldAlert size={24} />
          </div>
          <div>
            <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Cảnh báo / Quá hạn</p>
            <div className="flex items-baseline gap-2"><h3 className="text-2xl font-black text-red-600">8</h3><span className="text-xs text-gray-400">trường hợp</span></div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 flex-shrink-0">
            <CheckCircle2 size={24} />
          </div>
          <div>
            <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Đã cấp phép (Tháng)</p>
            <div className="flex items-baseline gap-2"><h3 className="text-2xl font-black text-gray-800">12</h3><span className="text-xs text-gray-400">giấy phép</span></div>
          </div>
        </div>
      </div>

      {/* ================= 3. LỐI TẮT TRUY CẬP ================= */}
      <div>
        <h2 className="text-sm font-bold text-gray-800 uppercase mb-4 flex items-center gap-2">
          <Map size={18} className="text-gray-500"/> Lối tắt truy cập nhanh
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button onClick={() => navigate('/thu-ly')} className="bg-white border border-gray-200 p-4 rounded-xl flex flex-col items-center justify-center gap-3 hover:-translate-y-1 hover:shadow-md hover:border-blue-300 transition-all group">
            <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <FileText size={20} />
            </div>
            <span className="text-sm font-bold text-gray-700">Phân công & Thụ lý</span>
          </button>

          <button onClick={() => navigate('/ban-do')} className="bg-white border border-gray-200 p-4 rounded-xl flex flex-col items-center justify-center gap-3 hover:-translate-y-1 hover:shadow-md hover:border-green-300 transition-all group">
            <div className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-colors">
              <Map size={20} />
            </div>
            <span className="text-sm font-bold text-gray-700">Bản đồ Quy hoạch</span>
          </button>

          <button onClick={() => navigate('/dinh-chi-thu-hoi')} className="bg-white border border-gray-200 p-4 rounded-xl flex flex-col items-center justify-center gap-3 hover:-translate-y-1 hover:shadow-md hover:border-red-300 transition-all group">
            <div className="w-10 h-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors">
              <AlertTriangle size={20} />
            </div>
            <span className="text-sm font-bold text-gray-700">Lập QĐ Xử phạt</span>
          </button>

          <button onClick={() => navigate('/bao-cao')} className="bg-white border border-gray-200 p-4 rounded-xl flex flex-col items-center justify-center gap-3 hover:-translate-y-1 hover:shadow-md hover:border-purple-300 transition-all group">
            <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-colors">
              <BarChart3 size={20} />
            </div>
            <span className="text-sm font-bold text-gray-700">Báo cáo Thống kê</span>
          </button>
        </div>
      </div>

      {/* ================= 4. CÔNG VIỆC & THÔNG BÁO ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Danh sách việc cần làm */}
        <div className="lg:col-span-2 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden flex flex-col">
          <div className="px-5 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
            <h2 className="text-sm font-bold text-gray-800 uppercase flex items-center gap-2">
              <Clock size={18} className="text-blue-600"/> Công việc của tôi
            </h2>
            <button className="text-xs text-blue-600 font-semibold hover:underline">Xem tất cả</button>
          </div>
          <div className="flex-1 p-0">
            {myTasks.map((task) => (
              <div key={task.id} className="flex items-center justify-between px-5 py-4 border-b border-gray-50 hover:bg-gray-50 transition-colors last:border-0">
                <div className="flex items-start gap-4">
                  <span className={`px-2 py-1 rounded text-[10px] font-bold mt-0.5 w-20 text-center ${task.color}`}>
                    {task.type}
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-gray-800 cursor-pointer hover:text-blue-600 transition-colors">{task.title}</h4>
                    <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                      <Clock size={12} /> Hạn xử lý: <span className={task.time.includes('Trễ') ? 'text-red-500 font-semibold' : ''}>{task.time}</span>
                    </p>
                  </div>
                </div>
                <button onClick={() => navigate(task.path)} className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  <ChevronRight size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Thông báo hệ thống */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden flex flex-col">
          <div className="px-5 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
            <h2 className="text-sm font-bold text-gray-800 uppercase flex items-center gap-2">
              <Bell size={18} className="text-orange-500"/> Thông báo mới
            </h2>
          </div>
          <div className="flex-1 p-5 space-y-5">
            <div className="flex gap-3 relative">
              <div className="w-2 h-2 rounded-full bg-red-500 absolute -left-1 top-1.5 ring-4 ring-white"></div>
              <div className="pl-4">
                <p className="text-sm font-semibold text-gray-800 leading-tight">Có 5 giấy phép cửa hàng xăng dầu sắp hết hạn trong 30 ngày tới.</p>
                <p className="text-[11px] text-gray-400 mt-1">10 phút trước</p>
              </div>
            </div>
            <div className="flex gap-3 relative">
              <div className="w-2 h-2 rounded-full bg-blue-500 absolute -left-1 top-1.5 ring-4 ring-white"></div>
              <div className="pl-4">
                <p className="text-sm font-semibold text-gray-800 leading-tight">Lãnh đạo Sở đã phê duyệt cấp mới cho CHXD Hòa Khánh 11.</p>
                <p className="text-[11px] text-gray-400 mt-1">2 giờ trước</p>
              </div>
            </div>
            <div className="flex gap-3 relative">
              <div className="w-2 h-2 rounded-full bg-gray-300 absolute -left-1 top-1.5 ring-4 ring-white"></div>
              <div className="pl-4">
                <p className="text-sm font-semibold text-gray-800 leading-tight">Hệ thống tự động sao lưu dữ liệu thành công.</p>
                <p className="text-[11px] text-gray-400 mt-1">Hôm qua</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DashboardPage;