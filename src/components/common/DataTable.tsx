import React from 'react';

// T đại diện cho một Dòng dữ liệu bất kỳ (Hồ sơ, Người dùng, Cửa hàng...)
export interface ColumnDef<T> {
  header: string;
  accessorKey?: keyof T; 
  render?: (row: T, index: number) => React.ReactNode; 
}

interface DataTableProps<T> {
  title?: string;
  columns: ColumnDef<T>[];
  data: T[];
  isLoading?: boolean;
}

// Chú ý cú pháp <T extends object> bắt buộc phải dùng khi viết Generic Component bằng Arrow Function
const DataTable = <T extends object>({ title, columns, data, isLoading }: DataTableProps<T>) => {
  return (
    <div className="w-full bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden flex flex-col">
      {/* Header Bảng */}
      {title && (
        <div className="px-5 py-4 border-b border-gray-200 bg-gray-50/50 flex justify-between items-center">
          <h3 className="text-base font-bold text-gray-800">{title}</h3>
        </div>
      )}

      {/* Nội dung Bảng */}
      <div className="overflow-x-auto flex-1">
        <table className="w-full text-sm text-left text-gray-600">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100/80 sticky top-0 shadow-sm">
            <tr>
              <th className="px-5 py-3 w-12 text-center border-b">STT</th>
              {columns.map((col, idx) => (
                <th key={idx} className="px-5 py-3 border-b whitespace-nowrap">{col.header}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {isLoading ? (
              <tr>
                <td colSpan={columns.length + 1} className="px-6 py-10 text-center text-gray-400">
                  <div className="flex justify-center items-center gap-2">
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-blue-600 border-t-transparent"></span>
                    Đang tải dữ liệu...
                  </div>
                </td>
              </tr>
            ) : data.length === 0 ? (
              <tr>
                <td colSpan={columns.length + 1} className="px-6 py-10 text-center text-gray-400 italic">
                  Không tìm thấy dữ liệu nào.
                </td>
              </tr>
            ) : (
              data.map((row, rowIndex) => (
                <tr key={rowIndex} className="hover:bg-blue-50/30 transition-colors">
                  <td className="px-5 py-3 text-center font-medium text-gray-500">{rowIndex + 1}</td>
                  {columns.map((col, colIndex) => (
                    <td key={colIndex} className="px-5 py-3">
                      {col.render 
                        ? col.render(row, rowIndex) 
                        : col.accessorKey ? String(row[col.accessorKey]) : ''}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;