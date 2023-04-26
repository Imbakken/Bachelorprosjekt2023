import { c as create_ssr_component, v as validate_component, a as subscribe, o as onDestroy, e as escape, d as each, b as add_attribute } from "../../../chunks/index2.js";
import "../../../chunks/firebase.js";
import { a as authStore } from "../../../chunks/store.js";
import "firebase/firestore";
import "firebase/auth";
import { I as Icon, D as DateIcon } from "../../../chunks/DateIcon.js";
import vacuumCleaner from "@iconify/icons-mdi/vacuum-cleaner.js";
import friendsIcon from "@iconify/icons-tabler/friends.js";
import wifiIcon from "@iconify/icons-material-symbols/wifi.js";
import localLaundryServiceOutline from "@iconify/icons-material-symbols/local-laundry-service-outline.js";
import emergencyPhone from "@iconify/icons-maki/emergency-phone.js";
import officeBuildingCogOutline from "@iconify/icons-mdi/office-building-cog-outline.js";
import wasteBasket from "@iconify/icons-maki/waste-basket.js";
import chevronLeft from "@iconify/icons-mdi/chevron-left.js";
import chevronRight from "@iconify/icons-mdi/chevron-right.js";
import { P as PlaceIcon } from "../../../chunks/PlaceIcon.js";
const CleaningIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: vacuumCleaner,
      color: "#695356",
      width: "75%"
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
      width: "75%"
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
      width: "75%"
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
      width: "100%"
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
      width: "75%"
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
      width: "75%"
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
      width: "75%"
    },
    {},
    {}
  )}`;
});
const ArrowLeft = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: chevronLeft,
      color: "#695356",
      width: "75"
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
      width: "75"
    },
    {},
    {}
  )}`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: 'h3.svelte-1i2phmg.svelte-1i2phmg{font-size:1.5em}.mainContainer.svelte-1i2phmg.svelte-1i2phmg{min-height:100vh;padding-top:50px;width:100%;max-width:430px;margin:0 auto;background-image:url("../../assets/bakgrunnDashboard.jpg");background-repeat:no-repeat;background-size:cover;position:relative}.mainContainerRectangle.svelte-1i2phmg.svelte-1i2phmg{background-color:#fefaef;border-radius:30px 30px 0 0;height:75%;width:100%;padding:30px;position:absolute;bottom:0;overflow:scroll}.mainContainerContent.svelte-1i2phmg.svelte-1i2phmg{margin:5px 0;display:flex;flex-direction:column;align-items:center}.mainCard.svelte-1i2phmg.svelte-1i2phmg{background:#fbc9be;border-radius:15px;width:100%;margin:10px;padding:10px}.mainCardItem.svelte-1i2phmg.svelte-1i2phmg{padding:5px;display:flex;flex-direction:column}.placeContainer.svelte-1i2phmg.svelte-1i2phmg{display:flex;align-items:center;font-size:0.8em}.dateContainer.svelte-1i2phmg.svelte-1i2phmg{display:flex;align-items:center;font-size:0.8em}.small.svelte-1i2phmg.svelte-1i2phmg{font-size:0.8em}.mainContainerLink.svelte-1i2phmg.svelte-1i2phmg{display:flex;justify-content:flex-end;margin-bottom:10px}.mainContainerLink.svelte-1i2phmg a.svelte-1i2phmg{text-decoration:none;color:#695356}.mainContainerLink.svelte-1i2phmg a.svelte-1i2phmg:hover{font-weight:bold}.mainContainer.svelte-1i2phmg button.svelte-1i2phmg{cursor:pointer}.buttonContainer.svelte-1i2phmg.svelte-1i2phmg{display:flex;justify-content:center;margin:1em 0}.buttonContainer.svelte-1i2phmg button.svelte-1i2phmg{background:#fbc9be;color:#695356;border:none;font-family:"Poppins", sans-serif;font-size:1.2em;padding:14px 0;margin:24px 0;border-radius:15px;width:50%}.scrollMenu.svelte-1i2phmg.svelte-1i2phmg{display:flex;align-items:center;margin:1rem 0}.scrollMenuItem.svelte-1i2phmg.svelte-1i2phmg{background:#fbc9be;color:#695356;text-decoration:none;white-space:normal;word-wrap:break-word;text-align:center;font-family:"Poppins", sans-serif;font-weight:bold;height:160px;width:100px;border-radius:15px;border:none;padding:10px 0;display:grid;grid-template-rows:30% 60%;gap:10px 0px;align-content:stretch;justify-items:center;align-items:center;flex-shrink:0;margin-right:1rem;scroll-snap-align:center}.scrollContent.svelte-1i2phmg.svelte-1i2phmg{display:flex;overflow-x:auto;scroll-behavior:smooth;scroll-snap-type:x mandatory}.arrowButton.svelte-1i2phmg.svelte-1i2phmg{display:flex;align-items:center;justify-content:center;width:30px;height:30px;margin-right:0.5rem;border:none;background:none;cursor:pointer}@media(min-width: 430px) and (max-width: 1200px){.mainContainer.svelte-1i2phmg.svelte-1i2phmg{max-width:1200px;width:100%}}',
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
  return `${$authStore ? `<div class="mainContainer svelte-1i2phmg"><div class="mainContainerRectangle svelte-1i2phmg"><h1>Hei ${escape(name)}</h1>
      <h2>Dette må du få med deg</h2>
      <div class="mainContainerContent svelte-1i2phmg">${each(messages, (message) => {
    return `<div class="mainCard svelte-1i2phmg"><div class="mainCardItem svelte-1i2phmg"><div class="mainCardText"><h3 class="svelte-1i2phmg">${escape(message.title)}</h3>
                <div class="dateContainer svelte-1i2phmg">${validate_component(DateIcon, "DateIcon").$$render($$result, {}, {}, {})}
                  <p><strong>${escape(message.date.toDate().toLocaleString())}</strong>
                  </p></div>
                <p class="small svelte-1i2phmg">Skrevet av <strong>${escape(message.author)}</strong></p>
                <p>${escape(message.description)}</p>
              </div></div>
          </div>`;
  })}</div>
      <div class="mainContainerLink svelte-1i2phmg"><a href="/messages" class="svelte-1i2phmg">Flere beskjeder</a></div>

      <h2>Dette skjer de kommende dagene</h2>

      <div class="mainContainerContent svelte-1i2phmg">${each(events, (event) => {
    return `<div class="mainCard svelte-1i2phmg"><div class="mainCardItem svelte-1i2phmg"><div class="mainCardText"><h3 class="svelte-1i2phmg">${escape(event.title)}</h3>
                <div class="placeContainer svelte-1i2phmg">${validate_component(PlaceIcon, "PlaceIcon").$$render($$result, {}, {}, {})}
                  <p>${escape(event.place)}</p></div>
                <div class="dateContainer svelte-1i2phmg">${validate_component(DateIcon, "DateIcon").$$render($$result, {}, {}, {})}
                  <p><strong>${escape(event.date.toDate().toLocaleString())}</strong>
                  </p></div>
                <p>${escape(event.info)}</p>
              </div></div>
          </div>`;
  })}</div>
      <div class="mainContainerLink svelte-1i2phmg"><a href="/events" class="svelte-1i2phmg">Flere arrangementer</a></div>
      <h2>Nyttig informasjon</h2>
      <div class="scrollMenu svelte-1i2phmg"><button class="arrowButton leftArrowButton svelte-1i2phmg"><span class="icon">${validate_component(ArrowLeft, "ArrowLeft").$$render($$result, {}, {}, {})}</span></button>
        <div class="scrollContent svelte-1i2phmg"${add_attribute("this", scrollContainer, 0)}><button class="scrollMenuItem svelte-1i2phmg"><span>Vaskeri</span>
            <span class="icon">${validate_component(LaundryIcon, "LaundryIcon").$$render($$result, {}, {}, {})}</span></button>
          <button class="scrollMenuItem svelte-1i2phmg"><span>Renhold</span>
            <span class="icon">${validate_component(CleaningIcon, "CleaningIcon").$$render($$result, {}, {}, {})}</span></button>
          <button class="scrollMenuItem svelte-1i2phmg"><span>Avfall og kildesortering</span>
            <span class="icon">${validate_component(WasteIcon, "WasteIcon").$$render($$result, {}, {}, {})}</span></button>
          <button class="scrollMenuItem svelte-1i2phmg"><span>Fellesareale</span>
            <span class="icon">${validate_component(CommonAreaIcon, "CommonAreaIcon").$$render($$result, {}, {}, {})}</span></button>
          <button class="scrollMenuItem svelte-1i2phmg"><span>Regler og rutiner</span>
            <span class="icon">${validate_component(RulesIcon, "RulesIcon").$$render($$result, {}, {}, {})}</span></button>
          <button class="scrollMenuItem svelte-1i2phmg"><span>Internett</span>
            <span class="icon">${validate_component(InternetIcon, "InternetIcon").$$render($$result, {}, {}, {})}</span></button>
          <button class="scrollMenuItem svelte-1i2phmg"><span>Viktige telefonnumre</span>
            <span class="icon">${validate_component(PhoneIcon, "PhoneIcon").$$render($$result, {}, {}, {})}</span></button></div>

        <button class="arrowButton rightArrowButton svelte-1i2phmg"><span class="icon">${validate_component(ArrowRight, "ArrowRight").$$render($$result, {}, {}, {})}</span></button></div>

      <div class="buttonContainer svelte-1i2phmg"><button class="svelte-1i2phmg">Logg ut</button></div></div></div>` : ``}`;
});
export {
  Page as default
};
