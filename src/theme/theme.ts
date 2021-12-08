import { extendTheme } from "@chakra-ui/react";
import {
  StyleFunctionProps,
  mode,
} from "@chakra-ui/theme-tools";
import includes from "./theme.includes";

const appTheme = extendTheme({
  colors: {
    brand: {
      primary: '#334d6e',
      secondary: '#885af8',
    },
    whisper: {
      "50": "#faf9fd",
      "100": "#efecf4",
      "200": "#e2dfe7",
      "300": "#d4d2d9",
      "400": "#c5c3c9",
      "500": "#b4b2b8",
      "600": "#a19fa4",
      "700": "#8a888d",
      "800": "#6d6b6f",
      "900": "#403f41",
    },
  },

  fonts: {
    body: "Inter, sans-serif",
  },

  sizes: {
    viewH: "100vh",
    viewW: "100vw",
  },

  styles: {
    global: (props: StyleFunctionProps) => ({
      "body": {
        color: mode("brand.primary", "whiteAlpha.900")(props),
        background: mode("whisper.50", "gray.800")(props),
      },
      "*::placeholder": {
        color: mode("gray.400", "whiteAlpha.400")(props),
      },
      "*, *::before, &::after": {
        borderColor: mode("gray.200", "whiteAlpha.300")(props),
      },
      ".chakra-form-control + .chakra-form-control": {
        marginTop: 4,
      }
    }),
  },

  layerStyles: {
    ...includes,
  },

  textStyles: {
    h2: {
      fontSize: ["xl"],
      fontWeight: "semibold",
      lineHeight: "110%",
      letterSpacing: "normal",
    },
  },

  components: {
    Avatar: {
      baseStyle: {
        container: {
          bg: "whisper.100",
          ".chakra-ui-dark &": {
            bg: "whiteAlpha.400",
          }
        }
      }
    },
    Button: {
      baseStyle: {
        _focus: {
          boxShadow: "none",
        },
      },
    },
    Link: {
      baseStyle: {
        _focus: {
          boxShadow: "none",
        },
      },
    },
  },
});

export default appTheme;