import * as React from 'react';
import Header from '../components/Header';

function MatchupResult() {
  return (
    <div className="flex flex-col w-screen h-screen bg-white ml-[calc(50%_-_50vw)]">
      <Header></Header>
      <div className="w-full max-md:pr-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[34%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-10 pt-20 pb-4 w-full font-bold text-black bg-gradient-to-b from-slate-100 to-slate-400 max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="text-5xl font-semibold leading-6 max-md:text-4xl">
                매치업
              </div>
              <div className="mt-6 mr-5 text-lg leading-8 text-gray-600 max-md:mr-2.5">
                원하시는 장소와 시간에 맞는 경기 일정입니다. <br />
                원하는 경기와 포지션을 선택하여 매치를 <br />
                확정지어 보세요.
              </div>
              <div className="flex flex-col items-end py-3 pr-4 pl-20 mt-14 text-xs leading-5 bg-white rounded-lg shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:pl-5 max-md:mt-10">
                <div>PM 13:00 </div>
                <div className="mt-7 text-2xl leading-5">김포고촌 제일구장</div>
                <div className="mt-8">경기도-김포시</div>
              </div>
              <div className="flex flex-col px-9 py-16 mt-3 text-base leading-5 bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5">
                <div>
                  경기 규칙
                  <br />
                  안전하게 경기하기
                  <br />
                  경기가 끝난 뒤 단체 사진을 찍고 가기
                  <br />
                  경기 참여 불가 시 10분 전 미리 알려주기, 지각 시 10분 전 미리
                  연락 주기{' '}
                </div>
                <div className="mt-9">
                  장소
                  <br />
                  김포고촌 제일구장
                </div>
                <div className="mt-9">
                  에상 시간
                  <br />
                  2024-06-08 13:00:00
                </div>
                <div className="mt-9">
                  경기 비용
                  <br />
                  1,000원
                </div>
              </div>
              <div className="justify-center items-center px-4 py-2.5 mt-4 text-2xl leading-5 rounded-lg border border-gray-300 border-solid shadow-sm bg-white bg-opacity-10 text-slate-700 max-md:px-5">
                검색으로 돌아가기 &gt;
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[66%] max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden relative flex-col self-stretch px-20 py-20 my-auto text-xl font-semibold leading-6 text-black whitespace-nowrap min-h-[874px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <img
                loading="lazy"
                srcSet="select_position.png"
                className="object-cover absolute inset-0 size-full"
                alt="select_position.png"
              />
              <div className="flex relative z-10 gap-5 justify-between ml-36 max-w-full w-[390px] max-md:ml-2.5">
                <div className="flex flex-col my-auto">
                  <div className="shrink-0 self-center w-6 h-6 bg-white rounded border border-gray-300 border-solid" />
                  <div className="mt-4">좌익수</div>
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-col self-end px-px w-28 max-w-full">
                    <div className="justify-center px-7 py-5 rounded-xl shadow-sm bg-stone-50 max-md:px-5">
                      김철수
                    </div>
                    <div className="justify-center px-7 py-5 mt-52 rounded-xl shadow-sm bg-stone-50 max-md:px-5 max-md:mt-10">
                      박훈이
                    </div>
                  </div>
                  <div className="shrink-0 ml-4 w-6 h-6 bg-white rounded border border-gray-300 border-solid max-md:ml-2.5" />
                  <div className="mt-4">유격수</div>
                </div>
              </div>
              <div className="flex relative flex-col self-end mt-0 mr-44 w-[54px] max-md:mt-0 max-md:mr-2.5">
                <div className="shrink-0 self-center w-6 h-6 bg-white rounded border border-gray-300 border-solid" />
                <div className="mt-4">우익수</div>
              </div>
              <div className="relative z-10 justify-center self-end px-8 py-5 mt-52 mr-60 rounded-xl shadow-sm bg-stone-50 max-md:px-5 max-md:mt-10 max-md:mr-2.5">
                이윤비
              </div>
              <div className="flex relative flex-col mt-0 ml-72 w-12 max-md:ml-2.5">
                <div className="shrink-0 self-center w-6 h-6 bg-white rounded border border-gray-300 border-solid" />
                <div className="mt-4">3루수</div>
              </div>
              <div className="flex relative z-10 flex-col self-center mt-0 w-[35px]">
                <div className="shrink-0 h-6 bg-white rounded border border-gray-300 border-solid" />
                <div className="mt-4">투수</div>
              </div>
              <div className="flex relative flex-col self-center mt-36 w-[35px] max-md:mt-10">
                <div className="shrink-0 h-6 bg-white rounded border border-gray-300 border-solid" />
                <div className="mt-3">포수</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MatchupResult;
