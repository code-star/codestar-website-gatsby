<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby minimal starter
</h1>

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the minimal starter.

    ```shell
    # create a new Gatsby site using the minimal starter
    npm init gatsby
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-gatsby-site/
    npm run develop
    ```

3.  **Open the code and start customizing!**

    Your site is now running at http://localhost:8000!

    Edit `src/pages/index.js` to see your site update in real-time!

4.  **Learn more**

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

## 🚀 Quick start (Gatsby Cloud)

Deploy this starter with one click on [Gatsby Cloud](https://www.gatsbyjs.com/cloud/):

[<img src="https://www.gatsbyjs.com/deploynow.svg" alt="Deploy to Gatsby Cloud">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-starter-minimal)

## 🚀 Quick start (local Docker)

Advantage of running with local Docker:

- It is not required to install npm, node or yarn locally
- The docker run command documents which Node version should be used

Setup:
docker run --rm -it -v $PWD:/usr/src/app -p 3000:3000 node:16.6.1-alpine3.14 sh -c "cd /usr/src/app" && yarn

Run: 
docker run --rm -it -v $PWD:/usr/src/app -p 3000:3000 node:16.6.1-alpine3.14 sh -c "cd /usr/src/app" && yarn gatsby develop --port=3000

Can be stopped with ctrl+C

// if you run cd directly (without sh -c): cd is not found: https://stackoverflow.com/questions/28037802/docker-exec-failed-cd-executable-file-not-found-in-path
// --init?? : docker run --rm -it -v $PWD:/usr/src/app -p 3000:3000 node:16.6.1-alpine3.14 yarn gatsby develop --port=3000

## 🚀 Quick start (.devcontainer)

Requires VSCode with the Remote Containers extension. On opening, VSCode should ask to "reopen in container". If not, reload window.

Start develop server with F5 (shortcut to Ctrl+Shift+P + Debug: Start Debugging), Ctrl+F5 or just `yarn develop` in a terminal




TODO

- Deploy to ghrc.io?