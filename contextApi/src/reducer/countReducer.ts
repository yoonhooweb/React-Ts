export default function countReducer(count: number, action: { type: string }) {
    switch (action.type) {
        case "plus":
            return count + 1;
        case "minus":
            if (count < 0) {
                return 0;
            } else {
                return count - 1;
            }
        case "reset":
            return 0;
        default:
            return count;
    }
}
