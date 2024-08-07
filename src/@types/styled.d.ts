import "styled-components";

import { theme } from "../styles/themes";

type ThemeType = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
