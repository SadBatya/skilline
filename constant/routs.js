export const ROUTS_PATH = {
  main: '/',
  works: {
    list: '/works',
    detail: (code) => `/works/${code}`
  },
  products: {
    list: '/products',
  },
  services: {
    list: '/services',
    detail: (code) => `/services/${code}`,
  },
  contacts: '/contacts',
  vacancy: {
    list: '/vacancies',
    detail: (code) => `/vacancies/${code}`,
  },
  blog: {
    list: '/blog',
    detail: (code) => `/blog/${code}`,
    detailId: (id) => `/blog/${id}`,
  },
  company: '/about',
  brandBook: '/brand-book',
  personalCabinet: {
    main: '/personal'
  },
  portfolio: {
    list: '/portfolio'
  },
  siteMap: '/map',
  404: '/404',
};

