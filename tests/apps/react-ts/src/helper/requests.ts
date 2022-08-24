const getUrl = (path: string) => {
    return `https://${window.location.hostname}:4001/${path}`;
};
const getFetchOptions = (method: TRequestMethods, data?: Object) => {
    const options: IFetchOptions = {
        method: method,
        credentials: "include",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
    };
    if (data) {
        options.body = JSON.stringify(data);
    }
    return options;
};

export const post: TPost<ICartItem[] | ILoginResponse> = async (path, data) => {
    return fetch(getUrl(path), getFetchOptions("POST", data)).then((r) =>
        r.json()
    );
};

export const get: TGet<IProduct | IProduct[] | IUser | ICartItem[] | IOrderResponseData> = (
    path
) => {
    return fetch(getUrl(path), getFetchOptions("GET")).then((r) => r.json());
};

export const getFixtureData: TGet<IArticle[]> = async (url) => {
    return fetch(getUrl(`api/fixture/${url}`)).then((r) => r.json());
};
