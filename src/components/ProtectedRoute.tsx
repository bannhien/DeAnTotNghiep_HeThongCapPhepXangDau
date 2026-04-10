import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  // Kiểm tra xem trong bộ nhớ trình duyệt đã có "chìa khóa" chưa
  const isAuthenticated = localStorage.getItem('isLoggedIn') === 'true'; 

  if (!isAuthenticated) {
    // Nếu chưa có khóa (chưa đăng nhập), đá thẳng về trang đăng nhập
    return <Navigate to="/dang-nhap" replace />;
  }

  // Nếu có rồi thì mở cửa cho vào
  return <>{children}</>;
};

export default ProtectedRoute;