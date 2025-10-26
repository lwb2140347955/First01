// time.js
document.addEventListener("DOMContentLoaded", function () {
  // 获取时间显示元素
  const timeDisplay = document.getElementById("current-time");

  // 更新时间函数（只显示小时和分钟）
  function updateTime() {
    const now = new Date();

    // 格式化时间 (HH:MM)
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const timeString = `${hours}:${minutes}`;

    // 更新显示内容
    if (timeDisplay) {
      timeDisplay.textContent = timeString;
    }
  }

  // 初始更新
  updateTime();

  // 每秒更新一次时间
  setInterval(updateTime, 60000); // 每分钟更新一次（因为只显示到分钟）
});
