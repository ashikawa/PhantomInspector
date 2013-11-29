# PhantomInspector

PhantomJS でサイトのアクセスして、特定のリクエストを抽出する

## Installation

```
npm install
```

## Run

```
./node_modules/phantomjs/bin/phantomjs main.js
```

## Setting


```javascript:config.js
    var setting = [
        {
            'name': 'トップ', // 見出し
            'url': 'http://example.com/', // アクセスするURL
            'isrecord': myfunc, // 抽出条件
            'capture': 'capture.png' // キャプチャ画像を保存
        },
        {
            // ...
        }
    ];

    exports.setting = setting;
```
