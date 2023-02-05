const rootImportOpts = {
    paths: [
      {
        root: __dirname,
        rootPathPrefix: '~/',
        rootPathSuffix: 'src/components',
      },
      {
        root: __dirname,
        rootPathPrefix: '@redux',
        rootPathSuffix: 'src/redux',
      },
      {
        root: __dirname,
        rootPathPrefix: '@css',
        rootPathSuffix: 'src/css',
      },
      {
        root: __dirname,
        rootPathPrefix: '@img',
        rootPathSuffix: 'src/img',
      }
    ]
}


  module.exports = (api) => {
    api.cache(true);
   
    const plugins = [['babel-plugin-root-import', rootImportOpts]];
    return { plugins };
  };