// script/favorites.js
function setupFavoritesFunctionality() {
  // 获取收藏容器
  const favoritesContainer = document.getElementById("favorites-container");

  // 如果元素不存在，说明当前不在收藏夹页面
  if (!favoritesContainer) return;

  // 显示收藏列表
  function displayFavorites() {
    // 硬编码的收藏数据
    const favorites = [
      {
        id: 1,
        title: "我的GitHub",
        url: "https://github.com",
        description: "我的GitHub主页，包含我的开源项目",
        date: "2023年1月1日",
      },
      {
        id: 2,
        title: "学习资源",
        url: "https://developer.mozilla.org",
        description: "Web开发学习资源网站",
        date: "2023年1月2日",
      },
    ];

    if (favorites.length === 0) {
      favoritesContainer.innerHTML = `
        <div style="text-align: center; padding: 40px; background-color: rgba(255, 255, 255, 0.1); border-radius: 8px;">
          <p>还没有收藏内容。</p>
        </div>
      `;
      return;
    }

    // 生成收藏列表HTML
    let favoritesHTML = "";
    favorites.forEach((favorite, index) => {
      favoritesHTML += `
        <div style="background-color: rgba(255, 255, 255, 0.1); padding: 20px; margin-bottom: 15px; border-radius: 8px;">
          <div style="display: flex; justify-content: space-between; align-items: flex-start;">
            <div style="flex: 1;">
              <h3 style="margin-top: 0; margin-bottom: 10px;">
                ${
                  favorite.url
                    ? `<a href="${favorite.url}" target="_blank" style="color: #4da6ff; text-decoration: none;">${favorite.title}</a>`
                    : favorite.title
                }
              </h3>
              ${
                favorite.description
                  ? `<p style="margin: 10px 0; color: #ddd;">${favorite.description}</p>`
                  : ""
              }
              <div style="color: #aaa; font-size: 0.9em;">收藏时间: ${
                favorite.date
              }</div>
            </div>
          </div>
        </div>
      `;
    });

    favoritesContainer.innerHTML = favoritesHTML;
  }

  // 初始显示收藏列表
  displayFavorites();
}

// 确保函数在全局作用域中可用
window.setupFavoritesFunctionality = setupFavoritesFunctionality;
