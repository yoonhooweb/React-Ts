import React from "react";
import ChildC from "./ChildC";

function ChildB() {
    console.log("ChildB");
    return (
        <div>
            <ChildC />
        </div>
    );
}

export default React.memo(ChildB);
