// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'eMarka İletişim - İleti Merkezi',
  tagline: 'SMS API, Toplu SMS, SMS Marketing, SMS, email, e-mail, toplu email, toplu mesaj, gonder, emarka, e-marka, istanbul, bulk sms, mobile message, messaging, message, SMS Gateway, OTP',
  url: 'https://www.emarka.com.tr',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'iletimerkezi', // Usually your GitHub org/user name.
  projectName: 'emarka-website', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['tr', 'en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // docs: {
        //   sidebarPath: require.resolve('./sidebars.js'),
        // },
        // blog: {
        //   showReadingTime: true,
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-JPM372TD44',
          // Optional fields.
          anonymizeIP: true, // Should IPs be anonymized?
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
			colorMode: {
				defaultMode: 'light',
				disableSwitch: true,
				respectPrefersColorScheme: false,
			},
      navbar: {
        // style: 'dark',
        title: '',
        logo: {
          alt: 'eMarka Logo',
          src: 'img/logo.png',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'right',
          //   label: 'Tutorial',
          // },
          {
            to: '/',
            label: 'Home',
            position: 'right'
          },
          {
            to: '/#services',
            label: 'Services',
            position: 'right'
          },
          {
            to: '/#projects',
            label: 'Projects',
            position: 'right'
          },
          {
            to: '/#contact',
            label: 'About Us',
            position: 'right'
          },
          {
            to: '/#contact',
            label: 'Contact',
            position: 'right'
          },
          {
            type: 'localeDropdown',
            position: 'right',
          }
        ],
      },
      footer: {
        style: 'dark',
        logo: {
          alt: 'eMarka Logo',
          src: 'img/logo.png',
          href: 'https://www.emarka.com.tr',
        },
        copyright: `eMarka İletişim ve Bilgi Teknolojileri A.Ş. operates with BTK license.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
