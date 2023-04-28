import { c as create_ssr_component, v as validate_component } from "./index2.js";
import { I as Icon } from "./Footer.js";
import baselinePlace from "@iconify/icons-ic/baseline-place.js";
import dateRange from "@iconify/icons-material-symbols/date-range.js";
const PlaceIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: baselinePlace,
      color: "#695356",
      width: "20"
    },
    {},
    {}
  )}`;
});
const DateIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: dateRange,
      color: "#695356",
      width: "20"
    },
    {},
    {}
  )}`;
});
export {
  DateIcon as D,
  PlaceIcon as P
};
