import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export const file = '_app/immutable/entry/_layout.svelte.ffbf3ea4.js';
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["_app/immutable/entry/_layout.svelte.ffbf3ea4.js","_app/immutable/chunks/index.4e557489.js","_app/immutable/chunks/store.67574679.js","_app/immutable/chunks/index.37300880.js"];
export const stylesheets = ["_app/immutable/assets/_layout.46d1dd4e.css"];
export const fonts = [];
