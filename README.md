# Nuxt 3 - Starter

## lint

- .editorconfig
- eslint
  - .eslintignore
  - .eslintrc
  - @nuxtjs/eslint-config-typescript
  - @nuxtjs/eslint-module
  - eslint
  - eslint-config-prettier
  - eslint-plugin-prettier
- prettier
  - .prettierignore
  - .prettierrc
  - prettier
  - prettier-plugin-tailwindcss

## typescript

- index.d.ts
  - https://nuxt.com/docs/guide/going-further/runtime-config
  - https://nuxt.com/docs/guide/directory-structure/app-config

## envs

- /envs/\*.env

## module

- @nuxtjs/eslint-module
- @nuxt/ui
- @pinia/nuxt
  - pinia

## docker

- docker/Dockerfile
- build.sh

```sh
# build & run
sh ./docker/build.sh
```

## pm2

- ecosystem.config.json

## nuxi

```sh
# add
npx nuxi add layout default
npx nuxi add page index

# update
npx nuxi upgrade
```

## git

- commitizen

  ```sh
  # install
  npm i commitizen

  # init
  npx commitizen init cz-conventional-changelog

  # run
  npx cz

  # or, package.json add scripts: "commit": "cz"
  npm run commit
  ```

- commitlint

  ```sh
  # install
  npm i @commitlint/cli @commitlint/cz-commitlint @commitlint/config-conventional

  # test
  npm run commit
  ```

  ```json
  // package.json
    "config": {
      "commitizen": {
        "path": "@commitlint/cz-commitlint"
      }
    }
  ```

- husky

  ```sh
  # install
  npm i husky

  # init
  npx husky init

  # npm pkg set scripts.commitlint="commitlint --edit"

  # set commit-msg
  echo "npm run commitlint \${1}" > .husky/commit-msg

  # remove pre-commit
  rm .husky/pre-commit

  # test
  npm run commit
  ```
