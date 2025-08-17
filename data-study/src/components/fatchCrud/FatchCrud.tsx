export default function FatchCrud() {
    const fetchGet = async () => {
        const response = await fetch("http://localhost:3000/posts");
        const data = await response.json();
        console.log(data);
    };
    const fetchPost = async () => {
        const response = await fetch("http://localhost:3000/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: "a new title",
                views: 155,
            }),
        });

        const data = await response.json();
        console.log(data);
    };
    const fetchPut = async () => {
        const response = await fetch("http://localhost:3000/posts/3", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: "a modify title",
                views: 155,
            }),
        });

        const data = await response.json();
        console.log(data);
    };
    const fetchPatch = async () => {
        const response = await fetch("http://localhost:3000/posts/1", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: "a modifyPATCH title",
                views: 155,
            }),
        });

        const data = await response.json();
        console.log(data);
    };
    const fetchDelete = async () => {
        await fetch("http://localhost:3000/posts/99", {
            method: "DELETE",
        });
    };

    return (
        <>
            <button onClick={fetchGet}>GET</button>
            <button onClick={fetchPost}>POST</button>
            <button onClick={fetchPut}>PUT</button>
            <button onClick={fetchPatch}>PATCH</button>
            <button onClick={fetchDelete}>DELETE</button>
        </>
    );
}
