
export const getPageSeo = (item) => {
  const {
    id,
    code,
    title: titlePage,
    value: tags
  } = item;
  let title = titlePage;

  const metaTags = Object.keys(tags).reduce((accum, item) => {
    if (item === 'title') {
      title =  tags[item];
    }
    if (item.includes('og:')) {
      accum.push(
        {
          hid: item,
          property: item,
          content: tags[item]
        }
      );
      return accum;
    }
    accum.push(
      {
        hid: item,
        name: item,
        content: tags[item]
      }
    );
    return accum;
  }, []);

  return {
    id,
    code,
    title,
    metaTags
  }
}

export const seoModel = (data) => {
  if (!data) {
    return {};
  }

  return data.reduce( (accum, item) => {
    if (item.code) {
      accum[item.code] = getPageSeo(item);
    }

    return accum;
  }, {})
}
