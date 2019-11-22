jest.spyOn(console, 'log').mockImplementation(() => {});

const expectInCallback = (call, done, timeout = 0) => {
    window.setTimeout(() => {
        try {
            call();
            done();
        }
        catch(e) {
            done(e);
        }
    }, timeout);
};

export { expectInCallback };
