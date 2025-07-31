import { useTheme } from "../../context/theme/useTheme";

function Theme() {
    const { theme } = useTheme();

    return (
        <div>
            <h1>Theme : {theme}</h1>
        </div>
    );
}

export default Theme;
