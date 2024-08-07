import {imgPath} from "~/constant/common";

const isValidUrl = urlString=> {
  const urlPattern = new RegExp('^(https?:\\/\\/)?'+ // validate protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // validate domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // validate port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate query string
    '(\\#[-a-z\\d_]*)?$','i'); // validate fragment locator
  return !!urlPattern.test(urlString);
}

export const imageModel = (data, isBackground = false) => {
  if (!data) {
    return '';
  }

  const {
    path,
  } = data || {};

  if (!path) {
    return '';
  }

  if (isValidUrl(path)) {
    return path;
  }

  if (isBackground) {
    return imgPath + path;
  }

  // todo change on alias when use all bgImage
  return `${imgPath}${path}`;
}

export const imageSizeModel = (image) => {
  if (!image) {
    return {};
  }

  const {width, height} = image || {};

  return {
    width,
    height
  }
}
