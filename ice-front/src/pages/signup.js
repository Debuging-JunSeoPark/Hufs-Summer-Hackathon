import React from 'react';
import Header from '../components/Header';

const SignUp = () => {
  return (
    <div className="h-screen flex flex-col bg-gradient-to-b from-slate-100 to-slate-400">
      <Header />
      <div className="flex flex-1 items-center justify-center">
        <div className="bg-white w-full max-w-lg py-10 px-5 rounded-lg text-center">
          <h3 className="text-3xl text-gray-800">Sign Up</h3>
          <form className="flex flex-col mt-5">
            <input
              placeholder="Email"
              name="Email"
              className="bg-gray-100 shadow-inner focus:outline-none border-2 focus:border-opacity-50 focus:border-green-600 mb-3 py-3 px-5 rounded-lg"
            />
            <input
              type="password"
              placeholder="Password"
              name="Password"
              className="bg-gray-100 shadow-inner focus:outline-none border-2 focus:border-opacity-50 focus:border-green-600 mb-3 py-3 px-5 rounded-lg"
            />
            <input
              type="text"
              placeholder="Carrer (없을 시 작성 X)"
              name="Carrer"
              className="bg-gray-100 shadow-inner focus:outline-none border-2 focus:border-opacity-50 focus:border-green-600 mb-3 py-3 px-5 rounded-lg"
            />
            <select
              name="Position"
              className="bg-gray-100 shadow-inner focus:outline-none border-2 focus:border-opacity-50 focus:border-green-600 mb-3 py-3 px-5 rounded-lg"
            >
              <option value="없음">포지션을 골라주세요</option>
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
            <input
              type="text"
              placeholder="Name"
              name="Name"
              className="bg-gray-100 shadow-inner focus:outline-none border-2 focus:border-opacity-50 focus:border-green-600 mb-3 py-3 px-5 rounded-lg"
            />
            <input
              type="number"
              placeholder="Age"
              name="Age"
              className="bg-gray-100 shadow-inner focus:outline-none border-2 focus:border-opacity-50 focus:border-green-600 mb-3 py-3 px-5 rounded-lg"
            />
            <select
              name="Sex"
              className="bg-gray-100 shadow-inner focus:outline-none border-2 focus:border-opacity-50 focus:border-green-600 mb-3 py-3 px-5 rounded-lg"
            >
              <option value="MALE">남성</option>
              <option value="FEMALE">여성</option>
            </select>
            <input
              type="text"
              placeholder="Team (없을 시 작성 X)"
              name="Team"
              className="bg-gray-100 shadow-inner focus:outline-none border-2 focus:border-opacity-50 focus:border-green-600 mb-3 py-3 px-5 rounded-lg"
            />
            <input
              type="number"
              placeholder="Height"
              name="Height"
              className="bg-gray-100 shadow-inner focus:outline-none border-2 focus:border-opacity-50 focus:border-green-600 mb-3 py-3 px-5 rounded-lg"
            />
            <input
              type="number"
              placeholder="Weight"
              name="Weight"
              className="bg-gray-100 shadow-inner focus:outline-none border-2 focus:border-opacity-50 focus:border-green-600 mb-3 py-3 px-5 rounded-lg"
            />
            <button className="py-3 px-5 bg-gray-800 text-white mt-3 text-lg rounded-lg focus:outline-none hover:opacity-90">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
