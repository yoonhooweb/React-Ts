import { useEffect, useState } from "react";

export default function AsyncAwait() {
    type PostType = {
        id: number;
        title: string;
        views: number;
    };
    const [posts, setPosts] = useState<PostType[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchPost = async () => {
            setIsLoading(true);
            setError("");
            try {
                const response = await fetch("http://localhost:3000/posts");
                if (!response.ok) {
                    /* 에러처리 */
                    throw new Error("네트워크 통신오류");
                }
                const data = await response.json();
                setPosts(data);
            } catch (e) {
                setError(e instanceof Error ? e.message : "뭔에러냐");
            } finally {
                setIsLoading(false);
            }
        };
        fetchPost();
    }, []);

    if (isLoading) {
        return <p>loading중..</p>;
    }

    if (error) return <p>Error : {error}</p>;
    return (
        <ul>
            {posts.map((post) => {
                return (
                    <li key={post.id}>
                        <span>{post.id}</span>
                        <span>{post.title}</span>
                        <span>{post.views}</span>
                    </li>
                );
            })}
        </ul>
    );
}
