import { useParams } from "react-router";

export default function Post() {
    /* const { id } = useParams(); */
    const { "*": splat } = useParams();
    console.log(splat);
    return (
        <>
            <h1>Post </h1>
        </>
    );
}
