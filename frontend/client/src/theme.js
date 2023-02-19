export const colorTokens = {
    grey: {
        0:"#656565",
        10: "808782",
    },
    white: {
        0: "FFFFFF",
    },
    black: {
        0: "000000",
    },
    primary: {
        0: "D1FFD7",
        10: "B3FFB3",
        50: "A6D3A0",
    },
};

export const themeSettings = (mode) => {
    return {
        palette: {
            mode: mode, 
            ...(mode === "main") ? {
                primary: {
                    dark: colorTokens.primary[0],
                    main: colorTokens.primary[10],
                    light: colorTokens.primary[50],
                },
                neutral: {
                    dark: colorTokens.grey[0],
                    main: colorTokens.grey[10],
                    mediumMain: colorTokens.grey[0],
                    medium: colorTokens.grey[10],
                    light: colorTokens.grey[0],
                },
                background: {
                    default: colorTokens.grey[10],
                    alt: colorTokens.black[0],
                },
            } : {}
        },
        typography: {
            fontFamily: ["Oswald", "sans-serif"]. join(","),
            fontSize: 12, 
            h1: {
                fontFamily: ["Oswald", "sans-serif"]. join(","),
                fontSize: 40, 
            },
            h2: {
                fontFamily: ["Oswald", "sans-serif"]. join(","),
                fontSize: 40, 
            },
            h3: {
                fontFamily: ["Oswald", "sans-serif"]. join(","),
                fontSize: 24, 
            },
            h4: {
                fontFamily: ["Oswald", "sans-serif"]. join(","),
                fontSize: 20, 
            },
            h5: {
                fontFamily: ["Oswald", "sans-serif"]. join(","),
                fontSize: 16, 
            },
            h6: {
                fontFamily: ["Oswald", "sans-serif"]. join(","),
                fontSize: 14, 
            },
        }
    }
}