const contentData = {
  vision: `
    <h3>公司願景</h3>
    <p>透過智慧與健康導向的簡報科技，強化溝通的效果與吸引力。</p>
  `,
  concept: `
    <h3>品牌理念與背景</h3>
    <p>
      CWC TECH 致力於整合 AI 與 IoT 技術，解決現代簡報中常見的分心、緊張與互動不足等問題。
      創辦團隊來自教育與醫療科技領域，期望為講者提供全方位輔助，提升簡報品質與講者健康。
    </p>
  `,
  product: `
    <h3>產品介紹：CWC 智慧簡報筆</h3>
    <ul>
      <li>遠端控制簡報投影與錄影</li>
      <li>觀看即時觀眾提問</li>
      <li>收音與螢幕錄影</li>
      <li>監測講者的心率等健康數據</li>
    </ul>
    <h5>IoT 與 AI 整合</h5>
    <ul>
      <li>IoT 感測器：即時監測講者生理數據，並無線連接簡報裝置</li>
      <li>AI 功能：分析觀眾問題、即時摘要重點、提供講者互動建議與提醒</li>
    </ul>
  `,
  market: `
    <h3>目標市場／用戶族群</h3>
    <p>教育工作者、商務簡報人士、研討會講者、企業內訓講師、醫療溝通專家</p>
  `,
  value: `
    <h3>產品解決的問題</h3>
    <p>
      多數簡報者在控制設備、互動回應與保持穩定台風間感到吃力。
      CWC 智慧簡報筆整合多項功能，讓講者能同時掌控內容、互動與健康，自信表達、精準傳達。
    </p>
  `,
  schedule: `
    <h3>產品開發計畫時程</h3>
    <ul>
      <li>📌 2025 Q1：完成感測器整合原型</li>
      <li>📌 2025 Q2：進行小規模測試並整合 AI 模組</li>
      <li>📌 2025 Q3：展開教育／商務兩大場域實測</li>
      <li>📌 2025 Q4：產品正式上線，開放訂購</li>
    </ul>
  `
};

function showContent(section) {
  const contentArea = document.getElementById("content-area");
  contentArea.innerHTML = contentData[section] || "<p>找不到內容。</p>";
}
