const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-55db6da2.js","imports":["_app/immutable/start-55db6da2.js","_app/immutable/chunks/index-c50cc6f5.js","_app/immutable/chunks/singletons-c63ec924.js","_app/immutable/chunks/parse-f0c618df.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-a48f2c65.js'),
			() => import('./chunks/1-d6c8c833.js'),
			() => import('./chunks/2-7812dd4f.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export { manifest };
//# sourceMappingURL=manifest.js.map
