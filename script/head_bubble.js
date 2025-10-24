// 在DOMContentLoaded事件中添加
document.addEventListener("DOMContentLoaded", function () {
  // 气泡文字内容数组
  const bubbleMessages = [
    "欢迎访问我的网站！",
    "很高兴见到你！",
    "祝你今天愉快！",
    "欢迎常来逛逛！",
    "Ciallo～(∠・ω )⌒☆",
  ];

  // 随机选择一条消息
  const randomMessage =
    bubbleMessages[Math.floor(Math.random() * bubbleMessages.length)];

  // 设置气泡文字内容
  const bubbleText = document.querySelector(".bubble-text");
  if (bubbleText) {
    bubbleText.textContent = randomMessage;
  }

  // 其他原有代码...
});
