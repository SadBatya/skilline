export  const pagesModel = (data) => {
  const {
    current_page: curPage = 1,
    elements_count: elementCount = 0,
    pages_count: pageCount = 1
  } = data || {};

  return {
    curPage,
    elementCount,
    pageCount
  }
}
