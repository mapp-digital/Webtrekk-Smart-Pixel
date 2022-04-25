const expectInCallback = (call: () => void, done: (...args: any) => void, timeout = 0) => {
    window.setTimeout(() => {
        try {
            call();
            return done();
        }
        catch (e) {
            // istanbul ignore next
            return done(e);
        }
    }, timeout);
};

export {expectInCallback};
