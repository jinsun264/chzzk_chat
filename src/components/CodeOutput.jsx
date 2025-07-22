import React, { useRef, useState } from 'react';
import useCssStore from '../store/useCssStore';
import { generateCSS } from '../utils/generateCSS';

function simpleCssMinify(css) {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, '')      // 주석 제거
    .replace(/\s+/g, ' ')                  // 연속 공백 하나로
    .replace(/;\}/g, '}')                  // 마지막 세미콜론 제거
    .trim();                               // 앞뒤 공백 제거
}

function CodeOutput() {
  const css = useCssStore((state) => generateCSS(state, { forCodeView: true }));
  const minifiedCss = simpleCssMinify(css);
  const codeRef = useRef(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(minifiedCss);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // 2초 후 복사됨 표시 제거
    } catch (err) {
      alert('복사에 실패했어요 🥲');
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <button
        onClick={handleCopy}
      >
        {copied ? '✅ 복사됨!' : '📋 복사'}
      </button>
        <div ref={codeRef}>{minifiedCss}</div>
    </div>
  );
}

export default CodeOutput;