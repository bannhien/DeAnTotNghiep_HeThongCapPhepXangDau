import { useNavigate } from 'react-router-dom';

const DSQuanLyHaTang = () => {
  const navigate = useNavigate();

  const mockData = [
    { stt: 1, ten: 'CHXD Hòa Khánh 11', diaChi: '423 Ngô Quyền, phường Sơn Trà', tru: 4, dungTich: 50, trangThai: 'Đang hoạt động' },
    { stt: 2, ten: 'CHXD 198 Tôn Đức Thắng', diaChi: '198 Tôn Đức Thắng, phường Hoà Khánh', tru: 4, dungTich: 50, trangThai: 'Đang hoạt động' },
    { stt: 3, ten: 'CHXD Tiểu La', diaChi: '02 Phan Thành Tài, phường Hải Châu', tru: 2, dungTich: 25, trangThai: 'Đang hoạt động' },
    { stt: 4, ten: 'CHXD Ngô Quyền 2', diaChi: '249 Ngô Quyền, phường Sơn Trà', tru: 4, dungTich: 50, trangThai: 'Đang hoạt động' },
  ];

  return (
    <div className="h-full flex flex-col">
      <h1 className="text-xl font-bold text-gray-800 uppercase text-center mb-8 tracking-wide">
        Quản lý thông tin hạ tầng cơ sở
      </h1>

      <div className="mb-8 flex items-center justify-center gap-6 max-w-4xl mx-auto w-full">
        <div className="flex items-center gap-4 flex-1">
          <label className="text-[14px] font-bold text-gray-800 w-20 text-right leading-tight">Tên<br/>cửa hàng</label>
          <input type="text" className="flex-1 border border-gray-400 rounded-full px-4 py-1.5 focus:outline-none focus:border-blue-500 text-sm bg-white" />
        </div>
        <div className="flex items-center gap-4 flex-1">
          <label className="text-[14px] font-bold text-gray-800 w-20 text-right">Trạng thái</label>
          <select className="flex-1 border border-gray-400 rounded-full px-4 py-1.5 focus:outline-none focus:border-blue-500 text-sm bg-white"><option></option></select>
        </div>
        <button className="bg-[#4CAF50] hover:bg-green-600 text-white px-8 py-1.5 rounded transition-colors text-sm font-semibold shadow-sm w-32">
          Tra cứu
        </button>
      </div>

      <div className="overflow-x-auto bg-white border border-gray-300 rounded shadow-sm flex-1">
        <table className="w-full text-sm text-center">
          <thead className="text-[13px] text-gray-800 bg-[#CDE0F5] border-b border-gray-300">
            <tr>
              <th className="px-3 py-3 border-r border-gray-300 w-12">STT</th>
              <th className="px-4 py-3 border-r border-gray-300">Tên cửa hàng</th>
              <th className="px-4 py-3 border-r border-gray-300 w-1/3">Địa chỉ</th>
              <th className="px-4 py-3 border-r border-gray-300">Tổng số<br/>trụ bơm</th>
              <th className="px-4 py-3 border-r border-gray-300">Tổng dung<br/>tích bể (m3)</th>
              <th className="px-4 py-3 border-r border-gray-300">Trạng thái</th>
              <th className="px-4 py-3">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {mockData.map((row, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="px-3 py-4 border-r border-gray-200 font-medium">{row.stt}</td>
                <td className="px-4 py-4 border-r border-gray-200 font-bold text-gray-800">{row.ten}</td>
                <td className="px-4 py-4 border-r border-gray-200 text-left">{row.diaChi}</td>
                <td className="px-4 py-4 border-r border-gray-200 font-medium">{row.tru}</td>
                <td className="px-4 py-4 border-r border-gray-200 font-medium">{row.dungTich}</td>
                <td className="px-4 py-4 border-r border-gray-200 font-bold text-gray-700">{row.trangThai}</td>
                <td className="px-4 py-4 text-center">
                  <button onClick={() => navigate('/quan-ly-ha-tang/chi-tiet')} className="bg-[#6FCF97] hover:bg-[#5EBC84] text-white px-4 py-1.5 rounded-md text-[12px] font-bold shadow-sm">Xem chi tiết</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DSQuanLyHaTang;