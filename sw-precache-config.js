module.exports = {
  staticFileGlobs: [
    '/manifest.json',
    '/bower_components/webcomponentsjs/*.js',
    '/images/*'
  ],
  navigateFallback: '/index.html',
  navigateFallbackWhitelist: [/^(?!.*\.html$|\/data\/).*/]
};
