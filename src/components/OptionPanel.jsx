import React from 'react';
import useCssStore from '../store/useCssStore';
import ColorPickerField from './ColorPickerField';

function OptionPanel() {
  const {
    fontFamily, setFontFamily,
    fontSize, setFontSize,
    lineHeight, setLineHeight,
    fontEffect, setFontEffect,
    fontEffectColor, setFontEffectColor,
    shadowX, setShadowX,
    shadowY, setShadowY,
    shadowBlur, setShadowBlur,
    boxEffect, setBoxEffect,
    boxEffectColor, setBoxEffectColor,
    boxBorder, setBoxBorder,
    boxShadowX, setBoxShadowX,
    boxShadowY, setBoxShadowY,
    boxShadowBlur, setBoxShadowBlur,
    chatBgColor, setChatBgColor,
    chatTextColor, setChatTextColor,
    bodyBgColor, setBodyBgColor,
    enableFadeOut, setEnableFadeOut,
    fadeDuration, setFadeDuration,
    chatMarginBottom, setChatMarginBottom,
    userIconSize, setUserIconSize,
    stickerSize, setStickerSize,
    showNotice, setShowNotice,
    noticeText, setNoticeText,
    noticeFontSize, setNoticeFontSize,
    noticeBgColor, setNoticeBgColor,
    noticeHeight, setNoticeHeight,
    chatRadius, setChatRadius,
    noticeRadius, setNoticeRadius,
    showNickname, setShowNickname,
    bodyBgTransparent, setBodyBgTransparent,
    chatBgTransparent, setChatBgTransparent,
    noticeBgTransparent, setNoticeBgTransparent,
    fontBold, setFontBold,
    blockNickname, setBlockNickname,
    noticeTextColor, setNoticeTextColor,
  } = useCssStore();

  const fontList = [
    {
      name: 'CookieRun-Regular',
      label: 'CookieRun',
      url: `url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/CookieRun-Regular.woff') format('woff')`
    },
    {
      name: 'SeoulAlrimTTF-Heavy',
      label: '서울알림체',
      url: `url('https://fastly.jsdelivr.net/gh/projectnoonnu/2505-1@1.0/SeoulAlrimTTF-Heavy.woff2') format('woff2')`
    },
    {
      name: 'NanumSquareNeo',
      label: '나눔스퀘어 네오',
      url: `url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareNeo/NanumSquareNeoTTF-bRg.eot?#iefix) format("embedded-opentype"), url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareNeo/NanumSquareNeoTTF-bRg.woff) format("woff"), url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareNeo/NanumSquareNeoTTF-bRg.ttf) format("truetype")`
    },
    {
      name: 'ONE-Mobile-POP',
      label: '원스토어 모바일POP체',
      url: `url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/ONE-Mobile-POP.woff') format('woff')`
    },
    {
      name: 'DungGeunMo',
      label: '둥근모꼴',
      url: `url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/DungGeunMo.woff') format('woff')`
    },
    {
      name: 'TheJamsil5Bold',
      label: '더잠실체',
      url: `url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2302_01@1.0/TheJamsil5Bold.woff2') format('woff2')`
    },
    {
      name: 'KCC-Ganpan',
      label: 'KCC간판체',
      url: `url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.0/KCC-Ganpan.woff2') format('woff2')`
    },
    {
      name: 'S-CoreDream-3Light',
      label: '에스코어드림',
      url: `url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff') format('woff')`
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>

      <div className='chatting_row'>
        <ColorPickerField
          label="전체 배경색"
          color={bodyBgColor}
          onChange={setBodyBgColor}
        />
        <label style={{ marginLeft: '8px' }}>
          <input
            type="checkbox"
            checked={bodyBgTransparent}
            onChange={e => setBodyBgTransparent(e.target.checked)}
          />
          투명하게
        </label>
      </div>
      <div className='chatting_row'>
        <label>폰트:
          <select
            value={fontFamily}
            onChange={(e) => {
              const selected = fontList.find(f => f.name === e.target.value);
              if (selected) {
                setFontFamily(selected.name, selected.url);
              }
            }}
          >
            {fontList.map(font => (
              <option key={font.name} value={font.name}>{font.label}</option>
            ))}
          </select>
        </label>

      </div>
      <div className='chatting_row'>

        <label>폰트 크기:
          <input type="range" min="20" max="40" value={fontSize} onChange={e => setFontSize(Number(e.target.value))} />
          <span className="range-size">{fontSize}</span>
        </label>



      </div>
      <div className='chatting_row'>

        <label>폰트 두껍께:
          <input type="checkbox" checked={fontBold} onChange={e => setFontBold(e.target.checked)} />
        </label>


      </div>
      <div className='chatting_row'>
        <fieldset>
          <legend>폰트 효과</legend>
          <label><input type="radio" name="fontEffect" value="none" checked={fontEffect === 'none'} onChange={e => setFontEffect(e.target.value)} /> 효과 없음</label>
          <label><input type="radio" name="fontEffect" value="thin-outline" checked={fontEffect === 'thin-outline'} onChange={e => setFontEffect(e.target.value)} /> 폰트 테두리 얇게</label>
          <label><input type="radio" name="fontEffect" value="bold-outline" checked={fontEffect === 'bold-outline'} onChange={e => setFontEffect(e.target.value)} /> 폰트 테두리 두껍게</label>
          <label><input type="radio" name="fontEffect" value="shadow" checked={fontEffect === 'shadow'} onChange={e => setFontEffect(e.target.value)} /> 폰트 shadow</label>
        </fieldset>

        {/* ✅ 폰트 효과 컬러 선택 (효과 있을 때만) */}
        {fontEffect !== 'none' && (
          <ColorPickerField label="폰트 효과 색상" color={fontEffectColor} onChange={setFontEffectColor} />
        )}

        {/* ✅ 그림자 설정 (shadow 선택 시만) */}
        {fontEffect === 'shadow' && (
          <>
            <label>그림자 X 오프셋(px):
              <input type="range" min="-10" max="10" value={shadowX} onChange={e => setShadowX(Number(e.target.value))} />
              <span className="range-size">{shadowX}</span>
            </label>
            <label>그림자 Y 오프셋(px):
              <input type="range" min="-10" max="10" value={shadowY} onChange={e => setShadowY(Number(e.target.value))} />
              <span className="range-size">{shadowY}</span>
            </label>
            <label>그림자 흐림(px):
              <input type="range" min="0" max="20" value={shadowBlur} onChange={e => setShadowBlur(Number(e.target.value))} />
              <span className="range-size">{shadowBlur}</span>
            </label>
          </>
        )}


      </div>
      <div className='chatting_row'>

        <label>줄 간격:
          <input type="range" min="28" max="48" value={lineHeight} onChange={e => setLineHeight(Number(e.target.value))} />
          <span className="range-size">{lineHeight}</span>
        </label>


      </div>
      <div className='chatting_row'>

        <ColorPickerField
          label="채팅 배경색"
          color={chatBgColor}
          onChange={setChatBgColor}
        />
        <label style={{ marginLeft: '8px' }}>
          <input
            type="checkbox"
            checked={chatBgTransparent}
            onChange={e => setChatBgTransparent(e.target.checked)}
          />
          투명하게
        </label>


      </div>
      <div className='chatting_row'>

        <ColorPickerField label="채팅 글자색" color={chatTextColor} onChange={setChatTextColor} />



      </div>
      <div className='chatting_row'>

        <label>채팅 박스 둥글기:
          <input type="range" min="0" max="48" value={chatRadius} onChange={e => setChatRadius(Number(e.target.value))} />
          <span className="range-size">{chatRadius}</span>
        </label>

      </div>
      <div className='chatting_row'>

        <fieldset>
          <legend>채팅 박스 효과</legend>
          <label><input type="radio" name="boxEffect" value="none" checked={boxEffect === 'none'} onChange={e => setBoxEffect(e.target.value)} /> 효과 없음</label>
          <label><input type="radio" name="boxEffect" value="outline" checked={boxEffect === 'outline'} onChange={e => setBoxEffect(e.target.value)} /> 박스 테두리</label>
          <label><input type="radio" name="boxEffect" value="shadow" checked={boxEffect === 'shadow'} onChange={e => setBoxEffect(e.target.value)} /> 박스 shadow</label>
        </fieldset>

        {/* ✅ 박스 효과 컬러 선택 (효과 있을 때만) */}
        {boxEffect !== 'none' && (
          <ColorPickerField label="채팅 박스 효과 색상" color={boxEffectColor} onChange={setBoxEffectColor} />
        )}

        {boxEffect === 'outline' && (
          <>
            <label>채팅 박스 테두리 두께:
              <input type="range" min="0" max="5" value={boxBorder} onChange={e => setBoxBorder(Number(e.target.value))} />
              <span className="range-size">{boxBorder}</span>
            </label>
          </>
        )}

        {/* ✅ 그림자 설정 (shadow 선택 시만) */}
        {boxEffect === 'shadow' && (
          <>
            <label>채팅 박스 그림자 X 오프셋(px):
              <input type="range" min="-10" max="10" value={boxShadowX} onChange={e => setBoxShadowX(Number(e.target.value))} />
              <span className="range-size">{boxShadowX}</span>
            </label>
            <label>채팅 박스 그림자 Y 오프셋(px):
              <input type="range" min="-10" max="10" value={boxShadowY} onChange={e => setBoxShadowY(Number(e.target.value))} />
              <span className="range-size">{boxShadowY}</span>
            </label>
            <label>채팅 박스 그림자 흐림(px):
              <input type="range" min="0" max="20" value={boxShadowBlur} onChange={e => setBoxShadowBlur(Number(e.target.value))} />
              <span className="range-size">{boxShadowBlur}</span>
            </label>
          </>
        )}


      </div>
      <div className='chatting_row'>


        <label>채팅 사라짐 효과:
          <input type="checkbox" checked={enableFadeOut} onChange={e => setEnableFadeOut(e.target.checked)} />
        </label>


      </div>
      <div className='chatting_row'>

        <label>사라짐 유지 시간:
          <input type="range" min="10" max="60" value={fadeDuration} onChange={e => setFadeDuration(Number(e.target.value))} />
          <span className="range-size">{fadeDuration}</span>
        </label>


      </div>
      <div className='chatting_row'>

        <label>채팅 간격:
          <input type="range" min="0" max="50" value={chatMarginBottom} onChange={e => setChatMarginBottom(Number(e.target.value))} />
          <span className="range-size">{chatMarginBottom}</span>
        </label>


      </div>
      <div className='chatting_row'>

        <label>시청자 이름 보이기:
          <input type="checkbox" checked={showNickname} onChange={e => setShowNickname(e.target.checked)} />
        </label>


      </div>
      <div className='chatting_row'>

        <label>시청자 이름 줄바꿈:
          <input type="checkbox" checked={blockNickname} onChange={e => setBlockNickname(e.target.checked)} />
        </label>



      </div>
      <div className='chatting_row'>

        <label>아이콘 크기:
          <input type="range" min="24" max="48" value={userIconSize} onChange={e => setUserIconSize(Number(e.target.value))} />
          <span className="range-size">{userIconSize}</span>
        </label>



      </div>
      <div className='chatting_row'>

        <label>스티커 크기:
          <input type="range" min="24" max="96" value={stickerSize} onChange={e => setStickerSize(Number(e.target.value))} />
          <span className="range-size">{stickerSize}</span>
        </label>


      </div>
      <div className='chatting_row'>

        <label>방송 공지 사용:
          <input type="checkbox" checked={showNotice} onChange={e => setShowNotice(e.target.checked)} />
        </label>


      </div>
      <div className='chatting_row'>

        <label>공지 텍스트:
          <input value={noticeText} onChange={e => setNoticeText(e.target.value)} />
        </label>



      </div>
      <div className='chatting_row'>

        <label>공지 폰트 크기:
          <input type="range" min="16" max="48" value={noticeFontSize} onChange={e => setNoticeFontSize(Number(e.target.value))} />
          <span className="range-size">{noticeFontSize}</span>
        </label>


      </div>
      <div className='chatting_row'>

        <ColorPickerField label="공지 글자색" color={noticeTextColor} onChange={setNoticeTextColor} />

      </div>
      <div className='chatting_row'>

        <ColorPickerField
          label="공지 배경색"
          color={noticeBgColor}
          onChange={setNoticeBgColor}
        />
        <label style={{ marginLeft: '8px' }}>
          <input
            type="checkbox"
            checked={noticeBgTransparent}
            onChange={e => setNoticeBgTransparent(e.target.checked)}
          />
          투명하게
        </label>

      </div>
      <div className='chatting_row'>

        <label>공지 높이:
          <input type="range" min="40" max="100" value={noticeHeight} onChange={e => setNoticeHeight(Number(e.target.value))} />
          <span className="range-size">{noticeHeight}</span>
        </label>


      </div>
      <div className='chatting_row'>

        <label>공지 박스 둥글기:
          <input type="range" min="0" max="48" value={noticeRadius} onChange={e => setNoticeRadius(Number(e.target.value))} />
          <span className="range-size">{noticeRadius}</span>
        </label>


      </div>

    </div>
  );
}

export default OptionPanel;
