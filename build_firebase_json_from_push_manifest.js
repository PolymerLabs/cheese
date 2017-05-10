const pushManifest = require('./build/unbundled/push-manifest.json');

const headersConfigList = Object.keys(pushManifest).map((resourcePath) => {
  const resources = pushManifest[resourcePath];
  const linkHeaderValues = Object.keys(resources).map((dependencyPath) => {
    const dependency = resources[dependencyPath];
    return `</${dependencyPath}>;rel=preload;as=${dependency.type}`;
  });

  if (resourcePath === 'src/snap-app.html') {
    resourcePath = '';
    linkHeaderValues.unshift(
      '</bower_components/webcomponentsjs/webcomponents-loader.js>;rel=preload;as=script',
      '</src/snap-app.html>;rel=preload;as=document');
  }

  return {
    source: `/${resourcePath}`,
    "headers": [{
      "key": "Link",
      "value": linkHeaderValues.join(',')
    }]
  };
});

const firebaseConfig = {
  "hosting": {
    "public": "build/unbundled",
    "headers": headersConfigList
  }
};

const json = JSON.stringify(firebaseConfig, null, 2);

console.log(json);
require('fs').writeFileSync('./firebase.json', json);
