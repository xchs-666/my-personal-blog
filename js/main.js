// 三个页面共用这一个文件。
// 每个页面都要有的东西，其它页面没有的就会 querySelector 到 null ——
// 所以每一次查询后面都必须有 if 守卫，否则会在别的页面上抛错。

// ---------------------------------------------------------------------------
// 1. 手机端导航开关
// ---------------------------------------------------------------------------
// 关键点：这里只切换 class，不碰 style。
// 如果用 nav.style.display 控制，窗口从手机宽度拉到桌面宽度后，
// 导航会卡在被隐藏的状态，而且怎么改都恢复不了。
// 用 class 的话，桌面端的媒体查询会直接覆盖掉它。
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    // 同步 aria-expanded，屏幕阅读器才知道菜单现在是开是关
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// ---------------------------------------------------------------------------
// 2. 页脚年份
// ---------------------------------------------------------------------------
// 手写年份的话，第二年就过期了。
const year = document.querySelector('#year');

if (year) {
  year.textContent = new Date().getFullYear();
}
