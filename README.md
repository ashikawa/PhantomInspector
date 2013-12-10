# PhantomInspector

PhantomJS でサイトのアクセスして、特定のリクエストを抽出する

## Installation

```
npm install
```

## Run

```
./phantomjs main.js ./config/mysetting 
```

## Setting


```javascript:config.js
    var setting = [
        {
            'name': 'トップ', // 見出し
            'url': 'http://example.com/', // アクセスするURL
            // 'onOpen': myfunc1, // ページ読み込み時に実行する関数
            // 'timeout': myfunc2, // ページ読み込み後、一定時間後に実行する関数
            // 'userAgent': 'iPhone', // userAgent 
            // 'capture': 'img/capture.png',　// キャプチャ画像名
            // 'viewportSize': {width: 400, height: 600}, // ウインドウサイズ
            // 'userName': 'xxxxx', // Basic 認証ID
            // 'password': 'yyyyy', // Basic 認証パスワード
        },
        {
            // ...
        }
    ];

    exports.setting = setting;
```
