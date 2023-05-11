export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15')
];

export const server_loads = [0];

export const dictionary = {
		"/": [3],
		"/about": [4],
		"/dashboard": [5],
		"/events": [6],
		"/information/cleaning": [7,[2]],
		"/information/commonarea": [8,[2]],
		"/information/internet": [9,[2]],
		"/information/laundry": [10,[2]],
		"/information/phone": [11,[2]],
		"/information/rules": [12,[2]],
		"/information/waste": [13,[2]],
		"/messages": [14],
		"/nouser": [15]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';