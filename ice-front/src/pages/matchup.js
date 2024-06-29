import * as React from 'react';
import { useState } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import Area from '../utils/regions';
import { filterArticleRequest } from '../apis';

const Matchup = () => {
  const [inputs, setInputs] = useState([{ id: 1 }]);
  const [nextId, setNextId] = useState(2);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [position, setPosition] = useState('');
  const [local] = useState('');

  const addInput = () => {
    setInputs([...inputs, { id: nextId }]);
    setNextId(nextId + 1);
  };

  return (
    <div className="flex flex-col w-screen h-screen bg-white ml-[calc(50%_-_50vw)]">
      <Header />
      <div className="mt-1.5 w-full max-md:pr-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow pt-20 pb-7 w-full bg-white max-md:mt-10 max-md:max-w-full bg-gradient-to-b from-slate-100 to-slate-300">
              <div
                className="flex flex-col pr-4 pl-9 max-md:pl-5 max-md:max-w-full"
                id="filter_list"
              >
                <div className="text-5xl font-semibold leading-6 text-black max-md:max-w-full max-md:text-4xl">
                  매치업
                </div>
                <div className="mt-6 text-lg leading-8 text-gray-600 max-md:max-w-full">
                  매치업 서비스는 원하는 위치 및 개인 일정을 고려하여 <br />
                  참여 가능한 경기를 일괄적으로 보여드립니다. <br />
                  원하는 장소와 시간을 체크해 주세요.
                </div>
                <Area></Area>
                <div className="flex gap-5 justify-between mt-8 text-sm font-bold leading-5 text-slate-700 max-md:flex-wrap max-md:max-w-full">
                  <div className="justify-center items-center px-4 py-2.5 w-full whitespace-nowrap rounded-lg border border-gray-300 border-solid shadow-sm bg-white bg-opacity-10 max-md:px-5">
                    날짜
                  </div>
                  <div className="justify-center px-4 py-2.5 rounded-lg w-full border border-gray-300 border-solid shadow-sm bg-white bg-opacity-10 max-md:px-5">
                    시작 시간
                  </div>
                </div>
                <ul className="flex-row gap-5 mt-8 max-md:flex-wrap max-md:pr-5">
                  {inputs.map((input) => (
                    <div
                      key={input.id}
                      className="flex gap-5 mt-8 max-md:flex-wrap max-md:pr-5"
                    >
                      <input
                        name={`${input.id}`}
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="justify-center items-center px-4 py-2.5 w-full whitespace-nowrap rounded-lg border border-gray-300 border-solid shadow-sm bg-white max-md:px-5"
                      />
                      <input
                        name={`${input.id}`}
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="justify-center items-center px-4 py-2.5 w-full whitespace-nowrap rounded-lg border border-gray-300 border-solid shadow-sm bg-white max-md:px-5"
                      />
                    </div>
                  ))}
                </ul>
                <button
                  onClick={addInput}
                  className="justify-center self-end p-6 mt-8 mr-8 text-sm font-medium leading-5 text-black whitespace-nowrap bg-white rounded-xl border border-black border-solid max-md:px-5 max-md:mr-2.5"
                >
                  +
                </button>
              </div>
              <Link to={'/matchup_result'}>
                <div className="justify-center items-center self-center px-4 py-2.5 mt-20 ml-2.5 max-w-full text-2xl font-bold leading-5 rounded-lg border border-gray-300 border-solid shadow-sm bg-white bg-opacity-10 text-slate-700 w-[426px] max-md:px-5 max-md:mt-10">
                  맞춤 검색 &gt;
                </div>
              </Link>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[80%] max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden relative flex-col justify-center items-center self-stretch px-16 py-20 my-auto min-h-[874px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <img
                loading="lazy"
                srcSet="select_position.png"
                className="object-cover absolute inset-0 w-full h-full"
                alt="select_position.png"
              />
              <div className="flex relative flex-col items-center mt-1 max-w-full w-[636px]">
                <div className="self-stretch max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow mt-40 text-xl font-semibold leading-6 text-black whitespace-nowrap max-md:mt-10">
                        <input
                          type="checkbox"
                          className="shrink-0 ml-4 w-6 h-6 rounded border border-gray-300 border-solid max-md:ml-2.5"
                        />
                        <div className="mt-4">좌익수</div>
                        <div className="flex flex-col self-end mt-20 w-[84px] max-md:mt-10">
                          <input
                            type="checkbox"
                            className="shrink-0 self-end w-6 h-6 rounded border border-gray-300 border-solid max-md:mr-2.5"
                          />
                          <div className="self-end mt-4">유격수</div>
                          <input
                            type="checkbox"
                            className="shrink-0 mt-20 ml-2.5 w-6 h-6 rounded border border-gray-300 border-solid max-md:mt-10 max-md:ml-2.5"
                          />
                          <div className="mt-4">3루수</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow text-xl font-semibold leading-6 text-black whitespace-nowrap max-md:mt-10">
                        <input
                          type="checkbox"
                          className="shrink-0 ml-3 w-6 h-6 rounded border border-gray-300 border-solid max-md:ml-2.5"
                        />
                        <div className="mt-4">중견수</div>
                        <div className="flex flex-col self-end mt-28 w-[54px] max-md:mt-10">
                          <input
                            type="checkbox"
                            className="shrink-0 self-center w-6 h-6 rounded border border-gray-300 border-solid"
                          />
                          <div className="mt-4">우익수</div>
                        </div>
                        <input
                          type="checkbox"
                          className="shrink-0 mt-14 ml-3 w-6 h-6 rounded border border-gray-300 border-solid max-md:mt-10 max-md:ml-2.5"
                        />
                        <div className="mt-3">2루수</div>
                        <div className="flex gap-5 mt-28 max-md:pr-5 max-md:mt-10">
                          <div className="flex flex-col flex-1">
                            <input
                              type="checkbox"
                              className="shrink-0 h-6 rounded border border-gray-300 border-solid"
                            />
                            <div className="mt-4">투수</div>
                          </div>
                          <div className="flex flex-col flex-1">
                            <input
                              type="checkbox"
                              className="shrink-0 self-center w-6 h-6 rounded border border-gray-300 border-solid"
                            />
                            <div className="mt-4">1루수</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <input
                  type="checkbox"
                  className="shrink-0 mt-36 w-6 h-6 rounded border border-gray-300 border-solid max-md:mt-10"
                />
                <div className="mt-3 text-xl font-semibold leading-6 text-black">
                  포수
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Matchup;
