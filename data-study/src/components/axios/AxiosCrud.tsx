import axios from "axios";
import { axiosInstance } from "../../api/axios";

export default function AxiosCrud() {
    const axiosGet = async () => {
        const data = await axiosInstance.get("/posts");
        console.log(data);
        return data;
    };
    const axiosPost = async () => {
        const data = await axios.post("http://localhost:3000/posts", {
            title: "axios Data",
            views: 50,
        });
        console.log(data);
    };
    const axiosPut = async () => {
        const data = await axios.put("http://localhost:3000/posts/103", {
            title: "axios modify Data",
            views: 122,
        });
        console.log(data);
    };
    const axiosPatch = async () => {
        const data = await axios.patch("http://localhost:3000/posts/103", {
            title: "axios modify patch Data",
            views: 122,
        });
        console.log(data);
    };
    const axiosDelete = async () => {
        await axios.delete("http://localhost:3000/posts/103");
    };

    return (
        <>
            <button onClick={axiosGet}>GET</button>
            <button onClick={axiosPost}>POST</button>
            <button onClick={axiosPut}>PUT</button>
            <button onClick={axiosPatch}>PATCH</button>
            <button onClick={axiosDelete}>DELETE</button>
        </>
    );
}
