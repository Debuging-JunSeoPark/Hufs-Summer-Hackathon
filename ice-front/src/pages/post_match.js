import * as React from 'react';
import { useState } from 'react';
import Header from '../components/Header';
import Area from '../utils/regions';
import { searchNameRequest, postArticleRequest } from '../apis';

const PostMatch = () => {
  const [name, setName] = useState('');
  const [response, setResponse] = useState(null);
  const [articleTitle, setArticleTitle] = useState('');
  const [articleContent, setArticleContent] = useState('');
  const [credit, setCredit] = useState('');
  const [local, setLocal] = useState(''); 
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [shortstop, setShortstop] = useState('');
  const [firstBase, setFirstbase] = useState('');
  const [catcher, setCatcher] = useState('');
  const [leftFielder, setLeftfielder] = useState('');
  const [centerFielder, setCenterFielder] = useState('');
  const [rightFielder, setRightFielder] = useState('');
  const [pitcher, setPitcher] = useState('');
  const [secondBase, setSecondBase] = useState('');
  const [thirdBase, setThirdBase] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const requestBody = {
      name,
    };

    const res = await searchNameRequest(requestBody);
    setResponse(res);
    if (res && res.code === 'SU') {
      console.log('선수 정보 조회 성공'); // 성공 메시지
      document.getElementById('namelist').innerHTML = response.articleList.map(
        (article) => (
          <div className="max-md:pr-5 max-md:max-w-full mt-20 max-md:mt-10">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow items-end py-3 pr-4 pl-20 w-full text-xs font-bold leading-5 text-black bg-white rounded-lg shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:pl-5 max-md:mt-10">
                  <div>{article.email}</div>
                  <div className="self-start mt-7 ml-3.5 text-2xl leading-5 max-md:ml-2.5">
                    {article.name}
                  </div>
                  <div className="mt-8">{article.age}</div>
                </div>
              </div>
            </div>
          </div>
        )
      );
    } else {
      // 실패 메시지를 response.message를 기반으로 보여줌
      alert('선수 정보 조회 실패: ' + (res.message || '서버 오류'));
    }
  };
  const handleSubmit2 = async (event) => {
    event.preventDefault();
    const requestBody = {
      articleTitle,
      articleContent,
      credit,
      local,
      time,
      shortstop,
      firstBase,
      catcher,
      leftFielder,
      centerFielder,
      rightFielder,
      pitcher,
      secondBase,
      thirdBase,
    };

    const res = await postArticleRequest(requestBody);
    setResponse(res);
    if (res && res.code === 'SU') {
      alert('경기가 성공적으로 등록되었습니다.'); // 성공 메시지
    } else {
      // 실패 메시지를 response.message를 기반으로 보여줌
      alert('경기 등록 실패: ' + (res.message || '서버 오류'));
    }
  };

  return (
    <div className="flex flex-col justify-center w-screen h-screen bg-white overflow-hidden ml-[calc(50%_-_50vw)]">
      <div className="flex flex-col w-full max-md:max-w-full h-full">
        <Header />
        <form
          className="mt-1.5 w-full max-md:max-w-full flex-1 overflow-auto"
          onSubmit={handleSubmit2}
        >
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 h-full">
            <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full h-full overflow-auto">
              <div className="flex flex-col grow py-20 pr-4 pl-9 w-full text-xl font-bold leading-8 text-black bg-white max-md:pl-5 max-md:mt-10 max-md:max-w-full">
                <div className="text-5xl font-semibold leading-6 max-md:max-w-full max-md:text-4xl">
                  경기 등록
                </div>
                <div className="mt-12 text-lg leading-8 text-gray-600 max-md:mt-10 max-md:max-w-full">
                  경기 등록 섭택 서비스는 경지 주최자가 되어 원하는 <br />
                  인원을 배치하고, 필요한 포지션을 지정할 수 있습니다. <br />
                  원하는 옵션을 선택하여 매치를 만들어 보세요.
                </div>
                <Area local={local} setLocal={setLocal} />
                <div className="flex gap-5 justify-between mt-8 text-sm font-bold leading-5 text-slate-700 max-md:flex-wrap max-md:max-w-full">
                  <div className="justify-center items-center px-4 py-2.5 w-full whitespace-nowrap rounded-lg border border-gray-300 border-solid shadow-sm bg-white bg-opacity-10 max-md:px-5">
                    날짜
                  </div>
                  <div className="justify-center px-4 py-2.5 rounded-lg w-full border border-gray-300 border-solid shadow-sm bg-white bg-opacity-10 max-md:px-5">
                    시작 시간
                  </div>
                </div>
                <div className="flex gap-5 justify-between mt-8 text-sm font-bold leading-5 text-slate-700 max-md:flex-wrap max-md:max-w-full">
                  <input
                    name="date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="justify-center items-center px-4 py-2.5 w-full whitespace-nowrap rounded-lg border border-gray-300 border-solid shadow-sm bg-white bg-opacity-10 max-md:px-5"
                  />
                  <input
                    name="time"
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="justify-center px-4 py-2.5 rounded-lg w-full border border-gray-300 border-solid shadow-sm bg-white bg-opacity-10 max-md:px-5"
                  />
                </div>
                <div className="mt-9 max-md:max-w-full">제목</div>
                <input
                  id="title"
                  value={articleTitle}
                  onChange={(e) => setArticleTitle(e.target.value)}
                  className="shrink-0 mt-3.5 rounded-xl bg-zinc-300 h-[54px] max-md:max-w-full"
                />
                <div className="mt-9 max-md:max-w-full">
                  내용(경기 유의 사항)
                </div>
                <textarea
                  id="context"
                  value={articleContent}
                  onChange={(e) => setArticleContent(e.target.value)}
                  className="shrink-0 mt-3 rounded-xl bg-zinc-300 h-[199px] max-md:max-w-full"
                />
                <div className="self-start mt-9 ml-3.5 max-md:ml-2.5">
                  참여 비용 (원)
                </div>
                <input
                  id="credit"
                  type="number"
                  value={credit}
                  onChange={(e) => setCredit(e.target.value)}
                  className="shrink-0 mt-3.5 rounded-xl bg-zinc-300 h-[52px] max-md:max-w-full"
                />
              </div>
              <button
                type="submit"
                className="justify-center items-center px-4 py-2.5 mt-4 text-2xl leading-5 rounded-lg border border-gray-300 border-solid shadow-sm bg-lime-400 text-slate-700 max-md:px-5"
              >
                경기 등록 &gt;
              </button>
            </div>
            <div className="flex flex-col ml-5 w-[70%] max-md:ml-0 max-md:w-full h-full overflow-auto">
              <div className="flex flex-col self-stretch px-5 my-auto max-md:mt-10 max-md:max-w-full">
                <div className="self-end mr-72 text-xl font-bold leading-8 text-black max-md:mr-2.5">
                  선수 검색
                </div>
                <div className="mt-3 max-md:pr-5 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[66%] max-md:ml-0 max-md:w-full">
                      <div className="flex overflow-hidden relative flex-col grow justify-center items-center px-16 py-16 min-h-[664px] max-md:px-5 max-md:mt-10 max-md:max-h-full">
                        <img
                          loading="lazy"
                          src="select_position.png"
                          className="object-cover absolute inset-0 w-full h-full"
                          alt="select_position"
                        />
                        <div className="flex relative flex-col max-w-full w-[437px]">
                          <div className="max-md:max-w-full">
                            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                              <div className="flex flex-col w-[39%] max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow mt-28 max-md:mt-10">
                                  <div className="flex justify-center items-center px-2 bg-gray-100 rounded-2xl h-[37px] w-[37px]">
                                    <input
                                      type="checkbox"
                                      value={leftFielder}
                                      onChange={(e) =>
                                        setLeftfielder(e.target.value)
                                      }
                                      className="justify-center self-end p-6 mt-8 mr-8 text-sm font-medium leading-5 text-black whitespace-nowrap bg-white rounded-xl border border-black border-solid max-md:px-5 max-md:mr-2.5"
                                    ></input>
                                  </div>
                                  <div className="mt-2.5 text-xl font-semibold leading-6 text-black">
                                    좌익수
                                  </div>
                                  <div className="flex flex-col items-start pl-20 mt-12 max-md:pl-5 max-md:mt-10">
                                    <div className="flex justify-center items-center self-end px-2 bg-gray-100 rounded-2xl h-[37px] w-[37px]">
                                      <input
                                        type="checkbox"
                                        value={shortstop}
                                        onChange={(e) =>
                                          setShortstop(e.target.value)
                                        }
                                        className="justify-center self-end p-6 mt-8 mr-8 text-sm font-medium leading-5 text-black whitespace-nowrap bg-white rounded-xl border border-black border-solid max-md:px-5 max-md:mr-2.5"
                                      ></input>
                                    </div>
                                    <div className="mt-2.5 text-xl font-semibold leading-6 text-black">
                                      유격수
                                    </div>
                                    <div className="flex justify-center items-center px-2 bg-gray-100 rounded-2xl h-[37px] w-[37px]">
                                      <input
                                        type="checkbox"
                                        value={thirdBase}
                                        onChange={(e) =>
                                          setThirdBase(e.target.value)
                                        }
                                        className="justify-center self-end p-6 mt-8 mr-8 text-sm font-medium leading-5 text-black whitespace-nowrap bg-white rounded-xl border border-black border-solid max-md:px-5 max-md:mr-2.5"
                                      ></input>
                                    </div>
                                    <div className="mt-2.5 text-xl font-semibold leading-6 text-black">
                                      3루수
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col ml-5 w-[61%] max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow max-md:mt-10">
                                  <div className="flex justify-center items-center px-2 ml-3.5 bg-gray-100 rounded-2xl h-[37px] w-[37px] max-md:ml-2.5">
                                    <input
                                      type="checkbox"
                                      value={centerFielder}
                                      onChange={(e) =>
                                        setCenterFielder(e.target.value)
                                      }
                                      className="justify-center self-end p-6 mt-8 mr-8 text-sm font-medium leading-5 text-black whitespace-nowrap bg-white rounded-xl border border-black border-solid max-md:px-5 max-md:mr-2.5"
                                    ></input>
                                  </div>
                                  <div className="mt-3 text-xl font-semibold leading-6 text-black">
                                    중견수
                                  </div>
                                  <div className="flex flex-col self-end mt-12 w-[54px] max-md:mt-10">
                                    <div className="flex justify-center items-center px-2 mt-5 ml-2.5 bg-gray-100 rounded-2xl h-[37px] w-[37px]">
                                      <input
                                        type="checkbox"
                                        value={rightFielder}
                                        onChange={(e) =>
                                          setRightFielder(e.target.value)
                                        }
                                        className="justify-center self-end p-6 mt-8 mr-8 text-sm font-medium leading-5 text-black whitespace-nowrap bg-white rounded-xl border border-black border-solid max-md:px-5 max-md:mr-2.5"
                                      ></input>
                                    </div>
                                    <div className="mt-2 text-xl font-semibold leading-6 text-black">
                                      우익수
                                    </div>
                                  </div>
                                  <div className="flex justify-center items-center px-2 bg-gray-100 rounded-2xl h-[37px] w-[37px]">
                                    <input
                                      type="checkbox"
                                      value={secondBase}
                                      onChange={(e) =>
                                        setSecondBase(e.target.value)
                                      }
                                      className="justify-center self-end p-6 mt-8 mr-8 text-sm font-medium leading-5 text-black whitespace-nowrap bg-white rounded-xl border border-black border-solid max-md:px-5 max-md:mr-2.5"
                                    ></input>
                                  </div>
                                  <div className="mt-1.5 text-xl font-semibold leading-6 text-black">
                                    2루수
                                  </div>
                                  <div className="flex gap-5 mt-16 max-md:pr-5 max-md:mt-10">
                                    <div className="flex flex-col flex-1">
                                      <div className="flex justify-center items-center px-2 bg-gray-100 rounded-2xl h-[37px] w-[37px]">
                                        <input
                                          type="checkbox"
                                          value={pitcher}
                                          onChange={(e) =>
                                            setPitcher(e.target.value)
                                          }
                                          className="justify-center self-end p-6 mt-8 mr-8 text-sm font-medium leading-5 text-black whitespace-nowrap bg-white rounded-xl border border-black border-solid max-md:px-5 max-md:mr-2.5"
                                        ></input>
                                      </div>
                                      <div className="mt-4 text-xl font-semibold leading-6 text-black">
                                        투수
                                      </div>
                                    </div>
                                    <div className="flex flex-col flex-1 self-start mt-1.5">
                                      <div className="flex justify-center items-center px-2 bg-gray-100 rounded-2xl h-[37px] w-[37px]">
                                        <input
                                          type="checkbox"
                                          value={firstBase}
                                          onChange={(e) =>
                                            setFirstbase(e.target.value)
                                          }
                                          className="justify-center self-end p-6 mt-8 mr-8 text-sm font-medium leading-5 text-black whitespace-nowrap bg-white rounded-xl border border-black border-solid max-md:px-5 max-md:mr-2.5"
                                        ></input>
                                      </div>
                                      <div className="mt-2.5 text-xl font-semibold leading-6 text-black">
                                        1루수
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <input
                            type="checkbox"
                            value={catcher}
                            onChange={(e) => setCatcher(e.target.value)}
                            className="justify-center self-end p-6 mt-8 mr-8 text-sm font-medium leading-5 text-black whitespace-nowrap bg-white rounded-xl border border-black border-solid max-md:px-5 max-md:mr-2.5"
                          ></input>
                          <div className="self-center mt-32 text-xl font-semibold leading-6 text-black max-md:mt-10">
                            포수
                          </div>
                        </div>
                      </div>
                    </div>
                    <form
                      className="flex flex-col ml-5 w-[34%] max-md:ml-0 max-md:w-full"
                      onSubmit={handleSubmit}
                    >
                      <input
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        className="shrink-0 mx-auto mt-4 max-w-full rounded-xl bg-neutral-200 h-[54px] w-[385px] max-md:mt-10"
                      />
                    </form>
                    <div id="namelist" />
                  </div>
                </div>
                <div className="self-start mt-10 ml-11 text-4xl font-bold leading-8 text-center text-gray-600 max-md:max-w-full">
                  포지션된 선수를 끌어다 배치 시켜주세요.
                  <br />
                  비워둔 포지션의 모집글이 올라갈 예정입니다.
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostMatch;
