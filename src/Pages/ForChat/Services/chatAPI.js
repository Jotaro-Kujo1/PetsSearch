import Axios from "axios";
import axios from "axios";


const api = Axios.create({
    baseURL: 'http://localhost:8080/api/',
});


const chatAPI = {
    getMessages: (groupId) => {
        console.log('Calling get messages from API');
        return api.get(`messages/${groupId}`);
    },

    sendMessage: (username, text) => {
        let msg = {
            sender_name: username,
            receiver_name: "test",
            message: text,
            timestamp: "",
            profimg: localStorage.getItem("picId")
        }
        console.log(msg);
        return api.post("send",msg);

    }
}




export default chatAPI;