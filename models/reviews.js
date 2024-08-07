import {imageModel} from "~/models/image";

export const reviewModel = (element) => {
  if (!element) {
    return {};
  }

  const {
    id,
    name,
    logo,
    preview_text: text,
    company,
    message_photo: image
  } = element || {};

  const reviewImage = imageModel(image);
  const userIcon = imageModel(logo);

  return {
    id,
    name,
    company,
    text,
    userIcon,
    reviewImage,
  }
}

export const reviewsModel = (data) => {
  if (!data) {
    return [];
  }

  const {reviews_list: list} = data || {};


  return list.map(reviewModel);
}
