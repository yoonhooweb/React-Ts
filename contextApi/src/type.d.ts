type CountContextType = {
    count: number;
};
/* type CountContextTypeAction = {
    plus: () => void;
    minus: () => void;
    reset: () => void;
} */

// reducer
type CountContextTypeAction = {
    countDispatch: React.ActionDispatch<[action: { type: string }]>;
};

type ThemeContextType = {
    theme: string;
};
type ThemeContextActionType = {
    changeTheme: () => void;
};
