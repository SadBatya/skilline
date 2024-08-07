import {imageModel} from "~/models/image";
import {getPageSeo} from "~/models/seo";

const serviceCardModel = (item) => {
  const {
    id,
    code,
    title,
    description,
    picture,
    features,
    isWhite = false,
    canvas
  } = item || {};

  const image = imageModel(picture);

  return {
    id,
    code,
    title,
    description,
    image,
    isWhite,
    canvas,
    features
  }
};

export const servicesModel = (data) => {
  if (!data) {
    return {};
  }

  const {service_list: services} = data || {};

  const list = services.map(serviceCardModel);

  return {
    list
  }
}


const paymentItemModel = (item) => {
  if (!item) {
    return {};
  }

  const {
    id,
    title,
    description,
    cost_caption: costCaption,
    cost_per_hour: price
  } = item;


  return {
    id,
    title,
    description,
    costCaption,
    price,
  }
}

export const paymentServiceDetail = (list) => {
  if (!list || !list.length) {
    return [];
  }

  const formattedList = list.map(item => {
    const {
      id,
      title,
      description,
      cost_per_hour: costCaption,
      price,
      sort
    } = item;


    return {
      id,
      title,
      description,
      costCaption,
      price,
      sort
    }
  });

  if (formattedList.sort !== undefined) {
    formattedList.sort((a,b) =>  a.sort - b.sort);
  }

  return formattedList
}

export const paymentModel = (data) => {
  if (!data) {
    return {};
  }

  const {title, help: blockInfo, payment_list: list} = data || {};

  const paymentList = list.map(paymentItemModel);
  if (paymentList.length > 0 && paymentList[0].sort !== undefined) {
    paymentList.sort((a, b) => a.sort - b.sort);
  }

  return {
    title,
    blockInfo,
    paymentList
  }
};

const serviceBlockModel = (item) => {
  if (!item) {
    return {};
  }

  const {
    id,
    sort,
    title,
    sub_title: subTitle,
    block_table: blockTable,
    element_ids: elements
  } = item;

  return {
    id,
    sort,
    title,
    subTitle,
    blockTable,
    elements
  }
}

export const serviceDetailModel = (data) => {
  if (!data) {
    return {};
  }

  const {
    id,
    code,
    title,
    detail_description: description,
    gallery,
    blocks,
    seo: seoPage = {},
  } = data;

  const mainImage = gallery ? gallery.map(imageModel) : [];

  const sectionList = blocks ? blocks.map( serviceBlockModel) : [];

  sectionList.sort( (a, b) => a.sort - b.sort);

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
    mainImage,
    sectionList,
    seo
  }
}


export const serviceTypeListModel = (list) => {
  if (!list || !list.length) {
    return;
  }

  const typeList = list.map( (item) => {
    const {
      id,
      title,
      description,
      sort,
    } = item;

    return {
      id,
      title,
      description,
      sort,
    }
  })

  typeList.sort( (a, b) => a.sort - b.sort);

  return typeList;
}

export const advantagesModel = (list) => {
  if (!list || !list.length) {
    return;
  }


  const advantages = list.map( (item) => {
    const {
      id,
      title,
      description,
      logo,
      sort,
    } = item;
    const image = imageModel(logo);
    return {
      id,
      title,
      description,
      image,
      sort,
    }
  })
  if (advantages.sort !== undefined) {
    advantages.sort( (a, b) => a.sort - b.sort);
  }

  return advantages
}
