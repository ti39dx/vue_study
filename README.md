# はじめに

* Vue.js勉強用レポジトリです
* そのため、個人的な情報は謎にしています

# 何しているところ?

* 「はじめに」でも記載したとおり、Vue.jsを勉強するためにいろいろやっていた情報を共有するために作りました。

# どんなものがあるの？

* Docker設定(Dockerfile,docker-compose.yml)
  * Node.js用(vue-cli(Vue UI)を使いたいため)
  * nginx用(リバースプロキシを使いたいがために追加…したのだが、今はDocument Rootから直接利用できるようにしているためリバースプロキシ設定は削った)
* Node.js(10.x)
* nginx
  * 設定はマスタOSにあるファイルを使用
* Vue.js(2.5.1)

# 動かしかた

```
docker-compose build
docker-compose up
```

でサーバーが動くので、あとは

`http://localhost:3000`

や

`http://localhost:8080/pub/`

で動くと思います
