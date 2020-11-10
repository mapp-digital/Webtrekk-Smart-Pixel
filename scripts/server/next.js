const {createServer} = require('http');
const next = require('next');

const dir = process.cwd();
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev, dir: `${dir}/packages/react/next/demo`});
const handle = app.getRequestHandler();

app.prepare().then(() => {
    createServer((req, res) => {
        handle(req, res);
    }).listen(3000, err => {
        if (err) {
            throw err;
        }

        console.log('> Ready on http://localhost:3000');
    });
});
