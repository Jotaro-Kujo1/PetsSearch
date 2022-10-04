import {Conversation} from "../ForChat/Conversations/Conversation";
import {Comment} from "./Comment";

export const CommentRender = (props) => {
    const data = props.data;
    //console.log(data);
    let elements = null;
    elements = Array.isArray(data) ? data.map(comment =>
        <Comment data={comment}/>
    ):console.log(data.type)
    return (
        <div>{elements}</div>
    )
}