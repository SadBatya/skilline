import {imageModel} from "~/models/image";

const categoryModel = (item) => {
  if (!item) {
    return {};
  }

  const {
    id,
    title,
    stack_count: count,
  } = item;

  return {
    id,
    title,
    count
  }
}

export const categoriesModel = (data) => {
  if (!data) {
    return [];
  }

  const {
    category_list: categoryList,
    all_stack_count: totalCount
  } = data || {};

  const list = categoryList.map(categoryModel);

  return {
    list,
    totalCount
  }
}

export const technoItemModel = (item) => {
  if (!item) {
    return {};
  }

  const {
    id,
    title,
    description,
    logo: logoObject,
    categories: categoryList
  } = item;

  const logo = imageModel(logoObject);
  const categories = categoryList.map(item => item.id);

  return {
    id,
    title,
    description,
    logo,
    categories
  }
}

export const technoStackModel = (data) => {
  if (!data) {
    return {};
  }

  const {
    title,
    stack_list: list
  } = data || {};

  const technologies = list.map(technoItemModel);

  return {
    title,
    technologies
  }
}
