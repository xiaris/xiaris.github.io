import React from 'react';

type Slide = {
  id: string;
  part: string;
  title: string;
  subtitle: string;
  note: string;
};

type Language = 'zh' | 'en';

type Part1Layout = 'single' | 'double' | 'quad' | 'stack';

const part1Visuals: Record<string, { layout: Part1Layout; images: string[] }> = {
  'agn-background-2': { layout: 'double', images: ['/images/part1/image4.png', '/images/part1/image5.png'] },
  'agn-background-3': { layout: 'double', images: ['/images/part1/image6.png', '/images/part1/image7.png'] },
  'agn-background-4': { layout: 'single', images: ['/images/part1/image4.png'] },
  'agn-background-5': { layout: 'double', images: ['/images/part1/image6.png', '/images/part1/image7.png'] },
  'agn-background-6': { layout: 'double', images: ['/images/part1/image6.png', '/images/part1/image8.png'] },
  'agn-background-7': { layout: 'quad', images: ['/images/part1/image9.png', '/images/part1/image11.png', '/images/part1/image100.png', '/images/part1/image10.png'] },
  'agn-background-8': { layout: 'double', images: ['/images/part1/image12.png', '/images/part1/image13.png'] },
  'agn-background-9': { layout: 'stack', images: ['/images/part1/image14.png', '/images/part1/image7.png', '/images/part1/image15.png'] },
};

const Part1VisualPanel: React.FC<{ slideId: string }> = ({ slideId }) => {
  const config = part1Visuals[slideId];

  if (!config) {
    return (
      <div className="rounded-[1.8rem] border border-dashed border-cosmic-blue/25 bg-cosmic-blue/[0.03] p-8">
        <p className="text-lg leading-8 text-slate-400">
          Visual placeholder reserved for this Part I page.
        </p>
      </div>
    );
  }

  if (config.layout === 'single') {
    return (
      <div className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-white p-3 shadow-[0_24px_70px_rgba(2,6,23,0.32)]">
        <img src={config.images[0]} alt={slideId} className="block h-auto w-full rounded-[1rem]" />
      </div>
    );
  }

  if (config.layout === 'double') {
    return (
      <div className="grid gap-4 md:grid-cols-2">
        {config.images.map((src) => (
          <div key={src} className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-white p-2 shadow-[0_18px_50px_rgba(2,6,23,0.26)]">
            <img src={src} alt={slideId} className="block h-full w-full rounded-[0.9rem] object-cover" />
          </div>
        ))}
      </div>
    );
  }

  if (config.layout === 'quad') {
    return (
      <div className="grid gap-3 md:grid-cols-2">
        {config.images.map((src) => (
          <div key={src} className="overflow-hidden rounded-[1.4rem] border border-white/10 bg-white p-2 shadow-[0_18px_50px_rgba(2,6,23,0.24)]">
            <img src={src} alt={slideId} className="block h-full w-full rounded-[0.8rem] object-cover" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      {config.images.map((src) => (
        <div key={src} className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-white p-2 shadow-[0_18px_50px_rgba(2,6,23,0.26)]">
          <img src={src} alt={slideId} className="block h-auto w-full rounded-[0.9rem]" />
        </div>
      ))}
    </div>
  );
};

export const isPart1Slide = (slideId: string) => slideId.startsWith('agn-background-');

const Part1Slides: React.FC<{ slide: Slide; lang: Language }> = ({ slide, lang }) => {
  const isZh = lang === 'zh';

  if (slide.id === 'agn-background-1') {
    return (
      <div className="mx-auto w-full max-w-[90rem] px-8 pt-28 pb-12 md:px-12 lg:px-16 xl:px-20">
        <div className="grid gap-10 xl:grid-cols-[0.92fr_1.08fr] xl:items-center">
          <div>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.18] tracking-[-0.05em] text-white md:text-[5.4rem]">
              {isZh ? '活动星系核' : 'Active Galactic Nuclei'}
            </h1>
            <div className="mt-12 space-y-8">
              <p className="text-2xl leading-10 text-slate-200 md:text-[2rem] md:leading-[3.35rem]">
                {isZh ? (
                  <>
                    核区<span className="text-cosmic-blue font-semibold">异常明亮</span>。
                  </>
                ) : (
                  <>
                    The nucleus is <span className="text-cosmic-blue font-semibold">extraordinarily bright</span>.
                  </>
                )}
              </p>
              <p className="text-2xl leading-10 text-slate-300 md:text-[2rem] md:leading-[3.35rem]">
                {isZh ? (
                  <>
                    中心超大质量黑洞处于<span className="text-cosmic-blue font-semibold">活跃吸积</span>状态，
                    从而释放出强烈辐射。
                  </>
                ) : (
                  <>
                    The central supermassive black hole is undergoing <span className="text-cosmic-blue font-semibold">active accretion</span>,
                    releasing intense radiation.
                  </>
                )}
              </p>
              <p className="text-2xl leading-10 text-slate-300 md:text-[2rem] md:leading-[3.35rem]">
                {isZh ? (
                  <>
                    它是研究<span className="text-cosmic-blue font-semibold">黑洞吸积过程</span>最重要的系统之一。
                  </>
                ) : (
                  <>
                    It is one of the most important systems for <span className="text-cosmic-blue font-semibold">studying</span>{' '}
                    <span className="text-cosmic-blue font-semibold">black hole accretion processes</span>.
                  </>
                )}
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-white p-3 shadow-[0_24px_70px_rgba(2,6,23,0.32)]">
            <img
              src="/images/agn-vs-normal-galaxies.png"
              alt="Comparison between normal galaxies and active galaxies"
              className="block h-auto w-full rounded-[1rem]"
            />
          </div>
        </div>
      </div>
    );
  }

  if (slide.id === 'agn-background-2') {
    return (
      <div className="mx-auto w-full max-w-[90rem] px-8 pt-28 pb-12 md:px-12 lg:px-16 xl:px-20">
        <div className="space-y-8">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-mono uppercase tracking-[0.28em] text-cosmic-blue">
              {isZh ? '第一部分' : 'Part I'}
            </div>
            <h1 className="mt-6 text-5xl font-semibold leading-[1.08] tracking-[-0.05em] text-white md:text-7xl">
              {isZh ? '多波段辐射与结构' : 'Multi-wavelength Emission and Structure'}
            </h1>
          </div>

          <div className="rounded-[1.8rem] border border-white/10 bg-white/5 px-7 py-6 shadow-[0_24px_70px_rgba(2,6,23,0.18)] backdrop-blur-md">
            <p className="text-2xl leading-10 text-slate-200 md:text-[2rem] md:leading-[3.1rem]">
              {isZh ? 'AGN 的不同波段辐射对应着不同的物理结构。' : 'Different wavelength bands in AGN are associated with different physical structures.'}
            </p>
            <p className="mt-4 text-xl leading-9 text-slate-300 md:text-[1.65rem] md:leading-[2.7rem]">
              {isZh ? (
                <>
                  光学和紫外辐射主要来自<span className="text-cosmic-blue font-semibold">吸积盘</span>，X 射线则主要来自<span className="text-cosmic-blue font-semibold">高温冕区</span>。
                </>
              ) : (
                <>
                  Optical and ultraviolet emission mainly originates from the <span className="text-cosmic-blue font-semibold">accretion disk</span>, while X-rays mainly arise from the <span className="text-cosmic-blue font-semibold">hot corona</span>.
                </>
              )}
            </p>
          </div>

          <div className="grid gap-6 xl:grid-cols-[1.03fr_0.97fr]">
            <div>
              <div className="overflow-hidden rounded-[1.9rem] border border-white/10 bg-white p-3 shadow-[0_24px_70px_rgba(2,6,23,0.28)]">
                <img
                  src="/images/part1/image4.png"
                  alt="AGN spectral energy distribution across wavebands"
                  className="block h-full w-full rounded-[1rem] object-cover"
                />
              </div>
              <p className="mt-3 text-right text-sm tracking-[0.12em] text-slate-400">
                Hickox et al. (2018)
              </p>
            </div>
            <div>
              <div className="overflow-hidden rounded-[1.9rem] border border-white/10 bg-white p-3 shadow-[0_24px_70px_rgba(2,6,23,0.28)]">
                <img
                  src="/images/part1/image5.png"
                  alt="AGN structural regions associated with different emissions"
                  className="block h-full w-full rounded-[1rem] object-cover"
                />
              </div>
              <p className="mt-3 text-right text-sm tracking-[0.12em] text-slate-400">
                Hickox et al. (2018)
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (slide.id === 'agn-background-3') {
    return (
      <div className="mx-auto w-full max-w-[90rem] px-8 pt-28 pb-12 md:px-12 lg:px-16 xl:px-20">
        <div className="space-y-12">
          <div className="max-w-6xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-mono uppercase tracking-[0.28em] text-cosmic-blue">
              {isZh ? '第一部分' : 'Part I'}
            </div>
            <h1 className="mt-6 text-5xl font-semibold leading-[1.08] tracking-[-0.05em] text-white md:text-[4.35rem]">
              {isZh ? 'AGN中的QPO和随机光变' : 'QPO and Stochastic Variability in AGN'}
            </h1>
          </div>

          <div className="grid gap-x-10 gap-y-8 xl:grid-cols-2">
            <div className="flex h-full flex-col items-center">
              <div className="mb-8 w-full">
                <h2 className="text-center text-[2.5rem] font-medium tracking-[-0.04em] text-white md:text-[3.3rem]">
                  {isZh ? '准周期振荡' : 'Quasi-periodic Oscillations'}
                </h2>
              </div>
              <div className="w-full overflow-hidden rounded-[1.45rem] border border-white/10 bg-white p-3 shadow-[0_20px_55px_rgba(2,6,23,0.18)]">
                <img
                  src="/images/part1/image6.png"
                  alt="Example AGN QPO light-curve behavior"
                  className="block aspect-[1.6/1] h-auto w-full rounded-[0.9rem] object-cover object-center"
                />
              </div>
              <p className="mt-4 w-full pr-2 text-right text-[0.95rem] tracking-[0.08em] text-slate-400">
                Gierlinski et al. (2008)
              </p>
            </div>

            <div className="flex h-full flex-col items-center pt-20">
              <div className="mb-8 w-full">
                <h2 className="text-center text-[2.5rem] font-medium tracking-[-0.04em] text-white md:text-[3.3rem]">
                  {isZh ? '随机光变' : 'Stochastic Variability'}
                </h2>
              </div>
              <div className="w-full overflow-hidden rounded-[1.45rem] border border-white/10 bg-white p-2.5 shadow-[0_20px_55px_rgba(2,6,23,0.18)]">
                <img
                  src="/images/part1/image7.png"
                  alt="Example AGN stochastic optical variability"
                  className="block h-[12.75rem] w-full rounded-[0.9rem] object-cover object-top"
                />
              </div>
              <p className="mt-4 w-full pr-2 text-right text-[0.95rem] tracking-[0.08em] text-slate-400">
                Burke et al. (2021)
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (slide.id === 'agn-background-4') {
    return (
      <div className="mx-auto w-full max-w-[92rem] px-8 pt-28 pb-12 md:px-12 lg:px-16 xl:px-20">
        <div className="space-y-10">
          <div className="max-w-6xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-mono uppercase tracking-[0.28em] text-cosmic-blue">
              {isZh ? '第一部分' : 'Part I'}
            </div>
            <h1 className="mt-6 text-5xl font-semibold leading-[1.08] tracking-[-0.05em] text-white md:text-[4.5rem]">
              {isZh ? '准周期振荡（QPO）' : 'Quasi-periodic Oscillations (QPO)'}
            </h1>
          </div>

          <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/5 px-8 py-6 shadow-[0_24px_70px_rgba(2,6,23,0.18)] backdrop-blur-md">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-cosmic-blue/18 via-cosmic-blue/8 to-transparent blur-2xl motion-safe:animate-pulse" />
            <p className="relative text-xl leading-9 text-slate-200 md:text-[1.8rem] md:leading-[2.9rem]">
              {isZh ? (
                <>
                  X射线 QPO 与<span className="font-semibold text-cosmic-blue">吸积盘内区的物理活动</span>密切相关，
                  能够反映<span className="font-semibold text-cosmic-blue">冕区几何结构</span>的变化。
                </>
              ) : (
                <>
                  X-ray QPOs are closely connected to <span className="font-semibold text-cosmic-blue">physical activity in the inner accretion disk</span>,
                  and can reveal changes in the <span className="font-semibold text-cosmic-blue">coronal geometry</span>.
                </>
              )}
            </p>
          </div>

          <div className="grid gap-8 xl:grid-cols-[1.08fr_0.92fr]">
            <div className="flex h-full flex-col">
              <div className="mb-5 flex items-end justify-between gap-6">
                <p className="text-[1.05rem] tracking-[0.12em] text-slate-400">
                  Gierlinski et al. (2008)
                </p>
                <h2 className="text-[2.2rem] font-medium tracking-[-0.04em] text-white">
                  {isZh ? '光变曲线' : 'Light Curve'}
                </h2>
              </div>

              <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-white p-3 shadow-[0_24px_70px_rgba(2,6,23,0.24)]">
                <img
                  src="/images/part1/image6.png"
                  alt="X-ray QPO light curve"
                  className="block h-auto w-full rounded-[0.95rem]"
                />
              </div>
            </div>

            <div className="flex h-full flex-col pt-8">
              <div className="mb-5 flex items-end justify-between gap-6">
                <p className="text-[1.05rem] tracking-[0.12em] text-slate-400">
                  Gierlinski et al. (2008)
                </p>
                <h2 className="text-[2.2rem] font-medium tracking-[-0.04em] text-white">
                  PSD
                </h2>
              </div>

              <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-white p-3 shadow-[0_24px_70px_rgba(2,6,23,0.24)]">
                <img
                  src="/images/part1/image8.png"
                  alt="Power spectral density with QPO peak"
                  className="block h-[28rem] w-full rounded-[0.95rem] object-cover object-top"
                />
                <div className="pointer-events-none absolute right-[15%] top-[18%] text-cosmic-blue">
                  <div className="ml-20 text-[1.9rem] font-semibold tracking-[-0.04em] drop-shadow-[0_0_18px_rgba(14,165,233,0.28)]">
                    QPO Peak
                  </div>
                  <div className="mt-1 h-20 w-px rotate-[32deg] bg-cosmic-blue/90 origin-top shadow-[0_0_16px_rgba(14,165,233,0.45)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-[90rem] px-8 pt-28 pb-12 md:px-12 lg:px-16 xl:px-20">
      <div className="grid gap-10 xl:grid-cols-[0.9fr_1.1fr] xl:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-mono uppercase tracking-[0.28em] text-cosmic-blue">
            {isZh ? '第一部分' : 'Part I'}
          </div>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.08] tracking-[-0.05em] text-white md:text-7xl">
            {slide.title}
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-300 md:text-[1.9rem] md:leading-[3.1rem]">
            {slide.subtitle}
          </p>
          <div className="mt-8 rounded-[1.6rem] border border-white/10 bg-white/5 p-6">
            <div className="text-xs font-mono uppercase tracking-[0.22em] text-cosmic-blue">
              {isZh ? '页面提示' : 'Slide Cue'}
            </div>
            <p className="mt-4 text-base leading-8 text-slate-300">
              {slide.note}
            </p>
          </div>
        </div>

        <Part1VisualPanel slideId={slide.id} />
      </div>
    </div>
  );
};

export default Part1Slides;
