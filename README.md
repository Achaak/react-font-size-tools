# react-font-tools

Tools to help you with font of your app.

## Install

```sh
yarn add react-font-tools
# or
npm i react-font-tools --save
```

## Change log
[https://github.com/Achaak/react-font-tools/blob/master/CHANGELOG.md](https://github.com/Achaak/react-font-tools/blob/master/CHANGELOG.md)

## Hooks
### useFontSize
Return the font size and setFontSize to set a new font.

The default font is 1rem

Example:
``` js
const [fontSize, setFontSize] = useFontSize()

setFontSize("2rem")
```
