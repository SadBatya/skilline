import {imageModel} from "~/models/image";

export const contactsModel = (data) => {
  if (!data) {
    return {};
  }

  const {
    id,
    phone,
    email,
    address,
    description: descriptionList,
    time_title: timeText,
    timezone,
    privacy_policy_file: privacyObj
  } = data;

  const privacyFile = imageModel(privacyObj);

  return {
    id,
    phone,
    email,
    address,
    descriptionList,
    timeText,
    timezone,
    privacyFile
  }
}
