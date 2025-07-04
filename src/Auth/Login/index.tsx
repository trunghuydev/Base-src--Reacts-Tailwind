import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (username === 'admin' && password === '123456') {
      setError('');
      navigate('/dashboard');
    } else {
      setError('Tài khoản hoặc mật khẩu không đúng!');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="w-full max-w-sm p-8 bg-white shadow-md rounded-xl">
        <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">Đăng nhập</h2>

        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium text-gray-600">Tài khoản</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="admin"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium text-gray-600">Mật khẩu</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="123456"
          />
        </div>

        {error && <p className="mb-4 text-sm text-red-500">{error}</p>}

        <button
          type="submit"
          className="w-full py-2 text-white transition bg-blue-600 rounded-md hover:bg-blue-700"
        >
          Đăng nhập
        </button>
      </form>
    </div>
  );
};

export default Login;
