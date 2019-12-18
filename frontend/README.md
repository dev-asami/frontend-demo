# フロントエンドの開発・ビルド方法

## 開発の事前準備

まずは、node.jsをインストールします。
単にビルドするだけならMavenだけでも大丈夫ですが、
フロントエンドのコードを修正するたびにMavenでのビルドが必要となり、効率的ではありません。

node.jsをインストールしたら、依存ライブラリをインストールします。

```
cd frontend
npm install
```

`npm install`は、依存ライブラリを更新しない限り、一度だけ実行すれば大丈夫です。

## 開発方法

watchモードでwebpackビルドを実行します。

```
cd frontend
npm run build:watch
```

これで、`frontend/src`配下のファイルを編集するたびに、
自動でwebpackによるビルドが走り、`target/classes/static`配下にファイルが出力されます。
あとは、通常のJava開発と同じように、Eclipse等からサーバーサイドを起動して、動作確認できます。

## テスト方法

以下のコマンドで、Jestによるテストを実行できます。

```
npm run test
```

また、以下のコマンドで、Jestがwatchモードで起動します。
この状態でソースを修正すると、自動で再テストが実行されます。

```
npm run test:watch
```

## Mavenでのビルド方法

Mavenには、[frontend-maven-plugin](https://github.com/eirslett/frontend-maven-plugin)を追加することで、
通常の`mvn package`コマンドで、フロントエンドのソースコードもビルドされるようになっています。
node.jsのインストール、依存ライブラリのインストールも自動で実行されるため、
そのままCI環境でも実行できるはずです。

なお、上記の[開発方法]で記載したビルドとは違い、`production`モードでビルドされるため、
ソースコードはminifyされた状態で出力されます。
