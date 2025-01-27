// Telegram Web Apps SDK 초기화
const tg = window.Telegram.WebApp;

function sendMessage() {
  tg.sendData("Hello, Telegram!"); // 데이터를 봇으로 전송
}

// 초기화
tg.ready();
