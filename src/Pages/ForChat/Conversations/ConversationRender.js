import {Conversation} from "./Conversation";

export const ConversationRender = (props) => {
    const data = props.data;
    console.log(data);
    let elements = null;
    elements = Array.isArray(data) ? data.map(conversation =>
        <Conversation data={conversation}/>
    ):console.log(data.type)
    return (
        <div>{elements}</div>
    )
}