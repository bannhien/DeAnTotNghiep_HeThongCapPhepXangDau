const DanhMucPhuongXa = () => {
  // Dữ liệu thô 94 đơn vị hành chính mới nhất
  const rawData = [
    ['Phường Hải Châu', 'Phường', 'P. Thanh Bình + P. Thuận Phước + P. Thạch Thang + P. Phước Ninh + P. Hải Châu'],
    ['Phường Hòa Cường', 'Phường', 'P. Bình Thuận + P. Hòa Thuận Tây + P. Hòa Cường Bắc + P. Hòa Cường Nam'],
    ['Phường Thanh Khê', 'Phường', 'P. Xuân Hà + P. Chính Gián + P. Thạc Gián + P. Thanh Khê Tây + P. Thanh Khê Đông'],
    ['Phường An Khê', 'Phường', 'P. Hòa An + P. Hòa Phát + P. An Khê'],
    ['Phường An Hải', 'Phường', 'P. Phước Mỹ + P. An Hải Bắc + P. An Hải Nam'],
    ['Phường Sơn Trà', 'Phường', 'P. Thọ Quang + P. Nại Hiên Đông + P. Mân Thái'],
    ['Phường Ngũ Hành Sơn', 'Phường', 'P. Mỹ An + P. Khuê Mỹ + P. Hòa Hải + P. Hòa Quý'],
    ['Phường Hòa Khánh', 'Phường', 'P. Hòa Khánh Nam + P. Hòa Minh + X. Hòa Sơn'],
    ['Phường Hải Vân', 'Phường', 'P. Hòa Hiệp Bắc + P. Hòa Hiệp Nam + X. Hòa Bắc + một phần X. Hòa Liên'],
    ['Phường Liên Chiểu', 'Phường', 'P. Hòa Khánh Bắc + phần còn lại X. Hòa Liên'],
    ['Phường Cẩm Lệ', 'Phường', 'P. Hòa Thọ Tây + P. Hòa Thọ Đông + P. Khuê Trung'],
    ['Phường Hòa Xuân', 'Phường', 'P. Hòa Xuân + X. Hòa Châu + X. Hòa Phước'],
    ['Phường Tam Kỳ', 'Phường', 'P. An Mỹ + P. An Xuân + P. Trường Xuân'],
    ['Phường Quảng Phú', 'Phường', 'P. An Phú + X. Tam Thanh + X. Tam Phú'],
    ['Phường Hương Trà', 'Phường', 'P. An Sơn + P. Hòa Hương + X. Tam Ngọc'],
    ['Phường Bàn Thạch', 'Phường', 'P. Tân Thạnh + P. Hòa Thuận + X. Tam Thăng'],
    ['Phường Điện Bàn', 'Phường', 'P. Điện Phương + P. Điện Minh + P. Vĩnh Điện'],
    ['Phường Điện Bàn Đông', 'Phường', 'P. Điện Nam Đông + P. Điện Nam Trung + P. Điện Dương + P. Điện Ngọc + P. Điện Nam Bắc'],
    ['Phường An Thắng', 'Phường', 'P. Điện An + P. Điện Thắng Nam + P. Điện Thắng Trung'],
    ['Phường Điện Bàn Bắc', 'Phường', 'P. Điện Thắng Bắc + X. Điện Hòa + X. Điện Tiến'],
    ['Phường Hội An', 'Phường', 'P. Minh An + P. Cẩm Phô + P. Sơn Phong + P. Cẩm Nam + X. Cẩm Kim'],
    ['Phường Hội An Đông', 'Phường', 'P. Cẩm Châu + P. Cửa Đại + X. Cẩm Thanh'],
    ['Phường Hội An Tây', 'Phường', 'P. Thanh Hà + P. Tân An + P. Cẩm An + X. Cẩm Hà'],
    ['Xã Hòa Vang', 'Xã', 'X. Hòa Phong + X. Hòa Phú'],
    ['Xã Hòa Tiến', 'Xã', 'X. Hòa Khương + X. Hòa Tiến'],
    ['Xã Bà Nà', 'Xã', 'X. Hòa Ninh + X. Hòa Nhơn'],
    ['Xã Núi Thành', 'Xã', 'Thị trấn Núi Thành + X. Tam Quang + X. Tam Nghĩa + X. Tam Hiệp + X. Tam Giang'],
    ['Xã Tam Mỹ', 'Xã', 'X. Tam Mỹ Đông + X. Tam Mỹ Tây + X. Tam Trà'],
    ['Xã Tam Anh', 'Xã', 'X. Tam Hòa + X. Tam Anh Bắc + X. Tam Anh Nam'],
    ['Xã Đức Phú', 'Xã', 'X. Tam Sơn + X. Tam Thạnh'],
    ['Xã Tam Xuân', 'Xã', 'X. Tam Xuân I + X. Tam Xuân II + X. Tam Tiến'],
    ['Xã Tây Hồ', 'Xã', 'X. Tam An + X. Tam Thành + X. Tam Phước + X. Tam Lộc'],
    ['Xã Chiên Đàn', 'Xã', 'Thị trấn Phú Thịnh + X. Tam Đàn + X. Tam Thái'],
    ['Xã Phú Ninh', 'Xã', 'X. Tam Dân + X. Tam Đại + X. Tam Lãnh'],
    ['Xã Lãnh Ngọc', 'Xã', 'X. Tiên Lãnh + X. Tiên Ngọc + X. Tiên Hiệp'],
    ['Xã Tiên Phước', 'Xã', 'Thị trấn Tiên Kỳ + X. Tiên Mỹ + X. Tiên Phong + X. Tiên Thọ'],
    ['Xã Thạnh Bình', 'Xã', 'X. Tiên Lập + X. Tiên Lộc + X. Tiên An + X. Tiên Cảnh'],
    ['Xã Sơn Cẩm Hà', 'Xã', 'X. Tiên Sơn + X. Tiên Hà + X. Tiên Châu'],
    ['Xã Trà Liên', 'Xã', 'X. Trà Đông + X. Trà Nú + X. Trà Kót'],
    ['Xã Trà Giáp', 'Xã', 'X. Trà Ka + X. Trà Giáp'],
    ['Xã Trà Tân', 'Xã', 'X. Trà Giác + X. Trà Tân'],
    ['Xã Trà Đốc', 'Xã', 'X. Trà Bui + X. Trà Đốc'],
    ['Xã Trà My', 'Xã', 'Thị trấn Trà My + X. Trà Sơn + X. Trà Giang + X. Trà Dương'],
    ['Xã Nam Trà My', 'Xã', 'X. Trà Mai + X. Trà Don'],
    ['Xã Trà Tập', 'Xã', 'X. Trà Cang + X. Trà Tập'],
    ['Xã Trà Vân', 'Xã', 'X. Trà Vinh + X. Trà Vân'],
    ['Xã Trà Linh', 'Xã', 'X. Trà Nam + X. Trà Linh'],
    ['Xã Trà Leng', 'Xã', 'X. Trà Dơn + X. Trà Leng'],
    ['Xã Thăng Bình', 'Xã', 'Thị trấn Hà Lam + X. Bình Nguyên + X. Bình Quý + X. Bình Phục'],
    ['Xã Thăng An', 'Xã', 'X. Bình Triều + X. Bình Giang + X. Bình Đào + X. Bình Minh + X. Bình Dương'],
    ['Xã Thăng Trường', 'Xã', 'X. Bình Nam + X. Bình Hải + X. Bình Sa'],
    ['Xã Thăng Điền', 'Xã', 'X. Bình An + X. Bình Trung + X. Bình Tú'],
    ['Xã Thăng Phú', 'Xã', 'X. Bình Phú + X. Bình Quế'],
    ['Xã Đồng Dương', 'Xã', 'X. Bình Lãnh + X. Bình Trị + X. Bình Định'],
    ['Xã Quế Sơn Trung', 'Xã', 'X. Quế Mỹ + X. Quế Hiệp + X. Quế Thuận + X. Quế Châu'],
    ['Xã Quế Sơn', 'Xã', 'Thị trấn Đông Phú + X. Quế Minh + X. Quế An + X. Quế Long + X. Quế Phong'],
    ['Xã Xuân Phú', 'Xã', 'Thị trấn Hương An + X. Quế Xuân 1 + X. Quế Xuân 2 + X. Quế Phú'],
    ['Xã Nông Sơn', 'Xã', 'Thị trấn Trung Phước + X. Quế Lộc'],
    ['Xã Quế Phước', 'Xã', 'X. Quế Lâm + X. Phước Ninh + X. Ninh Phước'],
    ['Xã Duy Nghĩa', 'Xã', 'X. Duy Thành + X. Duy Hải + X. Duy Nghĩa'],
    ['Xã Nam Phước', 'Xã', 'Thị trấn Nam Phước + X. Duy Phước + X. Duy Vinh'],
    ['Xã Duy Xuyên', 'Xã', 'X. Duy Trung + X. Duy Sơn + X. Duy Trinh'],
    ['Xã Thu Bồn', 'Xã', 'X. Duy Châu + X. Duy Hoà + X. Duy Phú + X. Duy Tân'],
    ['Xã Điện Bàn Tây', 'Xã', 'X. Điện Hồng + X. Điện Thọ + X. Điện Phước'],
    ['Xã Gò Nổi', 'Xã', 'X. Điện Phong + X. Điện Trung + X. Điện Quang'],
    ['Xã Đại Lộc', 'Xã', 'Thị trấn Ái Nghĩa + X. Đại Hiệp + X. Đại Hòa + X. Đại An + X. Đại Nghĩa'],
    ['Xã Hà Nha', 'Xã', 'X. Đại Đồng + X. Đại Hồng + X. Đại Quang'],
    ['Xã Thượng Đức', 'Xã', 'X. Đại Lãnh + X. Đại Hưng + X. Đại Sơn'],
    ['Xã Vu Gia', 'Xã', 'X. Đại Phong + X. Đại Minh + X. Đại Cường'],
    ['Xã Phú Thuận', 'Xã', 'X. Đại Tân + X. Đại Thắng + X. Đại Chánh + X. Đại Thạnh'],
    ['Xã Thạnh Mỹ', 'Xã', 'Thị trấn Thạnh Mỹ'],
    ['Xã Bến Giằng', 'Xã', 'X. Cà Dy + X. Tà Bhing + X. Tà Pơơ'],
    ['Xã Nam Giang', 'Xã', 'X. Zuôih + X. Chà Vàl'],
    ['Xã Đắc Pring', 'Xã', 'X. Đắc Pre + X. Đắc Pring'],
    ['Xã La Dêê', 'Xã', 'X. Đắc Tôi + X. La Dêê'],
    ['Xã La Êê', 'Xã', 'X. Chơ Chun + X. La Êê'],
    ['Xã Sông Vàng', 'Xã', 'X. Tư + X. Ba'],
    ['Xã Sông Kôn', 'Xã', 'X. A Ting + X. Jơ Ngây + X. Sông Kôn'],
    ['Xã Đông Giang', 'Xã', 'Thị trấn Prao + X. Tà Lu + X. A Rooi + X. Zà Hung'],
    ['Xã Bến Hiên', 'Xã', 'X. Kà Dăng + X. Mà Cooih'],
    ['Xã Avương', 'Xã', 'X. Bhalêê + X. Avương'],
    ['Xã Tây Giang', 'Xã', 'X. Atiêng + X. Dang + X. Anông + X. Lăng'],
    ['Xã Hùng Sơn', 'Xã', 'X. Ch’ơm + X. Gari + X. Tr’hy + X. Axan'],
    ['Xã Hiệp Đức', 'Xã', 'Thị trấn Tân Bình + X. Quế Tân + X. Quế Lưu'],
    ['Xã Việt An', 'Xã', 'X. Thăng Phước + X. Bình Sơn + X. Quế Thọ + X. Bình Lâm'],
    ['Xã Phước Trà', 'Xã', 'X. Sông Trà + X. Phước Gia + X. Phước Trà'],
    ['Xã Khâm Đức', 'Xã', 'Thị trấn Khâm Đức + X. Phước Xuân'],
    ['Xã Phước Năng', 'Xã', 'X. Phước Đức + X. Phước Mỹ + X. Phước Năng'],
    ['Xã Phước Chánh', 'Xã', 'X. Phước Công + X. Phước Chánh'],
    ['Xã Phước Thành', 'Xã', 'X. Phước Lộc + X. Phước Kim + X. Phước Thành'],
    ['Xã Phước Hiệp', 'Xã', 'X. Phước Hòa + X. Phước Hiệp'],
    ['Xã Tam Hải', 'Xã', 'Không sắp xếp (giữ nguyên)'],
    ['Xã Tân Hiệp', 'Xã', 'Không sắp xếp (giữ nguyên)'],
    ['Đặc khu Hoàng Sa', 'Đặc khu', 'Huyện Hoàng Sa (chuyển đổi từ huyện thành đặc khu)'],
  ];

  // Tự động map mảng thô thành mảng Object có STT và Mã để render
  const mockData = rawData.map((item, index) => ({
    stt: index + 1,
    ma: `PX_${String(index + 1).padStart(3, '0')}`, // Tự sinh mã PX_001 -> PX_094
    ten: item[0],
    cap: item[1],
    ghiChu: item[2]
  }));

  return (
    <div className="h-full flex flex-col pt-4">
      <h1 className="text-xl font-bold text-gray-800 uppercase text-center mb-8 tracking-wide">
        HỆ THỐNG QUẢN LÝ DANH MỤC PHƯỜNG XÃ / ĐẶC KHU
      </h1>

      {/* BỘ LỌC TÌM KIẾM */}
      <div className="mb-6 flex items-center justify-center gap-6 max-w-4xl mx-auto w-full">
        <div className="flex items-center gap-4 flex-1">
          <label className="text-[13px] font-bold text-gray-800 w-32 text-right">Tên Đơn vị</label>
          <input type="text" className="flex-1 border border-gray-400 rounded-full px-4 py-1.5 focus:outline-none focus:border-blue-500 text-sm bg-white" placeholder="Tìm tên Phường/Xã..." />
        </div>
        <div className="flex items-center gap-4 flex-1">
          <label className="text-[13px] font-bold text-gray-800 w-32 text-right">Cấp Hành chính</label>
          <select className="flex-1 border border-gray-400 rounded-full px-4 py-1.5 focus:outline-none focus:border-blue-500 text-sm bg-white">
            <option value="">Tất cả</option>
            <option value="Phường">Phường</option>
            <option value="Xã">Xã</option>
            <option value="Đặc khu">Đặc khu</option>
          </select>
        </div>
        <button className="bg-[#4CAF50] hover:bg-green-600 text-white px-8 py-1.5 rounded transition-colors text-sm font-semibold shadow-sm ml-4">
          Tra cứu
        </button>
      </div>

      {/* BẢNG DANH SÁCH (CÓ SCROLL VÀ STICKY HEADER) */}
      <div className="bg-white border border-gray-300 rounded shadow-sm max-w-6xl mx-auto w-full flex-1 max-h-[600px] overflow-y-auto custom-scrollbar relative">
        <table className="w-full text-sm text-center">
          <thead className="text-[13px] text-gray-800 bg-[#CDE0F5] sticky top-0 z-10 shadow-sm border-b border-gray-300">
            <tr>
              <th className="px-3 py-4 border-r border-gray-300 w-12 border-b border-gray-300">STT</th>
              <th className="px-4 py-4 border-r border-gray-300 w-32 border-b border-gray-300">Mã Đơn vị</th>
              <th className="px-4 py-4 border-r border-gray-300 w-48 border-b border-gray-300">Tên Phường/ Xã</th>
              <th className="px-4 py-4 border-r border-gray-300 w-32 border-b border-gray-300">Cấp hành chính</th>
              <th className="px-4 py-4 border-b border-gray-300 text-left pl-6 w-2/5">Đơn vị hợp thành / Ghi chú</th>
            </tr>
          </thead>
          <tbody>
            {mockData.map((row) => (
              <tr key={row.ma} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="px-3 py-4 border-r border-gray-200 font-medium">{row.stt}</td>
                <td className="px-4 py-4 border-r border-gray-200 font-medium text-gray-500">{row.ma}</td>
                <td className="px-4 py-4 border-r border-gray-200 font-bold text-blue-800">{row.ten}</td>
                <td className="px-4 py-4 border-r border-gray-200 font-bold text-gray-700">
                  <span className={`px-2 py-1 rounded text-[11px] ${row.cap === 'Phường' ? 'bg-blue-100 text-blue-700' : row.cap === 'Xã' ? 'bg-green-100 text-green-700' : 'bg-purple-100 text-purple-700'}`}>
                    {row.cap}
                  </span>
                </td>
                <td className="px-4 py-4 text-left pl-6 text-gray-700 leading-relaxed text-[13px]">
                  {row.ghiChu}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DanhMucPhuongXa;