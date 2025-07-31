import { useThemeAction } from "../../context/theme/useTheme";

function ThemeButton() {
    const { changeTheme } = useThemeAction()!;

    return (
        <div>
            <button onClick={changeTheme}>테마변경</button>
        </div>
    );
}

export default ThemeButton;
