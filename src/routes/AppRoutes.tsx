import { Routes, Route, Navigate } from 'react-router-dom';

// Import Layouts
import AuthLayout from '../components/layout/AuthLayout';
import AdminLayout from '../components/layout/AdminLayout';
import PublicLayout from '../components/layout/PublicLayout';
import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/LoginPage';
import DashboardPage from '../pages/Dashboard/DashboardPage'; 
import ChangePasswordPage from '../pages/Profile/ChangePasswordPage'; 
import TrangChuCDV from '../pages/CongDichVu/TrangChuCDV';
import NopHoSo from '../pages/CongDichVu/NopHoSo';
import TraCuuTrangThaiHS from '../pages/CongDichVu/TraCuuTrangThaiHS';
import BoSungHoSo from '../pages/CongDichVu/BoSungHoSo';
import TiepNhanHoSo from '../pages/CapPhep/TiepNhanHoSo';
import DSPhanLoaiHoSo from '../pages/CapPhep/DSPhanLoaiHoSo';
import PhanLoaiHoSo from '../pages/CapPhep/PhanLoaiHoSo';
import GiaoTraKetQua from '../pages/CapPhep/GiaoTraKetQua';
import DSPhanCongThuLy from '../pages/CapPhep/DSPhanCongThuLy';
import PhanCongThuLy from '../pages/CapPhep/PhanCongThuLy';
import DSChoThuLy from '../pages/CapPhep/DSChoThuLy';
import ChoThuLy from '../pages/CapPhep/ChoThuLy';
import DSThamDinhThucTe from '../pages/CapPhep/DSThamDinhThucTe';
import ThamDinhThucTe from '../pages/CapPhep/ThamDinhThucTe';
import DSLapDuThao from '../pages/CapPhep/DSLapDuThao';
import LapDuThao from '../pages/CapPhep/LapDuThao';
import DSKySo from '../pages/CapPhep/DSKySo';
import KySo from '../pages/CapPhep/KySo';
import BanDoMangLuoi from '../pages/MangLuoi/BanDoMangLuoi';
import DSQuanLyHaTang from '../pages/MangLuoi/DSQuanLyHaTang';
import QuanLyHaTang from '../pages/MangLuoi/QuanLyHaTang';
import DSHopDongPhanPhoi from '../pages/MangLuoi/DSHopDongPhanPhoi';
import HopDongPhanPhoi from '../pages/MangLuoi/HopDongPhanPhoi';
import CanhBaoHetHan from '../pages/CanhBao/CanhBaoHetHan';
import DSDinhChiThuHoi from '../pages/CanhBao/DSDinhChiThuHoi';
import DinhChiThuHoi from '../pages/CanhBao/DinhChiThuHoi';
import BaoCaoThongKe from '../pages/BaoCao/BaoCaoThongKe';
import QuanLyTaiKhoan from '../pages/QuanTri/QuanLyTaiKhoan';
import TaoTaiKhoan from '../pages/QuanTri/TaoTaiKhoan';
import DanhMucPhuongXa from '../pages/QuanTri/DanhMucPhuongXa';
import DanhMucThuTuc from '../pages/QuanTri/DanhMucThuTuc';

const AppRoutes = () => {
  return (
    <Routes>
      {/* 1. TRANG ĐÍCH (KHÔNG NẰM TRONG LAYOUT NÀO CẢ) */}
      <Route path="/" element={<LandingPage />} />

      {/* 2. LUỒNG CÔNG DÂN (Public Layout) */}
      <Route element={<PublicLayout />}>
        <Route path="/trang-chu-dvc" element={<TrangChuCDV />} />
        <Route path="/nop-ho-so" element={<NopHoSo />} />
        <Route path="/tra-cuu-ho-so" element={<TraCuuTrangThaiHS />} />
        <Route path="/bo-sung-ho-so" element={<BoSungHoSo />} />
      </Route>

      {/* 3. LUỒNG CÁN BỘ ĐĂNG NHẬP (Auth Layout) */}
      <Route element={<AuthLayout />}>
        {/* Đưa LoginPage thật vào đây */}
        <Route path="/dang-nhap" element={<LoginPage />} />
      </Route>

      {/* 4. LUỒNG HỆ THỐNG NỘI BỘ (Admin Layout) */}
      <Route element={<AdminLayout />}>
        {/* Khi vào hệ thống mặc định sẽ vào trang Tổng quan */}
        <Route path="/" element={<Navigate to="/tong-quan" replace />} />
        <Route path="/tong-quan" element={<DashboardPage />} />
        <Route path="/doi-mat-khau" element={<ChangePasswordPage />} />
        <Route path="/tiep-nhan" element={<TiepNhanHoSo />} />
        <Route path="/phan-loai" element={<DSPhanLoaiHoSo />} />
        <Route path="/phan-loai/chi-tiet" element={<PhanLoaiHoSo />} />
        <Route path="/giao-tra" element={<GiaoTraKetQua />} />
        <Route path="/phan-cong" element={<DSPhanCongThuLy />} />
        <Route path="/phan-cong/chi-tiet" element={<PhanCongThuLy />} />
        <Route path="/thu-ly" element={<DSChoThuLy />} />
        <Route path="/thu-ly/chi-tiet" element={<ChoThuLy />} />
        <Route path="/tham-dinh-thuc-te" element={<DSThamDinhThucTe />} />
        <Route path="/tham-dinh-thuc-te/chi-tiet" element={<ThamDinhThucTe />} />
        <Route path="/lap-du-thao" element={<DSLapDuThao />} />
        <Route path="/lap-du-thao/chi-tiet" element={<LapDuThao />} />
        <Route path="/ky-so" element={<DSKySo />} />
        <Route path="/ky-so/chi-tiet" element={<KySo />} />
        <Route path="/ban-do" element={<BanDoMangLuoi />} />
        <Route path="/quan-ly-ha-tang" element={<DSQuanLyHaTang />} />
        <Route path="/quan-ly-ha-tang/chi-tiet" element={<QuanLyHaTang />} />
        <Route path="/hop-dong-phan-phoi" element={<DSHopDongPhanPhoi />} />
        <Route path="/hop-dong-phan-phoi/chi-tiet" element={<HopDongPhanPhoi />} />
        <Route path="/canh-bao-het-han" element={<CanhBaoHetHan />} />
        <Route path="/dinh-chi-thu-hoi" element={<DSDinhChiThuHoi />} />
        <Route path="/dinh-chi-thu-hoi/chi-tiet" element={<DinhChiThuHoi />} />
        <Route path="/bao-cao" element={<BaoCaoThongKe />} />
        <Route path="/quan-tri/tai-khoan" element={<QuanLyTaiKhoan />} />
        <Route path="/quan-tri/tai-khoan/tao-moi" element={<TaoTaiKhoan />} />
        <Route path="/quan-tri/danh-muc/phuong-xa" element={<DanhMucPhuongXa />} />
        <Route path="/quan-tri/danh-muc/thu-tuc" element={<DanhMucThuTuc />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;