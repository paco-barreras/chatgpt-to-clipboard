
# ChatGPT to Clipboard Bookmarklet

**Forked from [geeksta/chatgpt-export](https://github.com/geeksta/chatgpt-export)**

This is a minimal fork of the original ChatGPT Export bookmarklet. Instead of downloading the whole conversation as a markdown file, this version copies the **last ChatGPT response** directly to your clipboard in markdown format.

## How it works

When you click the bookmarklet on a ChatGPT conversation page, it collects and converts the last message (not the whole conversation!) to Markdown, and copies it to your clipboard. A notification lets you know if the copy succeeded.

## Installation

Clone this repository, install dependencies, and build the bookmarklet:

```
npm install
node build.js
```
Then, copy the bookmarklet code in `dist/gpt2md.bookmarklet.js` and add it as a bookmark in your browser.

## Credits and License

This project is a fork of [geeksta/chatgpt-export](https://github.com/geeksta/chatgpt-export) and inherits its license. All credits for the markdown export logic and base implementation go to [geeksta](https://github.com/geeksta).
