import {imageModel} from "~/models/image";

const statisticModel = (list) => {
  if (!list) {
    return [];
  }

  return list.map((item) => {
    const {
      id,
      code,
      block_count: count,
      block_title: title,
      block_description: description,
    } = item || {};

    return {
      id,
      code,
      count,
      title,
      description
    }
  })
}

const mainBlockListModel = (list) => {
  if (!list) {
    return [];
  }

  return list.map(item => {
    const {
      title,
      person_name: name,
      person_position: position,
      person_quote: quote,
      person_photo: photoData,
      person_photo_mobile: photoMobileData,
    } = item || {};

    const image = imageModel(photoData);
    const imageMobile = imageModel(photoMobileData);

    return {
      title,
      name,
      position,
      quote,
      image,
      imageMobile
    }
  })
}

export const aboutUsModel = (data) => {
  if (!data) {
    return {}
  }

  const {
    title,
    list: subTitleList,
    about_us_main: mainList,
    about_us_list: statisticList,
  } = data || {};

  const statistic = statisticModel(statisticList);
  const statisticMain = statisticModel(mainList);

  const mainBlockList = mainBlockListModel(subTitleList);
  // TODO subTitleList delete
  return {
    aboutPage: {
      statisticMain,
      mainBlockList,
      title,
    },
    statistic,
  }
}

const ourClientModel = (client) => {
  if (!client) {
    return {};
  }

  const {
    id,
    title,
    logo,
    logo_height: heightPercent,
    logo_width: widthPercent,
  } = client;

  const logoImg = imageModel(logo);

  const percentSize = {
    width: widthPercent ? widthPercent + '%' : null,
    height: heightPercent ? heightPercent + '%' : null,
  }

  return {
    id,
    title,
    logo: logoImg,
    percentSize
  }
}

export const ourClientsModel = (data) => {
  if (!data) {
    return {}
  }

  const {
    title,
    clients_list: list,
  } = data || {};


  const clients = list.map(ourClientModel);

  return {
    title,
    clients
  }

}
