export default function Bento() {
  return (
    <div className="bento-grid-variants">
      <section
        data-slot="section"
        className="line-b px-4 py-12 sm:py-24 md:py-32"
      >
        <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-12">
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
              className="glass-1 hover:glass-2 group text-card-foreground relative col-span-12 flex flex-col gap-6 overflow-hidden rounded-xl p-6 shadow-xl transition-all md:col-span-6 lg:col-span-5"
            >
              <a
                data-slot="card-link"
                className="bg-accent/50 absolute top-4 right-4 block rounded-full p-4 opacity-0 transition-opacity group-hover:opacity-100"
              >
                
              </a>
              <div data-slot="card-content" className="flex flex-col gap-4">
                <h3
                  data-slot="card-title"
                  className="text-2xl leading-none font-semibold tracking-tight"
                >
                  Design-first
                </h3>
                <div
                  data-slot="card-description"
                  className="text-md text-muted-foreground flex flex-col gap-2 text-balance"
                >
                  <p>
                    Each block and component is carfully crafted—not generated
                    by AI—to give a unique look and feel AI would never come up
                    with.
                  </p>
                </div>
              </div>
              <div
                data-slot="card-visual"
                className="flex grow items-end justify-center"
              >
                <div className="min-h-[300px] w-full py-12">
                  <div
                    data-slot="mockup-mobile-illustration"
                    className="relative h-full w-full"
                  >
                    <div
                      data-slot="mockup-frame"
                      className="bg-border/50 dark:bg-border/10 absolute top-0 left-[50%] z-10 flex w-full max-w-[366px] -translate-x-[50%] translate-y-0 overflow-hidden rounded-[56px] p-2 transition-all duration-1000 ease-in-out group-hover:-translate-y-8"
                    >
                      <div
                        data-slot="mockup"
                        className="border-border/70 dark:border-border/5 dark:border-t-border/15 relative z-10 flex max-w-[350px] overflow-hidden rounded-[48px] border shadow-2xl"
                      ></div>
                    </div>
                    <div
                      data-slot="glow"
                      className="absolute bottom-0 w-full translate-y-20 scale-x-[1.2] opacity-70 transition-all duration-1000 group-hover:translate-y-8 group-hover:opacity-100"
                    >
                      <div className="from-brand-foreground/50 to-brand-foreground/0 absolute left-1/2 h-[256px] w-[60%] -translate-x-1/2 scale-[2.5] rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[512px] dark:opacity-100"></div>
                      <div className="from-brand/30 to-brand-foreground/0 absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 scale-200 rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[256px] dark:opacity-100"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-slot="card"
              className="glass-1 hover:glass-2 group text-card-foreground relative col-span-12 flex flex-col gap-6 overflow-hidden rounded-xl p-6 shadow-xl transition-all md:col-span-6 lg:col-span-7"
            >
              <a
                data-slot="card-link"
                className="bg-accent/50 absolute top-4 right-4 block rounded-full p-4 opacity-0 transition-opacity group-hover:opacity-100"
              >
                
              </a>
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
                    With lightweight code, modern tooling and best practice,
                    Launch UI is as fast in the browser as it is to build with.
                  </p>
                </div>
              </div>
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
                      <div className="border-border dark:border-border/5 dark:inset-shadow-lg inset-shadow-brand/10 flex items-center justify-center rounded-full border p-2 lg:p-3">
                        <div className="border-border dark:border-border/15 dark:inset-shadow-lg inset-shadow-brand/20 flex items-center justify-center rounded-full border p-2 lg:p-3">
                          <div className="glass-4 relative z-10 flex size-8 items-center justify-center rounded-full shadow-md backdrop-blur-lg transition-all duration-1000 ease-in-out group-hover:scale-95 sm:size-12 lg:size-16">
                            
                          </div>
                        </div>
                      </div>
                      <div className="relative">
                        <div className="border-border dark:border-border/5 dark:inset-shadow-lg inset-shadow-brand/10 flex items-center justify-center rounded-full border p-3 lg:p-4">
                          <div className="border-border dark:border-border/15 dark:inset-shadow-lg inset-shadow-brand/20 flex items-center justify-center rounded-full border p-3 lg:p-4">
                            <div className="glass-4 relative z-10 flex size-12 items-center justify-center rounded-full shadow-md backdrop-blur-lg transition-all duration-1000 ease-in-out group-hover:scale-105 sm:size-20 lg:size-24">
                              <div
                                data-slot="beam"
                                className="dark:after:from-brand-foreground/30 after:from-brand-foreground/10 after:to-brand-foreground/0 relative after:absolute after:inset-0 after:scale-200 after:rounded-full after:bg-radial after:from-10% after:to-60% after:content-['']"
                              >
                                <div className="relative z-10">
                                  
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="from-brand-foreground/30 dark:from-brand-foreground/70 via-brand-foreground/10 to-brand-foreground/0 absolute top-[50%] left-0 size-24 -translate-y-12 rounded-full bg-radial from-20% via-50% to-80%"></div>
                        <div className="absolute top-[50%] left-5 z-1 size-8 -translate-y-4 rounded-full bg-radial from-white/50 from-20% to-white/0 to-60% lg:left-6"></div>
                        <div className="from-brand-foreground/30 dark:from-brand-foreground/70 via-brand-foreground/10 to-brand-foreground/0 absolute top-[50%] right-0 size-24 -translate-y-12 rounded-full bg-radial from-20% via-50% to-80%"></div>
                        <div className="absolute top-[50%] right-5 z-1 size-8 -translate-y-4 rounded-full bg-radial from-white/50 from-20% to-white/0 to-60% lg:right-6"></div>
                      </div>
                      <div className="border-border dark:border-border/5 dark:inset-shadow-lg inset-shadow-brand/10 flex items-center justify-center rounded-full border p-2 lg:p-3">
                        <div className="border-border dark:border-border/15 dark:inset-shadow-lg inset-shadow-brand/20 flex items-center justify-center rounded-full border p-2 lg:p-3">
                          <div className="glass-4 relative z-10 flex size-8 items-center justify-center rounded-full shadow-md backdrop-blur-lg transition-all duration-1000 ease-in-out group-hover:scale-95 sm:size-12 lg:size-16">
                            
                          </div>
                        </div>
                      </div>
                      <div className="group-hover:animate-impulse absolute top-[50%] left-0 opacity-0">
                        <div className="from-brand-foreground/50 via-brand-foreground/10 to-brand-foreground/0 absolute top-[50%] -left-12 size-24 -translate-y-12 rounded-full bg-radial from-20% via-50% to-80%"></div>
                        <div className="absolute top-[50%] -left-4 z-1 size-8 -translate-y-4 rounded-full bg-radial from-white/70 from-20% to-white/0 to-60%"></div>
                      </div>
                    </div>
                    <div
                      data-slot="glow"
                      className="absolute top-[50%] w-full opacity-20 transition-all duration-300 group-hover:opacity-30"
                    >
                      <div className="from-brand-foreground/50 to-brand-foreground/0 absolute left-1/2 h-[256px] w-[60%] -translate-x-1/2 -translate-y-1/2 scale-[2.5] rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[512px] dark:opacity-100"></div>
                      <div className="from-brand/30 to-brand-foreground/0 absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 -translate-y-1/2 scale-200 rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[256px] dark:opacity-100"></div>
                    </div>
                    <div className="via-foreground/10 dark:via-border/30 absolute top-[calc(50%-1px)] left-0 h-0.5 w-full bg-linear-to-r from-transparent to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-slot="card"
              className="glass-1 hover:glass-2 group text-card-foreground relative col-span-12 flex flex-col gap-6 overflow-hidden rounded-xl p-6 shadow-xl transition-all md:col-span-6 lg:col-span-7"
            >
              <a
                data-slot="card-link"
                className="bg-accent/50 absolute top-4 right-4 block rounded-full p-4 opacity-0 transition-opacity group-hover:opacity-100"
              >
                
              </a>
              <div data-slot="card-content" className="flex flex-col gap-4">
                <h3
                  data-slot="card-title"
                  className="text-2xl leading-none font-semibold tracking-tight"
                >
                  The code is yours
                </h3>
                <div
                  data-slot="card-description"
                  className="text-md text-muted-foreground flex flex-col gap-2 text-balance"
                >
                  <p className="max-w-[460px]">
                    With Launch UI, the code is yours forever. Never bother
                    about subscriptions and lock-ins.
                  </p>
                </div>
              </div>
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
                      <div
                        data-slot="glow"
                        className="absolute -bottom-[128px] w-full translate-y-32 scale-150 opacity-40 transition-all duration-1000 group-hover:scale-200 group-hover:opacity-60"
                      >
                        <div className="from-brand-foreground/50 to-brand-foreground/0 absolute left-1/2 h-[256px] w-[60%] -translate-x-1/2 scale-[2.5] rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[512px] dark:opacity-100"></div>
                        <div className="from-brand/30 to-brand-foreground/0 absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 scale-200 rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[256px] dark:opacity-100"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-slot="card"
              className="glass-1 hover:glass-2 group text-card-foreground relative col-span-12 flex flex-col gap-6 overflow-hidden rounded-xl p-6 shadow-xl transition-all md:col-span-6 lg:col-span-5"
            >
              <a
                data-slot="card-link"
                className="bg-accent/50 absolute top-4 right-4 block rounded-full p-4 opacity-0 transition-opacity group-hover:opacity-100"
              >
                
              </a>
              <div data-slot="card-content" className="flex flex-col gap-4">
                <h3
                  data-slot="card-title"
                  className="text-2xl leading-none font-semibold tracking-tight"
                >
                  Top-level performance
                </h3>
                <div
                  data-slot="card-description"
                  className="text-md text-muted-foreground flex flex-col gap-2 text-balance"
                >
                  Made for static sites while avoiding heavy assets, your
                  website will feel snappy and load instantly.
                </div>
              </div>
              <div
                data-slot="card-visual"
                className="flex grow items-end justify-center"
              >
                <div className="-mb-[96px] sm:-mb-[186px] md:-mx-32">
                  <div
                    data-slot="globe-illustration"
                    className="[&amp;_svg]:h-[100%] [&amp;_svg]:w-[100%] relative"
                  >
                    <div className="relative z-10">
                      
                      <div
                        data-slot="glow"
                        className="absolute top-[50%] w-full opacity-20 transition-all duration-300 group-hover:opacity-30"
                      >
                        <div className="from-brand-foreground/50 to-brand-foreground/0 absolute left-1/2 h-[256px] w-[60%] -translate-x-1/2 -translate-y-1/2 scale-[2.5] rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[512px] dark:opacity-100"></div>
                        <div className="from-brand/30 to-brand-foreground/0 absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 -translate-y-1/2 scale-200 rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[256px] dark:opacity-100"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-slot="card"
              className="glass-1 hover:glass-2 group text-card-foreground relative col-span-12 flex flex-col gap-6 overflow-hidden rounded-xl p-6 shadow-xl transition-all md:col-span-6 lg:col-span-5"
            >
              <a
                data-slot="card-link"
                className="bg-accent/50 absolute top-4 right-4 block rounded-full p-4 opacity-0 transition-opacity group-hover:opacity-100"
              >
                
              </a>
              <div data-slot="card-content" className="flex flex-col gap-4">
                <h3
                  data-slot="card-title"
                  className="text-2xl leading-none font-semibold tracking-tight"
                >
                  Data-agnostic
                </h3>
                <div
                  data-slot="card-description"
                  className="text-md text-muted-foreground flex flex-col gap-2 text-balance"
                >
                  <p>
                    All the data is separate from components so you can edit it
                    in seconds or make it dynamic.
                  </p>
                  <p>Easily connect to a CMS of your choice.</p>
                </div>
              </div>
              <div
                data-slot="card-visual"
                className="flex grow items-end justify-center"
              >
                <div className="w-full sm:p-4 md:p-8">
                  <div
                    data-slot="chat-illustration"
                    className="relative flex w-full flex-col gap-6 p-4 text-xs"
                  >
                    <div className="flex flex-col items-start gap-8">
                      <div className="glass-4 text-muted-foreground max-w-[280px] rounded-xl px-3 py-2 shadow-md">
                        We need to update this heading before launch
                      </div>
                      <div className="border-brand-foreground bg-brand-foreground/70 group-hover:animate-hover-reverse dark:border-brand dark:bg-brand-foreground relative z-10 flex rounded-lg border px-2 py-0.5 shadow-lg">
                        Sofia G.
                        <div className="absolute -top-6 -right-3">
                          
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <div className="glass-4 text-muted-foreground max-w-[280px] rounded-xl px-3 py-2 shadow-md">
                        Let me quickly jump into Sanity and fix it
                      </div>
                      <div className="glass-4 text-muted-foreground max-w-[280px] rounded-xl px-3 py-2 shadow-md">
                        Done!
                      </div>
                      <div className="group-hover:animate-hover relative z-10">
                        <div className="border-border/80 bg-light text-primary-foreground flex -translate-x-24 rounded-lg border px-2 py-0.5">
                          Erik D.
                          <div className="absolute -top-6 -left-3">
                            
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-slot="glow"
                      className="absolute top-[50%] w-full scale-x-[1.5] opacity-20 transition-all duration-300 group-hover:opacity-30"
                    >
                      <div className="from-brand-foreground/50 to-brand-foreground/0 absolute left-1/2 h-[256px] w-[60%] -translate-x-1/2 -translate-y-1/2 scale-[2.5] rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[512px] dark:opacity-100"></div>
                      <div className="from-brand/30 to-brand-foreground/0 absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 -translate-y-1/2 scale-200 rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[256px] dark:opacity-100"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-slot="card"
              className="glass-1 hover:glass-2 group text-card-foreground relative col-span-12 flex flex-col gap-6 overflow-hidden rounded-xl p-6 shadow-xl transition-all md:col-span-6 lg:col-span-7"
            >
              <a
                data-slot="card-link"
                className="bg-accent/50 absolute top-4 right-4 block rounded-full p-4 opacity-0 transition-opacity group-hover:opacity-100"
              >
              </a>
              <div data-slot="card-content" className="flex flex-col gap-4">
                <h3
                  data-slot="card-title"
                  className="text-2xl leading-none font-semibold tracking-tight"
                >
                  Fits right into your stack
                </h3>
                <div
                  data-slot="card-description"
                  className="text-md text-muted-foreground flex flex-col gap-2 text-balance"
                >
                  <p className="max-w-[460px]">
                    Build your website and product with the same technologies
                    and frameworks. Forget about multiple codebases and
                    unnecessary APIs.
                  </p>
                  <p>No extra dependencies, no extra maintenance.</p>
                </div>
              </div>
              <div
                data-slot="card-visual"
                className="flex grow items-end justify-center"
              >
                <div className="mt-12 -mb-48 flex w-full grow items-center justify-center self-center">
                  <div
                    data-slot="radar-small-illustration"
                    className="relative mb-8 flex h-full w-full max-w-[480px] items-end sm:mb-0"
                  >
                    <div className="relative flex aspect-1/1 h-full w-full items-end">
                      <div className="relative aspect-1/1 h-full w-full p-6">
                        <div
                          className="bg-brand-foreground/10 absolute top-1/2 left-0 h-[1px] w-full"
                          
                        ></div>
                        <div
                          className="bg-brand-foreground/10 absolute top-1/2 left-0 h-[1px] w-full"
                          
                        ></div>
                        <div
                          className="bg-brand-foreground/10 absolute top-1/2 left-0 h-[1px] w-full"
                          
                        ></div>
                        <div
                          className="bg-brand-foreground/10 absolute top-1/2 left-0 h-[1px] w-full"
                          
                        ></div>
                        <div
                          className="bg-brand-foreground/10 absolute top-1/2 left-0 h-[1px] w-full"
                          
                        ></div>
                        <div
                          className="bg-brand-foreground/10 absolute top-1/2 left-0 h-[1px] w-full"
                          
                        ></div>
                        <div
                          className="bg-brand-foreground/10 absolute top-1/2 left-0 h-[1px] w-full"
                          
                        ></div>
                        <div
                          className="bg-brand-foreground/10 absolute top-1/2 left-0 h-[1px] w-full"
                          
                        ></div>
                        <div
                          className="bg-brand-foreground/10 absolute top-1/2 left-0 h-[1px] w-full"
                          
                        ></div>
                        <div
                          className="bg-brand-foreground/10 absolute top-1/2 left-0 h-[1px] w-full"
                          
                        ></div>
                        <div
                          className="bg-brand-foreground/10 absolute top-1/2 left-0 h-[1px] w-full"
                          
                        ></div>
                        <div
                          className="bg-brand-foreground/10 absolute top-1/2 left-0 h-[1px] w-full"
                          
                        ></div>
                        <div className="dark:border-background relative h-full w-full rounded-full">
                          <div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[100%] border p-4 opacity-40"
                            
                          ></div>
                          <div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[100%] border p-4 opacity-40"
                            
                          ></div>
                          <div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[100%] border p-4 opacity-40"
                            
                          ></div>
                          <div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[100%] border p-4 opacity-40"
                            
                          ></div>
                          <div
                            className="group-hover:animate-spin-slow absolute inset-[0] h-full w-full rounded-full opacity-0 group-hover:opacity-40"
                            
                          ></div>
                        </div>
                      </div>
                      <div className="bg-brand absolute top-[20%] right-[20%] size-7 rounded-full opacity-40 shadow-[0_0_12px_4px_var(--brand-foreground)] group-hover:animate-ping group-hover:opacity-100 dark:opacity-50"></div>
                      <div className="absolute top-[20%] right-[20%] flex size-7 items-center justify-center rounded-full bg-white/90 dark:bg-white/10">
                        
                      </div>
                      <div className="bg-brand absolute top-[20%] left-[20%] size-7 rounded-full opacity-40 shadow-[0_0_12px_4px_var(--brand-foreground)] group-hover:animate-ping group-hover:opacity-100 dark:opacity-50"></div>
                      <div className="absolute top-[20%] left-[20%] flex size-7 items-center justify-center rounded-full bg-white/90 dark:bg-white/10">
                        
                      </div>
                      <div className="bg-brand absolute bottom-[20%] left-[30%] size-7 rounded-full opacity-40 shadow-[0_0_12px_4px_var(--brand-foreground)] group-hover:animate-ping group-hover:opacity-100 dark:opacity-50"></div>
                      <div className="absolute bottom-[20%] left-[30%] flex size-7 items-center justify-center rounded-full bg-white/90 dark:bg-white/10">
                        
                      </div>
                      <div className="bg-brand absolute right-[25%] bottom-[40%] size-7 rounded-full opacity-40 shadow-[0_0_12px_4px_var(--brand-foreground)] group-hover:animate-ping group-hover:opacity-100 dark:opacity-50"></div>
                      <div className="absolute right-[25%] bottom-[40%] flex size-7 items-center justify-center rounded-full bg-white/90 dark:bg-white/10">
                        
                      </div>
                      <div
                        data-slot="glow"
                        className="absolute top-[50%] w-full opacity-20 transition-all duration-300 group-hover:opacity-30"
                      >
                        <div className="from-brand-foreground/50 to-brand-foreground/0 absolute left-1/2 h-[256px] w-[60%] -translate-x-1/2 -translate-y-1/2 scale-[2.5] rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[512px] dark:opacity-100"></div>
                        <div className="from-brand/30 to-brand-foreground/0 absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 -translate-y-1/2 scale-200 rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[256px] dark:opacity-100"></div>
                      </div>
                    </div>
                    <div className="glass-5 border-brand/30 dark:border-brand/20 absolute top-1/2 left-1/2 flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full p-2.5 shadow-md backdrop-blur-md">
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        data-slot="section"
        className="line-b px-4 py-12 sm:py-24 md:py-32"
      >
        <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-12">
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
              className="glass-1 hover:glass-2 group text-card-foreground relative col-span-12 flex flex-col gap-6 overflow-hidden rounded-xl p-6 shadow-xl transition-all md:flex-row"
            >
              <a
                data-slot="card-link"
                className="bg-accent/50 absolute top-4 right-4 block rounded-full p-4 opacity-0 transition-opacity group-hover:opacity-100"
              >
                
              </a>
              <div
                data-slot="card-content"
                className="flex grow basis-0 flex-col gap-4 md:justify-end"
              >
                
                <h3
                  data-slot="card-title"
                  className="text-2xl leading-none font-semibold tracking-tight"
                >
                  The code is yours
                </h3>
                <div
                  data-slot="card-description"
                  className="text-md text-muted-foreground flex flex-col gap-2 text-balance"
                >
                  <p className="max-w-[320px] lg:max-w-[460px]">
                    With Launch UI, the code is yours forever. You can use it as
                    a starting point for your own projects and customize it to
                    your needs.
                  </p>
                  <p>Never bother about subscriptions and lock-ins.</p>
                </div>
              </div>
              <div
                data-slot="card-visual"
                className="flex grow items-end justify-center"
              >
                <div className="mt-24 -mb-16 h-full min-h-[320px] grow basis-0 sm:p-4">
                  <div
                    data-slot="infrastructure-illustration"
                    className="h-full w-full max-w-[640px]"
                  >
                    <div className="relative h-full w-full">
                      <div className="absolute -bottom-8 left-[50%] z-10 w-full -translate-x-[50%] translate-y-0">
                        <div className="border-border dark:border-border/10 relative flex h-auto min-w-[460px] flex-col overflow-hidden rounded-3xl border">
                          <div className="relative w-full grow p-4">
                            <div className="grid h-full grid-cols-3 grid-rows-3 gap-3">
                              <div className="glass-3 flex flex-col justify-between gap-4 rounded-xl p-5">
                                <div className="flex items-center gap-2">
                                  <div className="bg-brand ring-brand/20 size-2 animate-pulse rounded-full border border-white/20 ring-4"></div>
                                  <span className="text-muted-foreground font-mono text-[10px] font-medium tracking-wider uppercase">
                                    ai-powered stack
                                  </span>
                                </div>
                                <div className="flex flex-wrap gap-1">
                                  <div
                                    className="border-border/50 bg-foreground/5 size-3.5 rounded-sm border"
                                    
                                  ></div>
                                  <div
                                    className="border-border/50 bg-foreground/5 size-3.5 rounded-sm border"
                                    
                                  ></div>
                                  <div
                                    className="border-border/50 bg-foreground/5 size-3.5 rounded-sm border"
                                    
                                  ></div>
                                  <div
                                    className="border-border/50 bg-foreground/5 size-3.5 rounded-sm border"
                                    
                                  ></div>
                                  <div
                                    className="border-border/50 bg-foreground/5 size-3.5 rounded-sm border"
                                    
                                  ></div>
                                  <div
                                    className="border-border/50 bg-foreground/5 size-3.5 rounded-sm border"
                                    
                                  ></div>
                                  <div
                                    className="border-border/50 bg-foreground/5 size-3.5 rounded-sm border"
                                    
                                  ></div>
                                  <div
                                    className="border-border/50 bg-foreground/5 size-3.5 rounded-sm border"
                                    
                                  ></div>
                                </div>
                              </div>
                              <div className="glass-4 relative flex h-full w-full flex-col items-center justify-center gap-1 overflow-hidden rounded-lg p-3">
                                <div className="from-foreground/20 dark:from-foreground to-foreground/60 dark:to-muted-foreground/20 bg-linear-to-br bg-clip-text font-mono text-2xl text-transparent">
                                  21,000
                                </div>
                                <div className="text-muted-foreground text-[9px] tracking-wider uppercase">
                                  active users
                                </div>
                                <div
                                  data-slot="glow"
                                  className="absolute -bottom-[128px] w-full"
                                >
                                  <div className="from-brand-foreground/50 to-brand-foreground/0 absolute left-1/2 h-[256px] w-[60%] -translate-x-1/2 scale-[2.5] rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[512px] dark:opacity-100"></div>
                                  <div className="from-brand/30 to-brand-foreground/0 absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 scale-200 rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[256px] dark:opacity-100"></div>
                                </div>
                              </div>
                              <div className="bg-background/20 border-border dark:border-border/10 row-span-2 rounded-xl border border-dashed p-2">
                                <div className="glass-2 row-span-2 grid h-full grid-rows-8 rounded-lg shadow-xl">
                                  <div className="border-border/10 flex items-center justify-start px-2 not-last:border-b">
                                    <div className="bg-foreground/5 border-border/10 size-2 rounded-sm border"></div>
                                  </div>
                                  <div className="border-border/10 flex items-center justify-start px-2 not-last:border-b">
                                    <div className="bg-foreground/5 border-border/10 size-2 rounded-sm border"></div>
                                  </div>
                                  <div className="border-border/10 flex items-center justify-start px-2 not-last:border-b">
                                    <div className="bg-foreground/5 border-border/10 size-2 rounded-sm border"></div>
                                  </div>
                                  <div className="border-border/10 flex items-center justify-start px-2 not-last:border-b">
                                    <div className="bg-foreground/5 border-border/10 size-2 rounded-sm border"></div>
                                  </div>
                                  <div className="border-border/10 flex items-center justify-start px-2 not-last:border-b">
                                    <div className="bg-foreground/5 border-border/10 size-2 rounded-sm border"></div>
                                  </div>
                                  <div className="border-border/10 flex items-center justify-start px-2 not-last:border-b">
                                    <div className="bg-foreground/5 border-border/10 size-2 rounded-sm border"></div>
                                  </div>
                                  <div className="border-border/10 flex items-center justify-start px-2 not-last:border-b">
                                    <div className="bg-foreground/5 border-border/10 size-2 rounded-sm border"></div>
                                  </div>
                                  <div className="border-border/10 flex items-center justify-start px-2 not-last:border-b">
                                    <div className="bg-foreground/5 border-border/10 size-2 rounded-sm border"></div>
                                  </div>
                                </div>
                              </div>
                              <div className="border-border dark:border-border/20 relative row-span-2 flex flex-col justify-between overflow-hidden rounded-lg border border-dashed p-4"></div>
                              <div className="glass-5 relative row-span-2 flex aspect-square h-full w-full items-center justify-center overflow-hidden rounded-lg">
                                
                              </div>
                              <div className="glass-3 overflow-hidden rounded-lg p-3"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-slot="glow"
                        className="absolute bottom-0 w-full translate-y-32 scale-250 opacity-40 transition-all duration-1000 group-hover:scale-300 group-hover:opacity-60"
                      >
                        <div className="from-brand-foreground/50 to-brand-foreground/0 absolute left-1/2 h-[256px] w-[60%] -translate-x-1/2 scale-[2.5] rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[512px] dark:opacity-100"></div>
                        <div className="from-brand/30 to-brand-foreground/0 absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 scale-200 rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[256px] dark:opacity-100"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-slot="card"
              className="glass-1 hover:glass-2 group text-card-foreground relative col-span-12 flex flex-col gap-6 overflow-hidden rounded-xl p-6 shadow-xl transition-all md:col-span-6 lg:col-span-5"
            >
              <a
                data-slot="card-link"
                className="bg-accent/50 absolute top-4 right-4 block rounded-full p-4 opacity-0 transition-opacity group-hover:opacity-100"
              >
                
              </a>
              <div
                data-slot="card-visual"
                className="flex grow items-end justify-center"
              >
                <div className="w-full sm:p-4 md:p-8">
                  <div className="relative flex w-full items-center justify-center">
                    <div className="flex flex-col">
                      <article
                        className="group glass-3 hover:!bg-raised flex w-sm origin-center flex-col overflow-hidden rounded-xl border shadow-xl backdrop-blur-sm transition-transform duration-300 first:!mt-0 not-last:hover:-translate-y-7 last:hover:-translate-y-4"
                        
                      >
                        <div
                          className="flex items-center gap-4 p-5 group-hover:!opacity-100"
                          
                        >
                          <div className="bg-brand/5 dark:bg-background border-brand/20 dark:border-border/15 text-brand relative flex size-12 items-center justify-center rounded-full border">
                            
                          </div>
                          <div className="flex flex-col gap-2">
                            <span className="text-muted-foreground text-xs">
                              Sep 15 2025 12:34 PM
                            </span>
                            <div className="font-sm flex gap-0.5 text-base">
                              Changes committed and pushed
                            </div>
                          </div>
                        </div>
                        <div className="border-border dark:border-border/15 text-muted-foreground/50 flex items-center gap-4 border-t px-6 py-3 text-xs">
                          Cursor • contact@mikolajdobrucki.com
                        </div>
                      </article>
                      <article
                        className="group glass-3 hover:!bg-raised flex w-sm origin-center flex-col overflow-hidden rounded-xl border shadow-xl backdrop-blur-sm transition-transform duration-300 first:!mt-0 not-last:hover:-translate-y-7 last:hover:-translate-y-4"
                        
                      >
                        <div
                          className="flex items-center gap-4 p-5 group-hover:!opacity-100"
                          
                        >
                          <div className="bg-brand/5 dark:bg-background border-brand/20 dark:border-border/15 text-brand relative flex size-12 items-center justify-center rounded-full border">
                            
                          </div>
                          <div className="flex flex-col gap-2">
                            <span className="text-muted-foreground text-xs">
                              Sep 20 2025 2:43 PM
                            </span>
                            <div className="font-sm flex gap-0.5 text-base">
                              Pull Request #2121 merged
                            </div>
                          </div>
                        </div>
                        <div className="border-border dark:border-border/15 text-muted-foreground/50 flex items-center gap-4 border-t px-6 py-3 text-xs">
                          Github • contact@mikolajdobrucki.com
                        </div>
                      </article>
                      <article
                        className="group glass-3 hover:!bg-raised flex w-sm origin-center flex-col overflow-hidden rounded-xl border shadow-xl backdrop-blur-sm transition-transform duration-300 first:!mt-0 not-last:hover:-translate-y-7 last:hover:-translate-y-4"
                        
                      >
                        <div
                          className="flex items-center gap-4 p-5 group-hover:!opacity-100"
                          
                        >
                          <div className="bg-brand/5 dark:bg-background border-brand/20 dark:border-border/15 text-brand relative flex size-12 items-center justify-center rounded-full border">
                            
                          </div>
                          <div className="flex flex-col gap-2">
                            <span className="text-muted-foreground text-xs">
                              Aug 23 2025 6:34 PM
                            </span>
                            <div className="font-sm flex gap-0.5 text-base">
                              Deployed to production
                            </div>
                          </div>
                        </div>
                        <div className="border-border dark:border-border/15 text-muted-foreground/50 flex items-center gap-4 border-t px-6 py-3 text-xs">
                          Vercel • contact@mikolajdobrucki.com
                        </div>
                      </article>
                    </div>
                    <div
                      data-slot="glow"
                      className="pointer-events-none absolute top-[50%] w-full scale-x-[1.5] opacity-20 transition-all duration-300 group-hover:opacity-30"
                    >
                      <div className="from-brand-foreground/50 to-brand-foreground/0 absolute left-1/2 h-[256px] w-[60%] -translate-x-1/2 -translate-y-1/2 scale-[2.5] rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[512px] dark:opacity-100"></div>
                      <div className="from-brand/30 to-brand-foreground/0 absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 -translate-y-1/2 scale-200 rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[256px] dark:opacity-100"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-slot="card-content" className="flex flex-col gap-4">
                
                <h3
                  data-slot="card-title"
                  className="text-2xl leading-none font-semibold tracking-tight"
                >
                  Data-agnostic
                </h3>
                <div
                  data-slot="card-description"
                  className="text-md text-muted-foreground flex flex-col gap-2 text-balance"
                >
                  <p>
                    All the data is separate from components so you can edit it
                    in seconds or make it dynamic.
                  </p>
                  <p>Easily connect to a CMS of your choice.</p>
                </div>
              </div>
            </div>
            <div
              data-slot="card"
              className="glass-1 hover:glass-2 group text-card-foreground relative col-span-12 flex flex-col gap-6 overflow-hidden rounded-xl p-6 shadow-xl transition-all md:col-span-6 lg:col-span-7"
            >
              <a
                data-slot="card-link"
                className="bg-accent/50 absolute top-4 right-4 block rounded-full p-4 opacity-0 transition-opacity group-hover:opacity-100"
              >
                
              </a>
              <div
                data-slot="card-visual"
                className="flex grow items-end justify-center"
              >
                <div className="-mx-32 pt-8">
                  <div
                    data-slot="ripple-illustration"
                    className="relative h-[386px] w-[386px]"
                  >
                    <div className="relative z-10 h-full w-full">
                      <div
                        className="relative flex h-full w-full items-center justify-center rounded-full border p-2 transition-all duration-1000 ease-in-out group-hover:scale-[1.01]"
                        
                      >
                        <div
                          className="relative flex h-full w-full items-center justify-center rounded-full border p-2 transition-all duration-1000 ease-in-out group-hover:scale-[1.01]"
                          
                        >
                          <div
                            className="relative flex h-full w-full items-center justify-center rounded-full border p-2 transition-all duration-1000 ease-in-out group-hover:scale-[1.01]"
                            
                          >
                            <div
                              className="relative flex h-full w-full items-center justify-center rounded-full border p-2 transition-all duration-1000 ease-in-out group-hover:scale-[1.01]"
                              
                            >
                              <div
                                className="relative flex h-full w-full items-center justify-center rounded-full border p-2 transition-all duration-1000 ease-in-out group-hover:scale-[1.01]"
                                
                              >
                                <div
                                  className="relative flex h-full w-full items-center justify-center rounded-full border p-2 transition-all duration-1000 ease-in-out group-hover:scale-[1.01]"
                                  
                                >
                                  <div
                                    className="relative flex h-full w-full items-center justify-center rounded-full border p-2 transition-all duration-1000 ease-in-out group-hover:scale-[1.01]"
                                    
                                  >
                                    <div
                                      className="relative flex h-full w-full items-center justify-center rounded-full border p-2 transition-all duration-1000 ease-in-out group-hover:scale-[1.01]"
                                      
                                    >
                                      <div
                                        className="relative flex h-full w-full items-center justify-center rounded-full border p-2 transition-all duration-1000 ease-in-out group-hover:scale-[1.01]"
                                        
                                      >
                                        <div
                                          className="relative flex h-full w-full items-center justify-center rounded-full border p-2 transition-all duration-1000 ease-in-out group-hover:scale-[1.01]"
                                          
                                        >
                                          <div
                                            className="relative flex h-full w-full items-center justify-center rounded-full border p-2 transition-all duration-1000 ease-in-out group-hover:scale-[1.01]"
                                            
                                          >
                                            <div
                                              className="relative flex h-full w-full items-center justify-center rounded-full border p-2 transition-all duration-1000 ease-in-out group-hover:scale-[1.01]"
                                              
                                            >
                                              <div className="flex h-full w-full items-center justify-center rounded-full">
                                                <div className="from-brand-foreground/5 to-brand-foreground/20 dark:from-brand-foreground/20 dark:to-brand-foreground/0 flex h-full w-full rounded-full bg-linear-to-b p-2">
                                                  <div className="glass-5 border-brand-foreground/40 dark:border-border/10 flex h-full w-full items-center justify-center rounded-full p-2.5 shadow-md">
                                                    <div
                                                      data-slot="beam"
                                                      className="after:from-brand/10 dark:after:from-brand/30 after:to-brand/0 relative after:absolute after:inset-0 after:scale-200 after:rounded-full after:bg-radial after:from-10% after:to-60% after:content-['']"
                                                    >
                                                      <div className="relative z-10">
                                                        
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
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-slot="glow"
                      className="absolute top-[50%] w-full opacity-30 transition-all duration-300 group-hover:opacity-40"
                    >
                      <div className="from-brand-foreground/50 to-brand-foreground/0 absolute left-1/2 h-[256px] w-[60%] -translate-x-1/2 -translate-y-1/2 scale-[2.5] rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[512px] dark:opacity-100"></div>
                      <div className="from-brand/30 to-brand-foreground/0 absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 -translate-y-1/2 scale-200 rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[256px] dark:opacity-100"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-slot="card-content" className="flex flex-col gap-4">
                
                <h3
                  data-slot="card-title"
                  className="text-2xl leading-none font-semibold tracking-tight"
                >
                  Integrate website and product
                </h3>
                <div
                  data-slot="card-description"
                  className="text-md text-muted-foreground flex flex-col gap-2 text-balance"
                >
                  <p className="max-w-[460px]">
                    Integrate your landing page directly in the product and
                    forget about multiple codebases and unnecessary APIs.
                  </p>
                  <p>No extra dependencies, no extra maintenance.</p>
                </div>
              </div>
            </div>
            <div
              data-slot="card"
              className="glass-1 hover:glass-2 group text-card-foreground relative col-span-12 flex flex-col gap-6 overflow-hidden rounded-xl p-6 shadow-xl transition-all md:col-span-6 lg:col-span-6"
            >
              <div
                data-slot="card-visual"
                className="flex grow items-end justify-center"
              >
                <div className="h-full min-h-[240px] grow sm:p-4 md:min-h-[320px] lg:px-12">
                  <div
                    data-slot="mockup-responsive-bottom-illustration"
                    className="h-full w-full"
                  >
                    <div className="relative h-full w-full">
                      <div className="absolute right-0 bottom-0 w-full min-w-[640px] translate-y-0 transition-all duration-1000 ease-in-out group-hover:translate-y-4">
                        <div
                          data-slot="mockup-frame"
                          className="bg-border/50 dark:bg-border/10 relative z-10 flex overflow-hidden rounded-2xl p-2"
                        >
                          <div
                            data-slot="mockup"
                            className="border-border/70 dark:border-border/5 dark:border-t-border/15 relative z-10 flex overflow-hidden rounded-md border shadow-2xl"
                          ></div>
                        </div>
                        <div
                          data-slot="glow"
                          className="absolute top-0 w-full translate-y-4 opacity-40 transition-all duration-1000 group-hover:translate-y-16 group-hover:opacity-50"
                        >
                          <div className="from-brand-foreground/50 to-brand-foreground/0 absolute left-1/2 h-[256px] w-[60%] -translate-x-1/2 scale-[2.5] rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[512px] dark:opacity-100"></div>
                          <div className="from-brand/30 to-brand-foreground/0 absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 scale-200 rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[256px] dark:opacity-100"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-slot="card-content" className="flex flex-col gap-4">
                
                <h3
                  data-slot="card-title"
                  className="text-2xl leading-none font-semibold tracking-tight"
                >
                  Top-level performance
                </h3>
                <div
                  data-slot="card-description"
                  className="text-md text-muted-foreground flex flex-col gap-2 text-balance"
                >
                  Made for static sites while avoiding heavy assets, your
                  website will feel snappy and load instantly.
                </div>
              </div>
            </div>
            <div
              data-slot="card"
              className="glass-1 hover:glass-2 group text-card-foreground relative col-span-12 flex flex-col gap-6 overflow-hidden rounded-xl p-6 shadow-xl transition-all md:col-span-6 lg:col-span-6"
            >
              <a
                data-slot="card-link"
                className="bg-accent/50 absolute top-4 right-4 block rounded-full p-4 opacity-0 transition-opacity group-hover:opacity-100"
              >
                
              </a>
              <div
                data-slot="card-visual"
                className="flex grow items-end justify-center"
              >
                <div className="relative min-h-[240px]">
                  <div
                    data-slot="carousel-illustration"
                    className="absolute top-1/2 left-1/2 -mt-24 flex h-[512px] w-[512px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-3"
                  >
                    <div className="relative z-10 flex w-full flex-col gap-3">
                      <div
                        data-slot="marquee"
                        className="group flex flex-row [gap:var(--gap)] overflow-hidden p-2 [--duration:20s] [--gap:1rem]"
                      >
                        <div
                          data-slot="marquee-item"
                          className="animate-marquee flex shrink-0 flex-row justify-around [gap:var(--gap)] [animation-play-state:paused] group-hover:[animation-play-state:running]"
                        >
                          <div className="glass-4 ring-background/20 z-10 flex items-center gap-2 rounded-xl p-4 text-xs font-medium shadow-sm ring-4 transition-all duration-300">
                            <span className="text-brand bg-brand/5 dark:bg-background/20 border-background/20 rounded-full border p-2">
                              
                            </span>
                            <span className="whitespace-nowrap">
                              Accessibility first
                            </span>
                          </div>
                          <div className="glass-4 ring-background/20 z-10 flex items-center gap-2 rounded-xl p-4 text-xs font-medium shadow-sm ring-4 transition-all duration-300">
                            <span className="text-brand bg-brand/5 dark:bg-background/20 border-background/20 rounded-full border p-2">
                              
                            </span>
                            <span className="whitespace-nowrap">
                              Responsive design
                            </span>
                          </div>
                          <div className="glass-4 ring-background/20 z-10 flex items-center gap-2 rounded-xl p-4 text-xs font-medium shadow-sm ring-4 transition-all duration-300">
                            <span className="text-brand bg-brand/5 dark:bg-background/20 border-background/20 rounded-full border p-2">
                              
                            </span>
                            <span className="whitespace-nowrap">
                              Light and dark mode
                            </span>
                          </div>
                          <div className="glass-4 ring-background/20 z-10 flex items-center gap-2 rounded-xl p-4 text-xs font-medium shadow-sm ring-4 transition-all duration-300">
                            <span className="text-brand bg-brand/5 dark:bg-background/20 border-background/20 rounded-full border p-2">
                              
                            </span>
                            <span className="whitespace-nowrap">
                              Easy to customize
                            </span>
                          </div>
                        </div>
                        <div
                          data-slot="marquee-item"
                          className="animate-marquee flex shrink-0 flex-row justify-around [gap:var(--gap)] [animation-play-state:paused] group-hover:[animation-play-state:running]"
                        >
                          <div className="glass-4 ring-background/20 z-10 flex items-center gap-2 rounded-xl p-4 text-xs font-medium shadow-sm ring-4 transition-all duration-300">
                            <span className="text-brand bg-brand/5 dark:bg-background/20 border-background/20 rounded-full border p-2">
                              
                            </span>
                            <span className="whitespace-nowrap">
                              Accessibility first
                            </span>
                          </div>
                          <div className="glass-4 ring-background/20 z-10 flex items-center gap-2 rounded-xl p-4 text-xs font-medium shadow-sm ring-4 transition-all duration-300">
                            <span className="text-brand bg-brand/5 dark:bg-background/20 border-background/20 rounded-full border p-2">
                              
                            </span>
                            <span className="whitespace-nowrap">
                              Responsive design
                            </span>
                          </div>
                          <div className="glass-4 ring-background/20 z-10 flex items-center gap-2 rounded-xl p-4 text-xs font-medium shadow-sm ring-4 transition-all duration-300">
                            <span className="text-brand bg-brand/5 dark:bg-background/20 border-background/20 rounded-full border p-2">
                              
                            </span>
                            <span className="whitespace-nowrap">
                              Light and dark mode
                            </span>
                          </div>
                          <div className="glass-4 ring-background/20 z-10 flex items-center gap-2 rounded-xl p-4 text-xs font-medium shadow-sm ring-4 transition-all duration-300">
                            <span className="text-brand bg-brand/5 dark:bg-background/20 border-background/20 rounded-full border p-2">
                              
                            </span>
                            <span className="whitespace-nowrap">
                              Easy to customize
                            </span>
                          </div>
                        </div>
                        <div
                          data-slot="marquee-item"
                          className="animate-marquee flex shrink-0 flex-row justify-around [gap:var(--gap)] [animation-play-state:paused] group-hover:[animation-play-state:running]"
                        >
                          <div className="glass-4 ring-background/20 z-10 flex items-center gap-2 rounded-xl p-4 text-xs font-medium shadow-sm ring-4 transition-all duration-300">
                            <span className="text-brand bg-brand/5 dark:bg-background/20 border-background/20 rounded-full border p-2">
                              
                            </span>
                            <span className="whitespace-nowrap">
                              Accessibility first
                            </span>
                          </div>
                          <div className="glass-4 ring-background/20 z-10 flex items-center gap-2 rounded-xl p-4 text-xs font-medium shadow-sm ring-4 transition-all duration-300">
                            <span className="text-brand bg-brand/5 dark:bg-background/20 border-background/20 rounded-full border p-2">
                              
                            </span>
                            <span className="whitespace-nowrap">
                              Responsive design
                            </span>
                          </div>
                          <div className="glass-4 ring-background/20 z-10 flex items-center gap-2 rounded-xl p-4 text-xs font-medium shadow-sm ring-4 transition-all duration-300">
                            <span className="text-brand bg-brand/5 dark:bg-background/20 border-background/20 rounded-full border p-2">
                              
                            </span>
                            <span className="whitespace-nowrap">
                              Light and dark mode
                            </span>
                          </div>
                          <div className="glass-4 ring-background/20 z-10 flex items-center gap-2 rounded-xl p-4 text-xs font-medium shadow-sm ring-4 transition-all duration-300">
                            <span className="text-brand bg-brand/5 dark:bg-background/20 border-background/20 rounded-full border p-2">
                              
                            </span>
                            <span className="whitespace-nowrap">
                              Easy to customize
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        data-slot="marquee"
                        className="group flex flex-row [gap:var(--gap)] overflow-hidden p-2 [--duration:20s] [--gap:1rem]"
                      >
                        <div
                          data-slot="marquee-item"
                          className="animate-marquee flex shrink-0 flex-row justify-around [gap:var(--gap)] [animation-direction:reverse] [animation-play-state:paused] group-hover:[animation-play-state:running]"
                        >
                          <div className="glass-4 ring-background/20 z-10 flex items-center gap-2 rounded-xl p-4 text-xs font-medium shadow-sm ring-4 transition-all duration-300">
                            <span className="text-brand bg-brand/5 dark:bg-background/20 border-background/20 rounded-full border p-2">
                              
                            </span>
                            <span className="whitespace-nowrap">
                              Top-level performance
                            </span>
                          </div>
                          <div className="glass-4 ring-background/20 z-10 flex items-center gap-2 rounded-xl p-4 text-xs font-medium shadow-sm ring-4 transition-all duration-300">
                            <span className="text-brand bg-brand/5 dark:bg-background/20 border-background/20 rounded-full border p-2">
                              
                            </span>
                            <span className="whitespace-nowrap">
                              Production ready
                            </span>
                          </div>
                          <div className="glass-4 ring-background/20 z-10 flex items-center gap-2 rounded-xl p-4 text-xs font-medium shadow-sm ring-4 transition-all duration-300">
                            <span className="text-brand bg-brand/5 dark:bg-background/20 border-background/20 rounded-full border p-2">
                              
                            </span>
                            <span className="whitespace-nowrap">
                              Made for localisation
                            </span>
                          </div>
                          <div className="glass-4 ring-background/20 z-10 flex items-center gap-2 rounded-xl p-4 text-xs font-medium shadow-sm ring-4 transition-all duration-300">
                            <span className="text-brand bg-brand/5 dark:bg-background/20 border-background/20 rounded-full border p-2">
                              
                            </span>
                            <span className="whitespace-nowrap">
                              CMS friendly
                            </span>
                          </div>
                        </div>
                        <div
                          data-slot="marquee-item"
                          className="animate-marquee flex shrink-0 flex-row justify-around [gap:var(--gap)] [animation-direction:reverse] [animation-play-state:paused] group-hover:[animation-play-state:running]"
                        >
                          <div className="glass-4 ring-background/20 z-10 flex items-center gap-2 rounded-xl p-4 text-xs font-medium shadow-sm ring-4 transition-all duration-300">
                            <span className="text-brand bg-brand/5 dark:bg-background/20 border-background/20 rounded-full border p-2">
                              
                            </span>
                            <span className="whitespace-nowrap">
                              Top-level performance
                            </span>
                          </div>
                          <div className="glass-4 ring-background/20 z-10 flex items-center gap-2 rounded-xl p-4 text-xs font-medium shadow-sm ring-4 transition-all duration-300">
                            <span className="text-brand bg-brand/5 dark:bg-background/20 border-background/20 rounded-full border p-2">
                              
                            </span>
                            <span className="whitespace-nowrap">
                              Production ready
                            </span>
                          </div>
                          <div className="glass-4 ring-background/20 z-10 flex items-center gap-2 rounded-xl p-4 text-xs font-medium shadow-sm ring-4 transition-all duration-300">
                            <span className="text-brand bg-brand/5 dark:bg-background/20 border-background/20 rounded-full border p-2">
                              
                            </span>
                            <span className="whitespace-nowrap">
                              Made for localisation
                            </span>
                          </div>
                          <div className="glass-4 ring-background/20 z-10 flex items-center gap-2 rounded-xl p-4 text-xs font-medium shadow-sm ring-4 transition-all duration-300">
                            <span className="text-brand bg-brand/5 dark:bg-background/20 border-background/20 rounded-full border p-2">
                              
                            </span>
                            <span className="whitespace-nowrap">
                              CMS friendly
                            </span>
                          </div>
                        </div>
                        <div
                          data-slot="marquee-item"
                          className="animate-marquee flex shrink-0 flex-row justify-around [gap:var(--gap)] [animation-direction:reverse] [animation-play-state:paused] group-hover:[animation-play-state:running]"
                        >
                          <div className="glass-4 ring-background/20 z-10 flex items-center gap-2 rounded-xl p-4 text-xs font-medium shadow-sm ring-4 transition-all duration-300">
                            <span className="text-brand bg-brand/5 dark:bg-background/20 border-background/20 rounded-full border p-2">
                              
                            </span>
                            <span className="whitespace-nowrap">
                              Top-level performance
                            </span>
                          </div>
                          <div className="glass-4 ring-background/20 z-10 flex items-center gap-2 rounded-xl p-4 text-xs font-medium shadow-sm ring-4 transition-all duration-300">
                            <span className="text-brand bg-brand/5 dark:bg-background/20 border-background/20 rounded-full border p-2">
                              
                            </span>
                            <span className="whitespace-nowrap">
                              Production ready
                            </span>
                          </div>
                          <div className="glass-4 ring-background/20 z-10 flex items-center gap-2 rounded-xl p-4 text-xs font-medium shadow-sm ring-4 transition-all duration-300">
                            <span className="text-brand bg-brand/5 dark:bg-background/20 border-background/20 rounded-full border p-2">
                              
                            </span>
                            <span className="whitespace-nowrap">
                              Made for localisation
                            </span>
                          </div>
                          <div className="glass-4 ring-background/20 z-10 flex items-center gap-2 rounded-xl p-4 text-xs font-medium shadow-sm ring-4 transition-all duration-300">
                            <span className="text-brand bg-brand/5 dark:bg-background/20 border-background/20 rounded-full border p-2">
                              
                            </span>
                            <span className="whitespace-nowrap">
                              CMS friendly
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-slot="glow"
                      className="absolute top-[50%] w-full scale-x-[1.5] opacity-20 transition-all duration-300 group-hover:opacity-30"
                    >
                      <div className="from-brand-foreground/50 to-brand-foreground/0 absolute left-1/2 h-[256px] w-[60%] -translate-x-1/2 -translate-y-1/2 scale-[2.5] rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[512px] dark:opacity-100"></div>
                      <div className="from-brand/30 to-brand-foreground/0 absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 -translate-y-1/2 scale-200 rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[256px] dark:opacity-100"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-slot="card-content" className="flex flex-col gap-4">
                
                <h3
                  data-slot="card-title"
                  className="text-2xl leading-none font-semibold tracking-tight"
                >
                  Made for search engines
                </h3>
                <div
                  data-slot="card-description"
                  className="text-md text-muted-foreground flex flex-col gap-2 text-balance"
                >
                  <p className="max-w-[460px]">
                    Unlike the bloated no-code solutions, Launch UI is built to
                    be perfectly optimized for search engines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        data-slot="section"
        className="line-b px-4 py-12 sm:py-24 md:py-32"
      >
        <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-12">
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
              className="glass-1 hover:glass-2 group text-card-foreground relative col-span-12 flex flex-col gap-6 overflow-hidden rounded-xl p-6 shadow-xl transition-all md:col-span-5"
            >
              <a
                data-slot="card-link"
                className="bg-accent/50 absolute top-4 right-4 block rounded-full p-4 opacity-0 transition-opacity group-hover:opacity-100"
              >
                
              </a>
              <div data-slot="card-content" className="flex flex-col gap-4">
                <h3
                  data-slot="card-title"
                  className="text-2xl leading-none font-semibold tracking-tight"
                >
                  Made for search engines
                </h3>
                <div
                  data-slot="card-description"
                  className="text-md text-muted-foreground flex flex-col gap-2 text-balance"
                >
                  <p className="max-w-[460px]">
                    Unlike the bloated no-code solutions, Launch UI is built to
                    be perfectly optimized for search engines.
                  </p>
                </div>
              </div>
              <div
                data-slot="card-visual"
                className="flex grow items-end justify-center"
              >
                <div className="relative -mx-8 -mb-12 h-full min-h-[160px] w-full grow items-center self-center">
                  <div className="group absolute bottom-0 left-0 flex aspect-16/9 w-full items-center justify-center">
                    <div className="text-muted-foreground/20 h-full w-full">
                      
                    </div>
                    <div className="bg-background/20 absolute top-1/2 left-1/2 z-1 -translate-x-1/2 -translate-y-1/2 rounded-full p-2 transition-transform duration-300 group-hover:scale-110">
                      <div className="glass-5 bg-background relative z-10 rounded-full p-3 shadow">
                        <div
                          data-slot="beam"
                          className="after:from-brand/10 dark:after:from-brand/30 after:to-brand/0 relative after:absolute after:inset-0 after:scale-200 after:rounded-full after:bg-radial after:from-10% after:to-60% after:content-['']"
                        >
                          
                        </div>
                      </div>
                    </div>
                    <div
                      className="glass-4 bg-background ring-background/50 absolute z-10 -translate-x-1/2 -translate-y-1/2 rounded-full p-1.5 ring-4 transition-transform duration-300 group-hover:scale-110"
                      
                    ></div>
                    <div
                      className="glass-4 bg-background ring-background/50 absolute z-10 -translate-x-1/2 -translate-y-1/2 rounded-full p-1.5 ring-4 transition-transform duration-300 group-hover:scale-110"
                      
                    ></div>
                    <div
                      className="glass-4 bg-background ring-background/50 absolute z-10 -translate-x-1/2 -translate-y-1/2 rounded-full p-1.5 ring-4 transition-transform duration-300 group-hover:scale-110"
                      
                    ></div>
                    <div
                      className="glass-4 bg-background ring-background/50 absolute z-10 -translate-x-1/2 -translate-y-1/2 rounded-full p-1.5 ring-4 transition-transform duration-300 group-hover:scale-110"
                      
                    ></div>
                    <div
                      className="glass-4 bg-background ring-background/50 absolute z-10 -translate-x-1/2 -translate-y-1/2 rounded-full p-1.5 ring-4 transition-transform duration-300 group-hover:scale-110"
                      
                    ></div>
                    <div
                      className="glass-4 bg-background ring-background/50 absolute z-10 -translate-x-1/2 -translate-y-1/2 rounded-full p-1.5 ring-4 transition-transform duration-300 group-hover:scale-110"
                      
                    ></div>
                    <div
                      data-slot="glow"
                      className="pointer-events-none absolute top-[50%] z-10 w-full scale-x-[1.5] opacity-20 transition-all duration-300 group-hover:opacity-30"
                    >
                      <div className="from-brand-foreground/50 to-brand-foreground/0 absolute left-1/2 h-[256px] w-[60%] -translate-x-1/2 -translate-y-1/2 scale-[2.5] rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[512px] dark:opacity-100"></div>
                      <div className="from-brand/30 to-brand-foreground/0 absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 -translate-y-1/2 scale-200 rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[256px] dark:opacity-100"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-slot="card"
              className="glass-1 hover:glass-2 group text-card-foreground relative col-span-12 flex flex-col gap-6 overflow-hidden rounded-xl p-6 shadow-xl transition-all md:col-span-7"
            >
              <a
                data-slot="card-link"
                className="bg-accent/50 absolute top-4 right-4 block rounded-full p-4 opacity-0 transition-opacity group-hover:opacity-100"
              >
                
              </a>
              <div data-slot="card-content" className="flex flex-col gap-4">
                <h3
                  data-slot="card-title"
                  className="text-2xl leading-none font-semibold tracking-tight"
                >
                  The code is yours
                </h3>
                <div
                  data-slot="card-description"
                  className="text-md text-muted-foreground flex flex-col gap-2 text-balance"
                >
                  <p className="max-w-[320px] lg:max-w-[460px]">
                    With Launch UI, the code is yours forever. You can use it as
                    a starting point for your own projects and customize it to
                    your needs.
                  </p>
                  <p>Never bother about subscriptions and lock-ins.</p>
                </div>
              </div>
              <div
                data-slot="card-visual"
                className="flex grow items-end justify-center"
              >
                <div className="min-h-[240px] w-full grow items-center self-center p-4 lg:px-12">
                  <div
                    data-slot="tiles-illustration"
                    className="relative grid h-[318px] w-[534px] grid-flow-col grid-cols-5 grid-rows-6 gap-6"
                  >
                    <div className="row-span-2 row-start-2"></div>
                    <div className="fade-left-lg bg-border/40 dark:bg-background/30 z-1 row-span-2 rounded-xl transition-all duration-1000 ease-in-out"></div>
                    <div className="fade-top-lg bg-border/40 dark:bg-background/30 z-1 row-span-2 rounded-xl transition-all duration-1000 ease-in-out"></div>
                    <div className="glass-4 outline-border/30 dark:outline-background/30 relative z-10 row-span-2 flex items-center justify-center rounded-xl to-transparent outline-4 transition-all duration-1000 ease-in-out group-hover:scale-105">
                      <div
                        data-slot="beam"
                        className="dark:after:from-brand-foreground/30 after:from-brand-foreground/10 after:to-brand-foreground/0 relative after:absolute after:inset-0 after:scale-200 after:rounded-full after:bg-radial after:from-10% after:to-60% after:content-['']"
                      >
                        <div className="text-light relative z-10 opacity-80">
                          
                        </div>
                      </div>
                    </div>
                    <div className="fade-bottom-lg bg-border/40 dark:bg-background/30 z-1 row-span-2 rounded-xl transition-all duration-1000 ease-in-out"></div>
                    <div className="glass-4 outline-border/30 dark:outline-background/30 relative z-10 row-span-2 row-start-2 flex items-center justify-center rounded-xl to-transparent outline-4 transition-all duration-1000 ease-in-out group-hover:scale-90">
                      <div
                        data-slot="beam"
                        className="dark:after:from-brand-foreground/30 after:from-brand-foreground/10 after:to-brand-foreground/0 relative after:absolute after:inset-0 after:scale-200 after:rounded-full after:bg-radial after:from-10% after:to-60% after:content-['']"
                      >
                        <div className="text-light relative z-10 opacity-80">
                          
                        </div>
                      </div>
                    </div>
                    <div className="glass-4 outline-border/30 dark:outline-background/30 relative z-10 row-span-2 flex items-center justify-center rounded-xl to-transparent outline-4 transition-all duration-1000 ease-in-out">
                      <div
                        data-slot="beam"
                        className="dark:after:from-brand-foreground/30 after:from-brand-foreground/10 after:to-brand-foreground/0 relative after:absolute after:inset-0 after:scale-200 after:rounded-full after:bg-radial after:from-10% after:to-60% after:content-['']"
                      >
                        <div className="text-light relative z-10 opacity-80">
                          
                        </div>
                      </div>
                    </div>
                    <div className="fade-top-lg bg-border/40 dark:bg-background/30 z-1 row-span-2 rounded-xl transition-all duration-1000 ease-in-out"></div>
                    <div className="glass-4 outline-border/30 dark:outline-background/30 relative z-10 row-span-2 flex items-center justify-center rounded-xl to-transparent outline-4 transition-all duration-1000 ease-in-out group-hover:scale-105">
                      <div
                        data-slot="beam"
                        className="dark:after:from-brand-foreground/30 after:from-brand-foreground/10 after:to-brand-foreground/0 relative after:absolute after:inset-0 after:scale-200 after:rounded-full after:bg-radial after:from-10% after:to-60% after:content-['']"
                      >
                        <div className="text-light relative z-10 opacity-80">
                          
                        </div>
                      </div>
                    </div>
                    <div className="glass-4 outline-border/30 dark:outline-background/30 relative z-10 row-span-2 row-start-2 flex items-center justify-center rounded-xl to-transparent outline-4 transition-all duration-1000 ease-in-out group-hover:scale-[.8]">
                      <div
                        data-slot="beam"
                        className="dark:after:from-brand-foreground/30 after:from-brand-foreground/10 after:to-brand-foreground/0 relative after:absolute after:inset-0 after:scale-200 after:rounded-full after:bg-radial after:from-10% after:to-60% after:content-['']"
                      >
                        <div className="text-light relative z-10 opacity-80">
                          
                        </div>
                      </div>
                    </div>
                    <div className="fade-right-lg bg-border/40 dark:bg-background/30 z-1 row-span-2 rounded-xl transition-all duration-1000 ease-in-out"></div>
                    <div
                      data-slot="glow"
                      className="absolute top-[50%] w-full scale-x-[1.5] opacity-20 transition-all duration-300 group-hover:opacity-30"
                    >
                      <div className="from-brand-foreground/50 to-brand-foreground/0 absolute left-1/2 h-[256px] w-[60%] -translate-x-1/2 -translate-y-1/2 scale-[2.5] rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[512px] dark:opacity-100"></div>
                      <div className="from-brand/30 to-brand-foreground/0 absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 -translate-y-1/2 scale-200 rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[256px] dark:opacity-100"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-slot="card"
              className="glass-1 hover:glass-2 group text-card-foreground relative col-span-12 flex flex-col gap-6 overflow-hidden rounded-xl p-6 shadow-xl transition-all md:col-span-6 lg:col-span-4"
            >
              <a
                data-slot="card-link"
                className="bg-accent/50 absolute top-4 right-4 block rounded-full p-4 opacity-0 transition-opacity group-hover:opacity-100"
              >
                
              </a>
              <div data-slot="card-content" className="flex flex-col gap-4">
                <h3
                  data-slot="card-title"
                  className="text-2xl leading-none font-semibold tracking-tight"
                >
                  Mobile-first
                </h3>
                <div
                  data-slot="card-description"
                  className="text-md text-muted-foreground flex flex-col gap-2 text-balance"
                >
                  <p>
                    Optimized to look and feel great on all devices, operating
                    systems, and screen sizes.
                  </p>
                </div>
              </div>
              <div
                data-slot="card-visual"
                className="flex grow items-end justify-center"
              >
                <div className="min-h-[300px] w-full py-12">
                  <div
                    data-slot="mockup-mobile-illustration"
                    className="relative h-full w-full"
                  >
                    <div
                      data-slot="mockup-frame"
                      className="bg-border/50 dark:bg-border/10 absolute top-0 left-[50%] z-10 flex w-full max-w-[366px] -translate-x-[50%] translate-y-0 overflow-hidden rounded-[56px] p-2 transition-all duration-1000 ease-in-out group-hover:-translate-y-8"
                    >
                      <div
                        data-slot="mockup"
                        className="border-border/70 dark:border-border/5 dark:border-t-border/15 relative z-10 flex max-w-[350px] overflow-hidden rounded-[48px] border shadow-2xl"
                      ></div>
                    </div>
                    <div
                      data-slot="glow"
                      className="absolute bottom-0 w-full translate-y-20 scale-x-[1.2] opacity-70 transition-all duration-1000 group-hover:translate-y-8 group-hover:opacity-100"
                    >
                      <div className="from-brand-foreground/50 to-brand-foreground/0 absolute left-1/2 h-[256px] w-[60%] -translate-x-1/2 scale-[2.5] rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[512px] dark:opacity-100"></div>
                      <div className="from-brand/30 to-brand-foreground/0 absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 scale-200 rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[256px] dark:opacity-100"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-slot="card"
              className="glass-1 hover:glass-2 group text-card-foreground relative col-span-12 flex flex-col gap-6 overflow-hidden rounded-xl p-6 shadow-xl transition-all md:col-span-6 lg:col-span-4"
            >
              <a
                data-slot="card-link"
                className="bg-accent/50 absolute top-4 right-4 block rounded-full p-4 opacity-0 transition-opacity group-hover:opacity-100"
              >
                
              </a>
              <div data-slot="card-content" className="flex flex-col gap-4">
                <h3
                  data-slot="card-title"
                  className="text-2xl leading-none font-semibold tracking-tight"
                >
                  Top-level performance
                </h3>
                <div
                  data-slot="card-description"
                  className="text-md text-muted-foreground flex flex-col gap-2 text-balance"
                >
                  Lightweight and optimized, your website will will feel snappy
                  and load instantly.
                </div>
              </div>
              <div
                data-slot="card-visual"
                className="flex grow items-end justify-center"
              >
                <div className="h-full w-full">
                  <div className="group relative flex aspect-square w-full items-center justify-center">
                    <div className="via-foreground/10 dark:via-border/30 absolute top-[calc(50%-1px)] left-0 h-0.5 w-full bg-linear-to-r from-transparent to-transparent"></div>
                    <div className="glass-4 ring-background/30 absolute top-1/2 left-1/2 z-10 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full shadow-md ring-8 backdrop-blur-lg transition-all duration-1000 ease-in-out group-hover:scale-105">
                      <div
                        data-slot="beam"
                        className="dark:after:from-brand-foreground/30 after:from-brand-foreground/10 after:to-brand-foreground/0 relative after:absolute after:inset-0 after:scale-200 after:rounded-full after:bg-radial after:from-10% after:to-60% after:content-['']"
                      >
                        <div className="relative z-10">
                          
                        </div>
                      </div>
                    </div>
                    <div className="flex h-full w-full items-center justify-between px-[12.5%]">
                      <div
                        className="via-brand/20 group-hover:animate-wave border-brand/10 w-1 rounded-full border bg-linear-to-b from-transparent to-transparent"
                        
                      ></div>
                      <div
                        className="via-brand/20 group-hover:animate-wave border-brand/10 w-1 rounded-full border bg-linear-to-b from-transparent to-transparent"
                        
                      ></div>
                      <div
                        className="via-brand/20 group-hover:animate-wave border-brand/10 w-1 rounded-full border bg-linear-to-b from-transparent to-transparent"
                        
                      ></div>
                      <div
                        className="via-brand/20 group-hover:animate-wave border-brand/10 w-1 rounded-full border bg-linear-to-b from-transparent to-transparent"
                        
                      ></div>
                      <div
                        className="via-brand/20 group-hover:animate-wave border-brand/10 w-1 rounded-full border bg-linear-to-b from-transparent to-transparent"
                        
                      ></div>
                      <div
                        className="via-brand/20 group-hover:animate-wave border-brand/10 w-1 rounded-full border bg-linear-to-b from-transparent to-transparent"
                        
                      ></div>
                      <div
                        className="via-brand/20 group-hover:animate-wave border-brand/10 w-1 rounded-full border bg-linear-to-b from-transparent to-transparent"
                        
                      ></div>
                      <div
                        className="via-brand/20 group-hover:animate-wave border-brand/10 w-1 rounded-full border bg-linear-to-b from-transparent to-transparent"
                        
                      ></div>
                      <div
                        className="via-brand/20 group-hover:animate-wave border-brand/10 w-1 rounded-full border bg-linear-to-b from-transparent to-transparent"
                        
                      ></div>
                      <div
                        className="via-brand/20 group-hover:animate-wave border-brand/10 w-1 rounded-full border bg-linear-to-b from-transparent to-transparent"
                        
                      ></div>
                      <div
                        className="via-brand/20 group-hover:animate-wave border-brand/10 w-1 rounded-full border bg-linear-to-b from-transparent to-transparent"
                        
                      ></div>
                      <div
                        className="via-brand/20 group-hover:animate-wave border-brand/10 w-1 rounded-full border bg-linear-to-b from-transparent to-transparent"
                        
                      ></div>
                      <div
                        className="via-brand/20 group-hover:animate-wave border-brand/10 w-1 rounded-full border bg-linear-to-b from-transparent to-transparent"
                        
                      ></div>
                      <div
                        className="via-brand/20 group-hover:animate-wave border-brand/10 w-1 rounded-full border bg-linear-to-b from-transparent to-transparent"
                        
                      ></div>
                      <div
                        className="via-brand/20 group-hover:animate-wave border-brand/10 w-1 rounded-full border bg-linear-to-b from-transparent to-transparent"
                        
                      ></div>
                      <div
                        className="via-brand/20 group-hover:animate-wave border-brand/10 w-1 rounded-full border bg-linear-to-b from-transparent to-transparent"
                        
                      ></div>
                      <div
                        className="via-brand/20 group-hover:animate-wave border-brand/10 w-1 rounded-full border bg-linear-to-b from-transparent to-transparent"
                        
                      ></div>
                      <div
                        className="via-brand/20 group-hover:animate-wave border-brand/10 w-1 rounded-full border bg-linear-to-b from-transparent to-transparent"
                        
                      ></div>
                      <div
                        className="via-brand/20 group-hover:animate-wave border-brand/10 w-1 rounded-full border bg-linear-to-b from-transparent to-transparent"
                        
                      ></div>
                      <div
                        className="via-brand/20 group-hover:animate-wave border-brand/10 w-1 rounded-full border bg-linear-to-b from-transparent to-transparent"
                        
                      ></div>
                      <div
                        className="via-brand/20 group-hover:animate-wave border-brand/10 w-1 rounded-full border bg-linear-to-b from-transparent to-transparent"
                        
                      ></div>
                      <div
                        className="via-brand/20 group-hover:animate-wave border-brand/10 w-1 rounded-full border bg-linear-to-b from-transparent to-transparent"
                        
                      ></div>
                      <div
                        className="via-brand/20 group-hover:animate-wave border-brand/10 w-1 rounded-full border bg-linear-to-b from-transparent to-transparent"
                        
                      ></div>
                      <div
                        className="via-brand/20 group-hover:animate-wave border-brand/10 w-1 rounded-full border bg-linear-to-b from-transparent to-transparent"
                        
                      ></div>
                      <div
                        className="via-brand/20 group-hover:animate-wave border-brand/10 w-1 rounded-full border bg-linear-to-b from-transparent to-transparent"
                        
                      ></div>
                    </div>
                    <div
                      data-slot="glow"
                      className="pointer-events-none absolute top-[50%] w-full scale-x-[1.5] opacity-20 transition-all duration-300 group-hover:opacity-30"
                    >
                      <div className="from-brand-foreground/50 to-brand-foreground/0 absolute left-1/2 h-[256px] w-[60%] -translate-x-1/2 -translate-y-1/2 scale-[2.5] rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[512px] dark:opacity-100"></div>
                      <div className="from-brand/30 to-brand-foreground/0 absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 -translate-y-1/2 scale-200 rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[256px] dark:opacity-100"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-slot="card"
              className="glass-1 hover:glass-2 group text-card-foreground relative col-span-12 flex flex-col gap-6 overflow-hidden rounded-xl p-6 shadow-xl transition-all md:col-span-6 lg:col-span-4"
            >
              <a
                data-slot="card-link"
                className="bg-accent/50 absolute top-4 right-4 block rounded-full p-4 opacity-0 transition-opacity group-hover:opacity-100"
              >
                
              </a>
              <div data-slot="card-content" className="flex flex-col gap-4">
                <h3
                  data-slot="card-title"
                  className="text-2xl leading-none font-semibold tracking-tight"
                >
                  Fits right into your stack
                </h3>
                <div
                  data-slot="card-description"
                  className="text-md text-muted-foreground flex flex-col gap-2 text-balance"
                >
                  <p className="max-w-[460px]">
                    Integrate your landing page directly in the product while
                    using your favorite tools.
                  </p>
                </div>
              </div>
              <div
                data-slot="card-visual"
                className="flex grow items-end justify-center"
              >
                <div className="relative -mb-8 min-h-[240px]">
                  <div className="absolute bottom-0 left-1/2 flex aspect-square h-auto w-full min-w-[480px] -translate-x-1/2 gap-1">
                    <div className="flex flex-1 flex-col items-end justify-end">
                      <div
                        className="glass-4 rounded-t-x w-full"
                        
                      ></div>
                      <div
                        className="from-brand-foreground/20 border-brand-foreground/30 border-t-brand-foreground/70 w-full border border-b-0 bg-linear-to-b to-transparent"
                        
                      ></div>
                    </div>
                    <div className="flex flex-1 flex-col items-end justify-end">
                      <div
                        className="glass-4 rounded-t-x w-full"
                        
                      ></div>
                      <div
                        className="from-brand-foreground/20 border-brand-foreground/30 border-t-brand-foreground/70 w-full border border-b-0 bg-linear-to-b to-transparent"
                        
                      ></div>
                    </div>
                    <div className="flex flex-1 flex-col items-end justify-end">
                      <div
                        className="glass-4 rounded-t-x w-full"
                        
                      ></div>
                      <div
                        className="from-brand-foreground/20 border-brand-foreground/30 border-t-brand-foreground/70 w-full border border-b-0 bg-linear-to-b to-transparent"
                        
                      ></div>
                    </div>
                    <div className="flex flex-1 flex-col items-end justify-end">
                      <div
                        className="glass-4 rounded-t-x w-full"
                        
                      ></div>
                      <div
                        className="from-brand-foreground/20 border-brand-foreground/30 border-t-brand-foreground/70 w-full border border-b-0 bg-linear-to-b to-transparent"
                        
                      ></div>
                    </div>
                    <div className="flex flex-1 flex-col items-end justify-end">
                      <div
                        className="glass-4 rounded-t-x w-full"
                        
                      ></div>
                      <div
                        className="from-brand-foreground/20 border-brand-foreground/30 border-t-brand-foreground/70 w-full border border-b-0 bg-linear-to-b to-transparent"
                        
                      ></div>
                    </div>
                    <div className="flex flex-1 flex-col items-end justify-end">
                      <div
                        className="glass-4 rounded-t-x w-full"
                        
                      ></div>
                      <div
                        className="from-brand-foreground/20 border-brand-foreground/30 border-t-brand-foreground/70 w-full border border-b-0 bg-linear-to-b to-transparent"
                        
                      ></div>
                    </div>
                    <div className="flex flex-1 flex-col items-end justify-end">
                      <div
                        className="glass-4 rounded-t-x w-full"
                        
                      ></div>
                      <div
                        className="from-brand-foreground/20 border-brand-foreground/30 border-t-brand-foreground/70 w-full border border-b-0 bg-linear-to-b to-transparent"
                        
                      ></div>
                    </div>
                    <div className="flex flex-1 flex-col items-end justify-end">
                      <div
                        className="glass-4 rounded-t-x w-full"
                        
                      ></div>
                      <div
                        className="from-brand-foreground/20 border-brand-foreground/30 border-t-brand-foreground/70 w-full border border-b-0 bg-linear-to-b to-transparent"
                        
                      ></div>
                    </div>
                    <div className="flex flex-1 flex-col items-end justify-end">
                      <div
                        className="glass-4 rounded-t-x w-full"
                        
                      ></div>
                      <div
                        className="from-brand-foreground/20 border-brand-foreground/30 border-t-brand-foreground/70 w-full border border-b-0 bg-linear-to-b to-transparent"
                        
                      ></div>
                    </div>
                    <div className="flex flex-1 flex-col items-end justify-end">
                      <div
                        className="glass-4 rounded-t-x w-full"
                        
                      ></div>
                      <div
                        className="from-brand-foreground/20 border-brand-foreground/30 border-t-brand-foreground/70 w-full border border-b-0 bg-linear-to-b to-transparent"
                        
                      ></div>
                    </div>
                    <div className="flex flex-1 flex-col items-end justify-end">
                      <div
                        className="glass-4 rounded-t-x w-full"
                        
                      ></div>
                      <div
                        className="from-brand-foreground/20 border-brand-foreground/30 border-t-brand-foreground/70 w-full border border-b-0 bg-linear-to-b to-transparent"
                        
                      ></div>
                    </div>
                    <div className="flex flex-1 flex-col items-end justify-end">
                      <div
                        className="glass-4 rounded-t-x w-full"
                        
                      ></div>
                      <div
                        className="from-brand-foreground/20 border-brand-foreground/30 border-t-brand-foreground/70 w-full border border-b-0 bg-linear-to-b to-transparent"
                        
                      ></div>
                    </div>
                    <div className="flex flex-1 flex-col items-end justify-end">
                      <div
                        className="glass-4 rounded-t-x w-full"
                        
                      ></div>
                      <div
                        className="from-brand-foreground/20 border-brand-foreground/30 border-t-brand-foreground/70 w-full border border-b-0 bg-linear-to-b to-transparent"
                        
                      ></div>
                    </div>
                    <div className="flex flex-1 flex-col items-end justify-end">
                      <div
                        className="glass-4 rounded-t-x w-full"
                        
                      ></div>
                      <div
                        className="from-brand-foreground/20 border-brand-foreground/30 border-t-brand-foreground/70 w-full border border-b-0 bg-linear-to-b to-transparent"
                        
                      ></div>
                    </div>
                    <div className="flex flex-1 flex-col items-end justify-end">
                      <div
                        className="glass-4 rounded-t-x w-full"
                        
                      ></div>
                      <div
                        className="from-brand-foreground/20 border-brand-foreground/30 border-t-brand-foreground/70 w-full border border-b-0 bg-linear-to-b to-transparent"
                        
                      ></div>
                    </div>
                    <div className="flex flex-1 flex-col items-end justify-end">
                      <div
                        className="glass-4 rounded-t-x w-full"
                        
                      ></div>
                      <div
                        className="from-brand-foreground/20 border-brand-foreground/30 border-t-brand-foreground/70 w-full border border-b-0 bg-linear-to-b to-transparent"
                        
                      ></div>
                    </div>
                    <div className="flex flex-1 flex-col items-end justify-end">
                      <div
                        className="glass-4 rounded-t-x w-full"
                        
                      ></div>
                      <div
                        className="from-brand-foreground/20 border-brand-foreground/30 border-t-brand-foreground/70 w-full border border-b-0 bg-linear-to-b to-transparent"
                        
                      ></div>
                    </div>
                    <div className="flex flex-1 flex-col items-end justify-end">
                      <div
                        className="glass-4 rounded-t-x w-full"
                        
                      ></div>
                      <div
                        className="from-brand-foreground/20 border-brand-foreground/30 border-t-brand-foreground/70 w-full border border-b-0 bg-linear-to-b to-transparent"
                        
                      ></div>
                    </div>
                    <div className="flex flex-1 flex-col items-end justify-end">
                      <div
                        className="glass-4 rounded-t-x w-full"
                        
                      ></div>
                      <div
                        className="from-brand-foreground/20 border-brand-foreground/30 border-t-brand-foreground/70 w-full border border-b-0 bg-linear-to-b to-transparent"
                        
                      ></div>
                    </div>
                    <div className="flex flex-1 flex-col items-end justify-end">
                      <div
                        className="glass-4 rounded-t-x w-full"
                        
                      ></div>
                      <div
                        className="from-brand-foreground/20 border-brand-foreground/30 border-t-brand-foreground/70 w-full border border-b-0 bg-linear-to-b to-transparent"
                        
                      ></div>
                    </div>
                    <div className="flex flex-1 flex-col items-end justify-end">
                      <div
                        className="glass-4 rounded-t-x w-full"
                        
                      ></div>
                      <div
                        className="from-brand-foreground/20 border-brand-foreground/30 border-t-brand-foreground/70 w-full border border-b-0 bg-linear-to-b to-transparent"
                        
                      ></div>
                    </div>
                    <div className="flex flex-1 flex-col items-end justify-end">
                      <div
                        className="glass-4 rounded-t-x w-full"
                        
                      ></div>
                      <div
                        className="from-brand-foreground/20 border-brand-foreground/30 border-t-brand-foreground/70 w-full border border-b-0 bg-linear-to-b to-transparent"
                        
                      ></div>
                    </div>
                    <div className="flex flex-1 flex-col items-end justify-end">
                      <div
                        className="glass-4 rounded-t-x w-full"
                        
                      ></div>
                      <div
                        className="from-brand-foreground/20 border-brand-foreground/30 border-t-brand-foreground/70 w-full border border-b-0 bg-linear-to-b to-transparent"
                        
                      ></div>
                    </div>
                    <div className="flex flex-1 flex-col items-end justify-end">
                      <div
                        className="glass-4 rounded-t-x w-full"
                        
                      ></div>
                      <div
                        className="from-brand-foreground/20 border-brand-foreground/30 border-t-brand-foreground/70 w-full border border-b-0 bg-linear-to-b to-transparent"
                        
                      ></div>
                    </div>
                    <div className="flex flex-1 flex-col items-end justify-end">
                      <div
                        className="glass-4 rounded-t-x w-full"
                        
                      ></div>
                      <div
                        className="from-brand-foreground/20 border-brand-foreground/30 border-t-brand-foreground/70 w-full border border-b-0 bg-linear-to-b to-transparent"
                        
                      ></div>
                    </div>
                    <div className="flex flex-1 flex-col items-end justify-end">
                      <div
                        className="glass-4 rounded-t-x w-full"
                        
                      ></div>
                      <div
                        className="from-brand-foreground/20 border-brand-foreground/30 border-t-brand-foreground/70 w-full border border-b-0 bg-linear-to-b to-transparent"
                        
                      ></div>
                    </div>
                    <div className="flex flex-1 flex-col items-end justify-end">
                      <div
                        className="glass-4 rounded-t-x w-full"
                        
                      ></div>
                      <div
                        className="from-brand-foreground/20 border-brand-foreground/30 border-t-brand-foreground/70 w-full border border-b-0 bg-linear-to-b to-transparent"
                        
                      ></div>
                    </div>
                    <div className="flex flex-1 flex-col items-end justify-end">
                      <div
                        className="glass-4 rounded-t-x w-full"
                        
                      ></div>
                      <div
                        className="from-brand-foreground/20 border-brand-foreground/30 border-t-brand-foreground/70 w-full border border-b-0 bg-linear-to-b to-transparent"
                        
                      ></div>
                    </div>
                    <div className="flex flex-1 flex-col items-end justify-end">
                      <div
                        className="glass-4 rounded-t-x w-full"
                        
                      ></div>
                      <div
                        className="from-brand-foreground/20 border-brand-foreground/30 border-t-brand-foreground/70 w-full border border-b-0 bg-linear-to-b to-transparent"
                        
                      ></div>
                    </div>
                    <div className="flex flex-1 flex-col items-end justify-end">
                      <div
                        className="glass-4 rounded-t-x w-full"
                        
                      ></div>
                      <div
                        className="from-brand-foreground/20 border-brand-foreground/30 border-t-brand-foreground/70 w-full border border-b-0 bg-linear-to-b to-transparent"
                        
                      ></div>
                    </div>
                    <div
                      data-slot="glow"
                      className="pointer-events-none absolute top-[50%] w-full scale-x-[1.5] opacity-20 transition-all duration-300 group-hover:opacity-30"
                    >
                      <div className="from-brand-foreground/50 to-brand-foreground/0 absolute left-1/2 h-[256px] w-[60%] -translate-x-1/2 -translate-y-1/2 scale-[2.5] rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[512px] dark:opacity-100"></div>
                      <div className="from-brand/30 to-brand-foreground/0 absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 -translate-y-1/2 scale-200 rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[256px] dark:opacity-100"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        data-slot="section"
        className="line-b px-4 py-12 sm:py-24 md:py-32"
      >
        <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-12">
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
              className="glass-1 hover:glass-2 group text-card-foreground relative col-span-12 flex flex-col gap-6 overflow-hidden rounded-xl p-6 shadow-xl transition-all md:col-span-6 lg:col-span-4"
            >
              <a
                data-slot="card-link"
                className="bg-accent/50 absolute top-4 right-4 block rounded-full p-4 opacity-0 transition-opacity group-hover:opacity-100"
              >
                
              </a>
              <div
                data-slot="card-visual"
                className="flex grow items-end justify-center"
              >
                <div className="h-full w-full sm:px-4 md:px-8">
                  <div className="relative flex h-full w-full items-center justify-center px-4">
                    <div className="flex items-start justify-center gap-8">
                      <div className="flex flex-col items-center gap-4">
                        <div className="relative flex flex-col items-center">
                          <div className="glass-5 dark:border-brand/20 outline-border/30 dark:outline-background/30 relative z-2 rounded-full p-1 outline-4 transition-transform duration-200 hover:scale-105">
                            
                            <div className="from-brand-foreground/30 absolute inset-0 flex items-center justify-center rounded-full bg-radial to-transparent to-70%"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-brand-foreground text-lg font-medium">
                                95
                              </span>
                            </div>
                          </div>
                          <div className="via-foreground/10 dark:via-brand-foreground/15 absolute -top-[500%] left-1/2 h-[1000%] w-[1px] -translate-x-1/2 bg-linear-to-b from-transparent from-20% to-transparent to-90%"></div>
                        </div>
                        <span className="text-muted-foreground text-center text-sm font-medium">
                          Performance
                        </span>
                      </div>
                      <div className="flex flex-col items-center gap-4">
                        <div className="relative flex flex-col items-center">
                          <div className="glass-5 dark:border-brand/20 outline-border/30 dark:outline-background/30 relative z-2 rounded-full p-1 outline-4 transition-transform duration-200 hover:scale-105">
                            
                            <div className="from-border/20 absolute inset-0 flex items-center justify-center rounded-full bg-radial to-transparent to-70%"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-foreground/50 text-lg font-medium">
                                85
                              </span>
                            </div>
                          </div>
                          <div className="via-foreground/10 dark:via-brand-foreground/15 absolute -top-[500%] left-1/2 h-[1000%] w-[1px] -translate-x-1/2 bg-linear-to-b from-transparent from-20% to-transparent to-90%"></div>
                        </div>
                        <span className="text-muted-foreground text-center text-sm font-medium">
                          Accessibility
                        </span>
                      </div>
                      <div className="flex flex-col items-center gap-4">
                        <div className="relative flex flex-col items-center">
                          <div className="glass-5 dark:border-brand/20 outline-border/30 dark:outline-background/30 relative z-2 rounded-full p-1 outline-4 transition-transform duration-200 hover:scale-105">
                            
                            <div className="from-brand/30 absolute inset-0 flex items-center justify-center rounded-full bg-radial to-transparent to-70%"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-brand text-lg font-medium">
                                90
                              </span>
                            </div>
                          </div>
                          <div className="via-foreground/10 dark:via-brand-foreground/15 absolute -top-[500%] left-1/2 h-[1000%] w-[1px] -translate-x-1/2 bg-linear-to-b from-transparent from-20% to-transparent to-90%"></div>
                        </div>
                        <span className="text-muted-foreground text-center text-sm font-medium">
                          Practices
                        </span>
                      </div>
                    </div>
                    <div
                      data-slot="glow"
                      className="pointer-events-none absolute top-[50%] w-full scale-x-[1.5] opacity-20 transition-all duration-300 group-hover:opacity-30"
                    >
                      <div className="from-brand-foreground/50 to-brand-foreground/0 absolute left-1/2 h-[256px] w-[60%] -translate-x-1/2 -translate-y-1/2 scale-[2.5] rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[512px] dark:opacity-100"></div>
                      <div className="from-brand/30 to-brand-foreground/0 absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 -translate-y-1/2 scale-200 rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[256px] dark:opacity-100"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-slot="card-content" className="flex flex-col gap-4">
                
                <h3
                  data-slot="card-title"
                  className="text-2xl leading-none font-semibold tracking-tight"
                >
                  Data-agnostic
                </h3>
                <div
                  data-slot="card-description"
                  className="text-md text-muted-foreground flex flex-col gap-2 text-balance"
                >
                  <p>
                    All the data is separate from components so you can edit it
                    in seconds or make it dynamic.
                  </p>
                  <p>Easily connect to a CMS of your choice.</p>
                </div>
              </div>
            </div>
            <div
              data-slot="card"
              className="glass-1 hover:glass-2 group text-card-foreground relative col-span-12 flex flex-col gap-6 overflow-hidden rounded-xl p-6 shadow-xl transition-all lg:col-span-4"
            >
              <a
                data-slot="card-link"
                className="bg-accent/50 absolute top-4 right-4 block rounded-full p-4 opacity-0 transition-opacity group-hover:opacity-100"
              >
                
              </a>
              <div
                data-slot="card-visual"
                className="flex grow items-end justify-center"
              >
                <div className="-mx-32 -my-16 lg:my-0">
                  <div className="fade-y relative -mx-32 flex items-center justify-center pt-8">
                    
                    <div
                      data-slot="glow"
                      className="pointer-events-none absolute top-[50%] w-full scale-x-[1.5] opacity-10 transition-all duration-300 group-hover:opacity-15"
                    >
                      <div className="from-brand-foreground/50 to-brand-foreground/0 absolute left-1/2 h-[256px] w-[60%] -translate-x-1/2 -translate-y-1/2 scale-[2.5] rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[512px] dark:opacity-100"></div>
                      <div className="from-brand/30 to-brand-foreground/0 absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 -translate-y-1/2 scale-200 rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[256px] dark:opacity-100"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-slot="card-content" className="flex flex-col gap-4">
                
                <h3
                  data-slot="card-title"
                  className="text-2xl leading-none font-semibold tracking-tight"
                >
                  Top-level performance
                </h3>
                <div
                  data-slot="card-description"
                  className="text-md text-muted-foreground flex flex-col gap-2 text-balance"
                >
                  <p>
                    With no heavy assets or dependencies, your website will feel
                    snappy and load instantly.
                  </p>
                  <p>No bloat, no extra maintenance.</p>
                </div>
              </div>
            </div>
            <div
              data-slot="card"
              className="glass-1 hover:glass-2 group text-card-foreground relative col-span-12 flex flex-col gap-6 overflow-hidden rounded-xl p-6 shadow-xl transition-all md:col-span-6 lg:col-span-4"
            >
              <a
                data-slot="card-link"
                className="bg-accent/50 absolute top-4 right-4 block rounded-full p-4 opacity-0 transition-opacity group-hover:opacity-100"
              >
                
              </a>
              <div
                data-slot="card-visual"
                className="flex grow items-end justify-center"
              >
                <div className="relative min-h-[240px]">
                  <div
                    data-slot="radar-small-illustration"
                    className="absolute top-1/2 left-1/2 -mt-32 mb-8 flex h-[512px] w-[512px] -translate-x-1/2 -translate-y-1/2 items-end sm:mb-0"
                  >
                    <div className="relative flex aspect-1/1 h-full w-full items-end">
                      <div className="relative aspect-1/1 h-full w-full p-6">
                        <div
                          className="bg-brand-foreground/10 absolute top-1/2 left-0 h-[1px] w-full"
                          
                        ></div>
                        <div
                          className="bg-brand-foreground/10 absolute top-1/2 left-0 h-[1px] w-full"
                          
                        ></div>
                        <div
                          className="bg-brand-foreground/10 absolute top-1/2 left-0 h-[1px] w-full"
                          
                        ></div>
                        <div
                          className="bg-brand-foreground/10 absolute top-1/2 left-0 h-[1px] w-full"
                          
                        ></div>
                        <div
                          className="bg-brand-foreground/10 absolute top-1/2 left-0 h-[1px] w-full"
                          
                        ></div>
                        <div
                          className="bg-brand-foreground/10 absolute top-1/2 left-0 h-[1px] w-full"
                          
                        ></div>
                        <div
                          className="bg-brand-foreground/10 absolute top-1/2 left-0 h-[1px] w-full"
                          
                        ></div>
                        <div
                          className="bg-brand-foreground/10 absolute top-1/2 left-0 h-[1px] w-full"
                          
                        ></div>
                        <div
                          className="bg-brand-foreground/10 absolute top-1/2 left-0 h-[1px] w-full"
                          
                        ></div>
                        <div
                          className="bg-brand-foreground/10 absolute top-1/2 left-0 h-[1px] w-full"
                          
                        ></div>
                        <div
                          className="bg-brand-foreground/10 absolute top-1/2 left-0 h-[1px] w-full"
                          
                        ></div>
                        <div
                          className="bg-brand-foreground/10 absolute top-1/2 left-0 h-[1px] w-full"
                          
                        ></div>
                        <div className="dark:border-background relative h-full w-full rounded-full">
                          <div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[100%] border p-4 opacity-40"
                            
                          ></div>
                          <div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[100%] border p-4 opacity-40"
                            
                          ></div>
                          <div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[100%] border p-4 opacity-40"
                            
                          ></div>
                          <div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[100%] border p-4 opacity-40"
                            
                          ></div>
                          <div
                            className="group-hover:animate-spin-slow absolute inset-[0] h-full w-full rounded-full opacity-0 group-hover:opacity-40"
                            
                          ></div>
                        </div>
                      </div>
                      <div className="bg-brand absolute top-[20%] right-[20%] size-7 rounded-full opacity-40 shadow-[0_0_12px_4px_var(--brand-foreground)] group-hover:animate-ping group-hover:opacity-100 dark:opacity-50"></div>
                      <div className="absolute top-[20%] right-[20%] flex size-7 items-center justify-center rounded-full bg-white/90 dark:bg-white/10">
                        
                      </div>
                      <div className="bg-brand absolute top-[20%] left-[20%] size-7 rounded-full opacity-40 shadow-[0_0_12px_4px_var(--brand-foreground)] group-hover:animate-ping group-hover:opacity-100 dark:opacity-50"></div>
                      <div className="absolute top-[20%] left-[20%] flex size-7 items-center justify-center rounded-full bg-white/90 dark:bg-white/10">
                        
                      </div>
                      <div className="bg-brand absolute bottom-[20%] left-[30%] size-7 rounded-full opacity-40 shadow-[0_0_12px_4px_var(--brand-foreground)] group-hover:animate-ping group-hover:opacity-100 dark:opacity-50"></div>
                      <div className="absolute bottom-[20%] left-[30%] flex size-7 items-center justify-center rounded-full bg-white/90 dark:bg-white/10">
                        
                      </div>
                      <div className="bg-brand absolute right-[25%] bottom-[40%] size-7 rounded-full opacity-40 shadow-[0_0_12px_4px_var(--brand-foreground)] group-hover:animate-ping group-hover:opacity-100 dark:opacity-50"></div>
                      <div className="absolute right-[25%] bottom-[40%] flex size-7 items-center justify-center rounded-full bg-white/90 dark:bg-white/10">
                        
                      </div>
                      <div
                        data-slot="glow"
                        className="absolute top-[50%] w-full opacity-20 transition-all duration-300 group-hover:opacity-30"
                      >
                        <div className="from-brand-foreground/50 to-brand-foreground/0 absolute left-1/2 h-[256px] w-[60%] -translate-x-1/2 -translate-y-1/2 scale-[2.5] rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[512px] dark:opacity-100"></div>
                        <div className="from-brand/30 to-brand-foreground/0 absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 -translate-y-1/2 scale-200 rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[256px] dark:opacity-100"></div>
                      </div>
                    </div>
                    <div className="glass-5 border-brand/30 dark:border-brand/20 absolute top-1/2 left-1/2 flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full p-2.5 shadow-md backdrop-blur-md">
                      
                    </div>
                  </div>
                </div>
              </div>
              <div data-slot="card-content" className="flex flex-col gap-4">
                
                <h3
                  data-slot="card-title"
                  className="text-2xl leading-none font-semibold tracking-tight"
                >
                  Made for search engines
                </h3>
                <div
                  data-slot="card-description"
                  className="text-md text-muted-foreground flex flex-col gap-2 text-balance"
                >
                  <p className="max-w-[520px]">
                    Unlike the bloated no-code solutions, Launch UI is built to
                    be perfectly optimized for search engines.
                  </p>
                </div>
              </div>
            </div>
            <div
              data-slot="card"
              className="glass-1 hover:glass-2 group text-card-foreground relative col-span-12 flex flex-col gap-6 overflow-hidden rounded-xl p-6 shadow-xl transition-all md:flex-row"
            >
              <a
                data-slot="card-link"
                className="bg-accent/50 absolute top-4 right-4 block rounded-full p-4 opacity-0 transition-opacity group-hover:opacity-100"
              >
                
              </a>
              <div
                data-slot="card-content"
                className="flex grow basis-0 flex-col gap-4 md:justify-end"
              >
                
                <h3
                  data-slot="card-title"
                  className="text-2xl leading-none font-semibold tracking-tight"
                >
                  The code is yours
                </h3>
                <div
                  data-slot="card-description"
                  className="text-md text-muted-foreground flex flex-col gap-2 text-balance"
                >
                  <p className="max-w-[320px] lg:max-w-[460px]">
                    With Launch UI, the code is yours forever. You can use it as
                    a starting point for your own projects and customize it to
                    your needs.
                  </p>
                  <p>Never bother about subscriptions and lock-ins.</p>
                </div>
              </div>
              <div
                data-slot="card-visual"
                className="flex grow items-end justify-center"
              >
                <div className="min-h-[240px] grow basis-0 sm:p-4 md:min-h-[320px] md:py-12 lg:px-12">
                  <div
                    data-slot="mockup-responsive-top-illustration"
                    className="h-full w-full"
                  >
                    <div className="relative h-full w-full">
                      <div
                        data-slot="mockup-frame"
                        className="bg-border/50 dark:bg-border/10 absolute top-0 left-0 z-10 flex w-full min-w-[680px] translate-y-0 overflow-hidden rounded-2xl p-2 transition-all duration-1000 ease-in-out group-hover:-translate-y-4"
                      >
                        <div
                          data-slot="mockup"
                          className="border-border/70 dark:border-border/5 dark:border-t-border/15 relative z-10 flex overflow-hidden rounded-md border shadow-2xl"
                        ></div>
                      </div>
                      <div
                        data-slot="glow"
                        className="absolute bottom-0 w-full translate-y-20 transition-all duration-1000 group-hover:translate-y-8"
                      >
                        <div className="from-brand-foreground/50 to-brand-foreground/0 absolute left-1/2 h-[256px] w-[60%] -translate-x-1/2 scale-[2.5] rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[512px] dark:opacity-100"></div>
                        <div className="from-brand/30 to-brand-foreground/0 absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 scale-200 rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[256px] dark:opacity-100"></div>
                      </div>
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
