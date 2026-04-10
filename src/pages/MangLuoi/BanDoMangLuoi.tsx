import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BanDoMangLuoi = () => {
  const navigate = useNavigate();

  return (
    <div className="h-full flex flex-col">
      <h1 className="text-xl font-bold text-gray-800 uppercase text-center mb-6 tracking-wide">
        Bản đồ mạng lưới xăng dầu
      </h1>

      <div className="flex-1 flex gap-6 h-full min-h-[600px] w-full max-w-6xl mx-auto">
        
        {/* CỘT TRÁI: BỘ LỌC VÀ THỐNG KÊ */}
        <div className="w-[300px] bg-white border border-gray-400 rounded-lg p-6 shadow-sm flex flex-col gap-8 flex-shrink-0">
          <div>
            <h3 className="font-bold text-[15px] mb-4 text-gray-800">Bộ lọc thông tin</h3>
            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-700">Phường/ Xã</label>
                <select className="w-full border border-gray-400 rounded-full px-3 py-1.5 text-sm bg-white focus:outline-none"><option></option></select>
              </div>
              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-700">Trạng thái</label>
                <select className="w-full border border-gray-400 rounded-full px-3 py-1.5 text-sm bg-white focus:outline-none"><option></option></select>
              </div>
              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-700">Thương nhân phân phối</label>
                <select className="w-full border border-gray-400 rounded-full px-3 py-1.5 text-sm bg-white focus:outline-none"><option></option></select>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-[15px] mb-4 text-gray-800">Thống kê</h3>
            <div className="space-y-4 text-sm font-bold text-gray-800">
              <div className="flex justify-between"><span>Số lượng cửa hàng</span><span className="text-black">289</span></div>
              <div className="flex justify-between"><span>Đang hoạt động</span><span className="text-green-600">276</span></div>
              <div className="flex justify-between"><span>Bị đình chỉ/ Thu hồi</span><span className="text-red-500">13</span></div>
            </div>
          </div>
        </div>

        {/* CỘT PHẢI: BẢN ĐỒ THẬT VỚI IFRAME */}
        <div className="flex-1 border border-gray-400 rounded-lg relative overflow-hidden shadow-sm bg-gray-100">
          
          {/* Iframe bản đồ (Link Embed thực tế của Đà Nẵng để map hiển thị thật) */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122691.53235651589!2d108.1361817290135!3d16.059758117769926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219c792252a13%3A0xfc14e3a044436487!2zxJDDoCBO4bq1bmcsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1712638841194!5m2!1svi!2s" 
            className="w-full h-full"
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          
          {/* Lớp phủ nhỏ mô phỏng tọa độ GPS */}
          <div className="absolute top-4 left-4 z-10 pointer-events-none">
             <button className="bg-white text-xs px-4 py-2 rounded shadow-md border border-gray-300 font-bold text-gray-700">
               Lấy toạ độ GPS thực tế
             </button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default BanDoMangLuoi;