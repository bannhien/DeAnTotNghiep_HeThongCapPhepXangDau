import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

const TaoTaiKhoan = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = () => {
    setShowPopup(true);
  };

  return (
    <div className="h-full flex flex-col items-center pt-10">
      <h1 className="text-xl font-bold text-gray-800 uppercase text-center mb-12 tracking-wide">
        TẠO / CHỈNH SỬA TÀI KHOẢN CÁN BỘ
      </h1>

      {/* FORM NHẬP LIỆU GOM CHUẨN */}
      <div className="w-full max-w-5xl bg-white border border-gray-200 rounded-xl shadow-sm p-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8">
          
          {/* Hàng 1 */}
          <div className="flex flex-col gap-2">
            <label className="text-[13px] font-bold text-gray-800">Họ và tên cán bộ <span className="text-red-500">*</span></label>
            <input type="text" placeholder="Nhập họ tên..." className="w-full border border-gray-400 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 text-sm bg-white focus:ring-1 focus:ring-blue-500" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[13px] font-bold text-gray-800">Tên đăng nhập (Email) <span className="text-red-500">*</span></label>
            <input type="email" placeholder="ví dụ: nvana@danang.gov.vn" className="w-full border border-gray-400 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 text-sm bg-white focus:ring-1 focus:ring-blue-500" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[13px] font-bold text-gray-800">Trạng thái tài khoản</label>
            <select className="w-full border border-gray-400 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 text-sm bg-white cursor-pointer focus:ring-1 focus:ring-blue-500">
              <option value="hoat-dong">Đang hoạt động</option>
              <option value="vo-hieu-hoa">Vô hiệu hoá</option>
            </select>
          </div>

          {/* Hàng 2 */}
          <div className="flex flex-col gap-2">
            <label className="text-[13px] font-bold text-gray-800">Phòng ban công tác</label>
            <select className="w-full border border-gray-400 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 text-sm bg-white cursor-pointer focus:ring-1 focus:ring-blue-500">
              <option value="">-- Chọn phòng ban --</option>
              <option value="lanh-dao">Lãnh đạo Sở</option>
              <option value="quan-ly-thuong-mai">Phòng Quản lý Thương mại</option>
              <option value="thanh-tra">Thanh tra Sở</option>
              <option value="van-phong">Văn phòng Sở</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[13px] font-bold text-gray-800">Chức vụ (Hiển thị văn bản)</label>
            <select className="w-full border border-gray-400 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 text-sm bg-white cursor-pointer focus:ring-1 focus:ring-blue-500">
              <option value="">-- Chọn chức vụ --</option>
              <option value="giam-doc">Giám đốc Sở</option>
              <option value="pho-giam-doc">Phó Giám đốc Sở</option>
              <option value="truong-phong">Trưởng phòng</option>
              <option value="chuyen-vien">Chuyên viên</option>
            </select>
          </div>

          {/* TRƯỜNG PHÂN QUYỀN MỚI THÊM */}
          <div className="flex flex-col gap-2">
            <label className="text-[13px] font-bold text-blue-700 flex items-center gap-1">Nhóm quyền hệ thống <span className="text-red-500">*</span></label>
            <select className="w-full border border-blue-400 bg-blue-50/30 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 text-sm cursor-pointer focus:ring-1 focus:ring-blue-500 text-blue-900 font-semibold">
              <option value="">-- Cấp quyền phần mềm --</option>
              <option value="admin">Quản trị hệ thống (Toàn quyền)</option>
              <option value="lanh-dao">Lãnh đạo phê duyệt (Ký số, Báo cáo)</option>
              <option value="chuyen-vien">Chuyên viên thụ lý (Xử lý hồ sơ)</option>
              <option value="mot-cua">Cán bộ Một cửa (Tiếp nhận, Trả KQ)</option>
            </select>
          </div>

        </div>

        {/* NÚT THAO TÁC */}
        <div className="flex justify-center gap-6 pt-12 border-t border-gray-100 mt-10">
          <button onClick={() => navigate('/quan-tri/tai-khoan')} className="bg-white border border-gray-400 text-gray-700 hover:bg-gray-50 px-12 py-2 rounded-md text-sm font-bold shadow-sm transition-colors">
            Huỷ bỏ
          </button>
          <button onClick={handleSubmit} className="bg-[#F59E0B] hover:bg-yellow-500 text-white px-10 py-2 rounded-md text-sm font-bold shadow-sm transition-colors">
            Lưu thông tin tài khoản
          </button>
        </div>

      </div>

      {/* POPUP THÀNH CÔNG */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-[1px]">
          <div className="bg-white rounded-xl shadow-2xl p-8 w-[400px] flex flex-col items-center text-center border border-gray-200 animate-in fade-in zoom-in duration-200">
            <CheckCircle2 size={65} className="text-[#4CAF50] mb-5" strokeWidth={1.5} />
            <h3 className="font-bold text-xl mb-3 text-gray-800">Thành công!</h3>
            <p className="text-sm text-gray-600 mb-8 px-4 leading-relaxed">Thông tin tài khoản và phân quyền đã được hệ thống ghi nhận.</p>
            <button onClick={() => { setShowPopup(false); navigate('/quan-tri/tai-khoan'); }} className="bg-[#4CAF50] hover:bg-green-600 text-white px-10 py-2 rounded-md font-bold transition-colors shadow-sm w-full">
              Đóng và Quay lại danh sách
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaoTaiKhoan;