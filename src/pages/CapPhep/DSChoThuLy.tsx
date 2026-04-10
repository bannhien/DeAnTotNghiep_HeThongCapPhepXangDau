import { useNavigate } from 'react-router-dom';

const DSChoThuLy = () => {
  const navigate = useNavigate();

  // Dữ liệu giả lập
  const mockData = [
    { stt: 1, tenDN: 'Chi nhánh công ty CP Xăng dầu dầu khí PV Oil Miền Trung tại Đà Nẵng', loai: 'Cấp sửa đổi bổ sung', ngay: '02/01/2026' },
    { stt: 2, tenDN: 'Chi nhánh Công ty TNHH Dũng Sông Hàn - Cửa hàng kinh doanh xăng dầu', loai: 'Cấp mới', ngay: '04/02/2026' },
    { stt: 3, tenDN: 'Công ty TNHH MTV Hòa Khánh 1', loai: 'Cấp sửa đổi bổ sung', ngay: '05/02/2026' },
    // Đã đồng bộ tên thành "Cấp lại" cho khớp với trang chi tiết
    { stt: 4, tenDN: 'Công ty TNHH TM&DV Bách An Nam', loai: 'Cấp lại', ngay: '14/02/2026' }, 
  ];

  return (
    <div className="h-full flex flex-col">
      <h1 className="text-xl font-bold text-gray-800 uppercase text-center mb-8 tracking-wide">
        Danh sách hồ sơ thụ lý
      </h1>

      {/* ================= BỘ LỌC TÌM KIẾM ================= */}
      <div className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end max-w-5xl">
          <div className="flex items-center gap-3 col-span-2">
            <label className="text-sm font-bold text-gray-800 w-24 text-right">Tên<br/>doanh nghiệp</label>
            <input type="text" className="flex-1 border border-gray-400 rounded p-1.5 focus:outline-none focus:border-blue-500 text-sm" />
          </div>
          
          <div className="col-span-2"></div> {/* Spacer */}

          <div className="flex items-center gap-3">
            <label className="text-sm font-bold text-gray-800 w-24 text-right">Loại thủ tục</label>
            <select className="flex-1 border border-gray-400 rounded p-1.5 focus:outline-none focus:border-blue-500 text-sm bg-white">
              <option></option>
              <option>Cấp mới</option>
              <option>Cấp sửa đổi bổ sung</option>
              <option>Cấp lại</option>
            </select>
          </div>

          <div className="flex items-center gap-3">
            <label className="text-sm font-bold text-gray-800 w-20 text-right leading-tight">Ngày nộp<br/>hồ sơ</label>
            <input type="date" className="flex-1 border border-gray-400 rounded p-1.5 focus:outline-none focus:border-blue-500 text-sm" />
          </div>

          <div className="flex justify-end col-span-2">
            <button className="bg-[#4CAF50] hover:bg-green-600 text-white px-8 py-1.5 rounded transition-colors text-sm font-semibold shadow-sm w-32">
              Tra cứu
            </button>
          </div>
        </div>
      </div>

      {/* ================= BẢNG DANH SÁCH ================= */}
      <div className="overflow-x-auto bg-white border border-gray-300 rounded shadow-sm flex-1">
        <table className="w-full text-sm text-left">
          <thead className="text-[13px] text-gray-800 bg-[#CDE0F5] border-b border-gray-300">
            <tr>
              <th className="px-3 py-3 text-center border-r border-gray-300 w-12 font-semibold">STT</th>
              <th className="px-4 py-3 text-center border-r border-gray-300 font-semibold w-2/5">Tên doanh nghiệp</th>
              <th className="px-4 py-3 text-center border-r border-gray-300 font-semibold">Loại thủ tục</th>
              <th className="px-4 py-3 text-center border-r border-gray-300 font-semibold">Ngày nộp hồ sơ</th>
              <th className="px-4 py-3 text-center font-semibold">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {mockData.map((row, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="px-3 py-4 text-center border-r border-gray-200 font-medium">{row.stt}</td>
                <td className="px-4 py-4 border-r border-gray-200 font-bold text-[13px] leading-relaxed text-gray-800">{row.tenDN}</td>
                <td className="px-4 py-4 text-center border-r border-gray-200 font-medium">{row.loai}</td>
                <td className="px-4 py-4 text-center border-r border-gray-200 font-medium">{row.ngay}</td>
                <td className="px-4 py-4 text-center">
                  <button 
                    // CHÚ Ý CHỖ NÀY: Gói theo dữ liệu row.loai sang trang chi tiết
                    onClick={() => navigate('/thu-ly/chi-tiet', { state: { loaiHoSoPassed: row.loai } })} 
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

export default DSChoThuLy;