import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { signUpRequest } from '../apis';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [career, setCareer] = useState('');
  const [position, setPosition] = useState('없음');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [team, setTeam] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const requestBody = {
      email,
      password,
      career,
      position,
      name,
      age: age ? parseInt(age) : null,
      sex,
      team,
      height: height ? parseInt(height) : null,
      weight: weight ? parseInt(weight) : null
    };

    const response = await signUpRequest(requestBody);
    if (response && response.code === 'SU') {
      alert('회원가입 성공'); // 성공 메시지
      navigate('/login'); // 회원가입 성공 후 로그인 페이지로 이동
    } else {
      // 실패 메시지를 response.message를 기반으로 보여줌
      alert('회원가입 실패: ' + (response.message || '서버 오류'));
    }
};

  return (
    <div className="h-screen flex flex-col bg-gradient-to-b from-slate-100 to-slate-400">
      <Header />
      <div className="flex flex-1 items-center justify-center">
        <div className="bg-white w-full max-w-lg py-10 px-5 rounded-lg text-center">
          <h3 className="text-3xl text-gray-800">Sign Up</h3>
          <form className="flex flex-col mt-5" onSubmit={handleSubmit}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="bg-gray-100 shadow-inner focus:outline-none border-2 focus:border-opacity-50 focus:border-green-600 mb-3 py-3 px-5 rounded-lg" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="bg-gray-100 shadow-inner focus:outline-none border-2 focus:border-opacity-50 focus:border-green-600 mb-3 py-3 px-5 rounded-lg" />
            <input type="text" value={career} onChange={(e) => setCareer(e.target.value)} placeholder="Career (if applicable)" className="bg-gray-100 shadow-inner focus:outline-none border-2 focus:border-opacity-50 focus:border-green-600 mb-3 py-3 px-5 rounded-lg" />
            <select value={position} onChange={(e) => setPosition(e.target.value)} className="bg-gray-100 shadow-inner focus:outline-none border-2 focus:border-opacity-50 focus:border-green-600 mb-3 py-3 px-5 rounded-lg">
            <option value="없음">Select Position</option>
              <option value="catcher">포수</option>
              <option value="pitcher">투수</option>
              <option value="first_base">1루수</option>
              <option value="second_base">2루수</option>
              <option value="third_base">3루수</option>
              <option value="shortstop">유격수</option>
              <option value="left_fielder">좌익수</option>
              <option value="center_fielder">중견수</option>
              <option value="right_fielder">우익수</option>
            </select>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="bg-gray-100 shadow-inner focus:outline-none border-2 focus:border-opacity-50 focus:border-green-600 mb-3 py-3 px-5 rounded-lg" />
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" className="bg-gray-100 shadow-inner focus:outline-none border-2 focus:border-opacity-50 focus:border-green-600 mb-3 py-3 px-5 rounded-lg" />
            <select value={sex} onChange={(e) => setSex(e.target.value)} className="bg-gray-100 shadow-inner focus:outline-none border-2 focus:border-opacity-50 focus:border-green-600 mb-3 py-3 px-5 rounded-lg">
              <option value="없음">Select Sex</option>
              <option value="MALE">Male</option>
              <option value="FEMALE">Female</option>
            </select>
            <input type="text" value={team} onChange={(e) => setTeam(e.target.value)} placeholder="Team (if applicable)" className="bg-gray-100 shadow-inner focus:outline-none border-2 focus:border-opacity-50 focus:border-green-600 mb-3 py-3 px-5 rounded-lg" />
            <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="Height" className="bg-gray-100 shadow-inner focus:outline-none border-2 focus:border-opacity-50 focus:border-green-600 mb-3 py-3 px-5 rounded-lg" />
            <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="Weight" className="bg-gray-100 shadow-inner focus:outline-none border-2 focus:border-opacity-50 focus:border-green-600 mb-3 py-3 px-5 rounded-lg" />
            <button type="submit" className="py-3 px-5 bg-gray-800 text-white mt-3 text-lg rounded-lg focus:outline-none hover:opacity-90">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;