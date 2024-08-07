
const apiURL = process.env.API_SERVER || '/';
const isProduction =  process.env.NODE_ENV === 'production';
const imgUrl = isProduction ? process.env.IMG_SERVER : process.env.IMG_SERVER;
const apiUrlWS = process.env.API_SERVER_WS;
const siteUrl = process.env.SITE_URL;
const yandexKey = process.env.YANDEX_KEY; // Metrika yandex

/* eslint-disable */
const getSiteMapDynamic = require('./constant/sitemapDynamics');
const metrikaRunet = require('./constant/metrikaRatingRunet');
const redirectUrls = require('./constant/redirects');
/* eslint-enable */

const fonts = [
  { rel: 'preload', as: 'font', crossOrigin: 'anonymous', onload: "this.onload=null;this.rel='stylesheet';", href: `/fonts/GothamPro-Medium.woff2` },
  { rel: 'preload', as: 'font', crossOrigin: 'anonymous', onload: "this.onload=null;this.rel='stylesheet';", href: `/fonts/GothamPro-Bold.woff2` },
  { rel: 'preload', as: 'font', crossOrigin: 'anonymous', onload: "this.onload=null;this.rel='stylesheet';", href: `/fonts/GothamPro-Black.woff2` },
  { rel: 'preload', as: 'font', crossOrigin: 'anonymous', onload: "this.onload=null;this.rel='stylesheet';", href: `/fonts/GothamPro.woff2` },

  { rel: 'preload', as: 'font', crossOrigin: 'anonymous', onload: "this.onload=null;this.rel='stylesheet';", href: `/fonts/Euclid-Circular-A-Bold.woff` },
  { rel: 'preload', as: 'font', crossOrigin: 'anonymous', onload: "this.onload=null;this.rel='stylesheet';", href: `/fonts/Euclid-Circular-A-Light.woff` },
  { rel: 'preload', as: 'font', crossOrigin: 'anonymous', onload: "this.onload=null;this.rel='stylesheet';", href: `/fonts/Euclid-Circular-A-Medium.woff` },
  { rel: 'preload', as: 'font', crossOrigin: 'anonymous', onload: "this.onload=null;this.rel='stylesheet';", href: `/fonts/Euclid-Circular-A-Regular.woff` },  
  { rel: 'preload', as: 'font', crossOrigin: 'anonymous', onload: "this.onload=null;this.rel='stylesheet';", href: `/fonts/Euclid-Circular-A-SemiBold.woff` },

  { rel: 'preload', as: 'font', crossOrigin: 'anonymous', onload: "this.onload=null;this.rel='stylesheet';", href: `/fonts/Euclid-Circular-A-Bold.woff2` },
  { rel: 'preload', as: 'font', crossOrigin: 'anonymous', onload: "this.onload=null;this.rel='stylesheet';", href: `/fonts/Euclid-Circular-A-Light.woff2` },
  { rel: 'preload', as: 'font', crossOrigin: 'anonymous', onload: "this.onload=null;this.rel='stylesheet';", href: `/fonts/Euclid-Circular-A-Medium.woff2` },
  { rel: 'preload', as: 'font', crossOrigin: 'anonymous', onload: "this.onload=null;this.rel='stylesheet';", href: `/fonts/Euclid-Circular-A-Regular.woff2` },
  { rel: 'preload', as: 'font', crossOrigin: 'anonymous', onload: "this.onload=null;this.rel='stylesheet';", href: `/fonts/Euclid-Circular-A-SemiBold.woff2` },
];
const favicon = {
  meta: [
    {
      name: 'apple-mobile-web-app-title',
      content: 'Skillline',
    },
    {
      name: 'application-name',
      content: 'Skillline',
    },
    {
      name: 'msapplication-TileColor',
      content: '#000000',
    },
    {
      name: 'theme-color',
      content: '#000000',
    }
  ],
  links: [
    {
      rel: 'apple-touch-icon',
      href: '/favicon/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon/favicon-16x16.png',
    },
    {
      rel: 'mask-icon',
      href: '/favicon//safari-pinned-tab.svg',
      color: '#000000',
    }
  ]
};
  // Global page headers: https://go.nuxtjs.dev/config-head
export default  {
  head: {
    title: 'Skillline',
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: "format-detection", content: "telephone=no" },
      { name: 'HandheldFriendly', content: 'True' },
      ...favicon.meta,
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/icon.png' },
      ...fonts,
      ...favicon.links
    ],
    ...(isProduction && {
    script: [{
      vmid: 'ratingRuneta',
      innerHTML: metrikaRunet,
    }]}),
    __dangerouslyDisableSanitizersByTagID: {
      'ratingRuneta': ['innerHTML']
    },
  },

  loading: false,
  loadingIndicator: false,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/main.scss'],

  styleResources: {
    sass: ['@/assets/scss/*.scss'],
    hoistUseStatements: true
  },

  router: {
    // trailingSlash: false,
    // middleware: 'trailingSlashRedirect',
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/windowWidth.js', ssr: false},
    { src: '@/plugins/swiper.js', ssr: false},
    { src: '@/plugins/veeValidate.js', ssr: false},
    { src: '@/plugins/v-mask.js', ssr: false},
    { src: '@/plugins/observeVisible.js', ssr: false},
    { src: '@/plugins/openModalPageMixin.js'},
    { src: '@/plugins/clickOutside.js', ssr: false},
    { src: '@/plugins/editorJs-html.js', ssr: true},
    // { src: '@/plugins/hljs-code.js', ssr: false},
    { src: '@/plugins/video-js.js', ssr: false},
    '@/plugins/jsonld.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://github.com/nuxt-community/svg-sprite-module
    '@nuxtjs/svg-sprite',
    // https://github.com/nuxt/postcss8
    '@nuxt/postcss8',
    // https://www.npmjs.com/package/@nuxtjs/style-resources
    '@nuxtjs/style-resources',
    // https://github.com/nuxt-community/svg-sprite-module
    '@nuxtjs/svg-sprite',
    // https://github.com/harlan-zw/nuxt-delay-hydration/tree/v0
    'nuxt-delay-hydration',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'nuxt-highcharts',
    // '@nuxtjs/proxy',
    '@nuxtjs/sitemap',
    '@nuxt/image',
    '@nuxtjs/redirect-module',
    // '@nuxtjs/yandex-metrika'
    [
      '@rkaliev/nuxtjs-yandex-metrika',
      {
        id: yandexKey,
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true,
        debug: !isProduction,
        noJS: true,
        defer: false,
      }
    ],
  ],

  // yandexMetrika: {
  //   id: yandexKey,
  //   clickmap:true,
  //   trackLinks:true,
  //   accurateTrackBounce:true,
  //   webvisor:true,
  // },

  image: {
    // Options
    domains: [imgUrl],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 992,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536
    },
    // alias: {
    //   unsplash: imgUrl
    // }
  },

  sitemap: function() {
    return {
      // options
      hostname: siteUrl,
      gzip: true,
      exclude: [
        '/admin/**',
        '/_icons',
        '/_icons/**'
      ],
      routes: async () => {
        const res = await getSiteMapDynamic(apiURL);
        return res;
      },

      defaults: {
        changefreq: 'daily',
        priority: 1,
        lastmod: new Date(),
        // routes: async () => {
        //   console.log('test routes');
        //   return await getSiteMapDynamic(apiURL);
        // },
      }
    }
  },

  highcharts: {
    exporting: true,
    setOptions: {
      lang: {
        numericSymbols:  ["к", "М", "Млрд", "Tр"]
      }
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: apiURL,
    mode: 'no-cors',
    // proxy: true
  },

  proxy: {
    "/hls/": {
      target: 'https://api.skillline.ru',
      pathRewrite: {"^/hls/": "/hls/"}
    }
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    icon: {
      filename: 'icon.png',
      source: '~/static/icon.png',
      purpose: 'maskable',
    },
    meta: {
      name: 'Skillline',
      author: 'Skillline',
      lang: 'ru',
      theme_color: '#ffffff',
      favicon: false,
    },
    manifest: {
      name: 'Skillline',
      short_name: 'Skillline',
      theme_color: '#000000',
      background_color: '#000000',
      start_url: '/',
      lang: 'ru',
      icons: [
        {
          src: "/favicon/android-chrome-512x512.png",
          sizes: "512x512",
          type:  "image/png",
          name: "any maskable"
        }
      ],
    },
  },


  // Build Configuration: https://go.nuxtjs.dev/config-build

  build: {
    standalone: true,
    extractCSS: isProduction,
    postcss: {
      preset: {
        browsers: 'cover 99.5%',
        autoprefixer: {
          grid: false
        }
      }
    },
    ...(isProduction && {
      html: {
        minify: {
          collapseBooleanAttributes: true,
          decodeEntities: true,
          minifyCSS: true,
          minifyJS: true,
          processConditionalComments: true,
          removeEmptyAttributes: true,
          removeRedundantAttributes: true,
          trimCustomFragments: true,
          useShortDoctype: true,
        }
      }
    }),
    splitChunks: {
      layouts: true,
      pages: true,
      commons: true
    },
    optimization: {
      minimize: isProduction
    },
    ...(isProduction && {
      extractCSS: {
        ignoreOrder: true
      }
    }),
  },
  // modern: isProduction,
  features: {
    store: true,
    layouts: true,
    meta: true,
    middleware: true,
    transitions: false,
    deprecations: false,
    validate: false,
    asyncData: true,
    fetch: true,
    clientOnline: true,
    clientPrefetch: true,
    componentAliases: true,
    componentClientOnly: true
  },

  delayHydration: {
    mode: 'mount',
    debug: !isProduction,
  },

  env: {
    imgUrl,
    siteUrl,
    apiUrlWS,
    yandexKey
  },


  server: {
    port: 3002,
    host: isProduction ? '0.0.0.0' : 'localhost',
  },

  serverMiddleware: [
    // '~/middleware/redirects.js'
  ],

  redirect: [
    ...redirectUrls,
    // Remove trailing slash
    {
      from: /(?!^\/$|^\/[?].*$)(.*\/[?](.*)$|.*\/$)/,
      to: (from, req) => {
        const base = req._parsedUrl.pathname.replace(/\/$/, '');
        const search = req._parsedUrl.search;
        return base + (search != null ? search : '');
      },
      statusCode: 301,
    },
  ]
}
