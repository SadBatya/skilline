export const queryParamsWork = {
  page: {
    query: 'p',
    param: 'page',
    defaultValue: 1,
  },
  countOnPage: {
    query: 'pc',
    param: 'limit',
    defaultValue: 10,
  },
  category: {
    query: 'cw',
    param: 'category',
    defaultValue: [],
  },
  serviceId: {
    query: 'sid',
    param: 'service',
    default: ''
  },
  excludeWorks: {
    query: 'exw',
    param: 'exclude_works[]',
    default: ''
  }
}


export const queryParamsVacancy = {
  page: {
    query: 'p',
    param: 'page',
    defaultValue: 1,
  },
  countOnPage: {
    query: 'pc',
    param: 'limit',
    defaultValue: 6,
  },
  category: {
    query: 'cw',
    param: 'category',
    defaultValue: [],
  },
}
