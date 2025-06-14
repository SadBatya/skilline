import Vue from 'vue';

Vue.directive('custom-outside', {
  bind (el, binding, vnode) {
    el.clickOutsideEvent = function (event) {
      // eslint-disable-next-line eqeqeq
      if (!(el == event.target || el.contains(event.target))) {
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener('click', el.clickOutsideEvent)
  },
  unbind (el) {
    document.body.removeEventListener('click', el.clickOutsideEvent)
  },
});
