import { useEffect, useState } from "react";

type PostType = {
    id: number;
    title: string;
    views: number;
};
export default function Fetch() {
    const [posts, setPosts] = useState<PostType[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    useEffect(() => {
        setIsLoading(true);
        setError("");
        fetch("http://localhost:3000/posts")
            .then((response) => {
                if (!response.ok) {
                    /* 에러처리 */
                    throw new Error("네트워크 통신오류");
                }
                return response.json(); /* 처음데이터 가지고와서 json 배열로 변경 */
            })
            .then((data) => setPosts(data)) /* 변경된걸 받아서 state에 업데이트 */
            .catch((e) => setError(e instanceof Error ? e.message : "뭔에러냐"))
            .finally(() => setIsLoading(false)); /* 로딩이 끝난후  */
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
