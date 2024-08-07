import hljs from "highlight.js";
import {CopyButtonPlugin} from "~/constant/CopyButtonPlugin";
import {lineNumbersBlock, initLineNumbersOnLoad} from "~/constant/highlight-line-numbers";

hljs.lineNumbersBlock = lineNumbersBlock;
hljs.initLineNumbersOnLoad = initLineNumbersOnLoad;
hljs.addPlugin(new CopyButtonPlugin({lang: "ru"}))

export default (context, inject) => {
  inject('hljs', hljs);
  inject('hljsCopyPlugin', CopyButtonPlugin);
}
  // inject('CopyButtonPlugin', CopyButtonPlugin);}
