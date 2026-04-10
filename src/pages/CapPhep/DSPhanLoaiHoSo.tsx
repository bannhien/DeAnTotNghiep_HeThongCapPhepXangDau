import { useNavigate } from 'react-router-dom';

const DSPhanLoaiHoSo = () => {
  const navigate = useNavigate();

  // Dữ liệu giả lập dựa trên hình ảnh của bạn
  const mockData = [
    { stt: 1, maBN: '001-XD-2026', tenDN: 'Chi nhánh công ty CP Xăng dầu dầu khí PV Oil Miền Trung tại Đà Nẵng', loai: 'Cấp sửa đổi bổ sung', ngay: '02/01/2026', trangThai: 'Chờ tiếp nhận' },
    { stt: 2, maBN: '002-XD-2026', tenDN: 'Chi nhánh Công ty TNHH Dũng Sông Hàn - Cửa hàng kinh doanh xăng dầu', loai: 'Cấp mới', ngay: '04/02/2026', trangThai: 'Chờ tiếp nhận' },
    { stt: 3, maBN: '003-XD-2026', tenDN: 'Công ty TNHH MTV Hòa Khánh 1', loai: 'Cấp sửa đổi bổ sung', ngay: '05/02/2026', trangThai: 'Chờ tiếp nhận' },
    { stt: 4, maBN: '004-XD-2026', tenDN: 'Công ty TNHH TM&DV Bách An Nam', loai: 'Cấp sửa lại', ngay: '14/02/2026', trangThai: 'Chờ tiếp nhận' },
  ];

  return (
    <div className="h-full flex flex-col">
      <h1 className="text-xl font-bold text-gray-800 uppercase text-center mb-8 tracking-wide">
        Danh sách hồ sơ chờ tiếp nhận
      </h1>

      {/* ================= BỘ LỌC TÌM KIẾM ================= */}
      <div className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
          <div className="flex items-center gap-3">
            <label className="text-sm font-bold text-gray-800 w-24 text-right leading-tight">Mã số thuế /<br/>biên nhận</label>
            <input type="text" className="flex-1 border border-gray-400 rounded p-1.5 focus:outline-none focus:border-blue-500 text-sm" />
          </div>
          <div className="flex items-center gap-3">
            <label className="text-sm font-bold text-gray-800 w-20 text-right">Loại thủ tục</label>
            <select className="flex-1 border border-gray-400 rounded p-1.5 focus:outline-none focus:border-blue-500 text-sm bg-white">
              <option></option>
              <option>Cấp mới</option>
              <option>Cấp sửa đổi bổ sung</option>
            </select>
          </div>
          <div className="flex items-center gap-3">
            <label className="text-sm font-bold text-gray-800 w-20 text-right">Ngày nộp<br/>hồ sơ</label>
            <input type="date" className="flex-1 border border-gray-400 rounded p-1.5 focus:outline-none focus:border-blue-500 text-sm" />
          </div>
          
          {/* Hàng 2 của bộ lọc */}
          <div className="flex items-center gap-3 md:col-span-2">
            <label className="text-sm font-bold text-gray-800 w-24 text-right leading-tight">Tên<br/>doanh nghiệp</label>
            <input type="text" className="flex-1 border border-gray-400 rounded p-1.5 focus:outline-none focus:border-blue-500 text-sm" />
          </div>
          <div className="flex justify-end">
            <button className="bg-[#4CAF50] hover:bg-green-600 text-white px-8 py-1.5 rounded transition-colors text-sm font-semibold">
              Tra cứu
            </button>
          </div>
        </div>
      </div>

      {/* ================= BẢNG DANH SÁCH ================= */}
      <div className="overflow-x-auto bg-white border border-gray-300 rounded shadow-sm">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-gray-800 uppercase bg-blue-100 border-b border-gray-300">
            <tr>
              <th className="px-4 py-3 text-center border-r border-gray-300 w-12">STT</th>
              <th className="px-4 py-3 text-center border-r border-gray-300">Mã biên nhận</th>
              <th className="px-4 py-3 text-center border-r border-gray-300">Tên doanh nghiệp</th>
              <th className="px-4 py-3 text-center border-r border-gray-300">Loại thủ tục</th>
              <th className="px-4 py-3 text-center border-r border-gray-300">Ngày nộp hồ sơ</th>
              <th className="px-4 py-3 text-center border-r border-gray-300">Trạng thái</th>
              <th className="px-4 py-3 text-center">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {mockData.map((row, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="px-4 py-4 text-center border-r border-gray-200 font-medium">{row.stt}</td>
                <td className="px-4 py-4 text-center border-r border-gray-200 font-semibold">{row.maBN}</td>
                <td className="px-4 py-4 border-r border-gray-200 font-medium">{row.tenDN}</td>
                <td className="px-4 py-4 text-center border-r border-gray-200">{row.loai}</td>
                <td className="px-4 py-4 text-center border-r border-gray-200">{row.ngay}</td>
                <td className="px-4 py-4 text-center border-r border-gray-200 font-semibold text-gray-600">{row.trangThai}</td>
                <td className="px-4 py-4 text-center">
                  <button 
                    onClick={() => navigate('/phan-loai/chi-tiet')} // Điều hướng sang trang Phân loại
                    className="bg-[#4CAF50] hover:bg-green-600 text-white px-3 py-1.5 rounded-md text-xs font-semibold shadow-sm transition-colors whitespace-nowrap"
                  >
                    Xem chi tiết
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DSPhanLoaiHoSo;