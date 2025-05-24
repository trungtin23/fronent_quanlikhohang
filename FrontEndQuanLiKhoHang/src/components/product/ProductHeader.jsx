import React from 'react';
import { Package } from 'lucide-react';

const ProductHeader = () => {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 bg-blue-600 rounded-lg">
          <Package className="w-6 h-6 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900">
          Quản Lý Kho Hàng
        </h1>
      </div>
      <p className="text-gray-600">
        Quản lý và tổ chức kho sản phẩm của bạn
      </p>
    </div>
  );
};

export default ProductHeader; 