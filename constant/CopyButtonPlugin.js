/**
 *  @file highlight-copy.js
 *  @author Arron Hunt <arronjhunt@gmail.com>
 *  @copyright Copyright 2021. All rights reserved.
 */

/**
 * Adds a copy button to highlightjs code blocks
 */

// const locales = {
//   en: ["Copy", "Copied!", "Copied to clipboard"],
//   ru: ["Копировать", "Скопировано!", "Скопировано в буфер обмена"],
// };

export class CopyButtonPlugin {
  constructor(options = {}) {
    self.hook = options.hook;
    self.callback = options.callback;
    self.lang = options.lang || document.documentElement.lang || "ru";
  }

  "after:highlightElement"({ el, text }) {
    // Create the copy button and append it to the codeblock.
    const button = document.createElement("button");

    button.innerHTML = "Копировать";
    button.className = "hljs-copy-button";

    button.dataset.copied = false;
    el.parentElement.classList.add("hljs-copy-wrapper");
    el.parentElement.appendChild(button);

    // Add a custom proprety to the code block so that the copy button can reference and match its background-color value.
    el.parentElement.style.setProperty(
      "--hljs-theme-background",
      window.getComputedStyle(el).backgroundColor
    );

    button.onclick = function () {
      if (!navigator.clipboard) return;

      let newText = text;
      if (this.hook && typeof this.hook === "function") {
        newText = this.hook(text, el) || text;
      }

      navigator.clipboard
        .writeText(newText)
        .then(function () {
          button.innerHTML = "Скопировано!";
          button.dataset.copied = true;

          let alert = Object.assign(document.createElement("div"), {
            role: "status",
            className: "hljs-copy-alert",
            innerHTML: "Скопировано в буфер обмена",
          });
          el.parentElement.appendChild(alert);

          setTimeout(() => {
            button.innerHTML = "Копировать";
            button.dataset.copied = false;
            el.parentElement.removeChild(alert);
            alert = null;
          }, 2000);
        })
        .then(function () {
          if (typeof this.callback === "function") return this.callback(newText, el);
        });
    };
  }
}



/**
 * Basic support for localization. Please submit a PR
 * to help add more languages.
 * https://github.com/arronhunt/highlightjs-copy/pulls
 */

