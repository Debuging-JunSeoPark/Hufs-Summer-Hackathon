import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { signInRequest } from '../apis'; // API 경로 확인 필요


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cookies, setCookie] = useCookies(['authToken']);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    const requestBody = {
      email: email,
      password: password
    };
    const response = await signInRequest(requestBody);
    if (response && response.token) {
      // 로그인 성공 시 쿠키에 토큰 저장
      setCookie('authToken', response.token, { path: '/' });
      // 로그인 성공 후 리다이렉션
      navigate('/'); // 대시보드 또는 메인 페이지 경로로 변경하세요.
    } else {
      // 에러 처리
      alert('로그인 실패: ' + (response.message || '서버 오류'));
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gradient-to-b from-slate-100 to-slate-400">
      <Header />
      <div className="flex flex-1 items-center justify-center">
        <div className="bg-white w-full max-w-lg py-10 px-5 rounded-lg text-center">
          <h3 className="text-3xl text-gray-800">Log In</h3>
          <form className="flex flex-col mt-5" onSubmit={handleLogin}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="bg-gray-100 shadow-inner focus:outline-none border-2 focus:border-opacity-50 focus:border-green-600 mb-3 py-3 px-5 rounded-lg"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="bg-gray-100 shadow-inner focus:outline-none border-2 focus:border-opacity-50 focus:border-green-600 py-3 px-5 rounded-lg"
            />
            <button type="submit" className="py-3 px-5 bg-gray-800 text-white mt-3 text-lg rounded-lg focus:outline-none hover:opacity-90">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;