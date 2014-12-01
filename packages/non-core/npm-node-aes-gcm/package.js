Package.describe({
  summary: "Wrapper around the node-aes-gcm npm package",
  version: '0.1.4-win.0',
  name: "npm-node-aes-gcm"
});

Npm.depends({
  'node-aes-gcm': '0.1.3'
});

Package.on_use(function (api) {
  api.export('NpmModuleNodeAesGcm', 'server');
  api.addFiles('wrapper.js', 'server');
});
