import React from 'react';
import useCssStore from './store/useCssStore';
import { generateCSS } from './utils/generateCSS';
import OptionPanel from './components/OptionPanel';
import CodeOutput from './components/CodeOutput';
import PreviewBox from './components/PreviewBox';
import './index.css'

function App() {
  return (
    <div>
      <h1>🎨 chzzk 채팅창 CSS 커스터마이저</h1>

      <div className='custom-view'>
        <div>
          <h2>🔧 옵션 설정</h2>
          <OptionPanel />
        </div>

        <div>
          <h2>🔍 실시간 미리보기</h2>
          <PreviewBox />
        </div>
      </div>

      <h2>🧾 CSS 코드</h2>
      <CodeOutput />

    </div>
  );
}

export default App;