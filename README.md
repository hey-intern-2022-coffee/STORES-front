# STORES

- オンライン店舗での商品購入
- QR での

## aspida client コードの自動生成方法

- swagger.yaml を https://github.com/hey-intern-2022-coffee/hey-intern-serverside/blob/main/swagger.yml からコピーしてきて、scripts/bin/swagger.yaml に貼り付ける
- `yarn gen-api`を実行

## QR コードリーダーについて

localhost ではブラウザのセキュリティ機能がデバイスカメラの情報をブロックしているため動きません。

<!-- deploy環境では動作します。 -->

localhost で QR コード読み取りのフローを確かめたい場合は以下のデモを試してください。

DEMO：https://jabtestqr.playcode.io/
