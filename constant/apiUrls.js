export const API_URLS = {
  works: {
    list: '/api/works',
    detail: {
      code: (code) => `/api/works/code/${code}`,
      id: (id) => `/api/works/id/${id}`,
    },
    category: '/api/works/category_list'
  },
  aboutUs: {
    list: '/api/about_us',
    clients: '/api/about_us/clients'
  },
  services: {
    list: '/api/services',
    payment: '/api/services/payment',
    detail: {
      code: (code) => `/api/services/code/${code}`,
      id: (id) => `/api/services/id/${id}`,
    },
  },
  stack: {
    list: "/api/mainpage/stack",
    categories: "/api/mainpage/stack/category_list",
  },
  reviews: {
    list: '/api/reviews',
    detail: (id) => `/api/reviews/${id}`,
  },
  contacts: '/api/contacts',
  getTime: (timezone) => `https://www.timeapi.io/api/Time/current/zone?timeZone=${timezone}`,
  forms: {
    feedback: '/api/feedback/form',
    nda: '/api/nda_form/form',
    vacancy: '/api/vacancy_form/form'
  },
  vacancy: {
    list: '/api/vacancy',
    detail: (id) => `/api/vacancy/code/${id}`,
    category: 'api/vacancy/category_list',
  },
  main: {
    all: '/api/mainpage'
  },
  blog: {
    list: '/api/blog',
    detail: (code) => `/api/blog/code/${code}`,
    detailId: (id) => `/api/blog/id/${id}`,
  },
  seo: '/api/seo'
}
