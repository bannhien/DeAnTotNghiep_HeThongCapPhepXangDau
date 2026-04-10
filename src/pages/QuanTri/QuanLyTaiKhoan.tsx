import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const QuanLyTaiKhoan = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([
    { id: 1, ten: 'Lê Thị Kim Phượng', email: 'phuongltk@danang.gov.vn', chucVu: 'Giám đốc Sở', phongBan: 'Lãnh đạo Sở', nhomQuyen: 'Lãnh đạo phê duyệt', trangThai: 'Đang hoạt động' },
    { id: 2, ten: 'Nguyễn Văn Trừ', email: 'trunv@danang.gov.vn', chucVu: 'Phó Giám đốc Sở', phongBan: 'Lãnh đạo Sở', nhomQuyen: 'Lãnh đạo phê duyệt', trangThai: 'Đang hoạt động' },
    { id: 3, ten: 'Trần Phước Trí', email: 'tritp@danang.gov.vn', chucVu: 'Chánh văn phòng', phongBan: 'Văn phòng Sở', nhomQuyen: 'Quản trị hệ thống', trangThai: 'Đang hoạt động' },
    { id: 4, ten: 'Trần Thị Thu Nhung', email: 'nhungttt1@danang.gov.vn', chucVu: 'Trưởng phòng', phongBan: 'Phòng QLTM', nhomQuyen: 'Chuyên viên thụ lý', trangThai: 'Vô hiệu hoá' }, 
  ]);

  const toggleTrangThai = (id: number) => {
    setData(data.map(item => {
      if (item.id === id) {
        return { ...item, trangThai: item.trangThai === 'Đang hoạt động' ? 'Vô hiệu hoá' : 'Đang hoạt động' };
      }
      return item;
    }));
  };

  return (
    <div className="h-full flex flex-col pt-4">
      <h1 className="text-xl font-bold text-gray-800 uppercase text-center mb-6 tracking-wide">
        HỆ THỐNG QUẢN LÝ TÀI KHOẢN & PHÂN QUYỀN
      </h1>

      {/* ================= BỘ LỌC TÌM KIẾM (CHIA 2 DÒNG CÓ KHUNG) ================= */}
      <div className="mb-6 flex flex-col gap-4 max-w-6xl mx-auto w-full bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
        
        {/* Dòng 1 */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3 flex-1">
            <label className="text-[13px] font-bold text-gray-800 whitespace-nowrap w-24">Họ tên cán bộ</label>
            <input type="text" className="w-full border border-gray-400 rounded-md px-3 py-1.5 focus:outline-none focus:border-blue-500 text-sm bg-white" placeholder="Nhập tên cán bộ..." />
          </div>
          <div className="flex items-center gap-3 flex-1">
            <label className="text-[13px] font-bold text-gray-800 whitespace-nowrap w-20 text-right">Phòng ban</label>
            <select className="w-full border border-gray-400 rounded-md px-3 py-1.5 focus:outline-none focus:border-blue-500 text-sm bg-white cursor-pointer">
              <option value="">Tất cả phòng ban</option>
            </select>
          </div>
          <div className="flex items-center gap-3 flex-1">
            <label className="text-[13px] font-bold text-gray-800 whitespace-nowrap w-16 text-right">Chức vụ</label>
            <select className="w-full border border-gray-400 rounded-md px-3 py-1.5 focus:outline-none focus:border-blue-500 text-sm bg-white cursor-pointer">
              <option value="">Tất cả chức vụ</option>
            </select>
          </div>
        </div>

        {/* Dòng 2 */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3 flex-1">
            <label className="text-[13px] font-bold text-blue-700 whitespace-nowrap w-24">Nhóm quyền</label>
            <select className="w-full border border-blue-400 bg-blue-50/30 rounded-md px-3 py-1.5 focus:outline-none focus:border-blue-500 text-sm cursor-pointer text-blue-900 font-semibold">
              <option value="">Tất cả quyền hạn</option>
            </select>
          </div>
          <div className="flex items-center gap-3 flex-1">
            <label className="text-[13px] font-bold text-gray-800 whitespace-nowrap w-20 text-right">Trạng thái</label>
            <select className="w-full border border-gray-400 rounded-md px-3 py-1.5 focus:outline-none focus:border-blue-500 text-sm bg-white cursor-pointer">
              <option value="">Tất cả trạng thái</option>
              <option value="hoat-dong">Đang hoạt động</option>
              <option value="vo-hieu-hoa">Vô hiệu hoá</option>
            </select>
          </div>
          
          {/* Cụm nút bấm được căn lùi về bên phải */}
          <div className="flex items-center justify-end gap-3 flex-1">
            <button className="bg-[#4CAF50] hover:bg-green-600 text-white px-6 py-1.5 rounded-md transition-colors text-sm font-bold shadow-sm">
              Tra cứu
            </button>
            <button onClick={() => navigate('/quan-tri/tai-khoan/tao-moi')} className="bg-[#F59E0B] hover:bg-yellow-500 text-white px-6 py-1.5 rounded-md transition-colors text-sm font-bold shadow-sm">
              Tạo tài khoản mới
            </button>
          </div>
        </div>

      </div>

      {/* ================= BẢNG DANH SÁCH ================= */}
      <div className="overflow-x-auto bg-white border border-gray-300 rounded shadow-sm flex-1 custom-scrollbar">
        <table className="w-full text-sm text-center">
          <thead className="text-[13px] text-gray-800 bg-[#CDE0F5] sticky top-0 z-10 shadow-sm border-b border-gray-300">
            <tr>
              <th className="px-2 py-3 border-r border-gray-300 w-12 font-semibold">STT</th>
              <th className="px-4 py-3 border-r border-gray-300 font-semibold w-48">Họ và tên</th>
              <th className="px-4 py-3 border-r border-gray-300 font-semibold">Tên đăng nhập (Email)</th>
              <th className="px-4 py-3 border-r border-gray-300 font-semibold">Chức vụ</th>
              <th className="px-4 py-3 border-r border-gray-300 font-semibold text-blue-800">Nhóm quyền</th>
              <th className="px-4 py-3 border-r border-gray-300 font-semibold w-32">Trạng thái</th>
              <th className="px-4 py-3 font-semibold w-40">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={row.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="px-2 py-4 border-r border-gray-200 font-medium">{index + 1}</td>
                <td className="px-4 py-4 border-r border-gray-200 font-bold text-gray-800 text-left leading-tight">{row.ten}</td>
                <td className="px-4 py-4 border-r border-gray-200 font-medium text-gray-600">{row.email}</td>
                <td className="px-4 py-4 border-r border-gray-200 font-medium text-[13px]">{row.chucVu}</td>
                <td className="px-4 py-4 border-r border-gray-200 font-bold text-blue-700 text-[13px] bg-blue-50/30">{row.nhomQuyen}</td>
                <td className="px-4 py-4 border-r border-gray-200 font-bold text-[13px]">
                  <span className={row.trangThai === 'Đang hoạt động' ? 'text-gray-800' : 'text-red-500'}>
                    {row.trangThai}
                  </span>
                </td>
                <td className="px-3 py-4">
                  <div className="flex justify-center gap-2">
                    <button 
                      onClick={() => navigate('/quan-tri/tai-khoan/tao-moi')} 
                      className="bg-[#F59E0B] hover:bg-yellow-500 text-white px-3 py-1.5 rounded-md text-[11px] font-bold shadow-sm whitespace-nowrap"
                    >
                      Sửa
                    </button>
                    
                    {row.trangThai === 'Đang hoạt động' ? (
                      <button onClick={() => toggleTrangThai(row.id)} className="bg-[#6FCF97] hover:bg-[#5EBC84] text-white px-3 py-1.5 rounded-md text-[11px] font-bold shadow-sm whitespace-nowrap">Vô hiệu hoá</button>
                    ) : (
                      <button onClick={() => toggleTrangThai(row.id)} className="bg-[#3b82f6] hover:bg-blue-600 text-white px-3 py-1.5 rounded-md text-[11px] font-bold shadow-sm whitespace-nowrap">Kích hoạt</button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QuanLyTaiKhoan;