import React from "react"

const PercentageBar = props => {

    return (
        <li className="list-group-item">
        <div className="text d-flex justify-content-between"><span>{props.percent}% Owned</span></div>
        <div className="progress">
            <div role="progressbar" style={{width: `${props.percent}%`}} aria-valuenow={props.percent} aria-valuemin={0} aria-valuemax="100" className="progress-bar dashbg-1 owned-bar"></div>
        </div>
        </li>
    )
}
export default PercentageBar;