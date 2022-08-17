import React, { useContext, useState } from "react";
import { post } from "../helper/requests";
import Store from "../store/Store";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
    const ctx = useContext(Store);
    let history = useNavigate();
    const [regData, setRegData] = useState<IRegister>({
        firstName: "",
        lastName: "",
        name: "",
        password: "",
    });

    const [loginData, setLoginData] = useState<ILogin>({
        name: "",
        password: "",
    });

    return (
        <div className="login-wrapper">
            <div>
                <h2>Register</h2>
                <p>Register if you are a new user.</p>
                <form
                    id="register"
                    onSubmit={(event) => {
                        event.preventDefault();
                        post("user/register", regData).then((r) => {
                            const response = r as IRegisterResponse;
                            if (response.token) {
                                ctx.userDataHandler();
                                history("/account");
                            } else if (response.message) {
                                ctx.snackbarHandler(response.message);
                            }
                        });
                    }}
                >
                    <p>
                        First name:
                        <input
                            name="firstName"
                            type="text"
                            value={regData.firstName}
                            onChange={(event) => {
                                setRegData((prevState) => {
                                    return {
                                        ...prevState,
                                        firstName: event.target.value,
                                    };
                                });
                            }}
                        />
                    </p>
                    <p>
                        Last name:
                        <input
                            name="lastName"
                            type="text"
                            value={regData.lastName}
                            onChange={(event) => {
                                setRegData((prevState) => {
                                    return {
                                        ...prevState,
                                        lastName: event.target.value,
                                    };
                                });
                            }}
                        />
                    </p>
                    <p>
                        Username:
                        <input
                            name="name"
                            type="text"
                            value={regData.name}
                            onChange={(event) => {
                                setRegData((prevState) => {
                                    return {
                                        ...prevState,
                                        name: event.target.value,
                                    };
                                });
                            }}
                        />
                    </p>
                    <p>
                        Password:
                        <input
                            name="password"
                            type="password"
                            value={regData.password}
                            onChange={(event) => {
                                setRegData((prevState) => {
                                    return {
                                        ...prevState,
                                        password: event.target.value,
                                    };
                                });
                            }}
                        />
                    </p>
                    <p>
                        <button type="submit">Register</button>
                    </p>
                </form>
            </div>
            <div>
                <h2>Login</h2>
                <p>Login with your existing credentials.</p>
                <form
                    id="login"
                    onSubmit={(event) => {
                        event.preventDefault();
                        post("user/login", loginData).then((r) => {
                            const resp = r as ILoginResponse;
                            if (resp.message === "Invalid") {
                                ctx.snackbarHandler("Wrong credentials");
                            } else {
                                ctx.snackbarHandler("You successfully logged in");
                                ctx.userDataHandler();
                                history("/account");
                            }
                        });
                    }}
                >
                    <p>
                        Name:
                        <input
                            name="name"
                            type="text"
                            value={loginData.name}
                            onChange={(event) => {
                                setLoginData((prevState) => {
                                    return {
                                        ...prevState,
                                        name: event.target.value,
                                    };
                                });
                            }}
                        />
                        Password:
                        <input
                            name="password"
                            type="password"
                            value={loginData.password}
                            onChange={(event) => {
                                setLoginData((prevState) => {
                                    return {
                                        ...prevState,
                                        password: event.target.value,
                                    };
                                });
                            }}
                        />
                    </p>
                    <p>
                        <button type="submit">Login</button>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
