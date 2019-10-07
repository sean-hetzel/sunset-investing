import React from "react";
import { Link } from "react-router-dom";
const Restricted = () => (
    <div
        style={{
            background: "#22252a",
            width: "auto",
            height: "100vh",
            paddingTop: "2em"
        }}
    >
        <div
            style={{
                width: "20%",
                height: "20%",
                position: "absolute",
                top: "0",
                bottom: "0",
                left: "0",
                right: "0",
                margin: "auto"
            }}
        >
            <h1
                style={{
                    textAlign: "center",
                    display: "block",
                    position: "relative"
                }}
            >
                Restricted
            </h1>
            <p
                style={{
                    textAlign: "center",
                    display: "block",
                    position: "relative"
                }}
            >
                Please <Link to="/login">login</Link> or{" "}
                <Link to="/signup">signup</Link> to view this page.
            </p>
            <Link
                to="/"
                style={{
                    textAlign: "center",
                    display: "block",
                    position: "relative"
                }}
            >
                Return Home
            </Link>
        </div>
    </div>
);
export default Restricted;
