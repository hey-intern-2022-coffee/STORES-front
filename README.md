# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## OpenAPI Generetor コードの自動生成方法

- https://docs.github.com/ja/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token を参考に GitHub のトークンを作成(スコープは repo)
- `.env.local`を作成し、中身を`GITHUB_TOKEN=`作成したトークンとする
- `yarn gen-api`を実行
- `src/lib/api/generated`が作成されていれば OK
