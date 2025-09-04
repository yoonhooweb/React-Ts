import { LoaderFunctionArgs } from "react-router";
import { axiosInstanse } from "../../api/axios"
import { requireAuth } from "./auth.loader";

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
        const { data: { posts: relatedPosts } } = await axiosInstanse.get(`/posts?category=${data.category}&limit=3`);
        return { post: data, relatedPosts }
    } catch {
        return { post: null, relatedPosts: null }
    }
}

export const fetchPostModify = async ({ params }: LoaderFunctionArgs) => {
    try {
        /* 수정페이지로 이동할때 토큰값이 없거나 사라졌을때 로그인페이지로 이동 */
        const auth = requireAuth();
        if (auth) return auth
        const { data } = await axiosInstanse.get(`/posts/${params.id}`);
        return data
    } catch (e) {
        console.error(e instanceof Error ? e.message : " error")
    }
}

/* querystring 가지고오기 위해 request 사용한다. */
export const fetchPosts = async ({ request }: LoaderFunctionArgs) => {
    try {
        let query = "";
        const url = new URL(request.url);
        const sort = url.searchParams.get("sort") ?? "newset" // views
        const category = url.searchParams.get("category");
        const page = url.searchParams.get("page") ?? ""
        const search = url.searchParams.get("search") ?? ""

        if (sort !== "") {
            return query = query + `sort=${sort}`
        }
    } catch (e) {
        console.error(e instanceof Error ? e.message : " error")
    }

}

