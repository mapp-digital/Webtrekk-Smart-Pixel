import React, { useContext } from "react";
import Store from "../store/Store";

const Snackbar: React.FC = () => {
    const ctx = useContext(Store);
    if (!ctx.snackbar) {
        return null;
    }
    return <div className="snackbar">{ctx.snackbar}</div>;
};

export default Snackbar;
