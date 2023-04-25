import { c as create_ssr_component, a as subscribe, i as each, b as add_attribute, v as validate_component, e as escape } from "../../../chunks/index2.js";
import { a as auth } from "../../../chunks/firebase.js";
import { a as authStore } from "../../../chunks/store.js";
import { Timestamp } from "firebase/firestore";
import "toastify-js";
import { B as BackButton } from "../../../chunks/BackButton.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: 'h1.svelte-a1582w.svelte-a1582w{padding-bottom:30px}h2.svelte-a1582w.svelte-a1582w{padding:30px 0 30px 0}.mainContainer.svelte-a1582w.svelte-a1582w{background-image:url("../../assets/bakgrunnBeskjeder.jpg");background-repeat:no-repeat;background-size:cover;margin:0 auto;max-width:430px;min-height:100vh;padding-top:50px;position:relative;width:100%}.mainContainerRectangle.svelte-a1582w.svelte-a1582w{background-color:#fefaef;border-radius:30px 30px 0 0;bottom:0;height:75%;overflow:scroll;padding:30px;position:absolute;width:100%}.mainContainerContent.svelte-a1582w.svelte-a1582w{align-items:center;display:flex;flex-direction:column;margin:0 auto}.mainContainerForm.svelte-a1582w.svelte-a1582w{display:flex;flex-direction:column;width:100%}.mainContainerForm.svelte-a1582w input.svelte-a1582w,textarea.svelte-a1582w.svelte-a1582w{background:#fbc9be;border:none;border-radius:15px;color:#000000;padding:15px;width:100%}.eventCard.svelte-a1582w.svelte-a1582w{background:#fbc9be;border-radius:15px;margin:10px;padding:10px;width:100%}.eventCardParagraph.svelte-a1582w.svelte-a1582w{display:flex;font-size:0.8em;justify-content:space-between}.eventCardButtons.svelte-a1582w.svelte-a1582w{display:flex;justify-content:space-around;padding-top:15px}.eventCardButtons.svelte-a1582w button.svelte-a1582w{background:#db7b65;border-radius:5px;font-family:"Poppins", sans-serif;font-size:0.8em;margin:2px;padding:5px;text-decoration:none;width:8em}.eventCardItem.svelte-a1582w.svelte-a1582w{display:flex;flex-direction:column;justify-content:space-between;padding:10px}.error.svelte-a1582w.svelte-a1582w{margin:15px;font-size:0.8em}.buttonContainer.svelte-a1582w.svelte-a1582w{display:flex;justify-content:center;margin-top:25px}.buttonContainer.svelte-a1582w button.svelte-a1582w{background:#fbc9be;color:#695356;font-family:"Poppins", sans-serif;font-size:1.2em;padding:14px 0;margin:5px;border-radius:15px;width:10em}.mainContainer.svelte-a1582w button.svelte-a1582w{border:none;cursor:pointer}#details.svelte-a1582w.svelte-a1582w{background:#fbc9be;border-radius:15px;margin:10px;padding:10px;width:100%}#details.svelte-a1582w p.svelte-a1582w,h3.svelte-a1582w.svelte-a1582w{margin:5px 0}#details.svelte-a1582w button.svelte-a1582w{background:#db7b65;border-radius:5px;font-family:"Poppins", sans-serif;font-size:0.8em;margin:2px;padding:5px;text-decoration:none;width:8em}.detailsButton.svelte-a1582w.svelte-a1582w{display:flex;justify-content:center}@media(min-width: 430px) and (max-width: 1200px){.mainContainer.svelte-a1582w.svelte-a1582w{max-width:1200px;width:100%}.eventCardButtons.svelte-a1582w.svelte-a1582w{display:flex;flex-direction:column}.eventCardItem.svelte-a1582w.svelte-a1582w{display:flex;flex-direction:row}.eventCardParagraph.svelte-a1582w.svelte-a1582w{display:flex;flex-direction:column}.eventCardText.svelte-a1582w.svelte-a1582w{width:80%}}',
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
${$authStore ? `<div class="mainContainer svelte-a1582w"><div class="mainContainerRectangle svelte-a1582w"><h1 class="svelte-a1582w">Arrangementer</h1>
      <div class="mainContainerContent svelte-a1582w">${each(events, (event2) => {
    return `<div class="eventCard svelte-a1582w"><div class="eventCardItem svelte-a1582w"><div class="eventCardText svelte-a1582w"><div class="eventCardParagraph svelte-a1582w"><p>${escape(event2.date.toDate().toLocaleString())}</p>
                  <p>Arrangert av ${escape(event2.organizer)}</p></div>
                <h3 class="svelte-a1582w">${escape(event2.title)}</h3>
                <p>${escape(event2.place)}</p>
                <p>${escape(event2.info)}</p></div>
              <div class="eventCardButtons svelte-a1582w">${canEdit(event2.createdBy) ? `<button class="svelte-a1582w"><p>Endre</p></button>
                  <button class="svelte-a1582w"><p>Slett</p>
                  </button>` : ``}
                <button class="svelte-a1582w"><p>Detaljer</p></button>
              </div></div>
          </div>`;
  })}
        ${``}
        <form id="mainForm" class="mainContainerForm svelte-a1582w"><h2 class="svelte-a1582w">Legg til arrangement</h2>
          <div class="titleContainer"><label for="title" class="titleLabel">Navn</label>
            <input type="text" placeholder="Navn på arrangementet" class="form-control svelte-a1582w"${add_attribute("value", event.title, 0)}${add_attribute("this", inputElement, 0)}></div>
          <div class="date"><label for="date" class="dateLabel">Dato og klokkeslett</label>
            <input type="datetime-local" placeholder="Dato og klokkeslett" class="form-control svelte-a1582w"${add_attribute("value", event.date, 0)}></div>
          <div class="duration"><label for="duration" class="durationLabel">Varighet</label>
            <input type="number" placeholder="Varighet" class="form-control svelte-a1582w"${add_attribute("value", event.duration, 0)}></div>
          <div class="place"><label for="place" class="placeLabel">Sted</label>
            <input type="text" placeholder="Sted" class="form-control svelte-a1582w"${add_attribute("value", event.place, 0)}></div>
          <div class="organizerContainer"><label for="organizer" class="organizerLabel">Arrangør</label>
            <input type="text" placeholder="arrangør" class="form-control svelte-a1582w"${add_attribute("value", event.organizer, 0)}></div>
          <div class="infoContainer"><label for="info" class="infoLabel">Info</label>
            <textarea rows="3" placeholder="Info om arrangementet" class="form-control svelte-a1582w">${""}</textarea></div>
          ${``}
          <div class="buttonContainer svelte-a1582w"><button class="saveButton svelte-a1582w" ${"disabled"}><span class="ms-2">${`Lagre`}</span></button>
            ${``}</div></form>
        ${validate_component(BackButton, "BackButton").$$render($$result, {}, {}, {})}</div></div></div>` : ``}`;
});
export {
  Page as default
};
