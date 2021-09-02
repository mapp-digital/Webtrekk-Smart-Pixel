import axios from 'axios';

const dir = process.cwd();
module.exports = {
    mode: 'universal',
    rootDir: dir + '/packages/vue/demo/nuxt/',
    modulesDir: [dir + '/node_modules'],
    plugins: ['~/plugins/webtrekk'],
    generate: {
        routes: function() {
            return axios.get('https://api.tvmaze.com/search/shows?q=batman')
                .then((res) => {
                    return res.data.map((show) => {
                        return '/p/' + show.show.id;
                    });
                });
        }
    }
};
