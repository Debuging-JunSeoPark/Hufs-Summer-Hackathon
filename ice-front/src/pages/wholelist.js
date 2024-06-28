import * as React from 'react';
import Header from '../components/Header';

const games = [
  {
    time: 'PM 13:00',
    title: '용병 모집 합니다.',
    location: '강서구. 어디구장',
  },
  {
    time: 'PM 13:00',
    title: '용병 모집 합니다.',
    location: '강서구. 어디구장',
  },
  {
    time: 'PM 13:00',
    title: '용병 모집 합니다.',
    location: '강서구. 어디구장',
  },
  {
    time: 'PM 13:00',
    title: '용병 모집 합니다.',
    location: '강서구. 어디구장',
  },
];

const WholeList = () => {
  return (
    <div className="flex flex-col items-center px-5 pb-20 w-full bg-gradient-to-b from-slate-100 to-slate-400 max-md:max-w-full">
      <Header />
      <div className="flex flex-col w-full max-md:max-w-full">
        <div className="mt-1.5 w-full max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[28%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-9 py-20 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="mt-20 text-5xl font-semibold leading-6 text-black max-md:mt-10 max-md:text-4xl">
                  전체 경기 조회
                </div>
                <div className="mt-9 text-lg leading-8 text-gray-600">
                  전체 경기 조회 서비스는 원하는 지역을 선택하여,
                  <br />
                  선택한 지역에서 열리는 모든 경기를 조회 <br />할 수 있는
                  서비스 입니다.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[72%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                {games.map((game, index) => (
                  <div
                    key={index}
                    className="max-md:pr-5 max-md:max-w-full mt-20 max-md:mt-10"
                  >
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                      <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow items-end py-3 pr-4 pl-20 w-full text-xs font-bold leading-5 text-black bg-white rounded-lg shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:pl-5 max-md:mt-10">
                          <div>{game.time}</div>
                          <div className="self-start mt-7 ml-3.5 text-2xl leading-5 max-md:ml-2.5">
                            {game.title}
                          </div>
                          <div className="mt-8">{game.location}</div>
                        </div>
                      </div>
                      <div className="flex flex-col ml-5 w-[30%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow items-end py-3 pr-4 pl-20 w-full text-xs font-bold leading-5 text-black bg-white rounded-lg shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:pl-5 max-md:mt-10">
                          <div>{game.time}</div>
                          <div className="self-start mt-7 ml-3.5 text-2xl leading-5 max-md:ml-2.5">
                            {game.title}
                          </div>
                          <div className="mt-8">{game.location}</div>
                        </div>
                      </div>
                      <div className="flex flex-col ml-5 w-[30%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow items-end py-3 pr-4 pl-20 w-full text-xs font-bold leading-5 text-black bg-white rounded-lg shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:pl-5 max-md:mt-10">
                          <div>{game.time}</div>
                          <div className="self-start mt-7 ml-3.5 text-2xl leading-5 max-md:ml-2.5">
                            {game.title}
                          </div>
                          <div className="mt-8">{game.location}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WholeList;
