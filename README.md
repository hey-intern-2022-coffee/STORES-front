# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## aspida client コードの自動生成方法

- swagger.yaml を https://github.com/hey-intern-2022-coffee/hey-intern-serverside/blob/main/swagger.yml からコピーしてきて、scripts/bin/swagger.yaml に貼り付ける
- `yarn gen-api`を実行
