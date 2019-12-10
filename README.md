# フロントエンド開発設定デモ

以下の要領で環境を作成し、設定ファイルを配布することによって個々の環境を合わせる。

##### フォルダの作成

プロジェクト内にfrontend用のフォルダを作成する。

```
frontend
  ├─config
  │  ├─webpack.common.js
  │  ├─webpack.dev.js
  │  └─webpack.prod.js
  │
  └─src
     ├─index.css
     └─index.js
```

##### node.jsのインストール

[https://nodejs.org/ja/download/](https://nodejs.org/ja/download/)

インストールができない場合は、zipをダウンロード

Windowsで利用する場合、PATHを通す。

```
SET PATH=%PATH%;[解凍したnode.exeがあるパス] ← ex) C:\node
```

frontend用のフォルダに移動

```
CD /D pathto\frontend
```

##### package.jsonの作成

```
npm init -y
```

##### webpackのインストール

```
npm install --save-dev webpack webpack-cli
npm install --save-dev webpack-merge
```

###### package.jsonの編集
```
{
  "name": "[パッケージ名]",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "webpack --config ./config/webpack.dev.js",                ← 開発
    "build:watch": "webpack --watch --config ./config/webpack.dev.js",  ← 開発（更新監視）
    "build:prod": "webpack --config ./config/webpack.prod.js"           ← リリース
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^x.x.x",
    "webpack-cli": "^x.x.x"
  }
}
```

###### webpack.common.jsを作成
```
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    filename: '[リリースファイル名]',
    path: path.resolve(__dirname, '../../target/classes/static/js')
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
```

###### 開発用ビルド定義、webpack.dev.jsを作成
```
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map'
});
```

###### リリース用ビルド定義、webpack.prod.jsを作成
```
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production'
});
```

##### ES6以降非対応ブラウザ用、babelのインストール
```
npm install --save-dev babel-loader @babel/core
npm install --save-dev @babel/preset-env
```

##### cssバンドル用、css-loader、style-loaderのインストール
```
npm install --save-dev css-loader
npm install --save-dev style-loader
```

##### ES6以降非対応ブラウザ用、Polyfill

###### Custom-Event
```
npm install --save custom-event-polyfill
```
###### fetch
```
npm install es6-promise
npm install --save whatwg-fetch
```

##### 入力フォーマットライブラリ
```
npm install --save cleave.js
```

##### Maven build

POM.xmlにフロントエンド用のプラグインを追記する

	<plugin>
	    <groupId>com.github.eirslett</groupId>
	    <artifactId>frontend-maven-plugin</artifactId>
	    <version>X.X.X</version>
	    <configuration>
	        <nodeVersion>vX.X.X</nodeVersion>
	        <workingDirectory>frontend</workingDirectory>
	    </configuration>
	    <executions>
	        <execution>
	            <id>install node and npm</id>
	            <goals>
	                <goal>install-node-and-npm</goal>
	            </goals>
	        </execution>
	        <execution>
	            <id>npm install</id>
	            <goals>
	                <goal>npm</goal>
	            </goals>
	            <configuration>
	                <arguments>install</arguments>
	            </configuration>
	        </execution>
	        <execution>
	            <id>npm build</id>
	            <goals>
	                <goal>npm</goal>
	            </goals>
	            <configuration>
	                <arguments>run build:prod</arguments>
	            </configuration>
	        </execution>
	    </executions>
	</plugin>

buildすると自動的にnode.jsがダウンロードされビルド環境が構築される。