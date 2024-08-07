import edjsHtml from "editorjs-html";
// import {injectHighlightJSCSSElement, injectHighlightJSScriptElement} from "~/constant/codeBoxSup";
import {imageModel} from "~/models/image";

const imageSrc = (src) => {
  return  imageModel({path: src});
}


const tableTemplate = (block) => {
  const data = block.data || {};
  const content = data.content || [];

  const isHeader = data.withHeadings;

    const rows = content.map((row, index) => {
      if (isHeader && index === 0) return "";
      return `<tr>${row.reduce(
        (acc, cell) => acc + `<td>${cell}</td>`,
        ""
      )}</tr>`;
    });
    let header = "";

    if (isHeader) {
      header = content[0] ? `<thead><tr>${content[0].reduce(
        (acc, cell) => acc + `<td>${cell}</td>`,
        ""
      )}</tr></thead>` : "";
    }

    return `<table>${header}<tbody>${rows.join("")}</tbody></table>`;
}

const imageTemplate = (block) => {
  const data = block.data;
  if (!data?.file?.url) return '';
  // ?? add data attr f
  const isBorder = data.withBorder;
  const isStretched = data.stretched;
  const isBackground =data.withBackground;
  const classList = `${isBorder ? 'img-border' : ''} ${isStretched ? 'img-stretch' : ''}  ${isBackground ? 'img-bgc' : ''} `
  return `<img class="image ${classList.trim() ? classList : ''}" src="${data.file.url}" alt="${data.caption}"/>`
}

const delimiterTemplate = (block) => {
  return `<div class="br"></div>`
}

const quoteTemplate = (block) => {
  const data = block.data;
  const title = data.caption;
  const text = data.text;

  let titleTemplate = '';

  if (title) {
    titleTemplate = `<div class="content-page__wrap-img">
                       <img src="/img/ava.svg" alt="">
                     </div>
                     <span class="content-page__autor">${title}</span>`
  }

  return `<div class="content-page__wrap">
            <span class="reviews__top-quote">
                <svg xmlns="http://www.w3.org/2000/svg" width="77.833" height="59.184" viewBox="0 0 77.833 59.184">
                <path d="M-2660.8-7874.184h-30.444s2.045,16.1,0,28.44a54.858,54.858,0,0,1-8.181,20.93l18.516,9.813s11.8-10.8,16.823-25.595S-2660.8-7874.184-2660.8-7874.184Z" transform="translate(2738.342 7874.184)" fill="inherit"></path>
                <path d="M-2660.8-7874.184h-30.444s2.045,16.1,0,28.44a54.858,54.858,0,0,1-8.181,20.93l18.516,9.813s11.8-10.8,16.823-25.595S-2660.8-7874.184-2660.8-7874.184Z" transform="translate(2699.426 7874.184)" fill="inherit"></path>
              </svg>
              </span>
            <p class="content-page__quote">${text}</p>
            ${titleTemplate}
            <span class="reviews__down-quote">
                <svg xmlns="http://www.w3.org/2000/svg" width="77.833" height="59.184" viewBox="0 0 77.833 59.184">
                    <path d="M-2660.8-7874.184h-30.444s2.045,16.1,0,28.44a54.858,54.858,0,0,1-8.181,20.93l18.516,9.813s11.8-10.8,16.823-25.595S-2660.8-7874.184-2660.8-7874.184Z" transform="translate(2738.342 7874.184)" fill="inherit"></path>
                    <path d="M-2660.8-7874.184h-30.444s2.045,16.1,0,28.44a54.858,54.858,0,0,1-8.181,20.93l18.516,9.813s11.8-10.8,16.823-25.595S-2660.8-7874.184-2660.8-7874.184Z" transform="translate(2699.426 7874.184)" fill="inherit"></path>
                  </svg>

            </span>
        </div>`
}

const quoteSmallTemplate = (block) => {
  const {text} = block.data;
  if (!text) return '';

  return `<p class="ed-quote-small">${text}</p>`
}

const ImageListTemplate = (block) => {
  const {twoColumn,threeColumn, fourColumn, list} = block.data;
  const className = 'ed-image-list';

  if (!list.length) return '';

  const imageTemplate = (item) => {
    const {image, caption} = item;
    if (!image) return '';

    return `<li>
                <img src="${imageSrc(image)}" alt="${caption}" class="${className}__image">
            </li>`
  }

  return `<div class="${className}">
             <ul class="${className}__list ${threeColumn ? ' _three-column' : ''} ${fourColumn ? ' _four-column' : ''} ${twoColumn ? ' _two-column': ''}">
                  ${list.map(item => imageTemplate(item)).join('')}
              </ul>
          </div> `;
}

const AnyButtonTemplate = (block) => {
  const {link, text} = block.data;
  if (!link) {
    return '';
  }

  const className = 'ed-button';
  const linkTrim = link.trim();

  return `<div class="${className}">
             <a href="${linkTrim}" class="button button-light ${className}__button">
                <span class="button-light__text">${text}</span>
            </a>
          </div> `;
}

const codeBoxTemplate = (block) => {
  if (!block) {
    return '';
  }

  const {code, language, theme} = block.data || {};

  if (!code) {
    return '';
  }

  console.log(theme);

  // document.addEventListener('DOMContentLoaded', () => {
  //   injectHighlightJSScriptElement();
  //   injectHighlightJSCSSElement(theme);
  // });

  // const escapePHPTag = code.replace(/<\?php/g, '&lt;?php');
  // const escapeFiles = escapePHPTag.replaceAll(/<\/Files/g, '&lt;/Files');
  // const escapeTags = escapePHPTag.replace(/[<>]/g, function (match) {
  //   return {
  //     '<': '&lt;',
  //     '>': '&gt;'
  //   }[match];
  // });


  return `<pre class="code-container ">
              <code class="language-${language} hljs">${code}</code>
         </pre>`
}

const carouselTemplate = (block) => {
  return '';
}

const attachesTemplate = (block) => {
  const {title, file} = block?.data || {};

  const {url, original_name: originalName} = file || {};
  if (!url) {
    return '';
  }

  return `<a href="${url}" target="_blank" class="attaches-link" download="${title || originalName}">
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.5 4.5V8.5H6.5M10.5 4.5H18.5V20.5H6.5V8.5L10.5 4.5Z" stroke="#33d35e" stroke-width="1.2"/>
              <path d="M16 12H12.5H9" stroke="#33d35e" stroke-width="1.2"/>
              <path d="M14 15H12.5H9" stroke="#33d35e" stroke-width="1.2"/>
            </svg>
            <span class="">${title || originalName}</span>
        </a>`;
}

const customBlocks = {
  table: tableTemplate,
  image: imageTemplate,
  delimiter: delimiterTemplate,
  quote: quoteTemplate,
  quoteSmall: quoteSmallTemplate,
  imageList: ImageListTemplate,
  AnyButton: AnyButtonTemplate,
  codeBox: codeBoxTemplate,
  carousel: carouselTemplate,
  attaches: attachesTemplate

}
const edjsParser = edjsHtml(customBlocks);

export default (context, inject) => {
  inject('edHtml', edjsParser);
}
