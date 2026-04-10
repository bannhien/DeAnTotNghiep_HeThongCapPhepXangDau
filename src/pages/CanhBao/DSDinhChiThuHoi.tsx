import { useNavigate } from 'react-router-dom';

const DSDinhChiThuHoi = () => {
  const navigate = useNavigate();

  const mockData = [
    { stt: 1, soGP: 'HD-2025-03-001', cuaHang: 'CHXD Hòa Khánh 11', hinhThuc: 'Đình chỉ có thời hạn', ngay: '31/12/2026', lyDo: 'Đã vi phạm về quy định PCCC' },
    { stt: 2, soGP: 'HD-2025-03-001', cuaHang: 'CHXD Tiểu La', hinhThuc: 'Đình chỉ có thời hạn', ngay: '31/12/2025', lyDo: 'Đã vi phạm về quy định PCCC' },
    { stt: 3, soGP: 'HD-2025-03-001', cuaHang: 'Công ty CP TM & Vận Tải Petrolimex ĐN', hinhThuc: 'Đình chỉ có thời hạn', ngay: '31/12/2026', lyDo: 'Đã vi phạm về quy định PCCC' },
    { stt: 4, soGP: 'HD-2025-03-001', cuaHang: 'CHXD số 7 Duy Tân', hinhThuc: 'Thu hồi vĩnh viễn', ngay: '31/12/2026', lyDo: 'Đã vi phạm về quy định hợp đồng' },
  ];

  return (
    <div className="h-full flex flex-col pt-4">
      <h1 className="text-xl font-bold text-gray-800 uppercase text-center mb-8 tracking-wide">
        Đình chỉ / Thu hồi giấy phép
      </h1>

      {/* ================= BỘ LỌC ĐÃ CĂN CHỈNH FORM CHUẨN ================= */}
      <div className="mb-8 flex items-center justify-between gap-4 max-w-6xl mx-auto w-full">
        
        <div className="flex items-center gap-3 flex-1">
          <label className="text-[13px] font-bold text-gray-800 flex-shrink-0 whitespace-nowrap">Cửa hàng</label>
          <input type="text" className="w-full border border-gray-400 rounded-full px-4 py-1.5 focus:outline-none focus:border-blue-500 text-sm bg-white" />
        </div>

        <div className="flex items-center gap-3 flex-1">
          <label className="text-[13px] font-bold text-gray-800 flex-shrink-0 whitespace-nowrap">Số Giấy phép</label>
          <input type="text" className="w-full border border-gray-400 rounded-full px-4 py-1.5 focus:outline-none focus:border-blue-500 text-sm bg-white" />
        </div>

        <div className="flex items-center gap-3 flex-[0.8]">
          <label className="text-[13px] font-bold text-gray-800 flex-shrink-0 whitespace-nowrap">Trạng thái</label>
          <select className="w-full border border-gray-400 rounded-full px-4 py-1.5 focus:outline-none focus:border-blue-500 text-sm bg-white cursor-pointer">
            <option value="">Tất cả</option>
            <option value="dinh-chi">Đình chỉ có thời hạn</option>
            <option value="thu-hoi">Thu hồi vĩnh viễn</option>
          </select>
        </div>

        {/* Cụm nút được tách riêng để không bị kéo giãn */}
        <div className="flex gap-3 flex-shrink-0 ml-2">
          <button className="bg-[#4CAF50] hover:bg-green-600 text-white px-6 py-1.5 rounded-md transition-colors text-sm font-bold shadow-sm">Tra cứu</button>
          <button 
            onClick={() => navigate('/dinh-chi-thu-hoi/chi-tiet', { state: { mode: 'create' } })}
            className="bg-[#F59E0B] hover:bg-yellow-500 text-white px-6 py-1.5 rounded-md transition-colors text-sm font-bold shadow-sm"
          >
            Tạo mới
          </button>
        </div>
      </div>

      {/* ================= BẢNG DANH SÁCH ================= */}
      <div className="overflow-x-auto bg-white border border-gray-300 rounded shadow-sm flex-1">
        <table className="w-full text-sm text-center">
          <thead className="text-[13px] text-gray-800 bg-[#CDE0F5] border-b border-gray-300">
            <tr>
              <th className="px-3 py-3 border-r border-gray-300 font-semibold w-12">STT</th>
              <th className="px-3 py-3 border-r border-gray-300 font-semibold w-32">Số giấy phép</th>
              <th className="px-4 py-3 border-r border-gray-300 font-semibold w-1/5">Cửa hàng phân phối</th>
              <th className="px-3 py-3 border-r border-gray-300 font-semibold w-32">Hình thức</th>
              <th className="px-3 py-3 border-r border-gray-300 font-semibold w-32">Ngày ra quyết định</th>
              <th className="px-4 py-3 border-r border-gray-300 font-semibold w-1/4">Lý do</th>
              <th className="px-3 py-3 font-semibold w-24">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {mockData.map((row, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="px-3 py-4 border-r border-gray-200 font-medium">{row.stt}</td>
                <td className="px-3 py-4 border-r border-gray-200 font-bold text-gray-800">{row.soGP}</td>
                <td className="px-4 py-4 border-r border-gray-200 font-medium text-[13px] leading-relaxed text-left">{row.cuaHang}</td>
                <td className="px-3 py-4 border-r border-gray-200 font-bold text-gray-700">{row.hinhThuc}</td>
                <td className="px-3 py-4 border-r border-gray-200">{row.ngay}</td>
                <td className="px-4 py-4 border-r border-gray-200 text-left text-[13px] text-gray-600 leading-relaxed">{row.lyDo}</td>
                <td className="px-3 py-4">
                  <button 
                    onClick={() => navigate('/dinh-chi-thu-hoi/chi-tiet', { state: { mode: 'view' } })}
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

export default DSDinhChiThuHoi;