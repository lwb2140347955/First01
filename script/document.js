function setupArticlesFunctionality() {
  // 获取文章容器和编辑器元素
  const articlesContainer = document.getElementById("articles-container");
  const articleEditor = document.getElementById("article-editor");
  const newArticleBtn = document.getElementById("new-article-btn");
  const saveArticleBtn = document.getElementById("save-article-btn");
  const cancelArticleBtn = document.getElementById("cancel-article-btn");
  const articleTitle = document.getElementById("article-title");
  const articleContent = document.getElementById("article-content");

  // 如果这些元素不存在，说明当前不在文章页面
  if (!articlesContainer || !newArticleBtn) return;

  // 显示文章列表
  function displayArticles() {
    // 从localStorage获取文章数据
    const articles = JSON.parse(localStorage.getItem("blogArticles") || "[]");

    if (articles.length === 0) {
      articlesContainer.innerHTML = `
        <div style="text-align: center; padding: 40px; background-color: rgba(255, 255, 255, 0.1); border-radius: 8px;">
          <p>还没有文章，点击"新建文章"开始创作吧！</p>
        </div>
      `;
      return;
    }

    // 生成文章列表HTML
    let articlesHTML = "";
    articles.forEach((article, index) => {
      articlesHTML += `
        <div style="background-color: rgba(255, 255, 255, 0.1); padding: 20px; margin-bottom: 15px; border-radius: 8px; cursor: pointer;" data-id="${index}">
          <h3 style="margin-top: 0;">${article.title}</h3>
          <p style="margin: 10px 0; color: #ddd;">${article.content.substring(
            0,
            100
          )}${article.content.length > 100 ? "..." : ""}</p>
          <div style="display: flex; justify-content: space-between; color: #aaa; font-size: 0.9em;">
            <span>创建时间: ${article.date}</span>
            <span>编辑</span>
          </div>
        </div>
      `;
    });

    articlesContainer.innerHTML = articlesHTML;

    // 为每篇文章添加点击事件
    document
      .querySelectorAll("#articles-container > div")
      .forEach((articleElement) => {
        articleElement.addEventListener("click", function (e) {
          if (e.target.tagName !== "SPAN") {
            // 点击编辑按钮不触发
            const articleId = parseInt(this.getAttribute("data-id"));
            openArticle(articleId);
          }
        });
      });
  }

  // 打开文章详情
  function openArticle(articleId) {
    const articles = JSON.parse(localStorage.getItem("blogArticles") || "[]");
    const article = articles[articleId];

    if (article) {
      articlesContainer.innerHTML = `
        <div style="margin-bottom: 20px;">
          <button id="back-to-list" style="background-color: rgba(255, 255, 255, 0.2); color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer;">← 返回列表</button>
        </div>
        <div style="background-color: rgba(255, 255, 255, 0.1); padding: 30px; border-radius: 8px;">
          <h2 style="margin-top: 0;">${article.title}</h2>
          <div style="color: #aaa; margin-bottom: 20px; font-size: 0.9em;">发布时间: ${
            article.date
          }</div>
          <div style="line-height: 1.6;">${article.content.replace(
            /\n/g,
            "<br>"
          )}</div>
          <div style="margin-top: 30px; display: flex; gap: 10px;">
            <button id="edit-article" data-id="${articleId}" style="background-color: rgba(0, 123, 255, 0.7); color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer;">编辑</button>
            <button id="delete-article" data-id="${articleId}" style="background-color: rgba(220, 53, 69, 0.7); color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer;">删除</button>
          </div>
        </div>
      `;

      // 绑定返回按钮事件
      document
        .getElementById("back-to-list")
        .addEventListener("click", displayArticles);

      // 绑定编辑按钮事件
      const editBtn = document.getElementById("edit-article");
      if (editBtn) {
        editBtn.addEventListener("click", function () {
          const id = parseInt(this.getAttribute("data-id"));
          editArticle(id);
        });
      }

      // 绑定删除按钮事件
      const deleteBtn = document.getElementById("delete-article");
      if (deleteBtn) {
        deleteBtn.addEventListener("click", function () {
          const id = parseInt(this.getAttribute("data-id"));
          deleteArticle(id);
        });
      }
    }
  }

  // 编辑文章
  function editArticle(articleId) {
    const articles = JSON.parse(localStorage.getItem("blogArticles") || "[]");
    const article = articles[articleId];

    if (article) {
      articleTitle.value = article.title;
      articleContent.value = article.content;

      articlesContainer.style.display = "none";
      articleEditor.style.display = "block";

      // 更改保存按钮行为为更新
      saveArticleBtn.onclick = function () {
        updateArticle(articleId);
      };
    }
  }

  // 删除文章
  function deleteArticle(articleId) {
    if (confirm("确定要删除这篇文章吗？")) {
      const articles = JSON.parse(localStorage.getItem("blogArticles") || "[]");
      articles.splice(articleId, 1);
      localStorage.setItem("blogArticles", JSON.stringify(articles));
      displayArticles();
    }
  }

  // 新建文章按钮事件
  newArticleBtn.addEventListener("click", function () {
    // 清空编辑器
    articleTitle.value = "";
    articleContent.value = "";

    // 显示编辑器
    articlesContainer.style.display = "none";
    articleEditor.style.display = "block";

    // 设置保存按钮行为为新建
    saveArticleBtn.onclick = saveNewArticle;
  });

  // 保存新文章
  function saveNewArticle() {
    const title = articleTitle.value.trim();
    const content = articleContent.value.trim();

    if (!title || !content) {
      alert("标题和内容不能为空！");
      return;
    }

    // 创建新文章对象
    const newArticle = {
      title: title,
      content: content,
      date: new Date().toLocaleString("zh-CN"),
    };

    // 从localStorage获取现有文章
    const articles = JSON.parse(localStorage.getItem("blogArticles") || "[]");
    articles.unshift(newArticle); // 添加到开头

    // 保存到localStorage
    localStorage.setItem("blogArticles", JSON.stringify(articles));

    // 返回列表视图
    articleEditor.style.display = "none";
    articlesContainer.style.display = "block";

    // 刷新文章列表
    displayArticles();
  }

  // 更新文章
  function updateArticle(articleId) {
    const title = articleTitle.value.trim();
    const content = articleContent.value.trim();

    if (!title || !content) {
      alert("标题和内容不能为空！");
      return;
    }

    // 从localStorage获取文章
    const articles = JSON.parse(localStorage.getItem("blogArticles") || "[]");

    // 更新文章
    articles[articleId] = {
      title: title,
      content: content,
      date: articles[articleId].date + " (已编辑)",
    };

    // 保存到localStorage
    localStorage.setItem("blogArticles", JSON.stringify(articles));

    // 返回列表视图
    articleEditor.style.display = "none";
    articlesContainer.style.display = "block";

    // 刷新文章列表
    displayArticles();
  }

  // 取消编辑按钮事件
  cancelArticleBtn.addEventListener("click", function () {
    if (confirm("确定要取消编辑吗？未保存的内容将会丢失。")) {
      articleEditor.style.display = "none";
      articlesContainer.style.display = "block";
    }
  });

  // 初始显示文章列表
  displayArticles();
}

// 修改侧边栏点击事件监听器部分
sidebarLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault(); // 阻止默认链接行为

    const linkText = this.textContent;

    // 根据点击的链接显示相应内容
    if (pageContents[linkText]) {
      mainContent.innerHTML = pageContents[linkText];

      // 如果是"我的文章"页面，初始化文章功能
      if (linkText === "我的文章") {
        setTimeout(setupArticlesFunctionality, 100);
      }

      // 如果是设置页面，初始化音乐控制
      if (linkText === "设置") {
        setTimeout(() => {
          setupMusicControls();
          loadSettings();
        }, 100);
      }
    } else {
      // 默认显示欢迎内容
      mainContent.innerHTML =
        '<p style="color: white; text-align: center">欢迎来到我的博客！</p>';
    }
  });
});
