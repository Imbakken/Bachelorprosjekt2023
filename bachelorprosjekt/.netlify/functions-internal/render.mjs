import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","logo/Heimat.png","manifest.json","service-worker.js"]),
	mimeTypes: {".png":"image/png",".json":"application/json"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.c443f955.js","imports":["_app/immutable/entry/start.c443f955.js","_app/immutable/chunks/index.4e557489.js","_app/immutable/chunks/singletons.85876bcb.js","_app/immutable/chunks/index.37300880.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.6312d806.js","imports":["_app/immutable/entry/app.6312d806.js","_app/immutable/chunks/index.4e557489.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js'),
			() => import('../server/nodes/3.js'),
			() => import('../server/nodes/4.js'),
			() => import('../server/nodes/5.js'),
			() => import('../server/nodes/6.js'),
			() => import('../server/nodes/7.js'),
			() => import('../server/nodes/8.js'),
			() => import('../server/nodes/9.js'),
			() => import('../server/nodes/10.js'),
			() => import('../server/nodes/11.js'),
			() => import('../server/nodes/12.js'),
			() => import('../server/nodes/13.js'),
			() => import('../server/nodes/14.js'),
			() => import('../server/nodes/15.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/addevent",
				pattern: /^\/addevent\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/dashboard",
				pattern: /^\/dashboard\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/events",
				pattern: /^\/events\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "/information/cleaning",
				pattern: /^\/information\/cleaning\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/information/commonarea",
				pattern: /^\/information\/commonarea\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/information/internet",
				pattern: /^\/information\/internet\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/information/laundry",
				pattern: /^\/information\/laundry\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/information/phone",
				pattern: /^\/information\/phone\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/information/rules",
				pattern: /^\/information\/rules\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/information/waste",
				pattern: /^\/information\/waste\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/messages",
				pattern: /^\/messages\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 14 },
				endpoint: null
			},
			{
				id: "/nouser",
				pattern: /^\/nouser\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 15 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
