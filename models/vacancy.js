import {pagesModel} from "~/models/pages";
import {getPageSeo} from "~/models/seo";

export const vacancyModel = (item) => {
  if (!item) {
    return {};
  }
  const {
    id,
    code,
    title,
    description,
    salary,
    seo: seoPage = {},
    vacancy_list: categoryList,
    info_block: htmlBlock
  } = item;
  const seo = getPageSeo(
    {
      id,
      code,
      title: seoPage?.title || title,
      value: seoPage || {}
    }
  )

  return {
    id,
    code,
    title,
    description,
    salary,
    seo,
    categoryList,
    htmlBlock
  }
}

export const vacanciesModel = (data) => {
  if (!data) {
    return {}
  }

  const {
    title,
    info,
    feedback_email: email,
    info_description: description,
    vacancy = [],
  } = data || {};

  const pageObj = pagesModel(data);

  const vacancyList = vacancy.map(vacancyModel);

  return {
    title,
    info,
    email,
    description,
    vacancyList,
    ...pageObj,
  };
}

const categoryList = (list) => {
  if (!list) {
    return [];
  }

  return list.map((item) => {
    const {
      id,
      title,
      vacancy_count: count,
    } = item;

    return {
      id,
      title,
      count
    }
  });
}

export const categoriesVacancyModel = (data) => {
  if (!data) {
    return {};
  }

  const {category_list: list, all_vacancy_count: totalCount} = data || {};

  return {
    list: categoryList(list),
    totalCount
  }
}
