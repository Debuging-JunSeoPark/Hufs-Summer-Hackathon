import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

function MatchupResult() {
  const location = useLocation();
  const { data } = location.state; // state 객체에서 데이터 추출

  return (
    <div className="flex flex-col w-screen h-screen bg-white ml-[calc(50%_-_50vw)]">
<<<<<<< HEAD
      <Header />
      <div className="w-full max-md:pr-5 max-md:max-w-full">
=======
      <Header></Header>
      <div className="mt-1.5 w-full max-md:pr-5 max-md:max-w-full">
>>>>>>> 2d584a9c3a4ec3903d7f16f43742946eea5a35da
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-10 pt-20 pb-4 w-full font-bold text-black bg-gradient-to-b from-slate-100 to-slate-400 max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="text-5xl font-semibold leading-6 max-md:text-4xl">
                매치업 결과
              </div>
              <div className="mt-6 mr-5 text-lg leading-8 text-gray-600 max-md:mr-2.5">
                여기는 사용자가 선택한 매치업 조건에 따라 검색된 결과를 보여줍니다.
              </div>
              {data.map((match, index) => (
                <div key={index} className="mt-4 p-4 bg-gray-100 rounded-lg shadow">
                  <h3 className="text-xl font-bold">{match.local}</h3>
                  <p>시간: {match.time}</p>
                  <p>포지션: {match.position}</p>
                </div>
<<<<<<< HEAD
              ))}
=======
                <div className="mt-9">
                  장소
                  <br />
                  강서구 - 00구장
                </div>
                <div className="mt-9">
                  에상 시간
                  <br />
                  20204-06-08 16:00:00
                </div>
                <div className="mt-9">
                  경기 비용
                  <br />
                  1,000원
                </div>
              </div>
              <Link to={'/matchup'}>
                <div className="justify-center items-center px-4 py-2.5 mt-4 text-2xl leading-5 rounded-lg border border-gray-300 border-solid shadow-sm bg-white text-slate-700 max-md:px-5">
                  검색으로 돌아가기 &gt;
                </div>
              </Link>
>>>>>>> 2d584a9c3a4ec3903d7f16f43742946eea5a35da
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[66%] max-md:ml-0 max-md:w-full">
            {/* 추가적인 정보 또는 이미지 등의 콘텐츠를 배치할 수 있습니다 */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MatchupResult;