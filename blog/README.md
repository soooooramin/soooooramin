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
│   ├──　styles/             // CSSファイルのディレクトリに保存
│   └── content.config.ts
├── astro.config.mjs        // astroの設定ファイル
├── tsconfig.json           // typescriptの設定ファイル
└── package.json            // JavaScriptの依存関係を管理するファイル

```
**参考サイト**
 [Astro DOCS - Project structure](https://docs.astro.build/en/basics/project-structure/)







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

### Tailwindcssに変更を加えても表示されない
`className=""`ではなく、`class=""`で記入することでTailwindCSSが反応する（というよりもReactでしかtailwindcssを利用していないためそういう発想が元から無かったのが原因）

## MarkDownをHTML形式で表示してくれない
Tailwind CSS が見出しやリストの標準の見た目を消しているのが原因
対処法
