type TCartAction = "add" | "delete";
type TRequestMethods = "GET" | "POST";
type TPost<T> = (
    path: string,
    data: IProduct | ICartItem | ILogin | IRegister
) => Promise<T>;
type TGet<T> = (path: string) => Promise<T>;
type TSnackbarHandler = (message: string) => void;

interface IFetchOptions {
    method: TRequestMethods;
    credentials: "include";
    mode: "cors";
    headers: HeadersInit;
    body?: BodyInit;
}

interface IState {
    cart: ICartItem[];
    cartIsOpen: boolean;
    cartAmount: string;
    cartSum: string;
    refreshCart: () => void;
    userData: IUser | false;
    logoutHandler: TLogoutHandler;
    snackbar: string | false;
    snackbarHandler: TSnackbarHandler;
    cartHandler: TCartHandler;
    openCartHandler: (isOpen: boolean) => void;
    userDataHandler: () => void;
}

interface IProduct {
    description: string;
    id: number;
    imageUrl: string;
    name: string;
    price: number;
    sku: string;
}

interface ICartItem extends IProduct {
    quantity: number | string;
    sum: number;
}

type TCartHandler = (item: IProduct | ICartItem, action: TCartAction) => void;

type TOpenCartHandler = (isOpen: boolean) => void;

interface IUser {
    name?: string;
    firstName?: string;
    lastName?: string;
    orders?: IOrderData[];
    message?: "Unauthorized";
}

type TLogoutHandler = () => void;

interface ILogin {
    name: string;
    password: string;
}

interface ILoginResponse {
    token?: string;
    message?: "Invalid";
}

interface IArticle {
    content: string;
    id: number;
    slug: string;
    title: string;
}

interface IRegister {
    firstName: string;
    lastName: string;
    name: string;
    password: string;
}

interface IRegisterResponse {
    message?: "User exists already" | "No username / password";
    token?: string;
}

interface IOrderData {
    orderId: number;
    orderValue: number;
    products: ICartItem[];
}

interface IOrderResponseData {
    orderId: number;
    data: {
        orderValue: number;
        products: ICartItem[];
    };
}

interface IReducerState {
    count: number;
}

type TReducerAction =
    | {
          type: "increment";
          webtrekk?: any;
      }
    | { type: "decrement"; webtrekk?: any };
