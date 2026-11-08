# `index.astro`
トップページのサイトです

## トップページに記事一覧を表示する
### コード
「`src/blog/` に md を追加すると、トップページに自動でリンクが並ぶ」という動作に絞ると、下記のコードになる
```astro
---
import { getCollection } from 'astro:content';
const posts = await getCollection('blog');
---
{posts.map(post => (
<li>
    <ContentLinkButton post={post} />
</li>
))}
```
|コード|意味|
|---|---|
|`getCollection('blog')`|記事を全件取得する|
|`opsts.map(post => (...))`|記事一件ごとに`<li>`を作る|
|`href={'/${post.id}/'}`|URLを作成|
|`post.data.title`|frontmatterの`title`|


### 処理の流れ
1. サーバーが記事を探す(Astro)
2. frontmatterが記事を探す(Astro)
3. getCollection('blog')が配列を渡す(Astro)
4. awaitで配列を受け取る(JavaScript)
5. post.map()で記事ごとに<li>を作る(JavaScript)
6. {...}の中身をHTMLとして出力する(Astroの構文)


# `[...slug.astro]`
`blog/**.md`のファイルを読み込んで、静的サイトを作成するファイル

## 動的ルートを作成した静的サイトの作成
### 1. `src/pages/`の外にフォルダを作成してMarkdownファイルを置く(今回は`src/blog/`)

```md
---
title: '記事タイトル'
description: '説明'
date: '2026/10/30'
---
本文
```
**参考サイト**
 [AstroにおけるMarkdown](https://docs.astro.build/ja/guides/markdown-content/)

### 2. コレクションを定義する
コレクションとは、構造化されたコンテンツを整理するための方法。これを利用することで、コンテンツ管理が容易になったり、TypeScriptの型管理の面でも優位性を持つ。ビルド時に動作する。

ビルド時やリクエスト時に取得したデータを操作できるように２つのコンテンツコレクションが用意されている。
- `loader`: コンテンツとパラメータが保存されているディレクトリ問わず取得する
- `schema`: 読んだ記事の frontmatter がどんな形であるべきか

**参考サイト**:[コンテンツコレクションとは何ですか？](https://docs.astro.build/en/guides/content-collections/#what-are-content-collections)

コンテンツコレクションは`src/content.config.ts`の中の`defineCollection`で定義される。今回のコードは下記の通りである
```ts
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	loader: glob({ base: './src/blog', pattern: '**/*.md' }),
	schema: z.object({
			title: z.string(),
			description: z.string(),
			date: z.string(),
		}),
});

export const collections = { blog };
```
#### コードの説明
- `astro:content` :コンテンツコレクションを扱うためのastro組み込みのモジュール
    - `defineCollection` :コレクションを定義する関数

- `astro/loaders` :コレクションのデータをどこから、どうやって読むかをまとめたモジュール

|ローダー|読み込む対象|向いている用途|
|---|---|---|
|`grob()`|パターンに合う複数のファイル（md、mdx、json、yaml など）|1記事1ファイルのような場合|
|`file`|1つのファイル（json、yaml など）|作品一覧を1つのJSONにまとめる場合|

- `astro/zod` :データの形を定義し、実際のデータがその形に合っているかを検査する TypeScript 用のライブラリ
    - `z` :データの型を定義・検査するライブラリ

よく使う書き方
|書き方|意味|
|---|---|
|`z.string()`|文字列|
|`z.number()`|数値|
|`z.boolean()`|True / False|
|`z.date`|Date 型（YAML の 2026-10-30 のような日付はこれで受けられる）|
|`z.coerce.date()`|文字列なども Date 型に変換して受け取る|
|`z.array(z.string())`|文字列の配列（タグなど）|
|`z.enum(['tech', 'diary'])`|決まった値のどれか|




**参考サイト**: [ビルド時のコンテンツコレクションを定義する](https://docs.astro.build/en/guides/content-collections/#defining-build-time-content-collections)、[withastro - content.config.ts](https://github.com/withastro/astro/blob/main/examples/blog/src/content.config.ts)

### 3. ページのファイルを作成する
`src/pages/(希望するディレクトリ)`で`[...slug].astro`というファイルを作成し、コンテンツのスラッグと記事本文を表示するためのコードを追加する。

下記は今回作成したコードである
```astro
---
import { getCollection, render } from 'astro:content';
import BlogPostLayout from '../layouts/BlogPostLayout.astro';

export async function getStaticPaths() {
  const posts = await getCollection('blog');
  return posts.map(post => ({
    params: { slug: post.id },
    props: { post },
  }));
}

const { post } = Astro.props;
const { Content } = await render(post);
---
```
#### コードの説明
- `astro:content`: コンテンツコレクションを扱うためのastro組み込みのモジュール
    - `getCollection`: コレクションの記事一覧を取得する関数
    - `render`: 記事のMarkdownをHTMLに変換する関数

- `export async function`: Astroが外から呼べるように`export`し、ファイルを読む処理を待つので`async`にしている
- `await getCollection('blog')`: `content.config.ts`で定義した`blog`コレクションの記事を全件、配列で取得する
- `posts.map(post => ({ ... }))`: 記事1件ごとに { params, props } の形に変換する
    - `params: { slug: post.id }`: URLを決める部分。
    - `props: { post }`: のページに渡すデータ。記事の情報をまるごと渡している

- `Astro:props`: `getStaticPaths()`で`props`に指定したものが入る
- `render(post)`: 記事の Markdown 本文を HTML に変換し、Content というコンポーネントとして返す。下の HTML 部分で` <Content /> `と書くと、本文がその場所に入る

`async`: 非同期関数であるという宣言 <br>
`await`: 処理が完了するまで一時停止

**参考サイト**
[コンテンツコレクションを作る](https://docs.astro.build/ja/tutorial/6-islands/4/)