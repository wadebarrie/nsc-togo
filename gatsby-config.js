/* eslint-disable quotes */
module.exports = {
  siteMetadata: {
    title: `NSC To-Go`,
    googleVerification: `abcdefz`,
    disqus: `gatsby-typescript`,
  },
  mapping: {
    "MarkdownRemark.frontmatter.author": `AuthorJson`,
  },
  plugins: [
    // Expose `/data` to graphQL layer
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data`,
      },
    },

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
      },
    },

    // Parse all markdown files (each plugin add/parse some data into graphQL layer)
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 690,
              backgroundColor: `#f7f0eb`,
            },
          },
          {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
              fonts: [
                {
                  family: `DM Serif Text`,
                  variants: [`400`, `700`],
                },
              ],
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-autolink-headers`,
        ],
      },
    },
    {
      /* Include plugin */
      resolve: "gatsby-omni-font-loader",

      /* Plugin options */
      options: {
        /* Enable font loading listener to handle FOUT */
        enableListener: true,

        /* Preconnect URL-s. This example is for Google Fonts */
        preconnect: ["https://fonts.gstatic.com"],

        /* Font listener interval (in ms). Default is 300ms. Recommended: >=300ms */
        interval: 300,

        /* Font listener timeout value (in ms). Default is 30s (30000ms). Listener will no longer check for loaded fonts after timeout, fonts will still be loaded and displayed, but without handling FOUT. */
        timeout: 30000,

        /* Self-hosted fonts config. Add font files and font CSS files to "static" folder */
        custom: [
          {
            /* Exact name of the font as defied in @font-face CSS rule */
            name: ["Font Awesome 5 Brands", "Font Awesome 5 Free"],
            /* Path to the font CSS file inside the "static" folder with @font-face definition */
            file: "/fonts/fontAwesome/css/all.min.css",
          },
        ],

        /* Web fonts. File link should point to font CSS file. */
        web: [
          {
            /* Exact name of the font as defied in @font-face CSS rule */
            name: "Playfair Display",
            /* URL to the font CSS file with @font-face definition */
            file:
              "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&display=swap",
          },
        ],
        web: [
          {
            name: "Roboto",
            file:
              "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100,
      },
    },

    // Parse all images files
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    // Parse JSON files
    `gatsby-transformer-json`,

    // Add typescript stack into webpack
    `gatsby-plugin-typescript`,

    // This plugin takes your configuration and generates a
    // web manifest file so your website can be added to your
    // homescreen on Android.
    /* eslint-disable camelcase */
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `North Shore Commissary To Go`,
        short_name: `NSC To Go`,
        start_url: `/`,
        background_color: `#f7f7f7`,
        theme_color: `#1B1C1D`,
        display: `minimal-ui`,
        icon: `public/icons/favicon-32x32.png`,
      },
    },
    /* eslint-enable camelcase */

    // This plugin generates a service worker and AppShell
    // html file so the site works offline and is otherwise
    // resistant to bad networks. Works with almost any
    // site!
    `gatsby-plugin-offline`,
  ],
};
