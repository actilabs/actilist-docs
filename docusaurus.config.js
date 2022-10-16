// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ActiList',
  tagline: 'Interactive NFT Marketplace with Secret Auctions',
  url: 'https://test.actilist.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'actilabs', // Usually your GitHub org/user name.
  projectName: 'actilist-docs-app', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/actilabs/actilist-docs-app/tree/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/actilabs/actilist-docs-app/tree/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        // title: 'ActiList',
        logo: {
          alt: 'Actilist',
          src: 'img/lightlogo.png',
          srcDark: 'img/darklogo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'introduction',
            position: 'left',
            label: 'Docs',
          },
          // { to: '/blog', label: 'Blog', position: 'left' },
          { to: 'https://test.actilist.io', label: 'App', position: 'left' },

          {
            href: 'https://github.com/actilabs/actilist-docs-app',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',

        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Welcome',
                to: '/docs/introduction',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                html: `
                <div >
                <a class="footer-icon" href="https://discord.gg/uPxGvqJErz">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="25"
                height="25"
                viewBox="0 0 91 71"
              >
                <defs>
                  <clipPath id="clip-path">
                    <rect
                      id="Rectangle_368"
                      data-name="Rectangle 368"
                      width="91"
                      height="71"
                      transform="translate(-0.381 -0.015)"
                      fill="#ff6510"
                    />
                  </clipPath>
                </defs>
                <g
                  id="discord-black-seeklogo.com-2"
                  transform="translate(0.381 0.015)"
                  clip-path="url(#clip-path)"
                >
                  <path
                    id="Path_4643"
                    data-name="Path 4643"
                    d="M77.913,6.227A75.9,75.9,0,0,0,59.179.417a.284.284,0,0,0-.3.142A52.869,52.869,0,0,0,56.545,5.35a70.066,70.066,0,0,0-21.041,0A48.488,48.488,0,0,0,33.135.559a.3.3,0,0,0-.3-.142A75.685,75.685,0,0,0,14.1,6.227a.268.268,0,0,0-.123.106C2.045,24.159-1.223,41.547.38,58.719a.316.316,0,0,0,.12.215A76.321,76.321,0,0,0,23.482,70.551a.3.3,0,0,0,.323-.106,54.549,54.549,0,0,0,4.7-7.648.291.291,0,0,0-.16-.405,50.26,50.26,0,0,1-7.179-3.422.3.3,0,0,1-.029-.489c.482-.362.965-.738,1.426-1.118a.285.285,0,0,1,.3-.04,54.428,54.428,0,0,0,46.254,0,.284.284,0,0,1,.3.037c.461.38.943.76,1.429,1.121a.3.3,0,0,1-.025.489,47.164,47.164,0,0,1-7.183,3.418.294.294,0,0,0-.156.409,61.248,61.248,0,0,0,4.7,7.644.292.292,0,0,0,.323.11A76.068,76.068,0,0,0,91.52,58.934a.3.3,0,0,0,.12-.212c1.919-19.853-3.214-37.1-13.608-52.386A.234.234,0,0,0,77.913,6.227ZM30.756,48.263c-4.535,0-8.271-4.163-8.271-9.276s3.664-9.276,8.271-9.276c4.643,0,8.344,4.2,8.271,9.276C39.027,44.1,35.363,48.263,30.756,48.263Zm30.582,0c-4.535,0-8.271-4.163-8.271-9.276s3.664-9.276,8.271-9.276c4.644,0,8.344,4.2,8.271,9.276C69.609,44.1,65.981,48.263,61.337,48.263Z"
                    transform="translate(-0.355 0.089)"
                    fill="#ff6510"
                  />
                </g>
              </svg>
              <p>Discord</p>
              </a>
                </div>
                `,
              },
              {
                html: `
                <div >
                <a class="footer-icon" href="https://twitter.com/actinft">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 94.847 77.034"
              >
                <path
                  id="Icon_awesome-twitter"
                  data-name="Icon awesome-twitter"
                  d="M85.1,22.579c.06.843.06,1.685.06,2.528,0,25.7-19.559,55.308-55.307,55.308A54.932,54.932,0,0,1,0,71.689a40.213,40.213,0,0,0,4.694.241,38.93,38.93,0,0,0,24.133-8.305A19.473,19.473,0,0,1,10.652,50.143a24.513,24.513,0,0,0,3.671.3,20.559,20.559,0,0,0,5.115-.662A19.442,19.442,0,0,1,3.851,30.7v-.241a19.577,19.577,0,0,0,8.786,2.467,19.468,19.468,0,0,1-6.018-26A55.254,55.254,0,0,0,46.7,27.273a21.944,21.944,0,0,1-.481-4.453,19.457,19.457,0,0,1,33.642-13.3A38.271,38.271,0,0,0,92.2,4.825a19.387,19.387,0,0,1-8.546,10.713,38.969,38.969,0,0,0,11.194-3.009A41.786,41.786,0,0,1,85.1,22.579Z"
                  transform="translate(0 -3.381)"
                  fill="#ff6510"
                />
              </svg>
              <p>Twitter</p>
                </a>
                </div>
                `,
              },
              {
                html: `
                <div>
                <a  class="footer-icon" href="https://github.com/actilabs">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 79.007 77.034"
              >
                <path
                  id="Icon_awesome-github"
                  data-name="Icon awesome-github"
                  d="M26.426,62.59c0,.319-.366.573-.828.573-.526.048-.892-.207-.892-.573,0-.319.366-.573.828-.573C26.012,61.969,26.426,62.224,26.426,62.59Zm-4.954-.717c-.112.319.207.685.685.781a.747.747,0,0,0,.988-.319c.1-.319-.207-.685-.685-.828A.818.818,0,0,0,21.472,61.873Zm7.041-.271c-.462.111-.781.414-.733.781.048.319.462.526.94.414.462-.112.781-.414.733-.733C29.4,61.762,28.974,61.555,28.512,61.6ZM38.994.563C16.9.563,0,17.336,0,39.429a39.936,39.936,0,0,0,27,38.1c2.039.366,2.756-.892,2.756-1.927,0-.988-.048-6.435-.048-9.78,0,0-11.15,2.389-13.492-4.747,0,0-1.816-4.635-4.428-5.83,0,0-3.648-2.5.255-2.453a8.408,8.408,0,0,1,6.149,4.11c3.488,6.149,9.334,4.38,11.612,3.329a8.853,8.853,0,0,1,2.549-5.368c-8.9-.988-17.888-2.278-17.888-17.6,0-4.38,1.211-6.579,3.759-9.382a15.05,15.05,0,0,1,.414-10.816c3.329-1.035,10.991,4.3,10.991,4.3a37.63,37.63,0,0,1,20.007,0s7.662-5.352,10.991-4.3a15.043,15.043,0,0,1,.414,10.816c2.549,2.819,4.11,5.018,4.11,9.382,0,15.371-9.382,16.6-18.286,17.6,1.465,1.258,2.708,3.648,2.708,7.391,0,5.368-.048,12.01-.048,13.317,0,1.035.733,2.294,2.756,1.927,15.929-5.288,26.728-20.405,26.728-38.07C79.007,17.336,61.087.563,38.994.563ZM15.483,55.5c-.207.159-.159.526.111.828.255.255.621.366.828.159.207-.159.159-.526-.112-.828C16.056,55.406,15.69,55.295,15.483,55.5Zm-1.72-1.29c-.112.207.048.462.366.621a.474.474,0,0,0,.685-.111c.112-.207-.048-.462-.366-.621C14.129,54,13.874,54.052,13.762,54.211Zm5.161,5.671c-.255.207-.159.685.207.988.366.366.828.414,1.035.159.207-.207.112-.685-.207-.988C19.608,59.675,19.13,59.627,18.923,59.882Zm-1.816-2.342c-.255.159-.255.573,0,.94s.685.526.892.366a.727.727,0,0,0,0-.988C17.776,57.493,17.362,57.334,17.107,57.541Z"
                  transform="translate(0 -0.563)"
                  fill="#ff6510"
                />
              </svg>
              <p>Github</p>
                </a>
                </div>
                `,
              },
              {
                html: `
                <div >
                <a class="footer-icon" href="https://t.me/actilist">
                <svg width="25px" height="25px" version="1.1" 
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                xml:space="preserve" xmlns:serif="http://www.serif.com/" 
                style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
                <path  fill="#ff6510" id="telegram-1" d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z"/></svg>
                <p>Telegram</p>
                </a>
                </div>
                `,
              },
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/actilabs/actilist-docs-app',
              },
            ],
          },
        ],
        copyright: `Copyright © 2022 All rights reserved by ActiList`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
}

module.exports = config
