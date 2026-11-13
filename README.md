# Sean Radel · radel.dev

Personal website built with Docusaurus 3 and React 18, hosted on GitHub Pages at [radel.dev](https://radel.dev).

## Local development

Use Node.js 18 or later and npm. Install the locked dependencies, then start the development server:

```sh
npm ci
npm start
```

## Production build

```sh
npm run build
npm run serve
```

The build produces static files in `build/` and checks internal links. The serve command previews that production output locally.

## Content & layout

- [Site configuration](./docusaurus.config.js): metadata, navigation, footer, and domain
- [Homepage](./src/pages/index.js) and [featured work](./src/components/HomepageFeatures/index.js)
- [Global styles](./src/css/custom.css)
- [Professional profile](./docs/work/intro.md) and [personal introduction](./docs/life/about.md)
- [Research and projects](./docs/work/) and [blog posts](./blog/)
- [Static assets](./static/) and [documentation sidebars](./sidebars.js)

## Deployment

[The deployment workflow](./.github/workflows/deploy.yml) runs automatically on pushes to `main`, including merged pull requests. It installs Node 18, runs `npm ci --force` and `npm run build`, then publishes `build/` to the `gh-pages` branch using `peaceiris/actions-gh-pages` and the repository's `GITHUB_TOKEN`.

The workflow sets `radel.dev` as the custom domain. GitHub Pages should be configured to serve the root of `gh-pages`. Feature branches do not deploy automatically; build and review changes before merging into `main`.

The `npm run deploy` command is Docusaurus's separate manual deployment option; normal publishing uses the GitHub Actions workflow.
