// script/favorites.js
function setupFavoritesFunctionality() {
  // 获取收藏容器和编辑器元素
  const favoritesContainer = document.getElementById("favorites-container");
  const favoriteEditor = document.getElementById("favorite-editor");
  const newFavoriteBtn = document.getElementById("new-favorite-btn");
  const saveFavoriteBtn = document.getElementById("save-favorite-btn");
  const cancelFavoriteBtn = document.getElementById("cancel-favorite-btn");
  const favoriteTitle = document.getElementById("favorite-title");
  const favoriteUrl = document.getElementById("favorite-url");
  const favoriteDescription = document.getElementById("favorite-description");

  // 如果这些元素不存在，说明当前不在收藏夹页面
  if (!favoritesContainer || !newFavoriteBtn) return;

  // 显示收藏列表
  function displayFavorites() {
    // 从localStorage获取收藏数据
    const favorites = JSON.parse(localStorage.getItem("blogFavorites") || "[]");

    if (favorites.length === 0) {
      favoritesContainer.innerHTML = `
        <div style="text-align: center; padding: 40px; background-color: rgba(255, 255, 255, 0.1); border-radius: 8px;">
          <p>还没有收藏，点击"添加收藏"开始收藏内容吧！</p>
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
            <div style="display: flex; gap: 5px;">
              <button class="edit-favorite-btn" data-id="${index}" style="background-color: rgba(0, 123, 255, 0.7); color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 0.9em;">编辑</button>
              <button class="delete-favorite-btn" data-id="${index}" style="background-color: rgba(220, 53, 69, 0.7); color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 0.9em;">删除</button>
            </div>
          </div>
        </div>
      `;
    });

    favoritesContainer.innerHTML = favoritesHTML;

    // 为编辑和删除按钮添加事件监听器
    document.querySelectorAll(".edit-favorite-btn").forEach((btn) => {
      btn.addEventListener("click", function () {
        const favoriteId = parseInt(this.getAttribute("data-id"));
        editFavorite(favoriteId);
      });
    });

    document.querySelectorAll(".delete-favorite-btn").forEach((btn) => {
      btn.addEventListener("click", function () {
        const favoriteId = parseInt(this.getAttribute("data-id"));
        deleteFavorite(favoriteId);
      });
    });
  }

  // 编辑收藏
  function editFavorite(favoriteId) {
    const favorites = JSON.parse(localStorage.getItem("blogFavorites") || "[]");
    const favorite = favorites[favoriteId];

    if (favorite) {
      favoriteTitle.value = favorite.title;
      favoriteUrl.value = favorite.url || "";
      favoriteDescription.value = favorite.description || "";

      favoritesContainer.style.display = "none";
      favoriteEditor.style.display = "block";

      // 更改保存按钮行为为更新
      saveFavoriteBtn.onclick = function () {
        updateFavorite(favoriteId);
      };
    }
  }

  // 删除收藏
  function deleteFavorite(favoriteId) {
    if (confirm("确定要删除这个收藏吗？")) {
      const favorites = JSON.parse(
        localStorage.getItem("blogFavorites") || "[]"
      );
      favorites.splice(favoriteId, 1);
      localStorage.setItem("blogFavorites", JSON.stringify(favorites));
      displayFavorites();
    }
  }

  // 新建收藏按钮事件
  newFavoriteBtn.addEventListener("click", function () {
    // 清空编辑器
    favoriteTitle.value = "";
    favoriteUrl.value = "";
    favoriteDescription.value = "";

    // 显示编辑器
    favoritesContainer.style.display = "none";
    favoriteEditor.style.display = "block";

    // 设置保存按钮行为为新建
    saveFavoriteBtn.onclick = saveNewFavorite;
  });

  // 保存新收藏
  function saveNewFavorite() {
    const title = favoriteTitle.value.trim();

    if (!title) {
      alert("收藏标题不能为空！");
      return;
    }

    // 创建新收藏对象
    const newFavorite = {
      title: title,
      url: favoriteUrl.value.trim(),
      description: favoriteDescription.value.trim(),
      date: new Date().toLocaleString("zh-CN"),
    };

    // 从localStorage获取现有收藏
    const favorites = JSON.parse(localStorage.getItem("blogFavorites") || "[]");
    favorites.unshift(newFavorite); // 添加到开头

    // 保存到localStorage
    localStorage.setItem("blogFavorites", JSON.stringify(favorites));

    // 返回列表视图
    favoriteEditor.style.display = "none";
    favoritesContainer.style.display = "block";

    // 刷新收藏列表
    displayFavorites();
  }

  // 更新收藏
  function updateFavorite(favoriteId) {
    const title = favoriteTitle.value.trim();

    if (!title) {
      alert("收藏标题不能为空！");
      return;
    }

    // 从localStorage获取收藏
    const favorites = JSON.parse(localStorage.getItem("blogFavorites") || "[]");

    // 更新收藏
    favorites[favoriteId] = {
      title: title,
      url: favoriteUrl.value.trim(),
      description: favoriteDescription.value.trim(),
      date: favorites[favoriteId].date + " (已编辑)",
    };

    // 保存到localStorage
    localStorage.setItem("blogFavorites", JSON.stringify(favorites));

    // 返回列表视图
    favoriteEditor.style.display = "none";
    favoritesContainer.style.display = "block";

    // 刷新收藏列表
    displayFavorites();
  }

  // 取消编辑按钮事件
  cancelFavoriteBtn.addEventListener("click", function () {
    if (confirm("确定要取消编辑吗？未保存的内容将会丢失。")) {
      favoriteEditor.style.display = "none";
      favoritesContainer.style.display = "block";
    }
  });

  // 初始显示收藏列表
  displayFavorites();
}

// 确保函数在全局作用域中可用
window.setupFavoritesFunctionality = setupFavoritesFunctionality;
