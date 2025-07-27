/* import ChildB from "../useMemo/ChildB";
import ChildA from "./ChildA"; */

import { lazy, Suspense } from "react";

const ChildA = lazy(() => import("./ChildA"));
const ChildB = lazy(() => import("./ChildB"));

function Count() {
    return (
        <div>
            안녕하세요
            <Suspense fallback={<>.... 로딩중 ....</>}>
                <ChildA />
            </Suspense>
            <Suspense>
                <ChildB />
            </Suspense>
        </div>
    );
}

export default Count;
