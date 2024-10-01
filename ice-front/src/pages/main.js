import React from "react";
import "../styles/main.css";
import { HeaderBar } from "../components/HeaderBar";

const Main = () => {
  return (
    <div className="Main">
      <HeaderBar/>
      <div className="Title">
        <h1>Take your team management to next level</h1>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
      </div>
      <div className="Menus">
        <div className="Menu" id="search">
          <img alt="search_image" src="search.png"/>
          <p className="menu_p">등록되어 있는 경기 일정을 <br/>한눈에 볼 수 있습니다.</p>
          <a className="Button" href="/search">전체 경기 조회</a>
        </div>
        <div className="Menu" id="matchup">
          <img alt="matchup_image" src="matchup.png"/>
          <p className="menu_p">개인 일정을 등록하여 원하는 시간대에 <br/>경기를 추천 받아 보세요.</p>
          <a className="Button" href="/matchup">매치업</a>
        </div>
        <div className="Menu" id="match_register">
          <img alt="register_image" src="match_register.png"/>
          <p className="menu_p">원하는 시간과 장소를 등록하여 게임을 <br/>진행해 보세요 </p>
          <a className="Button" href="/match_register">경기 등록</a>
        </div>
      </div>
    </div>
  );
};

export default Main;