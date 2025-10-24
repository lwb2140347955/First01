// script.js
document.addEventListener("DOMContentLoaded", function () {
  // 获取所有侧边栏链接
  const sidebarLinks = document.querySelectorAll(".sidebar a");
  const mainContent = document.querySelector(".main_content");

  // 定义各个页面的内容
  const pageContents = {
    个人资料: `
      <div class="profile-content">
        <h2 style="text-align: center; margin-bottom: 30px;">个人资料</h2>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
          <div style="width: 120px; height: 120px; border-radius: 50%; background-color: rgba(255, 255, 255, 0.2); margin-bottom: 10px;"></div>
          <div style="width: 100%; max-width: 500px;">
            <div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.1);">
              <span style="font-weight: bold;">用户名:</span>
              <span>Truly</span>
            </div>
            <div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.1);">
              <span style="font-weight: bold;">邮箱:</span>
              <span>truly@example.com</span>
            </div>
            <div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.1);">
              <span style="font-weight: bold;">注册时间:</span>
              <span>2023年1月1日</span>
            </div>
            <div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.1);">
              <span style="font-weight: bold;">最后登录:</span>
              <span>2023年10月1日</span>
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
        <h2 style="text-align: center; margin-bottom: 30px;">我的文章</h2>
        <div style="max-width: 800px; margin: 0 auto;">
          <div style="background-color: rgba(255, 255, 255, 0.1); padding: 20px; margin-bottom: 15px; border-radius: 8px;">
            <h3>如何学习前端开发</h3>
            <p>发布时间: 2023年9月15日</p>
            <p>前端开发是创建网站和应用程序的用户界面的过程...</p>
          </div>
          <div style="background-color: rgba(255, 255, 255, 0.1); padding: 20px; margin-bottom: 15px; border-radius: 8px;">
            <h3>HTML5新特性介绍</h3>
            <p>发布时间: 2023年8月20日</p>
            <p>HTML5是HTML标准的最新版本，引入了许多新特性和API...</p>
          </div>
          <div style="background-color: rgba(255, 255, 255, 0.1); padding: 20px; margin-bottom: 15px; border-radius: 8px;">
            <h3>CSS3动画技巧</h3>
            <p>发布时间: 2023年7月10日</p>
            <p>CSS3提供了强大的动画功能，可以创建丰富的视觉效果...</p>
          </div>
        </div>
      </div>
    `,
    收藏夹: `
      <div>
        <h2 style="text-align: center; margin-bottom: 30px;">我的收藏</h2>
        <div style="max-width: 800px; margin: 0 auto;">
          <ul style="list-style-type: none; padding: 0;">
            <li style="background-color: rgba(255, 255, 255, 0.1); padding: 15px; margin-bottom: 10px; border-radius: 8px;">
              <h3>有用的CSS资源网站</h3>
              <p>收集了各种优秀的CSS学习资源和工具网站</p>
            </li>
            <li style="background-color: rgba(255, 255, 255, 0.1); padding: 15px; margin-bottom: 10px; border-radius: 8px;">
              <h3>JavaScript学习教程</h3>
              <p>从基础到高级的JavaScript学习资料合集</p>
            </li>
            <li style="background-color: rgba(255, 255, 255, 0.1); padding: 15px; margin-bottom: 10px; border-radius: 8px;">
              <h3>优秀的开源项目</h3>
              <p>值得关注的GitHub开源项目推荐</p>
            </li>
          </ul>
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
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.1);">
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
  };

  // 为每个链接添加点击事件监听器
  sidebarLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // 阻止默认链接行为

      const linkText = this.textContent;

      // 根据点击的链接显示相应内容
      if (pageContents[linkText]) {
        mainContent.innerHTML = pageContents[linkText];
      } else {
        // 默认显示欢迎内容
        mainContent.innerHTML =
          '<p style="color: white; text-align: center">欢迎来到我的博客！</p>';
      }
    });
  });
});
