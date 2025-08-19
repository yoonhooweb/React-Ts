import axios from "axios";

async function featPosts() {
    const { data } = await axios.get(`http://localhost:3000/posts`);
    return data; //promise 객체
}

function Use() {
    return <div>use</div>;
}

export default Use;
