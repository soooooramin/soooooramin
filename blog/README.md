# soraminato.dev/blog
## 目的
- 私に興味を持ってくれる人が、開発したものや自身の経験を一覧として確認できる状態にする
- astroでの開発経験を積むことで

## 達成条件
- 誰でも経歴が確認できる状態になっていること
- astroでのプロジェクトが完了すること

## 導入時のメモ
### astroプロジェクトの導入方法

最小構成での構築のためには下記のコマンドを導入する
```sh
pnpm create astro@latest -- --template minimal
```
ブログ等のテンプレートを使用したい場合は`minimal`以外の引数を使う

### Astro用TailwindCSSの導入方法
```sh
pnpm add @tailwindcss/vite@^4.3.3 tailwindcss@^4.3.3
```
尚、TailwindCSSを利用するためには下記の記入が必要
```
// global.css
@import "tailwindcss";
```
```astro
import '../styles/global.css' 
```

### このプロジェクトのディレクトリ構成
```text
/
├── public/                 // プロジェクト内で処理する必要のないファイル(画像等)を導入する
├── src/                    // プロジェクトのソースコードを記入
│   ├── blog/               // 実際に表示される記事の追加
│   ├── pages/              // ページの構成要素を追加
│   │    └── index.astro    // 表示されるページファイル
│   ├── compornents/        // コンポーネントを記載する
│   │    └── header.astro   // Header部分
│   ├── layouts/            // UIの構造を定義する
│   └── styles/             // CSSファイルのディレクトリに保存
├── astro.config.mjs        // astroの設定ファイル
├── tsconfig.json           // typescriptの設定ファイル
└── package.json            // JavaScriptの依存関係を管理するファイル

```
参考サイト: [Astro DOCS - Project structure](https://docs.astro.build/en/basics/project-structure/)







## 詰まったところ
### コンポーネントが表示されない
```
---
import header from '../components/header.astro'
---
```
このように記載していたがコンポーネント名は大文字から始めないといけないっぽい

```
---
import Header from '../components/header.astro'
---
```



# Astro Starter Kit: Minimal

```sh
pnpm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

