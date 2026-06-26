---
title: "Migrating a Course Project to TypeScript"
date: "2026-06-20"
image: typescript-migration-notes.png
excerpt: A few practical notes from converting a small Next.js blog from JavaScript to TypeScript without making the code harder to read.
isFeatured: true
---

Migrating a small project to TypeScript is not only about adding types. It is also a good moment to understand the shape of the application.

This blog started as a course project. The first goal was simple: keep the app working, but make the data flow easier to trust.

## Start with the data model

The most useful type in this app is the post metadata type. It describes what every Markdown file needs to provide:

- title
- excerpt
- date
- image
- featured status
- slug

Once this shape is clear, components like the post grid and post detail page become easier to reason about.

## Keep the migration small

A good migration does not need to rewrite everything at once. The safer path is to convert one area at a time:

1. Data utilities
2. Page props
3. Reusable components
4. Form state
5. API request payloads

Each step should leave the application in a working state.

## What TypeScript improved

TypeScript helped catch simple mistakes around optional fields, component props and return values. It also made the project easier to extend because the expected data is visible directly in the code.

The biggest lesson: types are most helpful when they describe real boundaries in the app, not when they are added everywhere just for the sake of it.
