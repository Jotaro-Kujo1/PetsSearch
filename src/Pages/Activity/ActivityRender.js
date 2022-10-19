import {Activity} from "./Activity";
import './activity.css';

export const ActivityRender = (props) => {
    const data = props.data;
    let elements = null;
    elements = Array.isArray(data) ? data.map(activity =>
        <Activity data={activity}/>
    ):console.log(data.type)
    return (
        <div>{elements}</div>
    )
}