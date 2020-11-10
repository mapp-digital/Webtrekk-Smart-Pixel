jest.spyOn(console, 'log').mockImplementation(() => {});

const expectInCallback = (call, done, timeout = 0) => {
    window.setTimeout(() => {
        try {
            call();
            return done();
        }
        catch (e) {
            return done(e);
        }
    }, timeout);
};

export {expectInCallback};
