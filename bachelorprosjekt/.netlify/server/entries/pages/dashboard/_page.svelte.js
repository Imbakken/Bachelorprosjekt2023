import { c as create_ssr_component, v as validate_component, a as subscribe, o as onDestroy, e as escape, d as each, b as add_attribute } from "../../../chunks/index2.js";
import "../../../chunks/firebase.js";
import { I as Icon, a as authStore, A as ArrowLeft, F as Footer } from "../../../chunks/Footer.js";
import "firebase/firestore";
import "firebase/auth";
import vacuumCleaner from "@iconify/icons-mdi/vacuum-cleaner.js";
import friendsIcon from "@iconify/icons-tabler/friends.js";
import wifiIcon from "@iconify/icons-material-symbols/wifi.js";
import localLaundryServiceOutline from "@iconify/icons-material-symbols/local-laundry-service-outline.js";
import emergencyPhone from "@iconify/icons-maki/emergency-phone.js";
import officeBuildingCogOutline from "@iconify/icons-mdi/office-building-cog-outline.js";
import wasteBasket from "@iconify/icons-maki/waste-basket.js";
import chevronRight from "@iconify/icons-mdi/chevron-right.js";
import { D as DateIcon, P as PlaceIcon } from "../../../chunks/DateIcon.js";
const LogOut_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '.buttonContainer.svelte-k60k3a.svelte-k60k3a{display:flex;justify-content:center;margin:1em 0}.buttonContainer.svelte-k60k3a button.svelte-k60k3a{background:#fbc9be;color:#695356;font-family:"Poppins", sans-serif;font-size:0.8em;text-decoration:none;padding:5px;margin:2px;border-radius:5px;border:none;width:8em}',
  map: null
};
const LogOut = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="buttonContainer svelte-k60k3a"><button class="svelte-k60k3a">Logg ut</button>
</div>`;
});
const CleaningIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: vacuumCleaner,
      color: "#695356",
      width: "70%"
    },
    {},
    {}
  )}`;
});
const CommonAreaIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: friendsIcon,
      color: "#695356",
      width: "70%"
    },
    {},
    {}
  )}`;
});
const InternetIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: wifiIcon,
      color: "#695356",
      width: "70%"
    },
    {},
    {}
  )}`;
});
const LaundryIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: localLaundryServiceOutline,
      color: "#695356",
      width: "70%"
    },
    {},
    {}
  )}`;
});
const PhoneIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: emergencyPhone,
      color: "#695356",
      width: "70%"
    },
    {},
    {}
  )}`;
});
const RulesIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: officeBuildingCogOutline,
      color: "#695356",
      width: "70%"
    },
    {},
    {}
  )}`;
});
const WasteIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: wasteBasket,
      color: "#695356",
      width: "70%"
    },
    {},
    {}
  )}`;
});
const ArrowRight = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: chevronRight,
      color: "#695356",
      width: "35"
    },
    {},
    {}
  )}`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '.mainContainer.svelte-17l0qpi.svelte-17l0qpi{min-height:100vh;padding-top:50px;width:100%;max-width:430px;margin:0 auto;background-image:url("/backgroundapp/bakgrunnDashboard.jpg");background-repeat:no-repeat;background-size:cover;position:relative}.mainContainerHeader.svelte-17l0qpi.svelte-17l0qpi{display:flex;justify-content:space-between;align-items:center}.mainContainerRectangle.svelte-17l0qpi.svelte-17l0qpi{background-color:#fefaef;border-radius:30px 30px 0 0;height:75%;width:100%;position:absolute;bottom:0;overflow:scroll}.mainContainerPartContent.svelte-17l0qpi.svelte-17l0qpi{margin:5px 0;display:flex;flex-direction:column;align-items:center}.mainContainerContent.svelte-17l0qpi.svelte-17l0qpi{padding:30px}.mainCard.svelte-17l0qpi.svelte-17l0qpi{background:#fbc9be;border-radius:15px;width:100%;margin:10px;padding:10px}.mainCardItem.svelte-17l0qpi.svelte-17l0qpi{padding:5px;display:flex;flex-direction:column}.placeContainer.svelte-17l0qpi.svelte-17l0qpi{display:flex;align-items:center;margin:2px 0;font-size:0.8em}.dateContainer.svelte-17l0qpi.svelte-17l0qpi{display:flex;align-items:center;margin:2px 0;font-size:0.8em}.small.svelte-17l0qpi.svelte-17l0qpi{font-size:0.8em}.mainContainerLink.svelte-17l0qpi.svelte-17l0qpi{display:flex;justify-content:flex-end;margin-bottom:10px}.mainContainerLink.svelte-17l0qpi a.svelte-17l0qpi{color:#695356}.mainContainerLink.svelte-17l0qpi a.svelte-17l0qpi:hover{font-weight:bold}.mainContainer.svelte-17l0qpi button.svelte-17l0qpi{cursor:pointer}.scrollMenu.svelte-17l0qpi.svelte-17l0qpi{display:flex;align-items:center;margin-bottom:8em}.scrollMenuItem.svelte-17l0qpi.svelte-17l0qpi{background:#fbc9be;color:#695356;text-decoration:none;white-space:normal;word-wrap:break-word;text-align:center;font-family:"Poppins", sans-serif;font-weight:bold;font-size:0.9em;height:160px;width:110px;border-radius:15px;border:none;padding:10px 0;display:grid;grid-template-rows:30% 60%;gap:10px 0px;align-content:stretch;justify-items:center;align-items:center;flex-shrink:0;margin-right:0.2rem;margin-left:0.2rem;scroll-snap-align:center}.scrollContent.svelte-17l0qpi.svelte-17l0qpi{display:flex;overflow-x:auto;scroll-behavior:smooth;scroll-snap-type:x mandatory}.arrowButton.svelte-17l0qpi.svelte-17l0qpi{display:flex;align-items:center;justify-content:center;width:1em;height:1em;border:none;background:none;cursor:pointer}@media(min-width: 430px) and (max-width: 1200px){.mainContainer.svelte-17l0qpi.svelte-17l0qpi{max-width:1200px}.scrollMenu.svelte-17l0qpi.svelte-17l0qpi{justify-content:center}}@media(min-width: 1200px) and (max-width: 1920px){.mainContainer.svelte-17l0qpi.svelte-17l0qpi{max-width:1920px;background-image:url("/backgrounddesktop/BackgroundDesktop1.jpg")}.scrollMenu.svelte-17l0qpi.svelte-17l0qpi{justify-content:center}}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $authStore, $$unsubscribe_authStore;
  $$unsubscribe_authStore = subscribe(authStore, (value) => $authStore = value);
  let messages = [];
  let events = [];
  let name = "";
  onDestroy(() => {
  });
  let scrollContainer;
  $$result.css.add(css);
  $$unsubscribe_authStore();
  return `${$authStore ? `<div class="mainContainer svelte-17l0qpi"><div class="mainContainerRectangle svelte-17l0qpi"><div class="mainContainerContent svelte-17l0qpi"><div class="mainContainerHeader svelte-17l0qpi"><h1>Hei ${escape(name)}</h1>
          ${validate_component(LogOut, "LogOut").$$render($$result, {}, {}, {})}</div>
        <h2>Beskjeder du må få med deg</h2>
        <div class="mainContainerPartContent svelte-17l0qpi">${each(messages, (message) => {
    return `<div class="mainCard svelte-17l0qpi"><div class="mainCardItem svelte-17l0qpi"><div class="mainCardText"><h3>${escape(message.title)}</h3>
                  <div class="dateContainer svelte-17l0qpi">${validate_component(DateIcon, "DateIcon").$$render($$result, {}, {}, {})}
                    <p><strong>${escape(message.date.toDate().toLocaleString())}</strong>
                    </p></div>
                  <p class="small svelte-17l0qpi">Skrevet av <strong>${escape(message.author)}</strong></p>
                  <p>${escape(message.description)}</p>
                </div></div>
            </div>`;
  })}</div>
        <div class="mainContainerLink svelte-17l0qpi"><a href="/messages" class="svelte-17l0qpi">Flere beskjeder</a></div>

        <h2>Arrangementer de kommende dagene</h2>

        <div class="mainContainerPartContent svelte-17l0qpi">${each(events, (event) => {
    return `<div class="mainCard svelte-17l0qpi"><div class="mainCardItem svelte-17l0qpi"><div class="mainCardText"><h3>${escape(event.title)}</h3>
                  <div class="dateContainer svelte-17l0qpi">${validate_component(DateIcon, "DateIcon").$$render($$result, {}, {}, {})}
                    <p><strong>${escape(event.date.toDate().toLocaleString())}</strong>
                    </p></div>
                  <div class="placeContainer svelte-17l0qpi">${validate_component(PlaceIcon, "PlaceIcon").$$render($$result, {}, {}, {})}
                    <p>${escape(event.place)}</p></div>
                </div></div>
            </div>`;
  })}</div>
        <div class="mainContainerLink svelte-17l0qpi"><a href="/events" class="svelte-17l0qpi">Flere arrangementer</a></div>
        <h2>Nyttig informasjon</h2></div>
      <div class="scrollMenu svelte-17l0qpi"><button class="arrowButton leftArrowButton svelte-17l0qpi"><span class="icon">${validate_component(ArrowLeft, "ArrowLeft").$$render($$result, {}, {}, {})}</span></button>
        <div class="scrollContent svelte-17l0qpi"${add_attribute("this", scrollContainer, 0)}><button class="scrollMenuItem svelte-17l0qpi"><span>Vaskeri</span>
            <span class="icon">${validate_component(LaundryIcon, "LaundryIcon").$$render($$result, {}, {}, {})}</span></button>
          <button class="scrollMenuItem svelte-17l0qpi"><span>Renhold</span>
            <span class="icon">${validate_component(CleaningIcon, "CleaningIcon").$$render($$result, {}, {}, {})}</span></button>
          <button class="scrollMenuItem svelte-17l0qpi"><span>Avfall og kildesortering</span>
            <span class="icon">${validate_component(WasteIcon, "WasteIcon").$$render($$result, {}, {}, {})}</span></button>
          <button class="scrollMenuItem svelte-17l0qpi"><span>Fellesareale</span>
            <span class="icon">${validate_component(CommonAreaIcon, "CommonAreaIcon").$$render($$result, {}, {}, {})}</span></button>
          <button class="scrollMenuItem svelte-17l0qpi"><span>Regler og rutiner</span>
            <span class="icon">${validate_component(RulesIcon, "RulesIcon").$$render($$result, {}, {}, {})}</span></button>
          <button class="scrollMenuItem svelte-17l0qpi"><span>Internett</span>
            <span class="icon">${validate_component(InternetIcon, "InternetIcon").$$render($$result, {}, {}, {})}</span></button>
          <button class="scrollMenuItem svelte-17l0qpi"><span>Viktige telefonnumre</span>
            <span class="icon">${validate_component(PhoneIcon, "PhoneIcon").$$render($$result, {}, {}, {})}</span></button></div>
        <button class="arrowButton rightArrowButton svelte-17l0qpi"><span class="icon">${validate_component(ArrowRight, "ArrowRight").$$render($$result, {}, {}, {})}</span></button></div>
      ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div></div>` : ``}`;
});
export {
  Page as default
};
