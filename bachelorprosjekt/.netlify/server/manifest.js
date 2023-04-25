export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","logo/Heimat.png","manifest.json","service-worker.js"]),
	mimeTypes: {".png":"image/png",".json":"application/json"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.81dafa59.js","imports":["_app/immutable/entry/start.81dafa59.js","_app/immutable/chunks/index.4e557489.js","_app/immutable/chunks/singletons.09fa908e.js","_app/immutable/chunks/index.37300880.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.1d9bd66e.js","imports":["_app/immutable/entry/app.1d9bd66e.js","_app/immutable/chunks/index.4e557489.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
