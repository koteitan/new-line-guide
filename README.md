# New Line Guide - Chrome Extension

テキストエリアの横に「new line = shift + enter」というガイドを表示するChrome拡張機能です。

## 機能

- すべてのウェブページのtextarea要素の横に改行ガイドを自動表示
- 動的に追加されるtextareaにも対応
- ダークモード対応
- 軽量で邪魔にならないデザイン

## インストール方法

### 開発版として読み込む

1. Chromeで`chrome://extensions/`を開く
2. 右上の「デベロッパーモード」をONにする
3. 「パッケージ化されていない拡張機能を読み込む」をクリック
4. このディレクトリを選択

### アイコンについて

この拡張機能を完全に動作させるには、以下のアイコンファイルが必要です：
- `icon16.png` (16x16 ピクセル)
- `icon48.png` (48x48 ピクセル)
- `icon128.png` (128x128 ピクセル)

アイコンを作成するか、一時的に以下のコマンドでプレースホルダー画像を作成できます：

```bash
# ImageMagickを使用する場合
convert -size 16x16 xc:#4285f4 -gravity center -pointsize 10 -fill white -annotate +0+0 "N" icon16.png
convert -size 48x48 xc:#4285f4 -gravity center -pointsize 30 -fill white -annotate +0+0 "N" icon48.png
convert -size 128x128 xc:#4285f4 -gravity center -pointsize 80 -fill white -annotate +0+0 "N" icon128.png
```

または、オンラインツールで簡単なアイコンを作成してください。

## ファイル構成

```
.
├── manifest.json     # 拡張機能の設定ファイル
├── content.js        # コンテンツスクリプト（ガイド表示ロジック）
├── styles.css        # スタイルシート
├── icon16.png        # 16x16 アイコン（作成が必要）
├── icon48.png        # 48x48 アイコン（作成が必要）
└── icon128.png       # 128x128 アイコン（作成が必要）
```

## 使い方

拡張機能をインストール後、任意のウェブページのテキストエリアの横に「new line = shift + enter」というガイドが表示されます。

特に以下のようなサイトで便利です：
- ChatGPT
- Claude
- その他のチャットインターフェース

## ライセンス

MIT License
