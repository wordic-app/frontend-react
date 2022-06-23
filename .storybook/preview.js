import { addDecorator } from '@storybook/react';
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { ThemeProvider } from 'styled-components';
import lightTheme from '../src/theme/lightTheme';
import darkTheme from '../src/theme/darkTheme';
import GlobalStyles from '../src/theme/GlobalStyles';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const themes = [lightTheme, darkTheme];

addDecorator(withThemesProvider(themes, ThemeProvider));
addDecorator(s => <><GlobalStyles theme={darkTheme}/>{s()}</>);
