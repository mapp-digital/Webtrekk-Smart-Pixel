export const getFixtureData = async (url = "") => {
    const port = location.protocol === "http:" ? "4000" : "4001";
    return fetch(`${location.protocol}//phoenix:${port}/api/fixture/${url}`).then(r => {
        return r.json();
    });
};
