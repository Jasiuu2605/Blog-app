---
title: "CSS Modules in Practice"
date: "2026-06-12"
image: css-modules-in-practice.png
excerpt: CSS Modules are simple, but they work well for small and medium React projects when styles stay close to the components they belong to.
isFeatured: false
tags:
  - CSS Modules
  - Frontend
---

CSS Modules are a good fit for this blog because the styling needs are local and component-based.

Instead of creating one large stylesheet for the whole app, each component owns its own visual rules. That makes the project easier to scan and safer to change.

## Why CSS Modules work here

The main benefit is scope. A class like `.header` or `.content` can exist in multiple files without creating naming conflicts.

That is useful in a project with components such as:

- main navigation
- hero section
- post cards
- post content
- contact form
- notifications

Each part can evolve without depending too much on the rest of the UI.

## Where global CSS still helps

Global styles are still useful for shared tokens:

- colors
- spacing values
- shadows
- page background
- typography defaults

The component files can then use those variables while keeping layout details local.

## A practical rule

Global CSS should define the visual system. CSS Modules should define how each component uses that system.

That separation keeps the code simple, but still gives the app a consistent look.
