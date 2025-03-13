module.exports = {
	webpack: {
	  configure: (webpackConfig) => {
		// Find the SVGR rule
		const svgrRule = webpackConfig.module.rules.find(rule => rule.oneOf?.some(one => /svgr/.test(one.use?.loader)));
		if (svgrRule) {
		  svgrRule.oneOf.forEach(one => {
			if (/svgr/.test(one.use?.loader)) {
			  one.options = {
				...one.options,
				svgoConfig: {
				  plugins: [
					{
					  removeDimensions: true, // Optional: removes width/height if you want to control them in React
					},
				  ],
				},
				throwIfNamespace: false, // Bypass the namespace tag error
			  };
			}
		  });
		}
		return webpackConfig;
	  },
	},
  };