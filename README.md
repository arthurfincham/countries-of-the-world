<div align="center">

# Countries of the World Quiz

## [Live Preview](https://countries-of-the-world-gules.vercel.app/)

![](https://img.shields.io/github/last-commit/arthurfincham/countries-of-the-world)
![](https://img.shields.io/github/languages/count/arthurfincham/countries-of-the-world)
![](https://img.shields.io/github/languages/code-size/arthurfincham/countries-of-the-world)

</div>

#### Table of Contents

- [Motivation](#Motivation)
- [Features](#Features)
- [Stack](#Stack)

## Motivation

Having always been interested in maps, I wanted to create quiz which dynamically updates an SVG-based map.

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

A javascript query selector find the relevant SVG path by title and then updates its color.

#### Progress wheels for total and each continent

<div align="center">

```
So that I can see my progress,
I'd like to know how many countries I have left.
```

<img src="public/gifs/toggleMapPreview.gif" height="500">

</div>

&nbsp;

I used Material UI circular progress bars as the icons for the Material UI Speed Dial component.

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
