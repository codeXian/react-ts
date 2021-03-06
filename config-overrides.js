const tsImportPluginFactory = require('ts-import-plugin')
const {
  getLoader,
  injectBabelPlugin
} = require("react-app-rewired");
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
  const tsLoader = getLoader(
    config.module.rules,
    rule =>
    rule.loader &&
    typeof rule.loader === 'string' &&
    rule.loader.includes('ts-loader')
  );

  tsLoader.options = {
    getCustomTransformers: () => ({
      before: [tsImportPluginFactory({
        libraryDirectory: 'es',
        libraryName: 'antd',
        style: true,
      })]
    })
  };

  config = rewireLess.withLoaderOptions({
    modifyVars: {
      "@primary-color": "#1DA57A"
    },
  })(config, env);

  config = injectBabelPlugin("syntax-dynamic-import", config);

  return config;
}