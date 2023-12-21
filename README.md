# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode _(optional)_

### Screenshot

### Filter By

![Image][home-site]

### Search

![Image][home-site-search]

### Page Details

![Image][details-site]

### Mobile

![Image][details-site-mobile]

### Links

- Solution URL: [Github](https://github.com/Dailton-Bastos/rest-countries)
- Live Site URL: [Production](https://rest-countries-beta-wine.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Tailwindcss](https://tailwindcss.com/) - For styles
- [Jest and React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - For testing
- [Husky](https://typicode.github.io/husky/) - For Git hooks

### What I learned

This is my first contact with React test component

To see how you can add minimal setup to get, see below:

```js
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Fetch from './fetch'

test('loads and displays greeting', async () => {
  // ARRANGE
  render(<Fetch url='/greeting' />)

  // ACT
  await userEvent.click(screen.getByText('Load Greeting'))
  await screen.findByRole('heading')

  // ASSERT
  expect(screen.getByRole('heading')).toHaveTextContent('hello there')
  expect(screen.getByRole('button')).toBeDisabled()
})
```

## Author

- Github - [Dailton-Bastos](https://github.com/Dailton-Bastos)
- LinkedIn - [Dailton Bastos](https://www.linkedin.com/in/dailton-bastos)
- Frontend Mentor - [@Dailton-Bastos](https://www.frontendmentor.io/profile/Dailton-Bastos)

Mad with :heart: by **Dailton Bastos**

[home-site]: .github/assets/rest-countries-home.png
[home-site-search]: .github/assets/rest-countries-home-search.png
[details-site]: .github/assets/rest-countries-details.png
[details-site-mobile]: .github/assets/rest-countries-details-mobile.png
