import { useNavigate } from 'react-router-dom';

const DSHopDongPhanPhoi = () => {
  const navigate = useNavigate();

  // Dữ liệu giả lập theo ảnh thiết kế
  const mockData = [
    { stt: 1, soHD: 'HĐ-2026-03-001', nhaCungCap: 'Công ty TNHH MTV Hòa Khánh 1', cuaHang: 'CHXD Hòa Khánh 11', ngayHL: '01/01/2026', ngayHH: '31/12/2030', trangThai: 'Đang hoạt động' },
    { stt: 2, soHD: 'HĐ-2026-03-002', nhaCungCap: 'Chi nhánh công ty CP Xăng dầu dầu khí PV Oil Miền Trung tại Đà Nẵng', cuaHang: 'CHXD Tiểu La', ngayHL: '01/01/2026', ngayHH: '31/12/2030', trangThai: 'Đang hoạt động' },
    { stt: 3, soHD: 'HĐ-2026-03-003', nhaCungCap: 'Công ty CP TM & Vận Tải Petrolimex ĐN', cuaHang: 'Công ty CP TM & Vận Tải Petrolimex ĐN', ngayHL: '01/01/2026', ngayHH: '31/12/2030', trangThai: 'Đang hoạt động' },
    { stt: 4, soHD: 'HĐ-2026-03-004', nhaCungCap: 'CN Công ty TNHH TM&DV Vận Tải Ngọc Khánh', cuaHang: 'CHXD số 7 Duy Tân', ngayHL: '01/01/2026', ngayHH: '31/12/2030', trangThai: 'Đang hoạt động' },
  ];

  return (
    <div className="h-full flex flex-col">
      <h1 className="text-xl font-bold text-gray-800 uppercase text-center mb-8 tracking-wide">
        Quản lý thông tin hợp đồng phân phối
      </h1>

      {/* ================= BỘ LỌC TÌM KIẾM VÀ NÚT THÊM MỚI ================= */}
      <div className="mb-8 flex flex-col xl:flex-row items-center justify-center gap-6 max-w-6xl mx-auto w-full">
        
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <div className="flex items-center gap-3">
            <label className="text-[13px] font-bold text-gray-800 w-24 text-right">Tên cửa hàng</label>
            <input type="text" className="flex-1 border border-gray-400 rounded-full px-3 py-1.5 focus:outline-none focus:border-blue-500 text-sm bg-white" />
          </div>
          <div className="flex items-center gap-3">
            <label className="text-[13px] font-bold text-gray-800 w-24 text-right">Số hợp đồng</label>
            <input type="text" className="flex-1 border border-gray-400 rounded-full px-3 py-1.5 focus:outline-none focus:border-blue-500 text-sm bg-white" />
          </div>
          <div className="flex items-center gap-3">
            <label className="text-[13px] font-bold text-gray-800 w-24 text-right">Trạng thái</label>
            <select className="flex-1 border border-gray-400 rounded-full px-3 py-1.5 focus:outline-none focus:border-blue-500 text-sm bg-white"><option></option></select>
          </div>
          <div className="flex items-center gap-3">
            <label className="text-[13px] font-bold text-gray-800 w-24 text-right">Nhà cung cấp</label>
            <input type="text" className="flex-1 border border-gray-400 rounded-full px-3 py-1.5 focus:outline-none focus:border-blue-500 text-sm bg-white" />
          </div>
        </div>

        <div className="flex gap-4">
          <button className="bg-[#4CAF50] hover:bg-green-600 text-white px-8 py-2 rounded-md transition-colors text-sm font-bold shadow-sm">
            Tra cứu
          </button>
          <button 
            // Truyền mode 'create' sang trang chi tiết để bật form tạo mới
            onClick={() => navigate('/hop-dong-phan-phoi/chi-tiet', { state: { viewMode: 'create' } })}
            className="bg-[#F59E0B] hover:bg-yellow-500 text-white px-6 py-2 rounded-md transition-colors text-sm font-bold shadow-sm"
          >
            Thêm hợp đồng mới
          </button>
        </div>
      </div>

      {/* ================= BẢNG DANH SÁCH ================= */}
      <div className="overflow-x-auto bg-white border border-gray-300 rounded shadow-sm flex-1">
        <table className="w-full text-sm text-center">
          <thead className="text-[12px] text-gray-800 bg-[#CDE0F5] border-b border-gray-300 uppercase">
            <tr>
              <th className="px-2 py-3 border-r border-gray-300 w-10 font-bold">STT</th>
              <th className="px-3 py-3 border-r border-gray-300 font-bold">Số hợp đồng</th>
              <th className="px-3 py-3 border-r border-gray-300 font-bold w-1/4">Nhà cung cấp (A)</th>
              <th className="px-3 py-3 border-r border-gray-300 font-bold w-1/5">Cửa hàng phân phối (B)</th>
              <th className="px-3 py-3 border-r border-gray-300 font-bold">Ngày hiệu lực</th>
              <th className="px-3 py-3 border-r border-gray-300 font-bold">Ngày hết hạn</th>
              <th className="px-3 py-3 border-r border-gray-300 font-bold">Trạng thái</th>
              <th className="px-3 py-3 font-bold">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {mockData.map((row, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="px-2 py-4 border-r border-gray-200 font-medium">{row.stt}</td>
                <td className="px-3 py-4 border-r border-gray-200 font-bold text-gray-800">{row.soHD}</td>
                <td className="px-3 py-4 border-r border-gray-200 text-left font-semibold text-[13px]">{row.nhaCungCap}</td>
                <td className="px-3 py-4 border-r border-gray-200 text-left font-semibold text-[13px]">{row.cuaHang}</td>
                <td className="px-3 py-4 border-r border-gray-200">{row.ngayHL}</td>
                <td className="px-3 py-4 border-r border-gray-200">{row.ngayHH}</td>
                <td className="px-3 py-4 border-r border-gray-200 font-bold text-gray-600">{row.trangThai}</td>
                <td className="px-3 py-4 text-center">
                  <button 
                    // Truyền mode 'view' sang trang chi tiết để xem
                    onClick={() => navigate('/hop-dong-phan-phoi/chi-tiet', { state: { viewMode: 'view' } })}
                    className="bg-[#6FCF97] hover:bg-[#5EBC84] text-white px-3 py-1.5 rounded-md text-[11px] font-bold shadow-sm whitespace-nowrap"
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

export default DSHopDongPhanPhoi;