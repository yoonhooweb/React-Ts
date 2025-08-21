import { useLoaderData } from "react-router";

export default function PostLoader() {
    const posts = useLoaderData();
    return (
        <>
            <pre>{JSON.stringify(posts, null, 2)}</pre>
        </>
    );
}
