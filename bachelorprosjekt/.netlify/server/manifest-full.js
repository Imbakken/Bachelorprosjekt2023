export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","logo/Heimat.png","manifest.json","service-worker.js"]),
	mimeTypes: {".png":"image/png",".json":"application/json"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.235ea667.js","imports":["_app/immutable/entry/start.235ea667.js","_app/immutable/chunks/index.4e557489.js","_app/immutable/chunks/singletons.870c1917.js","_app/immutable/chunks/index.37300880.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.71742f12.js","imports":["_app/immutable/entry/app.71742f12.js","_app/immutable/chunks/index.4e557489.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/10.js'),
			() => import('./nodes/11.js'),
			() => import('./nodes/12.js'),
			() => import('./nodes/13.js'),
			() => import('./nodes/14.js'),
			() => import('./nodes/15.js')
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
};
