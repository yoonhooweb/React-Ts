import { LoaderFunctionArgs } from "react-router";
import { axiosInstanse } from "../../api/axios"

export const fetchOverView = async () => {
    try {
        const res = await axiosInstanse.get("/posts/overview");
        return res.data;
    } catch (e) {
        console.error(e instanceof Error ? e.message : " error")

    }
}

export const fetchPostsDetail = async ({ params }: LoaderFunctionArgs) => {

    try {
        const { data } = await axiosInstanse.get(`/posts/${params.id}`);
        const { data: relatedPosts } = await axiosInstanse.get(`/posts?category=${data.category}&limit=3`);
        return { post: data, relatedPosts }
    } catch {
        return { post: null, relatedPosts: null }
    }
}