const expectInCallback = (call, done, timeout = 0) => {
    window.setTimeout(() => {
        try {
            call();
            done();
        }
        catch(e) {
            // istanbul ignore next
            done(e);
        }
    }, timeout);
};

export { expectInCallback };