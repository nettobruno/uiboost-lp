import { createStitches } from '@stitches/react'

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } =
  createStitches({
    theme: {
      colors: {
        pink900: '#EE56BB',
        pink500: '#F974CC',
        pink100: '#FF9FDF',
        salmon900: '#EF8A8B',
        salmon500: '#FEA9AA',
        salmon100: '#FFB9BA',
        purple900: '#A836DB',
        purple100: '#BB44F0',
        red500: '#F97474',
        green500: '#6FE87B',
        gray100: '#E2E1E6',
        gray200: '#D8D7DE',
        gray300: '#BAB8C6',
        gray400: '#9D9AAD',
        gray500: '#888599',
        gray600: '#737185',
        gray700: '#605E70',
        gray800: '#3A3847',
        gray900: '#17161C',
      },
    },
  })

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    border: 0,
    boxSizing: 'border-box',
  },
})
