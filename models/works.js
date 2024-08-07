import {pagesModel} from "~/models/pages";
import {imageModel, imageSizeModel} from "~/models/image";
import {getPageSeo} from "~/models/seo";
import {reviewModel} from "~/models/reviews";
import {nFormatter} from "~/constant/common";

export const DEFAULT_TEXT = {
  description: 'Проектируем архитектуру и разрабатываем технические задания для реализации проектов, учитываем потребности бизнеса при создании дизайна',
  titleWorks: 'Работы',
}

export const pageOpen = ['herocraft', 'intelport', 'platformaofd', 'swoys', 'sntclub'];


const categoryList = (list) => {
  if (!list) {
    return [];
  }

  return list.map((item) => {
    const {
      id,
      title,
      works_count: count,
    } = item;

    return {
      id,
      title,
      count
    }
  });
}

const awardsModel = (awards) => {
  if (!awards) {
    return [];
  }

  return awards.map((award) => {
    const {
      id,
      title,
      description,
      url,
      logo,
    } = award;
    const image = imageModel(logo);

    const imageSize = imageSizeModel(logo);

    return {
      id,
      title,
      description,
      url,
      image,
      imageSize
    }
  });
}

export const chartModel = (chart) => {
  if (!chart || !chart.length) {
    return [];
  }

  return chart.map((item) => {
    const {
      id,
      code,
      department: title,
      chart_color: color,
      points = []
    } = item;

    const list = points.map( (point) => {
      const { month, year, hours } = point;
      const date = new Date( year, month - 1);
      return {
        date,
        value: hours
      }
    });

    return {
      id,
      code,
      title,
      color,
      list
    }
  })
}

export const workDetailTotal = (data) => {
  if(!data) {
    return {};
  }

  const {
    charts,
    digits = [],
  } = data;

  let totalNumbers = [];
  let otherNumbers = [];

  const numbers = digits.map((item) => {
    const {
      id,
      digit,
      description,
      annotation : info,
      is_color_main: isColorMain = false,
    } = item;

    const number = nFormatter(Number(digit),  2);

    return {
      id,
      description,
      info,
      number,
      isColorMain,
    }
  });

  if (numbers && numbers.length) {
    totalNumbers = numbers.slice(0, 2);
    otherNumbers = numbers.slice(2);
  }

  const graphic = chartModel(charts);

  return {
    totalNumbers,
    otherNumbers,
    graphic
  }
}

const headerBlockModel = (block) => {
  if (!block) {
    return {};
  }

  const {
    description,
    client_logo: logoObj,
    client_description: secondDescription,
    client_url_matrix: urlMatrix,
    stack = [],
    tags = []
  } = block;

  const logo = imageModel(logoObj);
  let urlMatrixTemplate = [];

  if (urlMatrix) {
    urlMatrixTemplate =  urlMatrix.map((item) => {
      return {
        path: item.url,
        title: item.url_title || ''
      };
    })
  }


  return {
    description,
    secondDescription,
    logo,
    urls: urlMatrixTemplate,
    stack,
    tags
  }
}


export const worksDetailModel = (item) => {
  if (!item) {
    return {}
  }

  const {
    id,
    code,
    seo: seoPage,
    title,
    description,
    reviews_list: reviews,
    result_description: totalDescription,
    project_start: projectStart,
    project_deadline: projectEnd,
    work_results: totalData,
    works_header: worksHeader,
  } = item || {};

  const total =  workDetailTotal(totalData);
  const headerBlock = headerBlockModel(worksHeader);
  const seo = getPageSeo(
    {
      id,
      code,
      title: seoPage?.title || title,

      value: seoPage || {}
    }
  )

  const reviewData = reviews && reviews.length ? reviews[0] : null;

  const review =  reviewModel(reviewData);
  return {
    id,
    code,
    title,
    seo,
    description,
    projectEnd,
    projectStart,
    review,
    total,
    totalDescription,
    headerBlock
  }
}

const worksElementModel = (item) => {
  const {
    id,
    code,
    title,
    description,
    nda,
    locked,
    logo,
    categories,
    awards_list: awardsData,
    background_image : backgroundImage,
    is_light_background: isLightBackground = false,
  } = item || {};



  const formattedCategory = categoryList(categories);
  const logoImage = imageModel(logo);
  const bgImage = imageModel(backgroundImage, true);
  const awards = awardsModel(awardsData);

  return {
    id,
    code,
    title,
    description,
    logoImage,
    bgImage,
    nda: !!nda,
    locked: !!locked,
    categories: formattedCategory,
    isLightBackground,
    awards
  }
}

export const worksModel = (data) => {
  if (!data) {
    return {}
  }

  const {
    title = DEFAULT_TEXT.titleWorks,
    description = DEFAULT_TEXT.description,
    works_list: worksList = [],
  } = data || {};

  const pageObj = pagesModel(data);

  const formattedWorksList = worksList.map(worksElementModel);

  return {
    title,
    description,
    ...pageObj,
    worksList: formattedWorksList,
  };
}

export const worksCategoryModel = (data) => {
  if (!data) {
    return {};
  }

  const {category_list: list, all_works_count: totalCount} = data || {};

  return {
    list: categoryList(list),
    totalCount
  }
}

