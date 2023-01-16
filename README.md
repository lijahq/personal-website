# Personal Website with Markdown Blog

Started with [Create React App](https://github.com/facebook/create-react-app).
Upgraded with [CRACO](https://craco.js.org/) to add a node package to webpack.

## Why and How

A personal website is expanding my resume with another practical project that allows potential employers to see what I've worked on.
I built a blog in to promote my music projects and other creative endeavors.

Markdown files are parsed with [gray-matter](https://www.npmjs.com/package/gray-matter) to extract information about the articles.
This also allows me to construct links for each article.

Markdown files are rendered with [react-markdown](https://remarkjs.github.io/react-markdown/).

## Relevant Scripts

### `npm start`

Starts the app in dev mode.

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Creates an optimized build for my web server.
