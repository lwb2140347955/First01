// script/music_control.js
document.addEventListener("DOMContentLoaded", function () {
  // 获取音频播放器
  const audioPlayer = document.querySelector(".music-player audio");

  // 保存设置到localStorage
  function saveSettings() {
    const settings = {
      loop: document.getElementById("loop-toggle")?.checked || false,
      autoplay: document.getElementById("autoplay-toggle")?.checked || false,
      theme: document.getElementById("theme-select")?.value || "light",
      emailNotifications:
        document.getElementById("email-notifications")?.checked || false,
    };
    localStorage.setItem("blogSettings", JSON.stringify(settings));
  }

  // 从localStorage恢复设置
  function loadSettings() {
    const savedSettings = localStorage.getItem("blogSettings");
    if (savedSettings) {
      const settings = JSON.parse(savedSettings);

      const loopToggle = document.getElementById("loop-toggle");
      const autoplayToggle = document.getElementById("autoplay-toggle");
      const themeSelect = document.getElementById("theme-select");
      const emailNotifications = document.getElementById("email-notifications");

      if (loopToggle) {
        loopToggle.checked = settings.loop;
        if (audioPlayer) {
          audioPlayer.loop = settings.loop;
        }
      }

      if (autoplayToggle) {
        autoplayToggle.checked = settings.autoplay;
        if (audioPlayer) {
          audioPlayer.autoplay = settings.autoplay;
        }
      }

      if (themeSelect) {
        themeSelect.value = settings.theme;
      }

      if (emailNotifications) {
        emailNotifications.checked = settings.emailNotifications;
      }
    }
  }

  // 设置事件监听器
  function setupMusicControls() {
    const loopToggle = document.getElementById("loop-toggle");
    const autoplayToggle = document.getElementById("autoplay-toggle");
    const themeSelect = document.getElementById("theme-select");
    const emailNotifications = document.getElementById("email-notifications");

    if (loopToggle) {
      loopToggle.addEventListener("change", function () {
        if (audioPlayer) {
          audioPlayer.loop = this.checked;
        }
        showMusicBubbleMessage(
          this.checked ? "已开启循环播放 ♪" : "已关闭循环播放 ♫"
        );
        saveSettings();
      });
    }

    if (autoplayToggle) {
      autoplayToggle.addEventListener("change", function () {
        if (audioPlayer) {
          audioPlayer.autoplay = this.checked;
        }
        showMusicBubbleMessage(
          this.checked ? "已开启自动播放 ♪" : "已关闭自动播放 ♫"
        );
        saveSettings();
      });
    }

    if (themeSelect) {
      themeSelect.addEventListener("change", function () {
        saveSettings();
      });
    }

    if (emailNotifications) {
      emailNotifications.addEventListener("change", function () {
        saveSettings();
      });
    }
  }

  // 监听页面切换事件，当切换到设置页面时初始化控制
  const sidebarLinks = document.querySelectorAll(".sidebar a");
  const mainContent = document.querySelector(".main_content");

  sidebarLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (this.textContent === "设置") {
        // 延迟执行以确保页面内容已加载
        setTimeout(() => {
          setupMusicControls();
          loadSettings(); // 加载保存的设置
        }, 100);
      }
    });
  });

  // 音乐气泡消息显示函数
  function showMusicBubbleMessage(message) {
    const bubble = document.querySelector(".music-bubble-text");
    if (bubble) {
      bubble.textContent = message;
      bubble.style.animation = "none";
      setTimeout(() => {
        bubble.style.animation = "musicBubbleFade 3s ease-in-out forwards";
      }, 10);
    }
  }

  // 初始化音乐控制（如果页面加载时就在设置页面）
  setTimeout(() => {
    setupMusicControls();
    loadSettings();
  }, 100);
});
