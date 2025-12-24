export default function Bento() {
  return (
    <div className="bento-grid-variants">
      <section
        data-slot="section"
        className="line-b px-4 py-12 sm:py-24 md:py-32"
      >
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-6 sm:gap-12">
          <h2 className="text-center text-3xl font-semibold text-balance sm:text-5xl">
            It's all about design quality
          </h2>
          <p className="text-md text-muted-foreground max-w-[840px] text-center font-medium text-balance sm:text-xl">
            In a world where everybody can vibe-code a new thing overnight, the
            key is to stand out. Generic-looking shadcn/ui blocks won't help you
            to get noticed. With Launch UI, you can make sure that your design
            is unique and memorable.
          </p>
          <div className="grid grid-cols-12 gap-4">
            <div
              data-slot="card"
              className="group text-card-foreground border relative col-span-12 flex flex-col gap-6 overflow-hidden rounded-xl p-6 shadow-xl transition-all md:col-span-6 lg:col-span-5"
            >
              <div data-slot="card-content" className="flex flex-col gap-4">
                <h3
                  data-slot="card-title"
                  className="text-2xl leading-none font-semibold tracking-tight"
                >
                  World-class design
                </h3>
                <div
                  data-slot="card-description"
                  className="text-md text-muted-foreground flex flex-col gap-2 text-balance"
                >
                  <p>
                    Each page and component is carefully crafted to look and
                    feel professional.
                  </p>
                </div>
              </div>
              <div
                data-slot="glow"
                className="from-primary-foreground/10 to-primary-foreground/0 absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial w-full h-full scale-150 opacity-80 group-hover:opacity-100 transition-all"
              />
            </div>
            <div
              data-slot="card"
              className="group text-card-foreground border relative col-span-12 flex flex-col gap-6 overflow-hidden rounded-xl p-6 shadow-xl transition-all md:col-span-6 lg:col-span-7"
            >
              <div data-slot="card-content" className="flex flex-col gap-4">
                <h3
                  data-slot="card-title"
                  className="text-2xl leading-none font-semibold tracking-tight"
                >
                  Made for fast development
                </h3>
                <div
                  data-slot="card-description"
                  className="text-md text-muted-foreground flex flex-col gap-2 text-balance"
                >
                  <p className="max-w-[520px]">
                    From idea to production in no time.
                  </p>
                </div>
              </div>
              <div
                data-slot="glow"
                className="from-primary-foreground/10 to-primary-foreground/0 absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial w-full h-full scale-150 opacity-80 group-hover:opacity-100 transition-all"
              />
              <div
                data-slot="card-visual"
                className="flex grow items-end justify-center"
              >
                <div className="min-h-[160px] w-full grow items-center self-center">
                  <div
                    data-slot="pipeline-illustration"
                    className="relative flex w-full flex-col gap-4 p-4 text-xs"
                  >
                    <div className="flex items-center justify-around">
                      <div className="border-border dark:border-border/5 dark:inset-shadow-lg inset-shadow-primary/10 flex items-center justify-center rounded-full border p-2 lg:p-3">
                        <div className="border-border dark:border-border/15 dark:inset-shadow-lg inset-shadow-primary/20 flex items-center justify-center rounded-full border p-2 lg:p-3">
                          <div className="glass-4 relative z-10 flex size-8 items-center justify-center rounded-full shadow-md backdrop-blur-lg transition-all duration-1000 ease-in-out group-hover:scale-95 sm:size-12 lg:size-16"></div>
                        </div>
                      </div>
                      <div className="relative">
                        <div className="border-border dark:border-border/5 dark:inset-shadow-lg inset-shadow-primary/10 flex items-center justify-center rounded-full border p-3 lg:p-4">
                          <div className="border-border dark:border-border/15 dark:inset-shadow-lg inset-shadow-primary/20 flex items-center justify-center rounded-full border p-3 lg:p-4">
                            <div className="glass-4 relative z-10 flex size-12 items-center justify-center rounded-full shadow-md backdrop-blur-lg transition-all duration-1000 ease-in-out group-hover:scale-105 sm:size-20 lg:size-24">
                              <div
                                data-slot="beam"
                                className="dark:after:from-primary-foreground/30 after:from-primary-foreground/10 after:to-primary-foreground/0 relative after:absolute after:inset-0 after:scale-200 after:rounded-full after:bg-radial after:from-10% after:to-60% after:content-['']"
                              >
                                <div className="relative z-10"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border-border dark:border-border/5 dark:inset-shadow-lg inset-shadow-primary/10 flex items-center justify-center rounded-full border p-2 lg:p-3">
                        <div className="border-border dark:border-border/15 dark:inset-shadow-lg inset-shadow-primary/20 flex items-center justify-center rounded-full border p-2 lg:p-3">
                          <div className="glass-4 relative z-10 flex size-8 items-center justify-center rounded-full shadow-md backdrop-blur-lg transition-all duration-1000 ease-in-out group-hover:scale-95 sm:size-12 lg:size-16"></div>
                        </div>
                      </div>
                      <div className="group-hover:animate-impulse absolute top-[50%] left-0 opacity-0">
                        <div className="from-primary-foreground/50 via-primary-foreground/10 to-primary-foreground/0 absolute top-[50%] -left-12 size-24 -translate-y-12 rounded-full bg-radial from-20% via-50% to-80%"></div>
                        <div className="absolute top-[50%] -left-4 z-1 size-8 -translate-y-4 rounded-full bg-radial from-white/70 from-20% to-white/0 to-60%"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-slot="card"
              className="group text-card-foreground border relative col-span-12 flex flex-col gap-6 overflow-hidden rounded-xl p-6 shadow-xl transition-all md:col-span-6 lg:col-span-7"
            >
              <div data-slot="card-content" className="flex flex-col gap-4">
                <h3
                  data-slot="card-title"
                  className="text-2xl leading-none font-semibold tracking-tight"
                >
                  Best practice code
                </h3>
                <div
                  data-slot="card-description"
                  className="text-md text-muted-foreground flex flex-col gap-2 text-balance"
                >
                  <p className="max-w-[460px]">
                    Easily maintain and reuse components with a consistent
                    design system.
                  </p>
                </div>
              </div>
              <div
                data-slot="glow"
                className="from-primary-foreground/10 to-primary-foreground/0 absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial w-full h-full scale-150 opacity-80 group-hover:opacity-100 transition-all"
              />
              <div
                data-slot="card-visual"
                className="flex grow items-end justify-center"
              >
                <div className="min-h-[240px] w-full grow items-center self-center px-4 lg:px-12">
                  <div
                    data-slot="code-editor-illustration"
                    className="h-full w-full"
                  >
                    <div className="relative h-full w-full">
                      <div className="absolute top-0 left-[50%] z-10 w-full -translate-x-[50%] translate-y-0">
                        <div className="border-border/100 bg-muted dark:border-border/5 dark:border-t-border/15 dark:bg-accent/30 relative flex min-h-[540px] min-w-[460px] flex-col gap-4 rounded-[12px] border">
                          <div className="flex w-full items-center justify-start gap-4 overflow-hidden py-2">
                            <div className="hidden gap-2 pl-4 lg:flex">
                              <div className="bg-accent dark:bg-foreground/10 size-3 rounded-full"></div>
                              <div className="bg-accent dark:bg-foreground/10 size-3 rounded-full"></div>
                              <div className="bg-accent dark:bg-foreground/10 size-3 rounded-full"></div>
                            </div>
                            <div className="relative flex w-[320px]">
                              <div className="text-muted-foreground relative z-10 flex grow basis-0 items-center gap-2 px-4 py-1.5 text-xs">
                                <p>page.tsx</p>
                              </div>
                              <div className="text-muted-foreground relative z-10 flex grow basis-0 items-center gap-2 px-4 py-1.5 text-xs">
                                <p>globals.css</p>
                              </div>
                              <div className="absolute top-0 left-0 h-full w-[50%] px-2 transition-all duration-1000 ease-in-out group-hover:left-[50%]">
                                <div className="glass-4 h-full w-full rounded-md shadow-md"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-slot="card"
              className="group text-card-foreground border relative col-span-12 flex flex-col gap-6 overflow-hidden rounded-xl p-6 shadow-xl transition-all md:col-span-6 lg:col-span-5"
            >
              <div data-slot="card-content" className="flex flex-col gap-4">
                <h3
                  data-slot="card-title"
                  className="text-2xl leading-none font-semibold tracking-tight"
                >
                  Built for modern product teams
                </h3>
                <div
                  data-slot="card-description"
                  className="text-md text-muted-foreground flex flex-col gap-2 text-balance"
                >
                  Helps teams to build products faster and easier.
                </div>
              </div>
              <div
                data-slot="glow"
                className="from-primary-foreground/10 to-primary-foreground/0 absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial w-full h-full scale-200 opacity-80 group-hover:opacity-100 transition-all"
              />
              <div
                data-slot="card-visual"
                className="flex grow items-end justify-center"
              >
                <div className="w-full sm:p-4 md:p-8">
                  <div className="relative flex w-full items-center justify-center">
                    <div className="flex flex-col">
                      <article className="group glass-3 hover:!bg-raised flex w-sm origin-center flex-col overflow-hidden rounded-xl border shadow-xl backdrop-blur-sm transition-transform duration-300 first:!mt-0 not-last:hover:-translate-y-7 last:hover:-translate-y-4">
                        <div className="flex items-center gap-4 p-5 group-hover:!opacity-100">
                          <div className="bg-primary/5 border-primary/20 dark:border-border/15 text-primary relative flex size-12 items-center justify-center rounded-full border"></div>
                          <div className="flex flex-col gap-2">
                            <span className="text-muted-foreground text-xs">
                              {new Date().toLocaleString()}
                            </span>
                            <div className="font-sm flex gap-0.5 text-base">
                              New feature description
                            </div>
                          </div>
                        </div>
                      </article>
                      <article className="group glass-3 hover:!bg-raised flex w-sm origin-center flex-col overflow-hidden rounded-xl border shadow-xl backdrop-blur-sm transition-transform duration-300 first:!mt-0 not-last:hover:-translate-y-7 last:hover:-translate-y-4">
                        <div className="flex items-center gap-4 p-5 group-hover:!opacity-100">
                          <div className="bg-primary/5 border-primary/20 dark:border-border/15 text-primary relative flex size-12 items-center justify-center rounded-full border"></div>
                          <div className="flex flex-col gap-2">
                            <span className="text-muted-foreground text-xs">
                              {/* new date + 5 minutes */}
                              {new Date(new Date().getTime() + 5 * 60 * 1000).toLocaleString()}
                            </span>
                            <div className="font-sm flex gap-0.5 text-base">
                              Changes committed and pushed
                            </div>
                          </div>
                        </div>
                      </article>
                      <article className="group glass-3 hover:!bg-raised flex w-sm origin-center flex-col overflow-hidden rounded-xl border shadow-xl backdrop-blur-sm transition-transform duration-300 first:!mt-0 not-last:hover:-translate-y-7 last:hover:-translate-y-4">
                        <div className="flex items-center gap-4 p-5 group-hover:!opacity-100">
                          <div className="bg-primary/5 border-primary/20 dark:border-border/15 text-primary relative flex size-12 items-center justify-center rounded-full border"></div>
                          <div className="flex flex-col gap-2">
                            <span className="text-muted-foreground text-xs">
                              {new Date(new Date().getTime() + 10 * 60 * 1000).toLocaleString()}
                            </span>
                            <div className="font-sm flex gap-0.5 text-base">
                              Deployed to production
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
