# 个人主页

计算机专业大三学生的个人作品集站点，用来展示课程项目和练手作品。

**线上地址：** https://xchs-666.github.io/my-personal-blog/

用纯 HTML / CSS / JavaScript 手写，没有框架、没有构建步骤、没有任何依赖。
克隆下来就能直接打开。

## 文件结构

```
my-personal-blog/
├── index.html          首页：自我介绍 + 项目展示
├── about.html          关于：个人简介、技能、时间线
├── contact.html        联系：邮箱和 GitHub
├── 404.html            GitHub Pages 找不到页面时显示这个
├── favicon.svg         标签页图标
├── styles/main.css     全部样式，按 7 个段落组织
├── js/main.js          手机端导航开关 + 页脚年份
└── README.md
```

## 本地预览

不要直接双击打开 `index.html` —— 那样虽然能看，但和生产环境的行为不一样
（Windows 文件名大小写不敏感，`Styles/Main.css` 本地能跑、部署后会 404）。

用 Python 起一个本地服务器：

```bash
cd /m
python -m http.server 8000 --bind 127.0.0.1
```

然后访问 <http://localhost:8000/my-personal-blog/>。

从**父目录**起服务，是为了复现 GitHub Pages 真实的子路径结构
（站点实际挂在 `/my-personal-blog/` 下，不是根目录）。

## 待替换的占位内容

站点目前用的是占位文字和链接。全部找出来的方法：

```bash
grep -rn "TODO" .
```

需要替换的清单：

- [ ] 全站的「你的名字」和 `favicon.svg` 里的「名」字
- [ ] `index.html`：hero 里的自我介绍、三个项目的名称/描述/技术标签/链接
- [ ] `index.html`：「最近在学什么」那一段
- [ ] `about.html`：三段简介、技能分组、时间线
- [ ] `contact.html`：邮箱地址、GitHub 主页链接
- [ ] 三个页面页脚里的 GitHub 链接
- [ ] 本文件顶部如果仓库名有变，线上地址也要改

> 关于邮箱：明文邮箱放在公开且会被搜索引擎索引的页面上，通常几周内就会被爬虫盯上。
> 建议用一个专门的邮箱，或者只留 GitHub 链接。

## 部署

GitHub Pages，从分支直接发布，不需要任何构建配置。

仓库 → Settings → Pages → Source 选 **Deploy from a branch**，
Branch 选 **`main`**，目录选 **`/ (root)`**，保存。

推送后等几分钟（首次可能要 10 分钟），访问上面的线上地址即可。
