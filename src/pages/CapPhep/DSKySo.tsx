import { useNavigate } from 'react-router-dom';

const DSKySo = () => {
  const navigate = useNavigate();

  // Dữ liệu giả lập cho danh sách chờ ký
  const mockData = [
    { stt: 1, tenDN: 'Công ty TNHH MTV PV OIL (Cửa hàng xăng dầu số 11)', loai: 'Cấp mới', ngay: '08/04/2026', nguoiTrinh: 'Nguyễn Thị Hiền', trangThai: 'Chờ lãnh đạo phê duyệt' },
    { stt: 2, tenDN: 'Chi nhánh công ty CP Xăng dầu dầu khí PV Oil Miền Trung tại Đà Nẵng', loai: 'Cấp sửa đổi bổ sung', ngay: '02/04/2026', nguoiTrinh: 'Phùng Thị Kim Long', trangThai: 'Đã ký số' },
    { stt: 3, tenDN: 'Công ty TNHH TM&DV Bách An Nam', loai: 'Cấp lại', ngay: '14/02/2026', nguoiTrinh: 'Nguyễn Văn A', trangThai: 'Chờ lãnh đạo phê duyệt' },
  ];

  return (
    <div className="h-full flex flex-col">
      <h1 className="text-xl font-bold text-gray-800 uppercase text-center mb-8 tracking-wide">
        Danh sách hồ sơ chờ ký số
      </h1>

      {/* ================= BỘ LỌC TÌM KIẾM (Đã sửa layout đẹp mắt) ================= */}
      <div className="mb-8 flex flex-col md:flex-row items-center justify-center gap-6 max-w-4xl mx-auto w-full">
        
        {/* Input Tên doanh nghiệp */}
        <div className="flex items-center gap-4 flex-1 w-full">
          <label className="text-[13px] font-bold text-gray-800 w-24 text-right leading-tight">
            Tên<br/>doanh nghiệp
          </label>
          <input 
            type="text" 
            className="flex-1 border border-gray-400 rounded-full px-4 py-1.5 focus:outline-none focus:border-blue-500 text-sm bg-white" 
          />
        </div>
        
        {/* Input Người trình */}
        <div className="flex items-center gap-4 flex-1 w-full">
          <label className="text-[13px] font-bold text-gray-800 w-24 text-right leading-tight">
            Người trình<br/>hồ sơ
          </label>
          <input 
            type="text" 
            className="flex-1 border border-gray-400 rounded-full px-4 py-1.5 focus:outline-none focus:border-blue-500 text-sm bg-white" 
          />
        </div>

        {/* Nút Tra cứu nhỏ gọn */}
        <div className="flex-shrink-0 mt-2 md:mt-0">
          <button className="bg-[#4CAF50] hover:bg-green-600 text-white px-8 py-1.5 rounded transition-colors text-sm font-semibold shadow-sm w-32">
            Tra cứu
          </button>
        </div>
        
      </div>

      {/* ================= BẢNG DANH SÁCH ================= */}
      <div className="overflow-x-auto bg-white border border-gray-300 rounded shadow-sm flex-1">
        <table className="w-full text-sm text-left">
          <thead className="text-[13px] text-gray-800 bg-[#CDE0F5] border-b border-gray-300">
            <tr>
              <th className="px-3 py-3 text-center border-r border-gray-300 w-12 font-semibold">STT</th>
              <th className="px-4 py-3 text-center border-r border-gray-300 font-semibold w-1/3">Tên doanh nghiệp</th>
              <th className="px-4 py-3 text-center border-r border-gray-300 font-semibold">Loại thủ tục</th>
              <th className="px-4 py-3 text-center border-r border-gray-300 font-semibold">Người trình</th>
              <th className="px-4 py-3 text-center border-r border-gray-300 font-semibold">Trạng thái</th>
              <th className="px-4 py-3 text-center font-semibold">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {mockData.map((row, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="px-3 py-4 text-center border-r border-gray-200 font-medium">{row.stt}</td>
                <td className="px-4 py-4 border-r border-gray-200 font-bold text-[13px] leading-relaxed text-gray-800">{row.tenDN}</td>
                <td className="px-4 py-4 text-center border-r border-gray-200 font-medium">{row.loai}</td>
                <td className="px-4 py-4 text-center border-r border-gray-200 font-medium">{row.nguoiTrinh}</td>
                <td className="px-4 py-4 text-center border-r border-gray-200 font-bold">
                  <span className={row.trangThai === 'Đã ký số' ? 'text-green-600' : 'text-orange-500'}>
                    {row.trangThai}
                  </span>
                </td>
                <td className="px-4 py-4 text-center">
                  <button 
                    onClick={() => navigate('/ky-so/chi-tiet')} 
                    className="bg-[#6FCF97] hover:bg-[#5EBC84] text-white px-4 py-1.5 rounded-md text-[12px] font-bold shadow-sm transition-colors whitespace-nowrap"
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

export default DSKySo;