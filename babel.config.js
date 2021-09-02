let babelPresets = [
    ['@babel/preset-env']
];

if (process.env.REACT_VERSION) {
    babelPresets.push(['@babel/preset-react']);
}
if (process.env.NEXT_VERSION) {
    if (!process.env.NEXT) {
        babelPresets.push(['next/babel']);
    }
    else {
        babelPresets.push(['@babel/preset-react']);
    }
}
else if (process.env.ANGULAR_VERSION) {
    // do nothing
}
else if (process.env.VUE_VERSION) {
    if (!process.env.VUE) {
        babelPresets = [
            ['env', {'targets': {'node': 'current'}}]
        ];
    }
}

module.exports = {
    presets: babelPresets
};
