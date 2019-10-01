import React from "react";
import { Link } from "react-router-dom";
import PageNotFound from "../images/its-free-real-estate.gif";
const NotFound = () => (
    <div
        style={{
            background: "#22252a",
            width: "auto",
            height: "100vh",
            paddingTop: "2em"
        }}
    >
        <div style={{ vertivalAlign: "middle", position: "relative" }}>
            <h1 style={{ textAlign: "center", fontSize: "80pt" }}>
                404 Not Found
            </h1>
            <img
                src={PageNotFound}
                style={{
                    width: "50%",
                    height: "50%",
                    display: "block",
                    margin: "auto",
                    position: "relative"
                }}
            />
            <Link
                to="/"
                style={{
                    textAlign: "center",
                    position: "relative",
                    display: "block",
                    paddingTop: "4em"
                }}
            >
                <h4>Return Home</h4>
            </Link>
        </div>
    </div>
);
export default NotFound;
