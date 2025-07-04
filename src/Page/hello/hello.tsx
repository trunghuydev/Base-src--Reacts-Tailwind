import React from "react";

const Dashboard: React.FC = () => {
  const username = "admin"; // Hoặc lấy từ localStorage/token
  const today = new Date().toLocaleString("vi-VN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gray-100">
      <div className="w-full max-w-lg p-10 text-center bg-white shadow-lg rounded-2xl">
        <h1 className="mb-4 text-3xl font-bold text-blue-600">
          🎉 Chào mừng, {username}!
        </h1>
        <p className="text-lg text-gray-700">Hôm nay là {today}</p>

        <div className="mt-6">
          <button className="px-6 py-2 text-white transition bg-blue-600 rounded-md hover:bg-blue-700">
            Bắt đầu sử dụng
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
