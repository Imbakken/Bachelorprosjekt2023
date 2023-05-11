import { c as create_ssr_component, a as subscribe, d as each, b as add_attribute, v as validate_component, e as escape } from "../../../chunks/index2.js";
import { a as auth } from "../../../chunks/firebase.js";
import { a as authStore, F as Footer } from "../../../chunks/Footer.js";
import { Timestamp } from "firebase/firestore";
import "toastify-js";
import { D as DateIcon, P as PlaceIcon } from "../../../chunks/DateIcon.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: 'h2.svelte-1ml5rhk.svelte-1ml5rhk{padding-top:30px;margin-bottom:5px;font-size:1.4em}.mainContainer.svelte-1ml5rhk.svelte-1ml5rhk{background-image:url("/backgroundapp/bakgrunnKalender.jpg");background-repeat:no-repeat;background-size:cover;margin:0 auto;max-width:430px;min-height:100vh;padding-top:50px;position:relative;width:100%}.mainContainerRectangle.svelte-1ml5rhk.svelte-1ml5rhk{background-color:#fefaef;border-radius:30px 30px 0 0;bottom:0;height:75%;overflow:scroll;padding:30px;position:absolute;width:100%}.mainContainerContent.svelte-1ml5rhk.svelte-1ml5rhk{align-items:center;display:flex;flex-direction:column;margin-bottom:5em}.mainContainerHeader.svelte-1ml5rhk.svelte-1ml5rhk{display:flex;flex-direction:column}.mainContainerHeader.svelte-1ml5rhk Button.svelte-1ml5rhk{background:#fbc9be;color:#695356;font-family:"Poppins", sans-serif;text-decoration:none;padding:1em;margin:0.5em 0;border-radius:5px;width:100%}.mainContainerForm.svelte-1ml5rhk.svelte-1ml5rhk{display:flex;flex-direction:column;width:100%}.mainContainerForm.svelte-1ml5rhk input.svelte-1ml5rhk,textarea.svelte-1ml5rhk.svelte-1ml5rhk,input[type="datetime-local"].svelte-1ml5rhk.svelte-1ml5rhk{background:#fbc9be;color:#000;font-family:"Poppins", sans-serif;font-size:0.8em;border:none;border-radius:15px;display:block;padding:15px;width:100%;min-height:3.5em}.mainContainerForm.svelte-1ml5rhk label.svelte-1ml5rhk{font-size:1.2em;margin:0.5em 0}.datetime-input.svelte-1ml5rhk.svelte-1ml5rhk{border:none;box-sizing:border-box;outline:0;padding-left:0.75rem;display:flex;justify-content:center;position:relative;width:100%;-moz-appearance:textfield;-webkit-appearance:none;margin:0}.formLabel.svelte-1ml5rhk.svelte-1ml5rhk{font-size:0.8em;margin-bottom:5px}.eventCard.svelte-1ml5rhk.svelte-1ml5rhk{background:#fbc9be;border-radius:15px;margin:10px;padding:10px;width:100%}.eventCardButtons.svelte-1ml5rhk.svelte-1ml5rhk{display:flex;justify-content:space-around;padding-top:15px}.eventCardButtons.svelte-1ml5rhk button.svelte-1ml5rhk{background:#fefaef;color:#695356;border-radius:5px;font-family:"Poppins", sans-serif;font-size:1em;margin:2px;padding:5px;text-decoration:none;width:8em}.eventCardItem.svelte-1ml5rhk.svelte-1ml5rhk{display:flex;flex-direction:column;padding:10px}.error.svelte-1ml5rhk.svelte-1ml5rhk{margin:15px;font-size:0.8em}.placeContainer.svelte-1ml5rhk.svelte-1ml5rhk{display:flex;align-items:center;margin:2px 0}.dateContainer.svelte-1ml5rhk.svelte-1ml5rhk{display:flex;align-items:center;margin:2px 0}.buttonContainer.svelte-1ml5rhk.svelte-1ml5rhk{display:flex;justify-content:center;margin-top:25px}.buttonContainer.svelte-1ml5rhk button.svelte-1ml5rhk{background:#fbc9be;color:#695356;font-family:"Poppins", sans-serif;font-size:1.2em;padding:14px 0;margin:5px;border-radius:15px;width:10em;height:3em}.mainContainer.svelte-1ml5rhk button.svelte-1ml5rhk{border:none;cursor:pointer}#details.svelte-1ml5rhk.svelte-1ml5rhk{background:#fbc9be;border-radius:15px;width:100%}#details.svelte-1ml5rhk p.svelte-1ml5rhk,h3.svelte-1ml5rhk.svelte-1ml5rhk{margin:5px 0}#details.svelte-1ml5rhk button.svelte-1ml5rhk{background:none;color:#695356;border-radius:5px;font-family:"Poppins", sans-serif;font-size:1em;margin:2px;padding:5px;text-decoration:underline;width:8em}.detailsButton.svelte-1ml5rhk.svelte-1ml5rhk{display:flex;justify-content:center}@media(min-width: 430px) and (max-width: 1200px){.mainContainer.svelte-1ml5rhk.svelte-1ml5rhk{max-width:1200px;width:100%}.eventCardButtons.svelte-1ml5rhk.svelte-1ml5rhk{display:flex;flex-direction:column}.eventCardItem.svelte-1ml5rhk.svelte-1ml5rhk{display:flex;flex-direction:row}.eventCardText.svelte-1ml5rhk.svelte-1ml5rhk{width:80%}}@media(min-width: 1200px) and (max-width: 1920px){.mainContainer.svelte-1ml5rhk.svelte-1ml5rhk{max-width:1920px;background-image:url("/backgrounddesktop/BackgroundDesktop4.jpg")}}',
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
${$authStore ? `<div class="mainContainer svelte-1ml5rhk"><div class="mainContainerRectangle svelte-1ml5rhk"><div class="mainContainerHeader svelte-1ml5rhk"><h1>Arrangementer</h1>
        <button class="svelte-1ml5rhk"><p>Legg til et nytt arrangement</p></button></div>
      <div class="mainContainerContent svelte-1ml5rhk">${each(events, (event2) => {
    return `<div class="eventCard svelte-1ml5rhk"><div class="eventCardItem svelte-1ml5rhk"><div class="eventCardText svelte-1ml5rhk"><h3 class="svelte-1ml5rhk">${escape(event2.title)}</h3>
                <div class="dateContainer svelte-1ml5rhk">${validate_component(DateIcon, "DateIcon").$$render($$result, {}, {}, {})}
                  <p><strong>${escape(event2.date.toDate().toLocaleString())}</strong>
                  </p></div>
                <div class="placeContainer svelte-1ml5rhk">${validate_component(PlaceIcon, "PlaceIcon").$$render($$result, {}, {}, {})}
                  <p>${escape(event2.place)}</p></div>

                ${``}</div>
              <div class="eventCardButtons svelte-1ml5rhk">${canEdit(event2.createdBy) ? `<button class="svelte-1ml5rhk"><p>Endre</p></button>
                  <button class="svelte-1ml5rhk"><p>Slett</p>
                  </button>` : ``}
                <button class="svelte-1ml5rhk"><p>Detaljer</p></button>
              </div></div>
          </div>`;
  })}

        <form id="mainForm" class="mainContainerForm svelte-1ml5rhk"><h2 class="svelte-1ml5rhk">Legg til arrangement</h2>
          <div class="titleContainer"><label for="title" class="titleLabel svelte-1ml5rhk">Navn</label>
            <input type="text" placeholder="Navn på arrangementet" class="form-control svelte-1ml5rhk"${add_attribute("value", event.title, 0)}${add_attribute("this", inputElement, 0)}></div>
          <div class="date"><label for="date" class="dateLabel svelte-1ml5rhk">Dato og klokkeslett</label>
            <p class="formLabel svelte-1ml5rhk">Husk å legge til dato og klokkeslett, også når du skal endre.
            </p>
            <input type="datetime-local" class="form-control datetime-input svelte-1ml5rhk"${add_attribute("value", event.date, 0)}></div>

          <div class="duration"><label for="duration" class="durationLabel svelte-1ml5rhk">Varighet</label>
            <input type="number" placeholder="Timer" class="form-control svelte-1ml5rhk"${add_attribute("value", event.duration, 0)}></div>
          <div class="place"><label for="place" class="placeLabel svelte-1ml5rhk">Sted</label>
            <input type="text" placeholder="Sted" class="form-control svelte-1ml5rhk"${add_attribute("value", event.place, 0)}></div>
          <div class="organizerContainer"><label for="organizer" class="organizerLabel svelte-1ml5rhk">Arrangør</label>
            <input type="text" placeholder="Arrangør" class="form-control svelte-1ml5rhk"${add_attribute("value", event.organizer, 0)}></div>
          <div class="infoContainer"><label for="info" class="infoLabel svelte-1ml5rhk">Info</label>
            <textarea rows="3" placeholder="Info om arrangementet" class="form-control svelte-1ml5rhk">${""}</textarea></div>
          ${``}
          <div class="buttonContainer svelte-1ml5rhk"><button class="saveButton svelte-1ml5rhk" ${"disabled"}><span class="ms-2">${`Lagre`}</span></button>
            ${``}</div></form></div>
      ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div></div>` : ``}`;
});
export {
  Page as default
};
