import Header from '../components/Header';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <div className="flex flex-col items-center px-5 pb-20 w-full bg-gradient-to-b from-slate-100 to-slate-400 max-md:max-w-full">
      <Header></Header>
      <div className="mt-10 text-6xl font-semibold tracking-tighter text-center leading-[72px] text-slate-900 w-[860px] max-md:mt-10 max-md:max-w-full max-md:text-4xl ">
        Take your team management to next level
      </div>
      <div className="mt-6 text-lg leading-7 text-center text-slate-600 w-[640px] max-md:max-w-full">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </div>
      <div className="mt-10 mb-3.5 w-full max-w-[1480px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-10 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center items-center px-6 pt-6 pb-7 w-full bg-white shadow-lg max-md:px-5 max-md:mt-10">
              <img
                loading="lazy"
                srcSet="search.png"
                className="self-stretch w-full aspect-[1.45]"
                alt="search.png"
              />
              <div className="mt-16 text-lg leading-8 text-center text-gray-600 max-md:mt-10">
                Sportlight에 등록되어 있는
                <br />
                경기 일정을 한눈에 볼 수 있습니다.
              </div>
              <div className="justify-center px-6 py-4 mt-16 text-2xl font-semibold leading-6 text-white bg-indigo-500 rounded-3xl max-md:px-5 max-md:mt-10">
                전체 경기 조회
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-center px-6 pt-6 pb-7 w-full bg-white shadow-lg max-md:px-5 max-md:mt-10">
              <img
                loading="lazy"
                srcSet="matchup.png"
                className="self-stretch w-full aspect-[1.49]"
                alt="matchup.png"
              />
              <div className="mt-16 text-lg leading-8 text-center text-gray-600 max-md:mt-10">
                개인 일정을 등록하여 <br />
                원하는 시간대에 경기를 <br />
                추천 받아 보세요
              </div>
              <Link to="/matchup">
                <div className="justify-center items-center px-6 py-4 mt-16 max-w-full text-2xl font-semibold leading-6 text-white whitespace-nowrap bg-indigo-500 rounded-3xl max-md:px-5 max-md:mt-10">
                  매치업
                </div>
              </Link>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-center px-6 pt-6 pb-7 w-full bg-white shadow-lg max-md:px-5 max-md:mt-10">
              <img
                loading="lazy"
                srcSet="post.png"
                className="self-stretch w-full aspect-[1.47]"
                alt="post.png"
              />
              <div className="mt-16 text-lg leading-8 text-center text-gray-600 max-md:mt-10">
                원하는 시간과 장소를 <br />
                등록하여 게임을 <br />
                진행 해 보세요
              </div>
              <Link to={'/post_match'}>
                <div className="justify-center px-9 py-4 mt-16 text-2xl font-semibold leading-6 text-white bg-indigo-500 rounded-3xl max-md:px-8 max-md:mt-10">
                  경기 등록
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
