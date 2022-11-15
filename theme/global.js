import { mode } from "@chakra-ui/theme-tools"

module.exports = {
    global: props => ({
        "*, body": {
            fontFamily: "body",
            focusVisible: false,
            // fontSize: "0.9rem",
        },
        body: {
            color: mode("blue.900", "whiteAlpha.900")(props),
            bg: mode("white", "blue.900")(props),
        },
        "p, div": {
            lineHeight: "taller",
            fontSize: "sm",
        },
        "::-webkit-scrollbar": {
            width: 2,
        },
        "::-webkit-scrollbar-track": {
            background: mode("teal.100", "teal.100")(props),
        },
        "::-webkit-scrollbar-thumb": {
            background: mode("teal.300", "teal.600")(props),
        },
        "::-webkit-scrollbar-thumb:hover": {
            background: mode("teal.500", "teal.700")(props),
        },
        html: {
            scrollbarColor: "auto",
            scrollbarWidth: "thin",
        },
        "#nprogress .bar": {
            background: mode("teal.800", "teal.500")(props),
        },
        "#nprogress .spinner": {
            backgroundColor: mode("teal.800", "teal.500")(props),
        },
        "#nprogress .spinner-icon": {
            borderTopColor: mode("teal.800", "teal.500")(props),
            borderLeftColor: mode("teal.800", "teal.500")(props),
        },
    }),
}
