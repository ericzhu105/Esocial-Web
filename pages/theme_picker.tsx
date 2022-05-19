// Default Imports below
import Head from 'next/head';
import Template from '../src/components/Template/index';
import CurrentPage from '../src/components/Sidebar/CurrentPage';
import { ThemeProvider } from 'styled-components';

// Import your components below
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import {
  ThemeChoicesContainer,
  ThemeChoiceWrapper,
  ThemeChoice,
  ThemeChoiceBorder,
  ContinueButton,
  ThemePickerHeader,
  ThemePickerSubtitle,
  Spacer3vh,
  Spacer5vh,
  Spacer10vh,
} from '@styles/pages/theme_picker';

type ThemePickerProps = {
  username: string;
};

export default function ThemePicker(props: ThemePickerProps) {
  const [theme, setTheme] = useState('light');

  const unselectedBorder = {
    main: '5px solid transparent',
    shadow: 'none',
    hover: '5px solid #EAEAEA',
  };

  const selectedBorder = {
    main: '5px solid #24292e',
    hover: '5px solid #24292e',
  };

  return (
    <>
      <Head>
        <title>Theme Picker</title>
      </Head>

      <Template CurrentPage={CurrentPage.THEME_PICKER}>
        <Spacer5vh />

        <ThemePickerHeader>Hi {props.username || '(Name)'},</ThemePickerHeader>
        <ThemePickerSubtitle>Choose your theme color</ThemePickerSubtitle>

        <Spacer3vh />

        <ThemeChoicesContainer>
          <ThemeChoiceWrapper>
            <ThemeProvider
              theme={theme === 'light' ? selectedBorder : unselectedBorder}
            >
              <ThemeChoice onClick={() => setTheme('light')}>
                <ThemeChoiceBorder />

                <Image src="/LightTheme.png" height="368px" width="481px" />
              </ThemeChoice>
            </ThemeProvider>
          </ThemeChoiceWrapper>

          <ThemeChoiceWrapper>
            <ThemeProvider
              theme={theme === 'dark' ? selectedBorder : unselectedBorder}
            >
              <ThemeChoice onClick={() => setTheme('dark')}>
                <ThemeChoiceBorder />
                <Image src="/DarkTheme.png" height="368px" width="481px" />
              </ThemeChoice>
            </ThemeProvider>
          </ThemeChoiceWrapper>
        </ThemeChoicesContainer>

        <Spacer10vh />
        <Link href="https://www.youtube.com/watch?v=a3Z7zEc7AXQ">
          <ContinueButton>Continue</ContinueButton>
        </Link>
      </Template>
    </>
  );
}
