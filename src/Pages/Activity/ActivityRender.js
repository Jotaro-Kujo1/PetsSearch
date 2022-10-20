import {Activity} from "./Activity";
import './activity.css';

export const ActivityRender = (props,{deleteNotification}) => {
    const data = props.data;
    let elements = null;
    elements = Array.isArray(data) ? data.map(activity =>
        <Activity data={activity} deleteNotification={deleteNotification}/>
    ):console.log(data.type)
    return (
        <div>{elements}</div>
    )
}