import React from 'react';
import '../css/BottomMenu.css'
import paper from '../images/paper.png'
import label from '../images/label.png'

function BottomMenu() {
    
    return(
        <div id="wrap">
        <div id="bottom">
          <div class="bottom-menu" id="bottom-menu1">
            <img src={paper} alt="papar_bg" id="paper_bg1" class="paper" />
            <div class="main-txt" id="main-txt1">"목적"</div>
            <img src={label} alt="label_bg" id="label_bg1-1" class="label" />
            <div class="sub-txt" id="sub-txt1-1">목적1</div>
            <img src={label} alt="label_bg" id="label_bg1-2" class="label" />
            <div class="sub-txt" id="sub-txt1-2">목적2</div>
            <img src={label} alt="label_bg" id="label_bg1-3" class="label" />
            <div class="sub-txt" id="sub-txt1-3">목적3</div>
          </div>
          <div class="bottom-menu" id="bottom-menu2">
            <img src={paper} alt="papar_bg" id="paper_bg2" class="paper" />
            <div class="main-txt" id="main-txt2">"장르"</div>
            <img src={label} alt="label_bg" id="label_bg2-1" class="label" />
            <div class="sub-txt" id="sub-txt2-1">장르1</div>
            <img src={label} alt="label_bg" id="label_bg2-2" class="label" />
            <div class="sub-txt" id="sub-txt2-2">장르2</div>
            <img src={label} alt="label_bg" id="label_bg2-3" class="label" />
            <div class="sub-txt" id="sub-txt2-3">장르3</div>
            <img src={label} alt="label_bg" id="label_bg2-4" class="label" />
            <div class="sub-txt" id="sub-txt2-4">장르4</div>
          </div>
          <div class="bottom-menu" id="bottom-menu3">
            <img src={paper} alt="papar_bg" id="paper_bg3" class="paper" />
            <div class="main-txt" id="main-txt3">"분위기"</div>
            <img src={label} alt="label_bg" id="label_bg3-1" class="label" />
            <div class="sub-txt" id="sub-txt3-1">분위기1</div>
            <img src={label} alt="label_bg" id="label_bg3-2" class="label" />
            <div class="sub-txt" id="sub-txt3-2">분위기2</div>
            <img src={label} alt="label_bg" id="label_bg3-3" class="label" />
            <div class="sub-txt" id="sub-txt3-3">분위기3</div>
            <img src={label} alt="label_bg" id="label_bg3-4" class="label" />
            <div class="sub-txt" id="sub-txt3-4">분위기4</div>
          </div>
        </div>
      </div>
    )
}

export default BottomMenu;