const getLinkElement = (url) => {
  const link = document.createElement('link');
  link.setAttribute('rel', 'stylesheet');
  link.setAttribute('href', url);

  return link;
}

export const injectHighlightJSScriptElement = () => {
  const highlightJSScriptElements = document.querySelectorAll('script');
  let isAlreadyIncluded = false;

  for (let i = 0; i < highlightJSScriptElements.length; i++) {
    if (highlightJSScriptElements[i].src.includes('highlight.min.js')) {
      isAlreadyIncluded = true;
      break;
    }
  }
  if (!isAlreadyIncluded) {
    const head = document.querySelector('head');

    const linkPluginCopy = getLinkElement("https://unpkg.com/highlightjs-copy/dist/highlightjs-copy.min.css");

    // const pluginNumberLine = getScriptElement('https://cdnjs.cloudflare.com/ajax/libs/highlightjs-line-numbers.js/2.8.0/highlightjs-line-numbers.min.js');
    // //cdn.jsdelivr.net/npm/highlightjs-line-numbers.js@2.8.0/dist/highlightjs-line-numbers.min.js
    if (head)  {
      // head.appendChild(hljsScript);
      head.appendChild(linkPluginCopy);
      // head.appendChild(pluginCopy);
      //
      // hljsScript.addEventListener('load', () => {
      //   console.log("LOAD");
      // })
      // head.appendChild(pluginNumberLine);
    }
  }
};

export const injectHighlightJSCSSElement = highlightJSCSSURL => {
  if (!highlightJSCSSURL || typeof highlightJSCSSURL !== 'string') return;

  const highlightJSCSSElements = document.querySelectorAll('link');
  let isAlreadyIncluded = false;

  for (let i = 0; i < highlightJSCSSElements.length; i++) {
    if (highlightJSCSSElements[i].href === highlightJSCSSURL) {
      isAlreadyIncluded = true;
      break;
    }
  }
  if (!isAlreadyIncluded) {
    const link = document.createElement('link');
    const head = document.querySelector('head');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', highlightJSCSSURL);

    if (head) head.appendChild(link);
  }
};


export const defaultStyleCodeBlock = {
  container: {
    width: '100%',
  },
  code: {
    width: '100%',
    minHeight: '30px',
    boxSizing: 'border-box',
    textAlign: 'left',
    margin: '8px 0',
    marginTop: '15px',
    padding: '10px',
    borderRadius: '2px 2px 2px 0',
    border: 'none !important',
    outline: 'none !important',
    fontSize: '14px',
  }
};
