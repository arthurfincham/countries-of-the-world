<div align="center">

<img src='public/country.png' width="100px">

# Countries of the World Quiz

## [Live Preview](https://countries-of-the-world-gules.vercel.app/)

![](https://img.shields.io/github/last-commit/arthurfincham/countries-of-the-world)
![](https://img.shields.io/github/languages/count/arthurfincham/countries-of-the-world)
![](https://img.shields.io/github/languages/code-size/arthurfincham/countries-of-the-world)

</div>

#### Table of Contents

- [Features](#Features)
- [Stack](#Stack)

## Features:

#### Dynamic update of map

<div align="center">

```
So that I can keep track of my answers,
I'd like my answers to be highlighted on the map.
```

<img src="public/gifs/typingMapPreview.gif" width="500">

</div>

&nbsp;

A correct answer is added to an array. Iterating over this array, we look for a SVG path that matches...

```javascript
document.querySelector(`[title="${item.country}"]`);
```

...the color is then updated.

```javascript
document.querySelector(`[title="${item.country}"]`).style.fill = '#FA8F02';
```

#### Progress wheels for total and each continent

<div align="center">

```

So that I can see my progress,
I'd like to know how many countries I have left.

```

<img src="public/gifs/toggleMapPreview.gif" height="500">

</div>

&nbsp;

This feature is a combination of two Material UI components:

- `<SpeedDial />`
- `<CircularProgress />`

I passed the latter as the icon param for the SpeedDial like so:

```javascript
<SpeedDialAction icon={<CircularProgress name="Asia" />}...
```

### Zoom and panning

<div align="center">

```

So that I can see the map clearly,
I'd like to zoom in and pan.

```

<img src="public/gifs/mainMapPreview.gif" width="500">

</div>

&nbsp;

I used a package called [react-zoom-pan-pinch](https://github.com/prc5/react-zoom-pan-pinch) to move around the SVG.

## Stack

- React
- Testing Library
- Material UI
- Tailwind CSS
- Vercel

| Tool                                                                                                                                                             |                 |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" height="auto" width="50">                          | React           |
| <img src="https://testing-library.com/img/octopus-128x128.png" height="auto" width="50">                                                                         | Testing Library |
| <img src="https://mui.com/static/logo.png" height="auto" width="50">                                                                                             | Material UI     |
| <img src="https://yt3.ggpht.com/ikv41jMTr1uHGdILrJhvbfVJcDt4oqhwApKX37TjAleF_cRPbF2W-waj7uMnS5JySvnlvAlTCg=s900-c-k-c0x00ffffff-no-rj" height="auto" width="50"> | Tailwind CSS    |
| <img src="https://assets-global.website-files.com/5f217a8e6bc2c82a9d803089/5f217a8e6bc2c80d3780360e_CBm5_MB7_400x400.jpg" height="auto" width="50">              | Vercel          |
