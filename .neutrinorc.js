module.exports = {
  use: [
    '@neutrinojs/airbnb',
    [
      '@neutrinojs/react',
      {
        html: {
          title: 'neutrino_experiments'
        }
      }
    ],
    (neutrino) => {
      // Read https://stackoverflow.com/a/36623117
      // This is the key to making React Router work with neutrino
      // Fix issue with nested routes e.g /index/garbage
      neutrino.config.output.publicPath('/');
    }
  ]
};
