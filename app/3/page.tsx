"use client";

import React, { useState } from 'react';
import { ChevronRight, Check, Menu, X, Layers, Zap, Shield, Smartphone } from 'lucide-react';

const SleekLandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
<div data-vaul-drawer-wrapper="">
  <div className="flex min-h-screen flex-col">
    <div className="sticky top-0 right-0 left-0 z-30">
      <header
        data-variant="secondary"
        className="h-16 border-b transition-all duration-300 data-[variant=default]:bg-background data-[variant=secondary]:bg-background-secondary border-transparent"
      >
        <nav className="container mx-auto flex h-full items-center justify-between">
          <div className="flex-1">
            <a href="/">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 310.01 211.75"
                  fill="none"
                  className="size-7 text-primary"
                >
                  <path
                    fill="currentColor"
                    d="M300.398 27.5019c14.142 5.4706 12.251 10.8284-2.912 10.8672-14.107.036-28.215.147-42.315.4834-13.472.4-27.044 1.4-40.715 2.4-11.476.9-23.052 1.9-34.428 3.5-14.171 2-28.042 5.4-40.815 12.3-19.16 10.4-27.542 28-23.65 49.5995 1.231 6.785 3.188 13.255 5.508 19.618 2.158 5.919-2.739 12.152-8.898 10.822-11.373-2.457-22.394-5.925-32.5352-12.24-12.9729-8.1-22.5529-18.8-25.7462-34.2995-2.5945-12.2-.1996-23.7 5.3888-34.6 8.083-15.9 20.8563-27.2 36.0246-36 19.459-11.3 40.715-16.9 62.968-19 32.233-3 63.667 1.3 94.602 9.9 3.867 1.0643 28.664 9.3538 47.523 16.6494"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M9.6039 184.251c-14.1417-5.471-12.2508-10.829 2.912-10.868 14.1072-.036 28.2148-.147 42.3153-.483 13.4718-.4 27.0434-1.4 40.7148-2.4 11.476-.9 23.052-1.9 34.428-3.5 14.17-2 28.041-5.4 40.815-12.3 19.16-10.4 27.542-28 23.65-49.6-1.231-6.7842-3.188-13.2548-5.508-19.6174-2.158-5.9191 2.739-12.1523 8.897-10.8222 11.374 2.4567 22.395 5.9252 32.536 12.2396 12.973 8.1 22.553 18.8 25.746 34.3 2.595 12.2.2 23.7-5.389 34.6-8.083 15.9-20.856 27.2-36.024 36-19.46 11.3-40.715 16.9-62.969 19-32.232 3-63.666-1.3-94.6016-9.9-3.8666-1.064-28.6632-9.354-47.5225-16.649"
                  ></path>
                </svg>
                <span className="font-heading font-semibold text-xl leading-none">
                  sleek.design
                </span>
              </div>
            </a>
          </div>
          <div className="hidden flex-1 items-center justify-center gap-8 md:flex">
            <a
              href="/pricing"
              className="text-foreground-muted text-sm transition-colors hover:text-foreground"
            >
              Pricing
            </a>
            <a
              href="/explore"
              className="text-foreground-muted text-sm transition-colors hover:text-foreground"
            >
              Explore
            </a>
            <a
              href="/blog"
              className="text-foreground-muted text-sm transition-colors hover:text-foreground"
            >
              Blog
            </a>
          </div>
          <div className="flex flex-1 items-center justify-end gap-3">
            <a
              href="/login"
              data-slot="button"
              className="shrink-0 items-center justify-center whitespace-nowrap font-medium outline-none transition-[color,box-shadow,scale] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 active:scale-95 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg:not([className*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5 hidden text-sm [@media(min-width:450px)]:flex"
            >
              Log In
            </a>
            <a
              href="/signup"
              data-slot="button"
              className="inline-flex shrink-0 items-center justify-center whitespace-nowrap font-medium outline-none transition-[color,box-shadow,scale] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 active:scale-95 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg:not([className*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5 text-sm"
            >
              Get Started
            </a>
            <button
              type="button"
              data-slot="button"
              className="inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium text-sm outline-none transition-[color,box-shadow,scale] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 active:scale-95 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg:not([className*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground size-8 md:hidden"
            >
              <svg
                viewBox="0 0 256 256"
                fill="currentColor"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"
                ></path>
              </svg>
              <span className="sr-only">Open menu</span>
            </button>
          </div>
        </nav>
      </header>
    </div>
    <div className="flex flex-1 flex-col">
      <section
        className="relative -mt-16 overflow-hidden bg-background-secondary pt-32 sm:pt-32"
      >
        <div className="container flex flex-col items-center justify-center gap-8">
          <div className="relative z-10 flex flex-col items-center gap-4">
            <a
              rel="noopener"
              href="https://x.com/mattiapomelli/status/2000992930572710365"
            >
              <span
                data-slot="badge"
                className="w-fit shrink-0 justify-center overflow-hidden whitespace-nowrap rounded-md border px-2 font-medium text-xs transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3 text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground inline-flex items-center gap-2 bg-input py-1.5 pr-3 pl-1.5 hover:bg-input/80 hover:text-foreground mb-6"
              >
                <span
                  className="rounded-full bg-primary px-3 py-1 font-semibold text-primary-foreground uppercase"
                >
                  New
                </span>
                <span className="text-sm">Introducing Export to Anything</span>
                <svg
                  className="size-4"
                  viewBox="0 0 256 256"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"
                  ></path>
                </svg>
              </span>
            </a>
            <h1
              className="text-center font-heading font-semibold text-4xl text-foreground tracking-tight sm:text-[3.25rem]"
            >
              Design mobile apps
              <br className="md:hidden" />
              <span
                className="bg-linear-to-r from-primary-gradient to-primary bg-clip-text text-transparent"
              >
                in minutes
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  viewBox="0 0 48 48"
                  height="48"
                  className="ml-2 inline-block size-7 text-primary sm:size-8"
                >
                  <defs>
                    <mask id="SVGWJIstexD">
                      <path
                        stroke-width="4"
                        stroke-linejoin="round"
                        stroke="#fff"
                        fill="#555555"
                        d="M19 4h18L26 18h15L17 44l5-19H8z"
                      ></path>
                    </mask>
                  </defs>
                  <path
                    mask="url(#SVGWJIstexD)"
                    fill="currentColor"
                    d="M0 0h48v48H0z"
                  ></path>
                </svg>
              </span>
            </h1>
            <p
              className="mx-auto max-w-2xl text-center font-medium text-foreground-muted leading-relaxed sm:text-lg"
            >
              Go from idea to beautiful app mockups in minutes by chatting with
              AI.
            </p>
          </div>
          <div className="flex w-full flex-col items-center gap-8 relative z-10">
            <div className="relative w-full max-w-2xl">
              <input
                type="file"
                className="hidden"
                accept="image/png, image/jpeg, image/jpg, image/webp"
              />
              <form
                className="corner-squircle w-full overflow-hidden rounded-lg border bg-input supports-corner:rounded-[3rem] shadow-lg ring-4 ring-card"
              >
                <div className="flex flex-col">
                  <div className="h-0" aria-live="polite">
                    <div className="flex flex-wrap items-end gap-2 px-3 pt-3"></div>
                  </div>
                  <textarea
                    placeholder="I want to design an app that..."
                    name="prompt"
                    data-slot="textarea"
                    className="flex transition-[color,box-shadow] placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 w-full resize-none rounded-none border-none shadow-none outline-none ring-0 field-sizing-content bg-transparent dark:bg-transparent max-h-48 focus-visible:ring-0 min-h-22 p-4 text-base md:text-base"
                  ></textarea>
                </div>
                <div className="flex items-center justify-between p-3">
                  <div className="flex items-center gap-1">
                    <button
                      data-state="closed"
                      aria-label="Add image attachment"
                      type="button"
                      data-slot="tooltip-trigger"
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium text-sm outline-none transition-[color,box-shadow,scale] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 active:scale-95 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg:not([className*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 border shadow-xs hover:bg-accent hover:text-accent-foreground py-2 has-[>svg]:px-3 shrink-0 gap-1.5 px-3 size-9 border-border bg-card"
                    >
                      <svg
                        className="size-4"
                        viewBox="0 0 256 256"
                        fill="currentColor"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V158.75l-26.07-26.06a16,16,0,0,0-22.63,0l-20,20-44-44a16,16,0,0,0-22.62,0L40,149.37V56ZM40,172l52-52,80,80H40Zm176,28H194.63l-36-36,20-20L216,181.38V200ZM144,100a12,12,0,1,1,12,12A12,12,0,0,1,144,100Z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <button
                    disabled=""
                    aria-label="Send message"
                    type="submit"
                    data-slot="button"
                    className="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-md font-medium text-sm outline-none transition-[color,box-shadow,scale] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 active:scale-95 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg:not([className*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 py-2 has-[>svg]:px-3 gap-1.5"
                  >
                    Design it
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="size-4"
                    >
                      <path
                        fill="currentColor"
                        d="m4.497 20.835l16.51-7.363c1.324-.59 1.324-2.354 0-2.944L4.497 3.164c-1.495-.667-3.047.814-2.306 2.202l3.152 5.904c.245.459.245 1 0 1.458l-3.152 5.904c-.74 1.388.81 2.87 2.306 2.202"
                      ></path>
                    </svg>
                  </button>
                </div>
              </form>
            </div>
            <div className="flex w-full flex-col gap-4">
              <div className="flex items-center gap-2">
                <svg
                  className="size-4 text-primary"
                  viewBox="0 0 256 256"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M208,144a15.78,15.78,0,0,1-10.42,14.94L146,178l-19,51.62a15.92,15.92,0,0,1-29.88,0L78,178l-51.62-19a15.92,15.92,0,0,1,0-29.88L78,110l19-51.62a15.92,15.92,0,0,1,29.88,0L146,110l51.62,19A15.78,15.78,0,0,1,208,144ZM152,48h16V64a8,8,0,0,0,16,0V48h16a8,8,0,0,0,0-16H184V16a8,8,0,0,0-16,0V32H152a8,8,0,0,0,0,16Zm88,32h-8V72a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0V96h8a8,8,0,0,0,0-16Z"
                  ></path>
                </svg>
                <span className="font-medium text-muted-foreground text-sm">
                  Need inspiration?
                </span>
              </div>
              <div className="opacity-100">
                <button
                  tabindex="0"
                  type="button"
                  className="opacity-100 [transform:none]"
                  aria-label="Use suggestion: Health Tracker (Neo-Brutalism)"
                >
                  <div className="flex w-full items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <div
                        className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20"
                      >
                        <svg
                          className="size-4"
                          viewBox="0 0 256 256"
                          fill="currentColor"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M240,128a8,8,0,0,1-8,8H204.94l-37.78,75.58A8,8,0,0,1,160,216h-.4a8,8,0,0,1-7.08-5.14L95.35,60.76,63.28,131.31A8,8,0,0,1,56,136H24a8,8,0,0,1,0-16H50.85L88.72,36.69a8,8,0,0,1,14.76.46l57.51,151,31.85-63.71A8,8,0,0,1,200,120h32A8,8,0,0,1,240,128Z"
                          ></path>
                        </svg>
                      </div>
                      <div className="flex flex-col items-start gap-1">
                        <span className="font-semibold">Health Tracker</span>
                        <span
                          data-slot="badge"
                          className="inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-md border font-medium transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3 border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90 whitespace-nowrap px-1.5 py-0 text-[10px]"
                        >
                          Neo-Brutalism
                        </span>
                      </div>
                    </div>
                    <svg
                      className="size-4 shrink-0 -translate-x-2 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                      viewBox="0 0 256 256"
                      fill="currentColor"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"
                      ></path>
                    </svg>
                  </div>
                  <p
                    className="mt-1 hidden text-muted-foreground text-xs group-hover:text-foreground sm:line-clamp-2"
                  >
                    Personal health dashboard. Widgets for heart rate graph,
                    sleep quality score with moon icon, daily caloric intake vs
                    burn, hydration water level tracker, and recovery battery
                    percentage. Activity rings and step counter. Create also the
                    other screens. Mobile dashboard, Bento Grid layout, Soft
                    Neo-Brutalism. Dark mode, deep charcoal background, rounded
                    cards with vivid pastel accents (salmon, periwinkle,
                    yellow). Bold all-caps sans-serif typography, modular
                    fintech SaaS aesthetic with high contrast.
                  </p>
                </button>
                <button
                  tabindex="0"
                  type="button"
                  className="opacity-100 [transform:none]"
                  aria-label="Use suggestion: Crypto Wallet (Glassmorphism)"
                >
                  <div className="flex w-full items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <div
                        className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20"
                      >
                        <svg
                          className="size-4"
                          viewBox="0 0 256 256"
                          fill="currentColor"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M216,64H56a8,8,0,0,1,0-16H192a8,8,0,0,0,0-16H56A24,24,0,0,0,32,56V184a24,24,0,0,0,24,24H216a16,16,0,0,0,16-16V80A16,16,0,0,0,216,64Zm0,128H56a8,8,0,0,1-8-8V78.63A23.84,23.84,0,0,0,56,80H216Zm-48-60a12,12,0,1,1,12,12A12,12,0,0,1,168,132Z"
                          ></path>
                        </svg>
                      </div>
                      <div className="flex flex-col items-start gap-1">
                        <span className="font-semibold">Crypto Wallet</span>
                        <span
                          data-slot="badge"
                          className="inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-md border font-medium transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3 border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90 whitespace-nowrap px-1.5 py-0 text-[10px]"
                        >
                          Glassmorphism
                        </span>
                      </div>
                    </div>
                    <svg
                      className="size-4 shrink-0 -translate-x-2 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                      viewBox="0 0 256 256"
                      fill="currentColor"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"
                      ></path>
                    </svg>
                  </div>
                  <p
                    className="mt-1 hidden text-muted-foreground text-xs group-hover:text-foreground sm:line-clamp-2"
                  >
                    Cryptocurrency wallet dashboard. A holographic virtual
                    credit card tilting in 3D space. Line graph visualizing
                    asset growth displayed on a translucent floating sheet.
                    Token list with glowing logos and frosted row backgrounds.
                    Total balance displayed in large, luminous digits. Create
                    also the other screens. Mobile UI, Glassmorphism aesthetic.
                    Frosted glass cards with background blur and high
                    transparency. Vivid abstract mesh gradient background. Thin
                    1px white borders on containers. Floating elements, 3D depth
                    effects, glossy icons, clean white sans-serif typography.
                  </p>
                </button>
                <button
                  tabindex="0"
                  type="button"
                  className="opacity-100 [transform:none]"
                  aria-label="Use suggestion: Pet Manager (Playful Whimsical)"
                >
                  <div className="flex w-full items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <div
                        className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20"
                      >
                        <svg
                          className="size-4"
                          viewBox="0 0 256 256"
                          fill="currentColor"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M239.71,125l-16.42-88a16,16,0,0,0-19.61-12.58l-.31.09L150.85,40h-45.7L52.63,24.56l-.31-.09A16,16,0,0,0,32.71,37.05L16.29,125a15.77,15.77,0,0,0,9.12,17.52A16.26,16.26,0,0,0,32.12,144,15.48,15.48,0,0,0,40,141.84V184a40,40,0,0,0,40,40h96a40,40,0,0,0,40-40V141.85a15.5,15.5,0,0,0,7.87,2.16,16.31,16.31,0,0,0,6.72-1.47A15.77,15.77,0,0,0,239.71,125ZM32,128h0L48.43,40,90.5,52.37Zm144,80H136V195.31l13.66-13.65a8,8,0,0,0-11.32-11.32L128,180.69l-10.34-10.35a8,8,0,0,0-11.32,11.32L120,195.31V208H80a24,24,0,0,1-24-24V123.11L107.92,56h40.15L200,123.11V184A24,24,0,0,1,176,208Zm48-80L165.5,52.37,207.57,40,224,128ZM104,140a12,12,0,1,1-12-12A12,12,0,0,1,104,140Zm72,0a12,12,0,1,1-12-12A12,12,0,0,1,176,140Z"
                          ></path>
                        </svg>
                      </div>
                      <div className="flex flex-col items-start gap-1">
                        <span className="font-semibold">Pet Manager</span>
                        <span
                          data-slot="badge"
                          className="inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-md border font-medium transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3 border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90 whitespace-nowrap px-1.5 py-0 text-[10px]"
                        >
                          Playful Whimsical
                        </span>
                      </div>
                    </div>
                    <svg
                      className="size-4 shrink-0 -translate-x-2 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                      viewBox="0 0 256 256"
                      fill="currentColor"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"
                      ></path>
                    </svg>
                  </div>
                  <p
                    className="mt-1 hidden text-muted-foreground text-xs group-hover:text-foreground sm:line-clamp-2"
                  >
                    Pet management app. Pet avatars are cute, stylized drawings.
                    Task checklist items have wobbly hand-drawn checkmarks.
                    Feeding schedule illustrated with a smiling food bowl icon.
                    Vet appointment cards look like little paw prints. Bright,
                    cheerful background. Mobile UI, Playful Whimsical aesthetic.
                    Bright, saturated color palette (e.g., sunshine yellow, sky
                    blue, candy pink). Hand-drawn sketch lines, organic blob
                    shapes, uneven borders. Cute cartoon character
                    illustrations. Bubblegum sans-serif fonts, bouncy
                    animations, sticker-like elements.
                  </p>
                </button>
                <button
                  tabindex="0"
                  type="button"
                  className="opacity-100 [transform:none]"
                  aria-label="Use suggestion: Stopwatch & Timer (Swiss Style)"
                >
                  <div className="flex w-full items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <div
                        className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20"
                      >
                        <svg
                          className="size-4"
                          viewBox="0 0 256 256"
                          fill="currentColor"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M128,40a96,96,0,1,0,96,96A96.11,96.11,0,0,0,128,40Zm0,176a80,80,0,1,1,80-80A80.09,80.09,0,0,1,128,216ZM173.66,90.34a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32-11.32l40-40A8,8,0,0,1,173.66,90.34ZM96,16a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,16Z"
                          ></path>
                        </svg>
                      </div>
                      <div className="flex flex-col items-start gap-1">
                        <span className="font-semibold">Stopwatch & Timer</span>
                        <span
                          data-slot="badge"
                          className="inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-md border font-medium transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3 border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90 whitespace-nowrap px-1.5 py-0 text-[10px]"
                        >
                          Swiss Style
                        </span>
                      </div>
                    </div>
                    <svg
                      className="size-4 shrink-0 -translate-x-2 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                      viewBox="0 0 256 256"
                      fill="currentColor"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"
                      ></path>
                    </svg>
                  </div>
                  <p
                    className="mt-1 hidden text-muted-foreground text-xs group-hover:text-foreground sm:line-clamp-2"
                  >
                    Stopwatch and timer. Elapsed time "00:45.32" dominates the
                    screen in bold black text. Lap times listed below in a clean
                    table without borders. "Start" and "Stop" controls are
                    simple red and black geometric squares. Precision aesthetic.
                    Mobile UI, Swiss International Style. Extreme minimalism,
                    rigid grid system. Massive bold Helvetica typography as the
                    main visual element. High whitespace, off-white background
                    (#F5F5F5) with single primary accent color (International
                    Red). Structural lines, no shadows, flat design.
                  </p>
                </button>
              </div>
            </div>
          </div>
          <div
            className="absolute left-1/2 h-[3000px] w-[5000px] -translate-x-1/2 top-[50%] sm:top-[60%]"
          >
            <div
              className="absolute bottom-[calc(100%-300px)] left-1/2 h-[2000px] w-[2000px] -translate-x-1/2 opacity-20 bg-[radial-gradient(circle_at_bottom,var(--primary)_0%,var(--background-secondary)_25%)]"
            ></div>
            <div
              className="absolute mt-[-10px] size-full rounded-[50%] bg-primary/20 opacity-70 [box-shadow:0_-15px_24.8px_var(--primary)]"
            ></div>
            <div
              className="absolute z-0 size-full rounded-[50%] bg-background"
            ></div>
          </div>
        </div>
      </section>
      <section className="container py-20">
        <div className="mb-10 flex items-center justify-between">
          <div
            className="flex w-full flex-col items-center gap-1 text-center md:items-start md:text-left"
          >
            <h2
              className="font-heading font-semibold text-2xl tracking-tight sm:text-3xl"
            >
              Explore templates
            </h2>
            <p className="max-w-[240px] text-foreground-muted sm:max-w-none">
              Customize beautiful pre-built app design templates.
            </p>
          </div>
          <a
            href="/explore"
            data-slot="button"
            className="shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium outline-none transition-[color,box-shadow,scale] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 active:scale-95 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg:not([className*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 has-[>svg]:px-3 hidden text-foreground-muted text-sm md:inline-flex"
          >
            View all
            <svg
              className="size-4"
              viewBox="0 0 256 256"
              fill="currentColor"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"
              ></path>
            </svg>
          </a>
        </div>
        <div className="grid w-full grid-cols-1 gap-x-4 gap-y-6 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <div
              className="group corner-squircle relative mx-auto flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-primary/10 p-3 supports-corner:rounded-[2.5rem] dark:border dark:bg-card"
            >
              <img
                src="https://sleek.design/_next/image?url=%2Fimages%2Ftemplates%2Fcalories-tracker%2Fthumbnail.webp&w=3840&q=75&dpl=dpl_Gdn9coGtjVd7r38KBgLha3SE6SnL"
                srcset="
                  https://sleek.design/_next/image?url=%2Fimages%2Ftemplates%2Fcalories-tracker%2Fthumbnail.webp&w=256&q=75&dpl=dpl_Gdn9coGtjVd7r38KBgLha3SE6SnL   256w,
                  https://sleek.design/_next/image?url=%2Fimages%2Ftemplates%2Fcalories-tracker%2Fthumbnail.webp&w=384&q=75&dpl=dpl_Gdn9coGtjVd7r38KBgLha3SE6SnL   384w,
                  https://sleek.design/_next/image?url=%2Fimages%2Ftemplates%2Fcalories-tracker%2Fthumbnail.webp&w=640&q=75&dpl=dpl_Gdn9coGtjVd7r38KBgLha3SE6SnL   640w,
                  https://sleek.design/_next/image?url=%2Fimages%2Ftemplates%2Fcalories-tracker%2Fthumbnail.webp&w=750&q=75&dpl=dpl_Gdn9coGtjVd7r38KBgLha3SE6SnL   750w,
                  https://sleek.design/_next/image?url=%2Fimages%2Ftemplates%2Fcalories-tracker%2Fthumbnail.webp&w=828&q=75&dpl=dpl_Gdn9coGtjVd7r38KBgLha3SE6SnL   828w,
                  https://sleek.design/_next/image?url=%2Fimages%2Ftemplates%2Fcalories-tracker%2Fthumbnail.webp&w=1080&q=75&dpl=dpl_Gdn9coGtjVd7r38KBgLha3SE6SnL 1080w,
                  https://sleek.design/_next/image?url=%2Fimages%2Ftemplates%2Fcalories-tracker%2Fthumbnail.webp&w=1200&q=75&dpl=dpl_Gdn9coGtjVd7r38KBgLha3SE6SnL 1200w,
                  https://sleek.design/_next/image?url=%2Fimages%2Ftemplates%2Fcalories-tracker%2Fthumbnail.webp&w=1920&q=75&dpl=dpl_Gdn9coGtjVd7r38KBgLha3SE6SnL 1920w,
                  https://sleek.design/_next/image?url=%2Fimages%2Ftemplates%2Fcalories-tracker%2Fthumbnail.webp&w=2048&q=75&dpl=dpl_Gdn9coGtjVd7r38KBgLha3SE6SnL 2048w,
                  https://sleek.design/_next/image?url=%2Fimages%2Ftemplates%2Fcalories-tracker%2Fthumbnail.webp&w=3840&q=75&dpl=dpl_Gdn9coGtjVd7r38KBgLha3SE6SnL 3840w
                "
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="text-transparent"
                data-nimg="1"
                decoding="async"
                height="100"
                width="600"
                alt="A mobile app for tracking your calories and achieving your fitness goals."
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <button
                  data-slot="button"
                  className="inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium text-sm outline-none transition-[color,box-shadow,scale] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 active:scale-95 disabled:pointer-events-none aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg:not([className*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 shadow-xs h-9 px-4 py-2 absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 bg-white text-black hover:bg-[#f0f0f0] disabled:text-black/70 disabled:opacity-100 has-[>svg]:px-6"
                >
                  <svg
                    viewBox="0 0 256 256"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M224,64a32,32,0,1,0-40,31v17a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V95a32,32,0,1,0-16,0v17a24,24,0,0,0,24,24h40v25a32,32,0,1,0,16,0V136h40a24,24,0,0,0,24-24V95A32.06,32.06,0,0,0,224,64ZM48,64A16,16,0,1,1,64,80,16,16,0,0,1,48,64Zm96,128a16,16,0,1,1-16-16A16,16,0,0,1,144,192ZM192,80a16,16,0,1,1,16-16A16,16,0,0,1,192,80Z"
                    ></path>
                  </svg>
                  Clone Design
                </button>
              </div>
            </div>
            <div><h3 className="text-base">Calories Tracker</h3></div>
          </div>
          <div className="flex flex-col gap-2">
            <div
              className="group corner-squircle relative mx-auto flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-primary/10 p-3 supports-corner:rounded-[2.5rem] dark:border dark:bg-card"
            >
              <img
                src="https://sleek.design/_next/image?url=%2Fimages%2Ftemplates%2Fsleep-tracker%2Fthumbnail.webp&w=3840&q=75&dpl=dpl_Gdn9coGtjVd7r38KBgLha3SE6SnL"
                srcset="
                  https://sleek.design/_next/image?url=%2Fimages%2Ftemplates%2Fsleep-tracker%2Fthumbnail.webp&w=256&q=75&dpl=dpl_Gdn9coGtjVd7r38KBgLha3SE6SnL   256w,
                  https://sleek.design/_next/image?url=%2Fimages%2Ftemplates%2Fsleep-tracker%2Fthumbnail.webp&w=384&q=75&dpl=dpl_Gdn9coGtjVd7r38KBgLha3SE6SnL   384w,
                  https://sleek.design/_next/image?url=%2Fimages%2Ftemplates%2Fsleep-tracker%2Fthumbnail.webp&w=640&q=75&dpl=dpl_Gdn9coGtjVd7r38KBgLha3SE6SnL   640w,
                  https://sleek.design/_next/image?url=%2Fimages%2Ftemplates%2Fsleep-tracker%2Fthumbnail.webp&w=750&q=75&dpl=dpl_Gdn9coGtjVd7r38KBgLha3SE6SnL   750w,
                  https://sleek.design/_next/image?url=%2Fimages%2Ftemplates%2Fsleep-tracker%2Fthumbnail.webp&w=828&q=75&dpl=dpl_Gdn9coGtjVd7r38KBgLha3SE6SnL   828w,
                  https://sleek.design/_next/image?url=%2Fimages%2Ftemplates%2Fsleep-tracker%2Fthumbnail.webp&w=1080&q=75&dpl=dpl_Gdn9coGtjVd7r38KBgLha3SE6SnL 1080w,
                  https://sleek.design/_next/image?url=%2Fimages%2Ftemplates%2Fsleep-tracker%2Fthumbnail.webp&w=1200&q=75&dpl=dpl_Gdn9coGtjVd7r38KBgLha3SE6SnL 1200w,
                  https://sleek.design/_next/image?url=%2Fimages%2Ftemplates%2Fsleep-tracker%2Fthumbnail.webp&w=1920&q=75&dpl=dpl_Gdn9coGtjVd7r38KBgLha3SE6SnL 1920w,
                  https://sleek.design/_next/image?url=%2Fimages%2Ftemplates%2Fsleep-tracker%2Fthumbnail.webp&w=2048&q=75&dpl=dpl_Gdn9coGtjVd7r38KBgLha3SE6SnL 2048w,
                  https://sleek.design/_next/image?url=%2Fimages%2Ftemplates%2Fsleep-tracker%2Fthumbnail.webp&w=3840&q=75&dpl=dpl_Gdn9coGtjVd7r38KBgLha3SE6SnL 3840w
                "
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="text-transparent"
                data-nimg="1"
                decoding="async"
                height="100"
                width="600"
                alt="An app for tracking your sleep and improving your sleep quality."
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <button
                  data-slot="button"
                  className="inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium text-sm outline-none transition-[color,box-shadow,scale] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 active:scale-95 disabled:pointer-events-none aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg:not([className*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 shadow-xs h-9 px-4 py-2 absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 bg-white text-black hover:bg-[#f0f0f0] disabled:text-black/70 disabled:opacity-100 has-[>svg]:px-6"
                >
                  <svg
                    viewBox="0 0 256 256"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M224,64a32,32,0,1,0-40,31v17a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V95a32,32,0,1,0-16,0v17a24,24,0,0,0,24,24h40v25a32,32,0,1,0,16,0V136h40a24,24,0,0,0,24-24V95A32.06,32.06,0,0,0,224,64ZM48,64A16,16,0,1,1,64,80,16,16,0,0,1,48,64Zm96,128a16,16,0,1,1-16-16A16,16,0,0,1,144,192ZM192,80a16,16,0,1,1,16-16A16,16,0,0,1,192,80Z"
                    ></path>
                  </svg>
                  Clone Design
                </button>
              </div>
            </div>
            <div><h3 className="text-base">Sleep Tracker</h3></div>
          </div>
          <div className="flex flex-col gap-2">
            <div
              className="group corner-squircle relative mx-auto flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-primary/10 p-3 supports-corner:rounded-[2.5rem] dark:border dark:bg-card"
            >
              <img
                src="https://sleek.design/_next/image?url=%2Fimages%2Ftemplates%2Fexpense-tracker%2Fthumbnail.webp&w=3840&q=75&dpl=dpl_Gdn9coGtjVd7r38KBgLha3SE6SnL"
                srcset="
                  https://sleek.design/_next/image?url=%2Fimages%2Ftemplates%2Fexpense-tracker%2Fthumbnail.webp&w=256&q=75&dpl=dpl_Gdn9coGtjVd7r38KBgLha3SE6SnL   256w,
                  https://sleek.design/_next/image?url=%2Fimages%2Ftemplates%2Fexpense-tracker%2Fthumbnail.webp&w=384&q=75&dpl=dpl_Gdn9coGtjVd7r38KBgLha3SE6SnL   384w,
                  https://sleek.design/_next/image?url=%2Fimages%2Ftemplates%2Fexpense-tracker%2Fthumbnail.webp&w=640&q=75&dpl=dpl_Gdn9coGtjVd7r38KBgLha3SE6SnL   640w,
                  https://sleek.design/_next/image?url=%2Fimages%2Ftemplates%2Fexpense-tracker%2Fthumbnail.webp&w=750&q=75&dpl=dpl_Gdn9coGtjVd7r38KBgLha3SE6SnL   750w,
                  https://sleek.design/_next/image?url=%2Fimages%2Ftemplates%2Fexpense-tracker%2Fthumbnail.webp&w=828&q=75&dpl=dpl_Gdn9coGtjVd7r38KBgLha3SE6SnL   828w,
                  https://sleek.design/_next/image?url=%2Fimages%2Ftemplates%2Fexpense-tracker%2Fthumbnail.webp&w=1080&q=75&dpl=dpl_Gdn9coGtjVd7r38KBgLha3SE6SnL 1080w,
                  https://sleek.design/_next/image?url=%2Fimages%2Ftemplates%2Fexpense-tracker%2Fthumbnail.webp&w=1200&q=75&dpl=dpl_Gdn9coGtjVd7r38KBgLha3SE6SnL 1200w,
                  https://sleek.design/_next/image?url=%2Fimages%2Ftemplates%2Fexpense-tracker%2Fthumbnail.webp&w=1920&q=75&dpl=dpl_Gdn9coGtjVd7r38KBgLha3SE6SnL 1920w,
                  https://sleek.design/_next/image?url=%2Fimages%2Ftemplates%2Fexpense-tracker%2Fthumbnail.webp&w=2048&q=75&dpl=dpl_Gdn9coGtjVd7r38KBgLha3SE6SnL 2048w,
                  https://sleek.design/_next/image?url=%2Fimages%2Ftemplates%2Fexpense-tracker%2Fthumbnail.webp&w=3840&q=75&dpl=dpl_Gdn9coGtjVd7r38KBgLha3SE6SnL 3840w
                "
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="text-transparent"
                data-nimg="1"
                decoding="async"
                height="100"
                width="600"
                alt="An app for tracking your expenses and managing your personal finances."
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <button
                  data-slot="button"
                  className="inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium text-sm outline-none transition-[color,box-shadow,scale] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 active:scale-95 disabled:pointer-events-none aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg:not([className*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 shadow-xs h-9 px-4 py-2 absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 bg-white text-black hover:bg-[#f0f0f0] disabled:text-black/70 disabled:opacity-100 has-[>svg]:px-6"
                >
                  <svg
                    viewBox="0 0 256 256"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M224,64a32,32,0,1,0-40,31v17a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V95a32,32,0,1,0-16,0v17a24,24,0,0,0,24,24h40v25a32,32,0,1,0,16,0V136h40a24,24,0,0,0,24-24V95A32.06,32.06,0,0,0,224,64ZM48,64A16,16,0,1,1,64,80,16,16,0,0,1,48,64Zm96,128a16,16,0,1,1-16-16A16,16,0,0,1,144,192ZM192,80a16,16,0,1,1,16-16A16,16,0,0,1,192,80Z"
                    ></path>
                  </svg>
                  Clone Design
                </button>
              </div>
            </div>
            <div><h3 className="text-base">Expense Tracker</h3></div>
          </div>
          <div className="flex flex-col gap-2">
            <div
              className="group corner-squircle relative mx-auto flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-primary/10 p-3 supports-corner:rounded-[2.5rem] dark:border dark:bg-card"
            >
              <img
                src="https://sleek.design/_next/image?url=%2Fimages%2Ftemplates%2Fmeditation%2Fthumbnail.webp&w=3840&q=75&dpl=dpl_Gdn9coGtjVd7r38KBgLha3SE6SnL"
                srcset="
                  https://sleek.design/_next/image?url=%2Fimages%2Ftemplates%2Fmeditation%2Fthumbnail.webp&w=256&q=75&dpl=dpl_Gdn9coGtjVd7r38KBgLha3SE6SnL   256w,
                  https://sleek.design/_next/image?url=%2Fimages%2Ftemplates%2Fmeditation%2Fthumbnail.webp&w=384&q=75&dpl=dpl_Gdn9coGtjVd7r38KBgLha3SE6SnL   384w,
                  https://sleek.design/_next/image?url=%2Fimages%2Ftemplates%2Fmeditation%2Fthumbnail.webp&w=640&q=75&dpl=dpl_Gdn9coGtjVd7r38KBgLha3SE6SnL   640w,
                  https://sleek.design/_next/image?url=%2Fimages%2Ftemplates%2Fmeditation%2Fthumbnail.webp&w=750&q=75&dpl=dpl_Gdn9coGtjVd7r38KBgLha3SE6SnL   750w,
                  https://sleek.design/_next/image?url=%2Fimages%2Ftemplates%2Fmeditation%2Fthumbnail.webp&w=828&q=75&dpl=dpl_Gdn9coGtjVd7r38KBgLha3SE6SnL   828w,
                  https://sleek.design/_next/image?url=%2Fimages%2Ftemplates%2Fmeditation%2Fthumbnail.webp&w=1080&q=75&dpl=dpl_Gdn9coGtjVd7r38KBgLha3SE6SnL 1080w,
                  https://sleek.design/_next/image?url=%2Fimages%2Ftemplates%2Fmeditation%2Fthumbnail.webp&w=1200&q=75&dpl=dpl_Gdn9coGtjVd7r38KBgLha3SE6SnL 1200w,
                  https://sleek.design/_next/image?url=%2Fimages%2Ftemplates%2Fmeditation%2Fthumbnail.webp&w=1920&q=75&dpl=dpl_Gdn9coGtjVd7r38KBgLha3SE6SnL 1920w,
                  https://sleek.design/_next/image?url=%2Fimages%2Ftemplates%2Fmeditation%2Fthumbnail.webp&w=2048&q=75&dpl=dpl_Gdn9coGtjVd7r38KBgLha3SE6SnL 2048w,
                  https://sleek.design/_next/image?url=%2Fimages%2Ftemplates%2Fmeditation%2Fthumbnail.webp&w=3840&q=75&dpl=dpl_Gdn9coGtjVd7r38KBgLha3SE6SnL 3840w
                "
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="text-transparent"
                data-nimg="1"
                decoding="async"
                height="100"
                width="600"
                alt="A guided meditation app"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <button
                  data-slot="button"
                  className="inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium text-sm outline-none transition-[color,box-shadow,scale] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 active:scale-95 disabled:pointer-events-none aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg:not([className*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 shadow-xs h-9 px-4 py-2 absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 bg-white text-black hover:bg-[#f0f0f0] disabled:text-black/70 disabled:opacity-100 has-[>svg]:px-6"
                >
                  <svg
                    viewBox="0 0 256 256"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M224,64a32,32,0,1,0-40,31v17a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V95a32,32,0,1,0-16,0v17a24,24,0,0,0,24,24h40v25a32,32,0,1,0,16,0V136h40a24,24,0,0,0,24-24V95A32.06,32.06,0,0,0,224,64ZM48,64A16,16,0,1,1,64,80,16,16,0,0,1,48,64Zm96,128a16,16,0,1,1-16-16A16,16,0,0,1,144,192ZM192,80a16,16,0,1,1,16-16A16,16,0,0,1,192,80Z"
                    ></path>
                  </svg>
                  Clone Design
                </button>
              </div>
            </div>
            <div><h3 className="text-base">Guided Meditation App</h3></div>
          </div>
        </div>
        <div className="mt-8 flex justify-center md:hidden">
          <a
            href="/explore"
            data-slot="button"
            className="inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium outline-none transition-[color,box-shadow,scale] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 active:scale-95 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg:not([className*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 has-[>svg]:px-3 text-foreground-muted text-sm"
          >
            View all templates
            <svg
              className="size-4"
              viewBox="0 0 256 256"
              fill="currentColor"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"
              ></path>
            </svg>
          </a>
        </div>
      </section>
      <section className="container relative py-16 sm:py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl">
            <div
              role="region"
              data-slot="carousel"
              className="relative"
              aria-roledescription="carousel"
            >
              <div data-slot="carousel-content" className="overflow-hidden">
                <div className="flex -ml-4">
                  <div
                    role="group"
                    data-slot="carousel-item"
                    className="min-w-0 shrink-0 grow-0 basis-full pl-4"
                    aria-roledescription="slide"
                  >
                    <div className="text-center">
                      <blockquote
                        className="mb-8 font-medium text-foreground text-xl leading-relaxed sm:text-2xl md:text-3xl"
                      >
                        "As a
                        <span className="text-primary-gradient">
                          non-technical founder
                        </span>
                        , Sleek is a game changer. We used to spend thousands on
                        freelance designers and wait weeks for revisions. Now we
                        can
                        <span className="text-primary-gradient">
                          test ideas with real users
                        </span>
                        in days, not months."
                      </blockquote>
                      <div
                        className="flex items-center justify-center gap-3 text-foreground-muted"
                      >
                        <span
                          data-slot="avatar"
                          className="relative flex shrink-0 overflow-hidden rounded-full size-8"
                        >
                          <img
                            src="https://sleek.design/_next/static/media/avatar-1.0b2d52ef.jpg"
                            alt="Alex T."
                            data-slot="avatar-image"
                            className="aspect-square size-full"
                          />
                        </span>
                        <span>
                          Alex T. -
                          <span className="text-primary-gradient">App Founder</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    role="group"
                    data-slot="carousel-item"
                    className="min-w-0 shrink-0 grow-0 basis-full pl-4"
                    aria-roledescription="slide"
                  >
                    <div className="text-center">
                      <blockquote
                        className="mb-8 font-medium text-foreground text-xl leading-relaxed sm:text-2xl md:text-3xl"
                      >
                        "I tried learning Figma but it was overwhelming. With
                        Sleek I just
                        <span className="text-primary-gradient">
                          describe what I need
                        </span>
                        and it creates screens that actually look professional.
                        Investors thought
                        <span className="text-primary-gradient">
                          I had a design team
                        </span>
                        ."
                      </blockquote>
                      <div
                        className="flex items-center justify-center gap-3 text-foreground-muted"
                      >
                        <span
                          data-slot="avatar"
                          className="relative flex shrink-0 overflow-hidden rounded-full size-8"
                        >
                          <img
                            src="https://sleek.design/_next/static/media/avatar-2.d705fc77.jpg"
                            alt="Priya S."
                            data-slot="avatar-image"
                            className="aspect-square size-full"
                          />
                        </span>
                        <span>
                          Priya S. -
                          <span className="text-primary-gradient">
                            Startup Founder
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    role="group"
                    data-slot="carousel-item"
                    className="min-w-0 shrink-0 grow-0 basis-full pl-4"
                    aria-roledescription="slide"
                  >
                    <div className="text-center">
                      <blockquote
                        className="mb-8 font-medium text-foreground text-xl leading-relaxed sm:text-2xl md:text-3xl"
                      >
                        "I was stuck waiting on a designer for weeks, burning
                        through my budget before even launching. Sleek gave me
                        <span className="text-primary-gradient">
                          complete control
                        </span>
                        to move at my own pace. Now I'm
                        <span className="text-primary-gradient">
                          getting first customers
                        </span>
                        instead of still going back and forth on mockups."
                      </blockquote>
                      <div
                        className="flex items-center justify-center gap-3 text-foreground-muted"
                      >
                        <span
                          data-slot="avatar"
                          className="relative flex shrink-0 overflow-hidden rounded-full size-8"
                        >
                          <img
                            src="https://sleek.design/_next/static/media/avatar-3.ba0d4679.jpg"
                            alt="Jordan M."
                            data-slot="avatar-image"
                            className="aspect-square size-full"
                          />
                        </span>
                        <span>
                          Jordan M. -
                          <span className="text-primary-gradient">
                            Solo Founder
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-center gap-2 md:mt-8">
              <button
                type="button"
                className="size-2 rounded-full transition-colors bg-primary"
                aria-label="Go to testimonial 1"
              ></button>
              <button
                type="button"
                className="size-2 rounded-full transition-colors bg-muted hover:bg-muted-foreground/50"
                aria-label="Go to testimonial 2"
              ></button>
              <button
                type="button"
                className="size-2 rounded-full transition-colors bg-muted hover:bg-muted-foreground/50"
                aria-label="Go to testimonial 3"
              ></button>
            </div>
          </div>
        </div>
      </section>
      <section
        className="container relative flex flex-col items-center gap-8 py-16 sm:py-20"
      >
        <div className="flex flex-col items-center gap-4">
          <div
            className="inline-flex items-center gap-2 text-primary-gradient text-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="size-4 text-primary-gradient"
            >
              <path
                fill="currentColor"
                d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z"
              ></path>
            </svg>
            Product Demo
          </div>
          <h2
            className="font-heading font-semibold text-3xl text-foreground tracking-tight sm:text-4xl"
          >
            See Sleek in Action
          </h2>
        </div>
        <div
          className="corner-squircle relative aspect-16/10 w-full max-w-4xl overflow-hidden rounded-2xl border border-border bg-muted supports-corner:rounded-3xl"
        >
          <img
            src="https://ggrhecslgdflloszjkwl.supabase.co/storage/v1/object/public/sleek/assets/demo-section/demo-thumbnail.gif"
            className="absolute h-full w-full text-transparent inset-0"
            data-nimg="fill"
            decoding="async"
            loading="lazy"
            alt="Product Demo Video"
          />
          <div className="absolute inset-0 bg-black/5"></div>
          <button
            data-slot="button"
            className="inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap font-medium text-sm outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 active:scale-95 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg:not([className*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 absolute top-1/2 left-1/2 size-16 -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform hover:scale-95"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="text-primary-foreground size-6"
            >
              <path
                fill="currentColor"
                d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z"
              ></path>
            </svg>
          </button>
        </div>
      </section>
      <section className="relative z-10 py-16 sm:py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <h2
                className="mb-4 font-heading font-semibold text-3xl tracking-tight sm:text-4xl"
              >
                Turn your ideas into reality
              </h2>
              <p className="mx-auto max-w-2xl text-foreground-muted sm:text-lg">
                Sleek makes design generation incredibly simple so you can focus
                on what matters - your vision. No matter your background or
                expertise.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="space-y-6">
                <div
                  data-slot="card"
                  className="corner-squircle flex flex-col gap-6 rounded-xl border text-card-foreground supports-corner:rounded-[2.5rem] mx-auto h-64 w-full items-center justify-center border-none bg-primary/10 p-8 shadow-none dark:bg-card"
                >
                  <img
                    className="text-transparent"
                    src="https://sleek.design/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffeature-1.77f0aab4.webp&w=3840&q=75&dpl=dpl_Gdn9coGtjVd7r38KBgLha3SE6SnL"
                    srcset="
                      https://sleek.design/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffeature-1.77f0aab4.webp&w=1920&q=75&dpl=dpl_Gdn9coGtjVd7r38KBgLha3SE6SnL 1x,
                      https://sleek.design/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffeature-1.77f0aab4.webp&w=3840&q=75&dpl=dpl_Gdn9coGtjVd7r38KBgLha3SE6SnL 2x
                    "
                    data-nimg="1"
                    decoding="async"
                    height="1000"
                    width="1340"
                    loading="lazy"
                    alt="Mobile App Designs"
                  />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-xl">Generate with AI</h3>
                  <p className="text-foreground-muted">
                    Describe your app or attach an image and watch your design
                    come to life.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div
                  data-slot="card"
                  className="corner-squircle flex flex-col gap-6 rounded-xl border text-card-foreground supports-corner:rounded-[2.5rem] mx-auto h-64 w-full items-center justify-center border-none bg-primary/10 p-8 shadow-none dark:bg-card"
                >
                  <img
                    src="https://sleek.design/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffeature-2-light.1b10a6fd.webp&w=1920&q=75&dpl=dpl_Gdn9coGtjVd7r38KBgLha3SE6SnL"
                    srcset="
                      https://sleek.design/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffeature-2-light.1b10a6fd.webp&w=750&q=75&dpl=dpl_Gdn9coGtjVd7r38KBgLha3SE6SnL  1x,
                      https://sleek.design/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffeature-2-light.1b10a6fd.webp&w=1920&q=75&dpl=dpl_Gdn9coGtjVd7r38KBgLha3SE6SnL 2x
                    "
                    className="text-transparent"
                    data-nimg="1"
                    decoding="async"
                    height="306"
                    width="686"
                    loading="lazy"
                    alt="Visual editing interface"
                  />
                  <img
                    src="https://sleek.design/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffeature-2-dark.c5b3c878.webp&w=1920&q=75&dpl=dpl_Gdn9coGtjVd7r38KBgLha3SE6SnL"
                    srcset="
                      https://sleek.design/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffeature-2-dark.c5b3c878.webp&w=750&q=75&dpl=dpl_Gdn9coGtjVd7r38KBgLha3SE6SnL  1x,
                      https://sleek.design/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffeature-2-dark.c5b3c878.webp&w=1920&q=75&dpl=dpl_Gdn9coGtjVd7r38KBgLha3SE6SnL 2x
                    "
                    className="text-transparent"
                    data-nimg="1"
                    decoding="async"
                    height="304"
                    width="684"
                    loading="lazy"
                    alt="Visual editing interface"
                  />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-xl">Easy edits</h3>
                  <p className="text-foreground-muted">
                    Iterate and refine your designs quickly to build the
                    interface that works best for you.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div
                  data-slot="card"
                  className="corner-squircle flex flex-col gap-6 rounded-xl border text-card-foreground supports-corner:rounded-[2.5rem] mx-auto h-64 w-full items-center justify-center border-none bg-primary/10 p-8 shadow-none dark:bg-card"
                >
                  <img
                    src="https://sleek.design/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffeature-3.fbac3487.webp&w=3840&q=75&dpl=dpl_Gdn9coGtjVd7r38KBgLha3SE6SnL"
                    srcset="
                      https://sleek.design/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffeature-3.fbac3487.webp&w=1920&q=75&dpl=dpl_Gdn9coGtjVd7r38KBgLha3SE6SnL 1x,
                      https://sleek.design/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffeature-3.fbac3487.webp&w=3840&q=75&dpl=dpl_Gdn9coGtjVd7r38KBgLha3SE6SnL 2x
                    "
                    className="text-transparent"
                    data-nimg="1"
                    decoding="async"
                    height="696"
                    width="1390"
                    loading="lazy"
                    alt="Component library"
                  />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-xl">Export your design</h3>
                  <p className="text-foreground-muted">
                    Export your designs to code or Figma and bring your app to
                    life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="relative overflow-hidden bg-background-secondary pt-48 pb-32 sm:pt-64 sm:pb-40"
      >
        <div
          className="container z-10 flex flex-col items-center gap-8 pt-20 md:flex-row md:gap-20"
        >
          <div
            className="flex flex-col items-center gap-4 text-center md:w-[40%] md:items-start md:gap-6 md:text-left"
          >
            <h2
              className="max-w-xs font-heading font-semibold text-3xl tracking-tight sm:max-w-sm md:text-4xl"
            >
              Start designing your next app today
            </h2>
            <p className="text-foreground-muted text-lg leading-relaxed">
              From idea to app designs in minutes.
            </p>
          </div>
          <div className="w-full flex-1">
            <div className="flex w-full flex-col items-center gap-8 relative z-10">
              <div className="relative w-full max-w-2xl">
                <input
                  type="file"
                  className="hidden"
                  accept="image/png, image/jpeg, image/jpg, image/webp"
                />
                <form
                  className="corner-squircle w-full overflow-hidden rounded-lg border bg-input supports-corner:rounded-[3rem] shadow-lg ring-4 ring-card"
                >
                  <div className="flex flex-col">
                    <div className="h-0" aria-live="polite">
                      <div
                        className="flex flex-wrap items-end gap-2 px-3 pt-3"
                      ></div>
                    </div>
                    <textarea
                      placeholder="I want to design an app that..."
                      name="prompt"
                      data-slot="textarea"
                      className="flex transition-[color,box-shadow] placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 w-full resize-none rounded-none border-none shadow-none outline-none ring-0 field-sizing-content bg-transparent dark:bg-transparent max-h-48 focus-visible:ring-0 min-h-22 p-4 text-base md:text-base"
                    ></textarea>
                  </div>
                  <div className="flex items-center justify-between p-3">
                    <div className="flex items-center gap-1">
                      <button
                        data-state="closed"
                        aria-label="Add image attachment"
                        type="button"
                        data-slot="tooltip-trigger"
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium text-sm outline-none transition-[color,box-shadow,scale] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 active:scale-95 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg:not([className*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 border shadow-xs hover:bg-accent hover:text-accent-foreground py-2 has-[>svg]:px-3 shrink-0 gap-1.5 px-3 size-9 border-border bg-card"
                      >
                        <svg
                          className="size-4"
                          viewBox="0 0 256 256"
                          fill="currentColor"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V158.75l-26.07-26.06a16,16,0,0,0-22.63,0l-20,20-44-44a16,16,0,0,0-22.62,0L40,149.37V56ZM40,172l52-52,80,80H40Zm176,28H194.63l-36-36,20-20L216,181.38V200ZM144,100a12,12,0,1,1,12,12A12,12,0,0,1,144,100Z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <button
                      disabled=""
                      aria-label="Send message"
                      type="submit"
                      data-slot="button"
                      className="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-md font-medium text-sm outline-none transition-[color,box-shadow,scale] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 active:scale-95 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg:not([className*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 py-2 has-[>svg]:px-3 gap-1.5"
                    >
                      Design it
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="size-4"
                      >
                        <path
                          fill="currentColor"
                          d="m4.497 20.835l16.51-7.363c1.324-.59 1.324-2.354 0-2.944L4.497 3.164c-1.495-.667-3.047.814-2.306 2.202l3.152 5.904c.245.459.245 1 0 1.458l-3.152 5.904c-.74 1.388.81 2.87 2.306 2.202"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute left-1/2 h-[3000px] w-[5000px] -translate-x-1/2 bottom-[75%] rotate-180"
        >
          <div
            className="absolute mt-[-10px] size-full rounded-[50%] bg-primary-gradient/20 opacity-70 [box-shadow:0_-15px_24.8px_var(--primary-gradient)]"
          ></div>
          <div className="absolute z-0 size-full rounded-[50%] bg-background"></div>
        </div>
      </section>
    </div>
    <footer className="border-t pt-10 pb-20 bg-background">
      <div className="container flex flex-wrap justify-between">
        <div
          className="flex basis-full flex-col justify-between gap-2 sm:basis-auto sm:justify-start"
        >
          <div className="flex items-center gap-2">
            <a href="/">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 310.01 211.75"
                  fill="none"
                  className="size-7 text-primary"
                >
                  <path
                    fill="currentColor"
                    d="M300.398 27.5019c14.142 5.4706 12.251 10.8284-2.912 10.8672-14.107.036-28.215.147-42.315.4834-13.472.4-27.044 1.4-40.715 2.4-11.476.9-23.052 1.9-34.428 3.5-14.171 2-28.042 5.4-40.815 12.3-19.16 10.4-27.542 28-23.65 49.5995 1.231 6.785 3.188 13.255 5.508 19.618 2.158 5.919-2.739 12.152-8.898 10.822-11.373-2.457-22.394-5.925-32.5352-12.24-12.9729-8.1-22.5529-18.8-25.7462-34.2995-2.5945-12.2-.1996-23.7 5.3888-34.6 8.083-15.9 20.8563-27.2 36.0246-36 19.459-11.3 40.715-16.9 62.968-19 32.233-3 63.667 1.3 94.602 9.9 3.867 1.0643 28.664 9.3538 47.523 16.6494"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M9.6039 184.251c-14.1417-5.471-12.2508-10.829 2.912-10.868 14.1072-.036 28.2148-.147 42.3153-.483 13.4718-.4 27.0434-1.4 40.7148-2.4 11.476-.9 23.052-1.9 34.428-3.5 14.17-2 28.041-5.4 40.815-12.3 19.16-10.4 27.542-28 23.65-49.6-1.231-6.7842-3.188-13.2548-5.508-19.6174-2.158-5.9191 2.739-12.1523 8.897-10.8222 11.374 2.4567 22.395 5.9252 32.536 12.2396 12.973 8.1 22.553 18.8 25.746 34.3 2.595 12.2.2 23.7-5.389 34.6-8.083 15.9-20.856 27.2-36.024 36-19.46 11.3-40.715 16.9-62.969 19-32.232 3-63.666-1.3-94.6016-9.9-3.8666-1.064-28.6632-9.354-47.5225-16.649"
                  ></path>
                </svg>
                <span className="font-heading font-semibold text-xl leading-none">
                  sleek.design
                </span>
              </div>
            </a>
          </div>
          <p className="max-w-md text-foreground-muted text-sm">
            © 2025 Sleek. All rights reserved.
          </p>
          <div className="mt-4 flex items-center gap-5 sm:mt-auto">
            <a
              rel="noopener noreferrer"
              href="https://x.com/sleekdotdesign"
              className="text-foreground-muted hover:text-foreground"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="size-5"
              >
                <path
                  fill="currentColor"
                  d="m17.687 3.063l-4.996 5.711l-4.32-5.711H2.112l7.477 9.776l-7.086 8.099h3.034l5.469-6.25l4.78 6.25h6.102l-7.794-10.304l6.625-7.571zm-1.064 16.06L5.654 4.782h1.803l10.846 14.34z"
                ></path>
              </svg>
            </a>
            <a
              rel="noopener noreferrer"
              href="https://www.youtube.com/@sleek.design"
              className="text-foreground-muted hover:text-foreground"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="size-6"
              >
                <path
                  fill="currentColor"
                  d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73"
                ></path>
              </svg>
            </a>
            <a
              rel="noopener noreferrer"
              href="mailto:mattia@sleek.design"
              className="text-foreground-muted hover:text-foreground"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="size-5"
              >
                <path
                  fill="currentColor"
                  d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m0 2l-6.5 4.47a1 1 0 0 1-1 0L5 6Z"
                ></path>
              </svg>
            </a>
            <div
              role="group"
              data-slot="button-group"
              data-orientation="horizontal"
              className="flex w-fit items-stretch has-[>[data-slot=button-group]]:gap-2 [&>*]:focus-visible:relative [&>*]:focus-visible:z-10 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md [&>[data-slot=select-trigger]:not([className*='w-'])]:w-fit [&>input]:flex-1 [&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none ml-auto sm:ml-0"
            >
              <button
                data-slot="button"
                className="inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium text-sm outline-none transition-[color,box-shadow,scale] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 active:scale-95 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg:not([className*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 border border-border shadow-xs hover:bg-accent hover:text-accent-foreground size-6 bg-input"
              >
                <svg
                  className="size-4"
                  viewBox="0 0 256 256"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"
                  ></path>
                </svg>
                <span className="sr-only">Light theme</span>
              </button>
              <div
                data-slot="button-group-separator"
                className="shrink-0 data-[orientation=horizontal]:h-[var(--default-border-width)] data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-[var(--default-border-width)] !m-0 relative self-stretch bg-input data-[orientation=vertical]:h-auto"
                role="none"
                data-orientation="vertical"
              ></div>
              <button
                data-slot="button"
                className="inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium text-sm outline-none transition-[color,box-shadow,scale] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 active:scale-95 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg:not([className*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 border border-border shadow-xs hover:bg-accent hover:text-accent-foreground size-6 bg-input"
              >
                <svg
                  className="size-4"
                  viewBox="0 0 256 256"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z"
                  ></path>
                </svg>
                <span className="sr-only">Dark theme</span>
              </button>
              <div
                data-slot="button-group-separator"
                className="shrink-0 data-[orientation=horizontal]:h-[var(--default-border-width)] data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-[var(--default-border-width)] !m-0 relative self-stretch bg-input data-[orientation=vertical]:h-auto"
                role="none"
                data-orientation="vertical"
              ></div>
              <button
                data-slot="button"
                className="inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium text-sm outline-none transition-[color,box-shadow,scale] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 active:scale-95 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg:not([className*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 border border-border shadow-xs hover:bg-accent hover:text-accent-foreground size-6 bg-input"
              >
                <svg
                  className="size-4"
                  viewBox="0 0 256 256"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M208,40H48A24,24,0,0,0,24,64V176a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V64A24,24,0,0,0,208,40Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8Zm-48,48a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,224Z"
                  ></path>
                </svg>
                <span className="sr-only">System theme</span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-20">
          <div
            className="mt-10 flex basis-1/2 flex-col gap-5 sm:mt-0 sm:basis-auto"
          >
            <h3 className="font-semibold">Community</h3>
            <a
              href="/explore"
              className="text-foreground-muted text-sm hover:text-foreground"
            >
              Explore
            </a>
            <a
              rel="noopener noreferrer"
              href="https://sleek.tolt.io/?group=affiliates-25"
              className="text-foreground-muted text-sm hover:text-foreground"
            >
              Affiliates
            </a>
          </div>
          <div
            className="mt-10 flex basis-1/2 flex-col gap-5 sm:mt-0 sm:basis-auto"
          >
            <h3 className="font-semibold">Legal</h3>
            <a
              href="/terms"
              className="text-foreground-muted text-sm hover:text-foreground"
            >
              Terms of Service
            </a>
            <a
              href="/privacy"
              className="text-foreground-muted text-sm hover:text-foreground"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
  <section
    aria-atomic="false"
    aria-relevant="additions text"
    aria-live="polite"
    tabindex="-1"
    aria-label="Notifications alt+T"
  ></section>
</div>
  );
};

export default SleekLandingPage;