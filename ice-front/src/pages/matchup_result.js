import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';

function MatchupResult() {
  const location = useLocation();
  const { data } = location.state; // state 객체에서 데이터 추출

  return (
    <div className="flex flex-col w-screen h-screen bg-white ml-[calc(50%_-_50vw)]">
      <Header />
      <div className="w-full max-md:pr-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[34%] max-md:ml-0 max-md:w-full">
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
              ))}
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