import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { axiosInstance } from "../api/axios";
import Posts from "../type/posts";
import LoadingState from "./LoadingState";
import ErrorState from "./ErrorState";
import NoData from "./NoData";
import { UsePostStore } from "../store/card/postStore";

export default function PostList() {
    const [posts, setPosts] = useState<Posts[]>([]);
    const [isLoding, setIsLoding] = useState(false);
    const [error, setError] = useState("");

    const currentPage = UsePostStore((state) => state.currentPage);
    const limit = UsePostStore((state) => state.limit);

    useEffect(() => {
        const fetchPosts = async () => {
            setIsLoding(true);
            try {
                const response = await axiosInstance.get(`/posts?_page=${currentPage}&_limit=${limit}`);
                setPosts(response.data);
            } catch (e) {
                setError(e instanceof Error ? e.message : "뭔 에러야");
            } finally {
                setIsLoding(false);
            }
        };
        fetchPosts();
    }, [currentPage, limit]);

    return (
        <div className="mb-8">
            {/* 데이터가 없을 때 */}
            {/* <NoData /> */}
            {/* 로딩 중일 때 */}
            {/* <LoadingState /> */}
            {/* 에러가 발생했을 때 */}
            {/* <ErrorState /> */}
            {/* 데이터가 있을 때 */}

            {posts.length === 0 ? (
                <NoData />
            ) : isLoding ? (
                <LoadingState />
            ) : error ? (
                <ErrorState />
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((post) => {
                        return <PostCard key={post.id} {...post} />;
                    })}
                </div>
            )}

            {}
        </div>
    );
}
