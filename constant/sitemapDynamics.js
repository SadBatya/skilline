// import axios  from 'axios';
const axios = require('axios');
const routs = require('../constant/routs');
const apiUrls = require('../constant/apiUrls');
const ROUT_PATH = routs.ROUTS_PATH;
const API_URLS = apiUrls.API_URLS



const apiList = [
  {
    path: API_URLS.works.list,
    mainRout: ROUT_PATH.works.list,
    route: (code) => ROUT_PATH.works.detail(code),
    listKey: 'works_list',
    elementsOnPage: 6,
    priority: 1,
  },
  {
    path: API_URLS.services.list,
    mainRout: ROUT_PATH.services.list,
    route: (code) => ROUT_PATH.services.detail(code),
    listKey: 'service_list',
    elementsOnPage: 1000,
    priority: 1,
  },
  {
    path: API_URLS.blog.list,
    mainRout: ROUT_PATH.blog.list,
    route: (code) => ROUT_PATH.blog.detail(code),
    listKey: 'blogs_list',
    elementsOnPage: 12,
    priority: 1,
  },
  {
    path: API_URLS.vacancy.list,
    mainRout: ROUT_PATH.vacancy.list,
    route: (code) => ROUT_PATH.vacancy.detail(code),
    listKey: 'vacancy',
    elementsOnPage: 1000,
    priority: 0.5,
  }
]

const FETCH_KEY = {
  pageCount: 'pages_count',
  curPage: 'current_page'
}

const  getSiteMapOnAxios = async (host, api, page = 1) => {
  const siteMap = [];
  if (api.mainRout) {
    const urlWithPage = page > 1 ? `${api.mainRout}?p=${page}` : api.mainRout;
    siteMap.push({
      url: urlWithPage,
      priority: api.priority || 1,
    });
  }

  const {data : {data}} =  await axios.get(host + api.path, {
    params: {
      limit: api.elementsOnPage || 1000,
    },
  });


  const list = data[api.listKey];
  const isWorks = api.mainRout === ROUT_PATH.works.list;
  list.forEach(item => {
    if (!item.code) {
      return;
    }
    if (isWorks && (item.locked || item.nda)) {
      return;
    }

    siteMap.push({
      url: api.route(item.code),
      priority: api.priority || 1,
    });
  })


  if (data[FETCH_KEY.pageCount] > page && page > 0) {
    const resultNextPage = await getSiteMapOnAxios(host, api, page + 1);
    siteMap.push(...resultNextPage);
  }

  return siteMap;
}

async function getSiteMapDynamic(mainApi) {
  const siteMaps = [];
  try {
    for  (const api of apiList) {
      siteMaps.push(...await getSiteMapOnAxios(mainApi, api));
    }
  } catch (e) {
    console.error(e);
  }

  // SITEMAP /map
  siteMaps.push( {
    url: ROUT_PATH.siteMap,
    priority: 0.5,
  });


  return siteMaps;
}


module.exports = getSiteMapDynamic;
