const express = require('express');
const app = express();
const dir = process.cwd();
const path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(dir + '/packages/vue/demo/nuxt/dist/index.html'));
});
app.get('/*', function(req, res) {
    res.sendFile(path.join(dir + '/packages/vue/demo/nuxt/dist/' + req.path));
});

app.listen(3000);
console.log('Generated Nuxt app running on http://localhost:3000/');
