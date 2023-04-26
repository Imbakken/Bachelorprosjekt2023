import { c as create_ssr_component, a as subscribe, d as each, b as add_attribute, v as validate_component, e as escape } from "../../../chunks/index2.js";
import { a as auth } from "../../../chunks/firebase.js";
import { a as authStore } from "../../../chunks/store.js";
import { Timestamp } from "firebase/firestore";
import "toastify-js";
import { B as BackButton } from "../../../chunks/BackButton.js";
import { P as PlaceIcon } from "../../../chunks/PlaceIcon.js";
import { D as DateIcon } from "../../../chunks/DateIcon.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: 'h1.svelte-1aquyfw.svelte-1aquyfw{padding-bottom:30px}h2.svelte-1aquyfw.svelte-1aquyfw{padding:30px 0 30px 0}h3.svelte-1aquyfw.svelte-1aquyfw{font-size:1.5em}.mainContainer.svelte-1aquyfw.svelte-1aquyfw{background-image:url("../../assets/bakgrunnBeskjeder.jpg");background-repeat:no-repeat;background-size:cover;margin:0 auto;max-width:430px;min-height:100vh;padding-top:50px;position:relative;width:100%}.mainContainerRectangle.svelte-1aquyfw.svelte-1aquyfw{background-color:#fefaef;border-radius:30px 30px 0 0;bottom:0;height:75%;overflow:scroll;padding:30px;position:absolute;width:100%}.mainContainerContent.svelte-1aquyfw.svelte-1aquyfw{align-items:center;display:flex;flex-direction:column;margin:0 auto}.mainContainerForm.svelte-1aquyfw.svelte-1aquyfw{display:flex;flex-direction:column;width:100%}.mainContainerForm.svelte-1aquyfw input.svelte-1aquyfw,textarea.svelte-1aquyfw.svelte-1aquyfw,input[type="datetime-local"].svelte-1aquyfw.svelte-1aquyfw{background:#fbc9be;border:none;border-radius:15px;color:#695356;padding:15px;width:100%}.eventCard.svelte-1aquyfw.svelte-1aquyfw{background:#fbc9be;border-radius:15px;margin:10px;padding:10px;width:100%}.eventCardButtons.svelte-1aquyfw.svelte-1aquyfw{display:flex;justify-content:space-around;padding-top:15px}.eventCardButtons.svelte-1aquyfw button.svelte-1aquyfw{background:#db7b65;color:#695356;border-radius:5px;font-family:"Poppins", sans-serif;font-size:1em;margin:2px;padding:5px;text-decoration:none;width:8em}.eventCardItem.svelte-1aquyfw.svelte-1aquyfw{display:flex;flex-direction:column;padding:10px}.error.svelte-1aquyfw.svelte-1aquyfw{margin:15px;font-size:0.8em}.placeContainer.svelte-1aquyfw.svelte-1aquyfw{display:flex;align-items:center}.dateContainer.svelte-1aquyfw.svelte-1aquyfw{display:flex;align-items:center}.buttonContainer.svelte-1aquyfw.svelte-1aquyfw{display:flex;justify-content:center;margin-top:25px}.buttonContainer.svelte-1aquyfw button.svelte-1aquyfw{background:#fbc9be;color:#695356;font-family:"Poppins", sans-serif;font-size:1.2em;padding:14px 0;margin:5px;border-radius:15px;width:10em}.mainContainer.svelte-1aquyfw button.svelte-1aquyfw{border:none;cursor:pointer}#details.svelte-1aquyfw.svelte-1aquyfw{background:#fbc9be;border-radius:15px;margin:10px;padding:10px;width:100%}#details.svelte-1aquyfw p.svelte-1aquyfw,h3.svelte-1aquyfw.svelte-1aquyfw{margin:5px 0}#details.svelte-1aquyfw button.svelte-1aquyfw{background:#db7b65;border-radius:5px;font-family:"Poppins", sans-serif;font-size:0.8em;margin:2px;padding:5px;text-decoration:none;width:8em}.detailsButton.svelte-1aquyfw.svelte-1aquyfw{display:flex;justify-content:center}@media(min-width: 430px) and (max-width: 1200px){.mainContainer.svelte-1aquyfw.svelte-1aquyfw{max-width:1200px;width:100%}.eventCardButtons.svelte-1aquyfw.svelte-1aquyfw{display:flex;flex-direction:column}.eventCardItem.svelte-1aquyfw.svelte-1aquyfw{display:flex;flex-direction:row}.eventCardText.svelte-1aquyfw.svelte-1aquyfw{width:80%}}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $authStore, $$unsubscribe_authStore;
  $$unsubscribe_authStore = subscribe(authStore, (value) => $authStore = value);
  let event = {
    title: "",
    info: "",
    date: Timestamp.fromDate(new Date()),
    duration: null,
    place: "",
    organizer: ""
  };
  let events = [];
  let inputElement;
  function canEdit(createdBy) {
    const currentUser = auth.currentUser;
    return currentUser && createdBy === currentUser.uid;
  }
  $$result.css.add(css);
  $$unsubscribe_authStore();
  return `
${$authStore ? `<div class="mainContainer svelte-1aquyfw"><div class="mainContainerRectangle svelte-1aquyfw"><h1 class="svelte-1aquyfw">Arrangementer</h1>
      <div class="mainContainerContent svelte-1aquyfw">${each(events, (event2) => {
    return `<div class="eventCard svelte-1aquyfw"><div class="eventCardItem svelte-1aquyfw"><div class="eventCardText svelte-1aquyfw"><h3 class="svelte-1aquyfw">${escape(event2.title)}</h3>
                <div class="placeContainer svelte-1aquyfw">${validate_component(PlaceIcon, "PlaceIcon").$$render($$result, {}, {}, {})}
                  <p>${escape(event2.place)}</p></div>
                <div class="dateContainer svelte-1aquyfw">${validate_component(DateIcon, "DateIcon").$$render($$result, {}, {}, {})}
                  <p><strong>${escape(event2.date.toDate().toLocaleString())}</strong>
                  </p></div>
                <p>${escape(event2.info)}</p></div>
              <div class="eventCardButtons svelte-1aquyfw">${canEdit(event2.createdBy) ? `<button class="svelte-1aquyfw"><p>Endre</p></button>
                  <button class="svelte-1aquyfw"><p>Slett</p>
                  </button>` : ``}
                <button class="svelte-1aquyfw"><p>Detaljer</p></button>
              </div></div>
          </div>`;
  })}
        ${``}
        <form id="mainForm" class="mainContainerForm svelte-1aquyfw"><h2 class="svelte-1aquyfw">Legg til arrangement</h2>
          <div class="titleContainer"><label for="title" class="titleLabel">Navn</label>
            <input type="text" placeholder="Navn på arrangementet" class="form-control svelte-1aquyfw"${add_attribute("value", event.title, 0)}${add_attribute("this", inputElement, 0)}></div>
          <div class="date"><label for="date" class="dateLabel">Dato og klokkeslett</label>
            <input type="datetime-local" placeholder="Dato og klokkeslett" class="form-control svelte-1aquyfw"${add_attribute("value", event.date, 0)}></div>
          <div class="duration"><label for="duration" class="durationLabel">Varighet</label>
            <input type="number" placeholder="Varighet" class="form-control svelte-1aquyfw"${add_attribute("value", event.duration, 0)}></div>
          <div class="place"><label for="place" class="placeLabel">Sted</label>
            <input type="text" placeholder="Sted" class="form-control svelte-1aquyfw"${add_attribute("value", event.place, 0)}></div>
          <div class="organizerContainer"><label for="organizer" class="organizerLabel">Arrangør</label>
            <input type="text" placeholder="Arrangør" class="form-control svelte-1aquyfw"${add_attribute("value", event.organizer, 0)}></div>
          <div class="infoContainer"><label for="info" class="infoLabel">Info</label>
            <textarea rows="3" placeholder="Info om arrangementet" class="form-control svelte-1aquyfw">${""}</textarea></div>
          ${``}
          <div class="buttonContainer svelte-1aquyfw"><button class="saveButton svelte-1aquyfw" ${"disabled"}><span class="ms-2">${`Lagre`}</span></button>
            ${``}</div></form>
        ${validate_component(BackButton, "BackButton").$$render($$result, {}, {}, {})}</div></div></div>` : ``}`;
});
export {
  Page as default
};
