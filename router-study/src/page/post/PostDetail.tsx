import { useParams } from "react-router";

export default function PostDetail() {
    const { id, detailId } = useParams();

    return (
        <>
            <h1>
                PostDetail : {id} / {detailId}
            </h1>
        </>
    );
}
