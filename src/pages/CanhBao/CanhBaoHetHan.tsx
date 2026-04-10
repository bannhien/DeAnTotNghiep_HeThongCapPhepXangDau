import { useNavigate } from 'react-router-dom';

const DSGiaoTraKetQua = () => {
  const navigate = useNavigate();

  // Dữ liệu giả lập
  const mockData = [
    { stt: 1, soGP: '001-XD-2026', tenDN: 'Công ty TNHH MTV PV OIL (Cửa hàng xăng dầu số 11)', hinhThuc: 'Trực tiếp tại Bộ phận 1 cửa', nguoiNhan: 'Nguyễn Thị Hiền', trangThai: 'Chờ giao trả' },
    { stt: 2, soGP: '002-XD-2026', tenDN: 'Chi nhánh công ty CP Xăng dầu dầu khí PV Oil Miền Trung tại Đà Nẵng', hinhThuc: 'Qua dịch vụ bưu chính', nguoiNhan: 'Phùng Thị Kim Long', trangThai: 'Đã giao trả' },
    { stt: 3, soGP: '003-XD-2026', tenDN: 'Công ty TNHH TM&DV Bách An Nam', hinhThuc: 'Nhận bản điện tử', nguoiNhan: 'Nguyễn Văn A', trangThai: 'Chờ giao trả' },
  ];

  return (
    <div className="h-full flex flex-col pt-4">
      <h1 className="text-xl font-bold text-gray-800 uppercase text-center mb-8 tracking-wide">
        DANH SÁCH HỒ SƠ GIAO TRẢ KẾT QUẢ
      </h1>

      {/* ================= BỘ LỌC TÌM KIẾM ĐÃ CÓ BỘ LỌC HÌNH THỨC TRẢ ================= */}
      <div className="mb-8 flex items-center justify-between gap-4 max-w-6xl mx-auto w-full">
        
        {/* Tên doanh nghiệp */}
        <div className="flex items-center gap-3 flex-1">
          <label className="text-[13px] font-bold text-gray-800 flex-shrink-0 whitespace-nowrap">Tên doanh nghiệp</label>
          <input type="text" className="w-full border border-gray-400 rounded-full px-4 py-1.5 focus:outline-none focus:border-blue-500 text-sm bg-white" />
        </div>
        
        {/* Số Giấy phép */}
        <div className="flex items-center gap-3 flex-1">
          <label className="text-[13px] font-bold text-gray-800 flex-shrink-0 whitespace-nowrap">Số Giấy phép</label>
          <input type="text" className="w-full border border-gray-400 rounded-full px-4 py-1.5 focus:outline-none focus:border-blue-500 text-sm bg-white" />
        </div>
        
        {/* Bộ lọc Hình thức trả (Mới thêm) */}
        <div className="flex items-center gap-3 flex-[0.9]">
          <label className="text-[13px] font-bold text-gray-800 flex-shrink-0 whitespace-nowrap">Hình thức trả</label>
          <select className="w-full border border-gray-400 rounded-full px-4 py-1.5 focus:outline-none focus:border-blue-500 text-sm bg-white cursor-pointer">
            <option value="">Tất cả hình thức</option>
            <option value="truc-tiep">Trực tiếp tại Bộ phận 1 cửa</option>
            <option value="buu-dien">Qua dịch vụ bưu chính</option>
            <option value="truc-tuyen">Nhận bản điện tử</option>
          </select>
        </div>
        
        {/* Nút Tra cứu */}
        <button className="bg-[#4CAF50] hover:bg-green-600 text-white px-8 py-1.5 rounded-md transition-colors text-sm font-bold shadow-sm flex-shrink-0">
          Tra cứu
        </button>

      </div>

      {/* ================= BẢNG DANH SÁCH ================= */}
      <div className="overflow-x-auto bg-white border border-gray-300 rounded shadow-sm flex-1">
        <table className="w-full text-sm text-center">
          <thead className="text-[13px] text-gray-800 bg-[#CDE0F5] border-b border-gray-300">
            <tr>
              <th className="px-3 py-3 border-r border-gray-300 font-semibold w-12">STT</th>
              <th className="px-3 py-3 border-r border-gray-300 font-semibold w-32">Số giấy phép</th>
              <th className="px-4 py-3 border-r border-gray-300 font-semibold w-1/4">Tên doanh nghiệp</th>
              <th className="px-4 py-3 border-r border-gray-300 font-semibold w-48">Hình thức nhận</th>
              <th className="px-4 py-3 border-r border-gray-300 font-semibold">Người nhận</th>
              <th className="px-3 py-3 border-r border-gray-300 font-semibold w-32">Trạng thái</th>
              <th className="px-3 py-3 font-semibold w-32">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {mockData.map((row, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="px-3 py-4 border-r border-gray-200 font-medium">{row.stt}</td>
                <td className="px-3 py-4 border-r border-gray-200 font-bold text-blue-700">{row.soGP}</td>
                <td className="px-4 py-4 border-r border-gray-200 text-left font-medium text-[13px] leading-relaxed">{row.tenDN}</td>
                <td className="px-4 py-4 border-r border-gray-200 font-semibold text-[13px] text-gray-700">{row.hinhThuc}</td>
                <td className="px-4 py-4 border-r border-gray-200 text-[13px]">{row.nguoiNhan}</td>
                <td className="px-3 py-4 border-r border-gray-200 font-bold">
                  <span className={row.trangThai === 'Đã giao trả' ? 'text-green-600' : 'text-orange-500'}>{row.trangThai}</span>
                </td>
                <td className="px-3 py-4">
                  <button 
                    onClick={() => navigate('/giao-tra/chi-tiet')} 
                    className="bg-[#6FCF97] hover:bg-[#5EBC84] text-white px-4 py-1.5 rounded-md text-[11px] font-bold shadow-sm whitespace-nowrap"
                  >
                    Giao trả KQ
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

export default DSGiaoTraKetQua;