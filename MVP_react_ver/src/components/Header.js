import React from 'react';
import '../css/Header.css'
import Logo from '../images/logo.png'

function Header() {
    
    return(
      <header>
        <div className="top-nav">
        <div>
          <a href="#!">로그인&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
          <a href="#!">회원가입&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
          <a href="#!">장바구니&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
        </div>
      </div>
      <div className="logo-box">
        <div className="junior">
          <a href="#!">글로모여 주니어</a>
        </div>
        <br />
        <div className="logo">
          <a href="#!"><img src={Logo} alt="글로모여 로고" width="250" /></a>
        </div>
        <div className="search_main">
          <div className="search">
            <form action="https://search.naver.com/search.naver" method="GET">
              <input id="query" className="input_text" name="query" type="search" placeholder="어떤 모임을 기대하나요?" />
              <button className="searchBtn" type="submit">검색</button>
            </form>
          </div>
          <button className="extraBtn" name="myPage">마이페이지</button>
          <button className="extraBtn" name="registerGroup">모임 등록하기</button>
        </div>
      </div>
      <div className="menu-nav">
        <ul className="myMenu">
          <li>
            글쓰기 모임
            <ul className="submenu" id="write-submenu">
              <li>전체보기</li>
              <li>목적</li>
              <li>장르</li>
              <li>분위기</li>
              <li>글모 거점 소개서</li>
            </ul>
          </li>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <li>
            독서모임
            <ul className="submenu" id="read-submenu">
              <li>list 1</li>
              <li>list 2</li>
              <li>list 3</li>
              <li>list 4</li>
            </ul>
          </li>
          {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <li>
            이벤트
            <ul class="submenu">
              <li>list 1</li>
              <li>list 2</li>
              <li>list 3</li>
              <li>list 4</li>
            </ul>
          </li> */}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <li>
            커뮤니티
            <ul className="submenu">
              <li>list 1</li>
              <li>list 2</li>
              <li>list 3</li>
              <li>list 4</li>
            </ul>
          </li>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <li>
            글로모여 소개
            <ul className="submenu">
              <li>list 1</li>
              <li>list 2</li>
              <li>list 3</li>
              <li>list 4</li>
            </ul>
          </li>
          {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <li class="menu1">
            공지
            <ul class="menu1_s submenu">
              <li>list 1</li>
              <li>list 2</li>
              <li>list 3</li>
              <li>list 4</li>
            </ul>
          </li> */}
        </ul>
      </div>
      </header>
    );
}

export default Header;