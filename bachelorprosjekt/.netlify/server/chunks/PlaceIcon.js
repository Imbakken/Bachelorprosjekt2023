import { c as create_ssr_component, v as validate_component } from "./index2.js";
import { I as Icon } from "./DateIcon.js";
import baselinePlace from "@iconify/icons-ic/baseline-place.js";
const PlaceIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: baselinePlace,
      color: "#695356",
      width: "6%"
    },
    {},
    {}
  )}`;
});
export {
  PlaceIcon as P
};
