// script/music_bubble.js
document.addEventListener("DOMContentLoaded", function () {
  // 音乐气泡文字内容数组
  const musicMessages = [
    "点击播放音乐 ♪",
    "来点音乐放松一下吧 ♫",
    "音乐让生活更美好 ♪",
    "享受美妙的旋律 ♫",
    "Ciallo～(∠・ω )⌒☆ 音乐时间",
  ];

  // 随机选择一条消息
  const randomMessage =
    musicMessages[Math.floor(Math.random() * musicMessages.length)];

  // 设置音乐气泡文字内容
  const musicBubbleText = document.querySelector(".music-bubble-text");
  if (musicBubbleText) {
    musicBubbleText.textContent = randomMessage;
  }

  // 添加音频播放器交互效果
  const audioPlayer = document.querySelector(".music-player audio");
  if (audioPlayer) {
    audioPlayer.addEventListener("play", function () {
      showMusicBubble("正在播放音乐 ♪");
    });

    audioPlayer.addEventListener("pause", function () {
      showMusicBubble("音乐已暂停 ♫");
    });
  }

  function showMusicBubble(message) {
    const bubble = document.querySelector(".music-bubble-text");
    if (bubble) {
      bubble.textContent = message;
      bubble.style.animation = "none";
      setTimeout(() => {
        bubble.style.animation = "musicBubbleFade 3s ease-in-out forwards";
      }, 10);
    }
  }
});
