import "firebase/auth";
import { w as writable } from "./index.js";
import "./firebase.js";
const authStore = writable({
  user: null,
  loading: true,
  data: {}
});
export {
  authStore as a
};
