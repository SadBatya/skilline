export const imgPath = process.env.imgUrl;
export const apiUrlWS = process.env.apiUrlWS;
export const siteUrl = process.env.siteUrl;

export const BREAKPOINTS = {
  extraSmall: 500,
  small: 769,
  medium: 992,
  submedium: 1200,
  large: 1440
}


// export const phoneMask = '+7 (###) ### ##-##';
export const phoneMask = (value) => {

  const numbers = value.replace(/([^0-9])/g, '');
  return [...numbers]
};

export const unmask = (maskedValue, mask) => {
  const defaultTokens = ['#', 'X', 'S', 'A', 'a', '!'];
  let unmaskedValue = '';
  let isToken;

  for (let i = 0; i < maskedValue.length; i++) {
    isToken = false;
    for (let j = 0; j < defaultTokens.length; j++) {
      if (mask[i] === defaultTokens[j]) {
        isToken = true;
      }
    }

    if (isToken) {
      unmaskedValue += maskedValue[i];
    }
  }
  // console.log(unmaskedValue);
  return unmaskedValue;
};


export function nFormatter(num, digits) {
  const clearObj = {
    value: "",
    symbol: ""
  }
  if (!num) {
    return clearObj
  }
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "к" },
    { value: 1e6, symbol: "м" },
    { value: 1e9, symbol: "млрд" },
    { value: 1e12, symbol: "трл" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  const item = lookup.slice().reverse().find(function(item) {
    return num >= item.value;
  });
  return item ?
    {
      value: (num / item.value).toFixed(digits).replace(rx, "$1"),
      symbol: item.symbol
    }
    : num > 0 ?
      {value: clearObj, symbol: ""}
      : clearObj;
}
