import {imageModel} from "~/models/image";
import {pagesModel} from "~/models/pages";
import {getPageSeo} from "~/models/seo";

export const blogCardModel = (data) => {
  if (!data) {
    return {};
  }

  const {id, title, code, sort, backscreen, preview } = data;
  const image = imageModel(preview);
  const bgImage = imageModel(backscreen);

  return {
    id,
    title,
    code,
    sort,
    image,
    bgImage
  }
}

export const blogCardsModel = (data) => {
  if (!data) {
    return {};
  }

  const {
    title ,
    blogs_list: blogs,
  } = data || {};

  const pageObj = pagesModel(data);

  const formattedBlogCards = blogs ? blogs.map(blogCardModel) : [];

  return {
    title,
    ...pageObj,
    blogCards: formattedBlogCards,
  };
}

const getContentForEditor = (content) => {
  if (!content) {
    return {};
  }
  try {
    return JSON.parse(content) || {};
  } catch(e) {
   console.log(e);
  }

  return {};
}

export const blogDetail = (data) => {
  if (!data) {
    return {};
  }

  // "id": 2,
  //   "seo": null,
  //   "title": "Тестовая новость",
  //   "code": null,
  //   "backscreen": {
  //   "id": 329,
  //     "width": 476,
  //     "height": 198,
  //     "path": "/storage/2023/06/18/b45a448d4c100b8fc10a1bb889d8bfa0dd8dae13.png"
  // },
  // "description": "тестовое описание",
  //   "content": "<p>Всех с днем блога!</p>"

  const {
    id,
    seo: seoPage = {},
    title,
    code,
    backscreen,
    preview,
    description,
    content: contentString
  } = data;

  const image = imageModel(preview);
  const bgImage = imageModel(backscreen)
  const seo = getPageSeo(
    {
      id,
      code,
      title: seoPage?.title || title,
      value: seoPage || {}
    }
  )

  const getContentEditor = getContentForEditor(contentString);

  return {
    id,
    seo,
    title,
    code,
    image,
    bgImage,
    description,
    content : getContentEditor
  }
}
