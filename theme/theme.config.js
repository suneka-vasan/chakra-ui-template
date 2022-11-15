import Button from "./Button"
import colors from "./colors"
import global from "./global"

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    config: {
        cssVarPrefix: "tec",
    },
    fonts: {
        body: "Poppins",
        heading: "Poppins",
        mono: "Menlo, monospace",
    },
    styles: global,
    components: {
        Button,
    },
    colors,
    initialColorMode: "light",
    useSystemColorMode: false,
}
