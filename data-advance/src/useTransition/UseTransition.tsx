import axios from "axios";
import { useEffect, useState, useTransition } from "react";
interface Posts {
    id: number;
    title: string;
    views: number;
}

function UseTransition() {
    const [posts, setPosts] = useState<Posts[]>([]);
    const [isPending, startTransition] = useTransition();

    useEffect(() => {
        startTransition(async () => {
            const res = await axios.get("http://localhost:3000/posts");
            setPosts(res.data);
        });
    }, []);

    if (isPending) return <p>로딩중...........</p>;

    return (
        <>
            <h3>useTransition</h3>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </>
    );
}

export default UseTransition;
