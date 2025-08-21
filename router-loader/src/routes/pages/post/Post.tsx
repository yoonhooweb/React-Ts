import { useEffect, useState } from "react";
import { axiosInstance } from "../../../api/axios";

export default function Post() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axiosInstance.get("/posts");
            setPosts(data);
        };
        fetchData();
    }, []);
    return (
        <>
            <pre>{JSON.stringify(posts, null, 2)}</pre>
        </>
    );
}
