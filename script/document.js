// script/document.js
function setupArticlesFunctionality() {
  // 获取文章容器
  const articlesContainer = document.getElementById("articles-container");

  // 如果元素不存在，说明当前不在文章页面
  if (!articlesContainer) return;

  // 显示文章列表
  function displayArticles() {
    // 硬编码的文章数据
    const articles = [
      {
        id: 1,
        title: "欢迎来到我的网站",
        content: "这是我创建的第一个文章示例。\n\n\n\n",
        date: "2025年10月25日",
      },
      {
        id: 2,
        title: "网站使用说明",
        content:
          "这个网站是一个静态网站\n\n以后可能会更新和维护，全看心情吧\n\n",
        date: "2025年10月25日",
      },
    ];

    if (articles.length === 0) {
      articlesContainer.innerHTML = `
        <div style="text-align: center; padding: 40px; background-color: rgba(255, 255, 255, 0.1); border-radius: 8px;">
          <p>还没有文章，请等待管理员发布文章。</p>
        </div>
      `;
      return;
    }

    // 生成文章列表HTML
    let articlesHTML = "";
    articles.forEach((article) => {
      articlesHTML += `
        <div style="background-color: rgba(255, 255, 255, 0.1); padding: 20px; margin-bottom: 15px; border-radius: 8px; cursor: pointer;" data-id="${
          article.id
        }">
          <h3 style="margin-top: 0;">${article.title}</h3>
          <p style="margin: 10px 0; color: #ddd;">${article.content.substring(
            0,
            100
          )}${article.content.length > 100 ? "..." : ""}</p>
          <div style="display: flex; justify-content: space-between; color: #aaa; font-size: 0.9em;">
            <span>创建时间: ${article.date}</span>
          </div>
        </div>
      `;
    });

    articlesContainer.innerHTML = articlesHTML;

    // 为每篇文章添加点击事件
    articlesContainer
      .querySelectorAll("div[data-id]")
      .forEach((articleElement) => {
        articleElement.addEventListener("click", function () {
          const articleId = parseInt(this.getAttribute("data-id"));
          openArticle(articleId);
        });
      });
  }

  function openArticle(articleId) {
    // 硬编码的文章数据
    const articles = [
      {
        id: 1,
        title: "欢迎来到我的网站",
        content: "这是我创建的第一个文章示例。\n\n\n\n",
        date: "2025年10月25日",
      },
      {
        id: 2,
        title: "网站使用说明",
        content:
          "这个网站是一个静态网站\n\n以后可能会更新和维护，全看心情吧\n\n",
        date: "2025年10月25日",
      },
    ];

    const article = articles.find((a) => a.id === articleId);

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
        </div>
      `;

      // 绑定返回按钮事件
      setTimeout(() => {
        const backToListBtn = document.getElementById("back-to-list");
        if (backToListBtn) {
          backToListBtn.addEventListener("click", function (e) {
            e.preventDefault();
            displayArticles();
          });
        }
      }, 0);
    }
  }

  // 初始显示文章列表
  displayArticles();
}
