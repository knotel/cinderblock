# Knotel Cinderblock
Knotel branding approved UI components and assets for use alongside of the [Priceline Design System](https://priceline.github.io/design-system/).

## Installation

```bash
$ yarn add cinderblock
```

## Usage

Pass the theme object from `cinderblock` to the `<ThemeProvider />` component from `pcln-design-system` and Knotel styling will be applied to all of the `pcln-design-system` child components.

```jsx
import React from 'react'
import { theme } from 'cinderblock'
import { ThemeProvider } from 'pcln-design-system'

const App = () => (
  <ThemeProvider theme={theme}>
    <Page />
  </ThemeProvider>
)
```

## Assets
The `assets` directory is not included as part of the package build, but it can be a useful place to store commonly used branding assets such as favicons and logos.
