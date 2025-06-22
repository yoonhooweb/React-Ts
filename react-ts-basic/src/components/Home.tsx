export default function Home(props : HomeProps){
    return (
        <>
            <h1>name : {props.name} </h1>
            <h1>age : {props.age}</h1>
            <h1>object : {props.object.age}</h1>

        </>
    );
}
