import ChildB from "./ChildB";

function ChildA() {
    console.log("ChildA");
    return (
        <div>
            <ChildB />
        </div>
    );
}

export default ChildA;
