import {imageModel} from "~/models/image";

export const mainDataModel = (data) => {
  if (!data) {
    return {};
  }

  const {
    name,
    description,
    logo: logoObj,
    phone,
    address,
    email,
    copyright,
    social_network: socials,
    services_list: services,
    documents: documentsData,
    form_title: formTitle,
    form_description: formDescription,
    form_button: formButton,
  } = data;

  const logo = imageModel(logoObj);
  const documents =  documentsData.map(doc =>{
    const {id, title, document_id: pathData, sort} = doc;
    return {
      id,
      title,
      sort,
      path: imageModel(pathData)
    }
  }).filter(el => el.path).sort((a, b) => a.sort - b.sort);

  const feedbackForm = {
    title: formTitle,
    description: formDescription,
    button: formButton
  }

  return {
    name,
    description,
    logo,
    phone,
    address,
    email,
    copyright,
    socials,
    services,
    documents,
    feedbackForm
  }
}
