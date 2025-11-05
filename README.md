# Coding challenge

This template should help get you started quickly with the coding challenge. It was generated using [create-vue](https://github.com/vuejs/create-vue), plus extra configuration for [Tailwind CSS](https://tailwindcss.com/).

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

## VS Code Setup for Tailwind

To avoid warnings about unknown `@` rules like `@apply`, `@layer`, or `@tailwind`, add the following to your VS Code workspace settings:

1. Open (or create) `.vscode/settings.json` in the project root.
2. Add the following content:

```json
{
  "css.lint.unknownAtRules": "ignore",
  "scss.lint.unknownAtRules": "ignore",
  "less.lint.unknownAtRules": "ignore"
}
```
