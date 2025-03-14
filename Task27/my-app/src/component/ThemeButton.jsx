import { useTheme } from "./Theme";

const ThemeButton = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button className={`theme-button ${theme}`} onClick={toggleTheme}>
            {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
    );
};

export { ThemeButton };
