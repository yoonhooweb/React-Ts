import { useLoaderData } from "react-router";
import AdBanner from "../../components/common/AdBanner";
import FeaturedPost from "../../components/post/FeaturedPost";
import PostGrid from "../../components/post/PostGrid";

export default function Home() {
    console.log(useLoaderData());
    const { latestPosts, popularPosts, randomPost }: { randomPost: Post; popularPosts: Post[]; latestPosts: Post[] } = useLoaderData();

    return (
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
            {randomPost && <FeaturedPost randomPost={randomPost} />}

            <div className="mt-8">
                <AdBanner />
            </div>

            <PostGrid title="Latest Post" posts={latestPosts} />

            <div className="mt-8">
                <AdBanner />
            </div>

            <PostGrid title="popular Post" posts={popularPosts} />
        </div>
    );
}
