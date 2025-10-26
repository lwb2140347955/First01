// script/sidebar_script.js
// 定义各个页面的内容（提升为全局变量，供头部导航使用）
const pageContents = {
  个人资料: `
    <div class="profile-content">
      <h2 style="text-align: center; margin-bottom: 30px;">个人资料</h2>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
        <div ><img style="
        width: 120px; height: 120px; 
        border-radius: 50%; 
        background-color: rgba(255, 255, 255, 0.2); 
        margin-bottom: 10px;" 
        src="https://shared.st.dl.eccdnx.com/community_assets/images/items/400910/8d405acf455855d778515064e91880c67fffff50.gif
        ">
        </div>
        <div style="width: 100%; max-width: 500px;">
          <div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.1);">
            <span style="font-weight: bold;">姓名：</span>
            <span>刘文博</span>
          </div>
          <div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.1);">
            <span style="font-weight: bold;">现居地：</span>
            <span>湖北武汉</span>
          </div>
          <div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.1);">
            <span style="font-weight: bold;">学习院校:</span>
            <span>中南财经政法大学</span>
          </div>
          <div style="display: flex; justify-content: space-between; padding: 10px 0;">
            <span style="font-weight: bold;">个人简介:</span>
            <span>热爱编程和技术分享的开发者</span>
          </div>
        </div>
      </div>
    </div>
  `,
  我的文章: `
  <div>
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
      <h2 style="margin: 0;">我的文章</h2>
    </div>
    <div id="articles-container" style="max-width: 800px; margin: 0 auto;">
      <!-- 文章列表将在这里显示 -->
    </div>
  </div>
  `,
  收藏夹: `
    <div>
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
        <h2 style="margin: 0;">我的收藏</h2>
      </div>
      <div id="favorites-container" style="max-width: 800px; margin: 0 auto;">
        <!-- 收藏列表将在这里显示 -->
      </div>
    </div>
  `,
  设置: `
    <div>
      <h2 style="text-align: center; margin-bottom: 30px;">系统设置</h2>
      <div style="max-width: 600px; margin: 0 auto;">
        <div style="background-color: rgba(255, 255, 255, 0.1); padding: 20px; border-radius: 8px;">
          <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.1);">
            <span>主题颜色</span>
            <select style="background-color: rgba(255, 255, 255, 0.2); color: white; border: none; padding: 5px 10px; border-radius: 4px;">
              <option>浅色主题</option>
              <option>深色主题</option>
            </select>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.1);">
            <span>邮件通知</span>
            <input type="checkbox" checked style="width: 18px; height: 18px;">
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0;">
            <span>循环播放音乐</span>
            <input type="checkbox" id="loop-toggle" style="width: 18px; height: 18px;">
          </div>
        </div>
      </div>
    </div>
  `,
  扩展项目1: `
    <div>
      <h2 style="text-align: center; margin-bottom: 30px;">扩展项目1</h2>
      <div style="text-align: center; padding: 20px;">
        <p>这是扩展项目1的内容区域</p>
        <p>您可以在这里添加任何您想要的内容</p>
      </div>
    </div>
  `,
  扩展项目2: `
    <div>
      <h2 style="text-align: center; margin-bottom: 30px;">扩展项目2</h2>
      <div style="text-align: center; padding: 20px;">
        <p>这是扩展项目2的内容区域</p>
        <p>您可以在这里添加任何您想要的内容</p>
      </div>
    </div>
  `,
  首页: `
    <div>
      <h2 style="text-align: center; margin-bottom: 30px;">欢迎来到我的网站</h2>
      <div style="text-align: center; padding: 20px;">
        <p>这是一个完全静态的个人网站</p>
        <p>您可以在这里浏览文章、收藏链接、播放音乐等</p>
        <p>点击左侧导航栏或顶部菜单来浏览不同页面</p>
      </div>
    </div>
  `,
  关于: `
    <div>
      <h2 style="text-align: center; margin-bottom: 30px;">关于本站</h2>
      <div style="max-width: 800px; margin: 0 auto; padding: 20px;">
        <p>这是一个使用纯前端技术构建的静态网站</p>
        <p>主要技术栈：</p>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript (ES6+)</li>
        </ul>
        <p>功能特性：</p>
        <ul>
          <li>文章浏览</li>
          <li>收藏夹浏览</li>
          <li>音乐播放器</li>
          <li>响应式设计</li>
        </ul>
      </div>
    </div>
  `,
  联系: `
  <div>
    <h2 style="text-align: center; margin-bottom: 30px;">联系我</h2>
    <div style="max-width: 800px; margin: 0 auto; padding: 20px;">
      <div style="background-color: rgba(255, 255, 255, 0.1); padding: 30px; border-radius: 10px; margin-bottom: 30px;">
        <h3 style="margin-top: 0; color: #fff;">联系方式</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
          <div style="display: flex; align-items: center; padding: 15px; background-color: rgba(255, 255, 255, 0.05); border-radius: 8px; position: relative; cursor: pointer;" class="contact-item" data-copy="2140347955@qq.com" title="点击复制邮箱">
            <div style="font-size: 24px; margin-right: 15px;">📧</div>
            <div>
              <div style="font-weight: bold; margin-bottom: 5px;">邮箱</div>
              <div>2140347955@qq.com</div>
            </div>
            <div class="copy-tooltip" style="position: absolute; bottom: -30px; left: 50%; transform: translateX(-50%); background-color: transparent; color: white; padding: 5px 10px; border-radius: 4px; font-size: 12px; white-space: nowrap; display: none; opacity: 1; transition: opacity 0.3s ease;">点击复制到剪贴板</div>
          </div>
          <div style="display: flex; align-items: center; padding: 15px; background-color: rgba(255, 255, 255, 0.05); border-radius: 8px; position: relative; cursor: pointer;" class="contact-item" data-copy="+86 131 9732 4235" title="点击复制电话">
            <div style="font-size: 24px; margin-right: 15px;">📱</div>
            <div>
              <div style="font-weight: bold; margin-bottom: 5px;">电话</div>
              <div>+86 131 9732 4235</div>
            </div>
            <div class="copy-tooltip" style="position: absolute; bottom: -30px; left: 50%; transform: translateX(-50%); background-color: transparent; color: white; padding: 5px 10px; border-radius: 4px; font-size: 12px; white-space: nowrap; display: none; opacity: 1; transition: opacity 0.3s ease;">点击复制到剪贴板</div>
          </div>
          <div style="display: flex; align-items: center; padding: 15px; background-color: rgba(255, 255, 255, 0.05); border-radius: 8px; position: relative; cursor: pointer;" class="contact-item" data-copy="2140347955" title="点击复制QQ号">
            <div style="font-size: 24px; margin-right: 15px;">👤</div>
            <div>
              <div style="font-weight: bold; margin-bottom: 5px;">QQ</div>
              <div>2140347955</div>
            </div>
            <div class="copy-tooltip" style="position: absolute; bottom: -30px; left: 50%; transform: translateX(-50%); background-color: transparent; color: white; padding: 5px 10px; border-radius: 4px; font-size: 12px; white-space: nowrap; display: none; opacity: 1; transition: opacity 0.3s ease;">点击复制到剪贴板</div>
          </div>
          <div style="display: flex; align-items: center; padding: 15px; background-color: rgba(255, 255, 255, 0.05); border-radius: 8px; position: relative;">
            <div style="font-size: 24px; margin-right: 15px;">📍</div>
            <div>
              <div style="font-weight: bold; margin-bottom: 5px;">地址</div>
              <div>中国·湖北</div>
            </div>
          </div>
        </div>
      </div>
      
      <div style="background-color: rgba(255, 255, 255, 0.1); padding: 30px; border-radius: 10px;">
        <h3 style="margin-top: 0; color: #fff;">社交媒体</h3>
        <div style="display: flex; flex-wrap: wrap; gap: 15px; margin-top: 20px;">
          <a href="https://github.com/lwb2140347955" target="_blank" style="display: flex; align-items: center; padding: 12px 20px; background-color: rgba(255, 255, 255, 0.05); border-radius: 8px; color: white; text-decoration: none; transition: all 0.3s;">
            <div style="font-size: 20px; margin-right: 10px;"> GitHub </div>
            <div>@Truly</div>
          </a>
          <a href="https://space.bilibili.com/485956494?spm_id_from=333.788.0.0" target="_blank" style="display: flex; align-items: center; padding: 12px 20px; background-color: rgba(255, 255, 255, 0.05); border-radius: 8px; color: white; text-decoration: none; transition: all 0.3s;">
            <div style="font-size: 20px; margin-right: 10px;"> B站 </div>
            <div>@买非卖卖非买</div>
          </a>
        </div>
      </div>
    </div>
  </div>
`,
};

// 通用页面切换函数
function switchToPage(pageName, mainContent) {
  // 根据点击的链接显示相应内容
  if (pageContents[pageName]) {
    mainContent.innerHTML = pageContents[pageName];

    // 如果是"我的文章"页面，初始化文章功能
    if (pageName === "我的文章") {
      setTimeout(setupArticlesFunctionality, 100);
    }

    // 如果是"收藏夹"页面，初始化收藏夹功能
    if (pageName === "收藏夹") {
      setTimeout(setupFavoritesFunctionality, 100);
    }

    // 如果是设置页面，初始化音乐控制
    if (pageName === "设置") {
      setTimeout(() => {
        setupMusicControls();
        loadSettings();
      }, 100);
    }
  } else {
    // 默认显示欢迎内容
    mainContent.innerHTML =
      '<p style="color: white; text-align: center">欢迎来到我的网站！</p>';
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // 获取所有侧边栏链接
  const sidebarLinks = document.querySelectorAll(".sidebar a");
  const mainContent = document.querySelector(".main_content");

  // 获取头部导航链接
  const navLinks = document.querySelectorAll(".nav_links a");

  // 为每个侧边栏链接添加点击事件监听器
  sidebarLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // 阻止默认链接行为

      const linkText = this.textContent;
      switchToPage(linkText, mainContent);
    });
  });

  // 为每个头部导航链接添加点击事件监听器
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // 阻止默认链接行为

      const linkText = this.textContent;
      switchToPage(linkText, mainContent);
    });
  });

  // 默认显示首页内容
  switchToPage("首页", mainContent);
});

// 添加联系页面的复制功能
function initContactCopy() {
  // 获取所有联系项
  const contactItems = document.querySelectorAll(".contact-item");

  contactItems.forEach((item) => {
    // 添加鼠标悬停事件
    item.addEventListener("mouseenter", function () {
      const tooltip = this.querySelector(".copy-tooltip");
      if (tooltip) {
        tooltip.style.display = "block";
        // 淡入效果
        setTimeout(() => {
          tooltip.style.opacity = "1";
        }, 10);
      }
    });

    // 添加鼠标离开事件
    item.addEventListener("mouseleave", function () {
      const tooltip = this.querySelector(".copy-tooltip");
      if (tooltip) {
        // 淡出效果
        tooltip.style.opacity = "0";
        setTimeout(() => {
          tooltip.style.display = "none";
        }, 300);
      }
    });

    // 添加点击复制事件
    item.addEventListener("click", function () {
      const textToCopy = this.getAttribute("data-copy");
      if (textToCopy) {
        copyToClipboard(textToCopy, this);
      }
    });
  });
}

// 复制到剪贴板功能
function copyToClipboard(text, element) {
  // 创建临时文本区域
  const textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();

  try {
    // 执行复制
    const successful = document.execCommand("copy");

    // 显示复制成功提示
    showCopyFeedback(element, successful ? "复制成功!" : "复制失败");
  } catch (err) {
    // 显示复制失败提示
    showCopyFeedback(element, "复制失败");
  }

  // 移除临时元素
  document.body.removeChild(textArea);
}

// 显示复制反馈
function showCopyFeedback(element, message) {
  // 创建或更新反馈元素
  let feedback = element.querySelector(".copy-feedback");
  if (!feedback) {
    feedback = document.createElement("div");
    feedback.className = "copy-feedback";
    feedback.style.cssText = `
      position: absolute;
      top: -35px;
      left: 50%;
      transform: translateX(-50%);
      background-color: transparent;
      color: white;
      padding: 5px 10px;
      border-radius: 4px;
      font-size: 12px;
      white-space: nowrap;
      z-index: 1000;
      opacity: 1;
      transition: opacity 0.5s ease;
    `;
    element.appendChild(feedback);
  }

  feedback.textContent = message;
  feedback.style.display = "block";
  feedback.style.opacity = "1";

  // 0.8秒后渐变消失
  setTimeout(() => {
    feedback.style.opacity = "0";
    // 等待淡出动画完成后隐藏元素
    setTimeout(() => {
      feedback.style.display = "none";
    }, 500);
  }, 800);
}
// 修改 switchToPage 函数，在联系页面加载后初始化复制功能
function switchToPage(pageName, mainContent) {
  // 根据点击的链接显示相应内容
  if (pageContents[pageName]) {
    mainContent.innerHTML = pageContents[pageName];

    // 如果是"我的文章"页面，初始化文章功能
    if (pageName === "我的文章") {
      setTimeout(setupArticlesFunctionality, 100);
    }

    // 如果是"收藏夹"页面，初始化收藏夹功能
    if (pageName === "收藏夹") {
      setTimeout(setupFavoritesFunctionality, 100);
    }

    // 如果是设置页面，初始化音乐控制
    if (pageName === "设置") {
      setTimeout(() => {
        setupMusicControls();
        loadSettings();
      }, 100);
    }

    // 如果是联系页面，初始化复制功能
    if (pageName === "联系") {
      setTimeout(initContactCopy, 100);
    }
  } else {
    // 默认显示欢迎内容
    mainContent.innerHTML =
      '<p style="color: white; text-align: center">欢迎来到我的网站！</p>';
  }
}
