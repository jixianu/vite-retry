import { _ as _export_sfc, o as openBlock, c as createElementBlock, a as createBaseVNode, F as Fragment } from "./index.a301055b.js";
const index_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  setup() {
    console.log(11111 + "index");
  },
  methods: {
    goHome() {
      this.$router.push("/home");
    }
  }
};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("div", { class: "test" }, " test-index ", -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("button", {
      onClick: _cache[0] || (_cache[0] = (...args) => $options.goHome && $options.goHome(...args))
    }, "goHome")
  ], 64);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index as default
};
