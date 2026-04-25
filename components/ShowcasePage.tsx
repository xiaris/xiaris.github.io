import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Part1Slides, { isPart1Slide } from './showcase/Part1Slides';

type Language = 'zh' | 'en';

type Slide = {
  id: string;
  part: string;
  title: string;
  subtitle: string;
  note: string;
};

const getShowcaseLanguage = (): Language => {
  const hash = window.location.hash;
  const match = hash.match(/[?&]lang=(zh|en)/);
  return match?.[1] === 'en' ? 'en' : 'zh';
};

const withShowcaseLanguage = (href: string, lang: Language) => `${href}${href.includes('?') ? '&' : '?'}lang=${lang}`;

const getLocalizedSlides = (lang: Language): Slide[] => {
  const isZh = lang === 'zh';

  const agnSlides: Slide[] = [
    {
      id: 'agn-background-1',
      part: isZh ? '第一部分' : 'Part I',
      title: isZh ? '活动星系核' : 'Active Galactic Nuclei',
      subtitle: isZh ? '以活动星系核为起点，引入超大质量黑洞吸积研究的基本物理图景。' : 'Introduction to AGN as a key system for studying accretion onto supermassive black holes.',
      note: isZh ? '作为第一部分的开场定义页。' : 'Opening definition slide for the AGN section.',
    },
    {
      id: 'agn-background-2',
      part: isZh ? '第一部分' : 'Part I',
      title: isZh ? '多波段辐射与结构' : 'AGN Classification',
      subtitle: isZh ? 'AGN 在不同波段呈现不同辐射成分，能够追踪吸积盘、尘埃环和高温冕区等结构。' : 'Placeholder reconstructed from the introduction deck structure.',
      note: isZh ? '用左右两幅图建立“波段-结构-物理区域”的对应关系。' : 'Use this page for one concept, one figure, or one explanatory transition.',
    },
    {
      id: 'agn-background-3',
      part: isZh ? '第一部分' : 'Part I',
      title: isZh ? 'AGN中的QPO和随机光变' : 'AGN Unified Picture',
      subtitle: isZh ? 'AGN 光变既包含可能具有特征频率的 QPO，也包含由吸积过程驱动的随机涨落。' : 'Placeholder reconstructed from the introduction deck structure.',
      note: isZh ? '这一页作为 QPO 与随机光变两条主线的并列引入。' : 'Use this page for one concept, one figure, or one explanatory transition.',
    },
    {
      id: 'agn-background-4',
      part: isZh ? '第一部分' : 'Part I',
      title: isZh ? '准周期振荡（QPO）' : 'Accretion Disk and Corona',
      subtitle: isZh ? 'X 射线 QPO 可能记录吸积盘内区和冕区几何结构的周期性或准周期性变化。' : 'Placeholder reconstructed from the introduction deck structure.',
      note: isZh ? '从光变曲线和功率谱两个角度说明 QPO 的观测特征。' : 'Use this page for one concept, one figure, or one explanatory transition.',
    },
    {
      id: 'agn-background-5',
      part: isZh ? '第一部分' : 'Part I',
      title: isZh ? 'QPO 与随机光变的差异' : 'Multi-wavelength Emission',
      subtitle: isZh ? 'QPO 表现为功率谱中的窄峰，而随机光变通常呈现宽频噪声，二者对应不同的时间尺度信息。' : 'Placeholder reconstructed from the introduction deck structure.',
      note: isZh ? '继续使用光变曲线对比，让听众先形成“有特征频率”和“连续涨落”的直观区别。' : 'Use this page for one concept, one figure, or one explanatory transition.',
    },
    {
      id: 'agn-background-6',
      part: isZh ? '第一部分' : 'Part I',
      title: isZh ? '从时间域到频率域' : 'AGN Variability',
      subtitle: isZh ? '把光变曲线转换为功率谱，可以把隐藏在时间序列中的特征频率和随机噪声结构分离出来。' : 'Placeholder reconstructed from the introduction deck structure.',
      note: isZh ? '承接 QPO 页，强调 PSD 是后续寻找和刻画周期信号的核心工具。' : 'Use this page for one concept, one figure, or one explanatory transition.',
    },
    {
      id: 'agn-background-7',
      part: isZh ? '第一部分' : 'Part I',
      title: isZh ? '吸积盘与冕区' : 'Observational Significance',
      subtitle: isZh ? '吸积盘释放光学/紫外辐射，高温冕区通过康普顿化产生 X 射线，二者共同决定 AGN 的快速光变。' : 'Placeholder reconstructed from the introduction deck structure.',
      note: isZh ? '用示意图把黑洞、吸积盘、喷流/外流和冕区重新连到可观测辐射上。' : 'Use this page for one concept, one figure, or one explanatory transition.',
    },
    {
      id: 'agn-background-8',
      part: isZh ? '第一部分' : 'Part I',
      title: isZh ? '光变幅度与黑洞质量' : 'From Normal Galaxies to AGN',
      subtitle: isZh ? '归一化超额方差等光变幅度指标与黑洞质量相关，可作为连接观测光变和中心引擎物理量的桥梁。' : 'Placeholder reconstructed from the introduction deck structure.',
      note: isZh ? '这一页引入后续随机光变研究中会反复使用的统计量和物理相关性。' : 'Use this page for one concept, one figure, or one explanatory transition.',
    },
    {
      id: 'agn-background-9',
      part: isZh ? '第一部分' : 'Part I',
      title: isZh ? '随机光变的时间尺度' : 'Scientific Motivation',
      subtitle: isZh ? '阻尼时间尺度随中心致密天体质量增大而延长，说明随机光变携带吸积系统尺度的信息。' : 'Placeholder reconstructed from the introduction deck structure.',
      note: isZh ? '用时间尺度关系收束 Part I，并自然过渡到后续对 AGN 随机光变的定量分析。' : 'Use this page for one concept, one figure, or one explanatory transition.',
    },
  ];

  const qpoSlides: Slide[] = [
  {
    id: 'qpo',
    part: isZh ? '第二部分' : 'Part II',
    title: 'QPO',
    subtitle: isZh ? 'AGN 中 X 射线 QPO 研究部分的开场页。' : 'Section opening page for X-ray QPOs in AGN.',
    note: isZh ? '从 AGN 背景过渡到 QPO 主线。' : 'Transition from AGN background into the QPO story.',
  },
  ...[
    isZh ? 'AGN中的X射线QPO' : 'X-ray QPO in AGN',
    'RE J1034+396',
    isZh ? '观测数据' : 'Observational Data',
    isZh ? '功率谱密度' : 'Power Spectral Density',
    isZh ? 'QPO振幅调制' : 'QPO Amplitude Modulation',
    isZh ? '短时演化' : 'Short-term Evolution',
    isZh ? '长时演化' : 'Long-term Evolution',
    isZh ? 'QPO三重峰' : 'QPO Triplet',
    isZh ? '周期与参数' : 'Period and Parameters',
    isZh ? '时序关联' : 'Timing Correlations',
    isZh ? '物理解释' : 'Physical Interpretation',
    isZh ? '基于RPM的示意模型' : 'RPM-based Schematic Model',
    isZh ? 'QPO部分过渡页' : 'QPO Section Bridge',
  ].map((title, index) => ({
    id: `qpo-${index + 2}`,
    part: isZh ? '第二部分' : 'Part II',
    title,
    subtitle: isZh ? '根据 QPO 部分提取出的页面顺序生成的占位页。' : 'Placeholder based on the extracted QPO slide sequence.',
    note: isZh ? '后续在这里放对应图像和一条关键结论。' : 'Reserve this page for the corresponding figure and one key message.',
  })),
];

  const stochasticSlides: Slide[] = [
  {
    id: 'stochastic-variability',
    part: isZh ? '第三部分' : 'Part III',
    title: isZh ? '随机光变' : 'Stochastic Variability',
    subtitle: isZh ? 'AGN 光学随机光变研究部分的开场页。' : 'Section opening page for optical stochastic variability in AGN.',
    note: isZh ? '进入随机光变章节的过渡页。' : 'Transition page into the stochastic variability chapter.',
  },
  ...[
    isZh ? '为什么随机光变重要' : 'Why Stochastic Variability Matters',
    isZh ? '与物理性质的关联' : 'Correlation with Physical Properties',
    isZh ? '阻尼时标测量偏差' : 'Bias in Damping Timescale Measurements',
    'BADDAT',
    isZh ? '输入输出概率分布 I' : 'Input-Output Probability Distribution I',
    isZh ? '输入输出概率分布 II' : 'Input-Output Probability Distribution II',
    isZh ? '输入输出概率分布 III' : 'Input-Output Probability Distribution III',
    isZh ? '输入输出概率分布 IV' : 'Input-Output Probability Distribution IV',
    isZh ? '输入输出概率分布 V' : 'Input-Output Probability Distribution V',
    isZh ? '输入输出概率分布 VI' : 'Input-Output Probability Distribution VI',
    isZh ? '输入输出概率分布 VII' : 'Input-Output Probability Distribution VII',
    isZh ? '恢复假设关联' : 'Recovering Hypothesis Correlations',
    isZh ? '真实样本结果 I' : 'Results on Real Samples I',
    isZh ? '真实样本结果 II' : 'Results on Real Samples II',
    isZh ? '真实样本结果 III' : 'Results on Real Samples III',
    isZh ? '对 MBH 和 Lambda 的依赖' : 'Dependence on MBH and Lambda',
    isZh ? '对 MBH 和 Lambda 的依赖（续）' : 'Dependence on MBH and Lambda (cont.)',
    'BADMET',
    isZh ? '本节总结' : 'Section Closing',
  ].map((title, index) => ({
    id: `stochastic-variability-${index + 2}`,
    part: isZh ? '第三部分' : 'Part III',
    title,
    subtitle: isZh ? '根据随机光变部分结构整理出的占位页面。' : 'Placeholder based on the extracted stochastic-variability deck structure.',
    note: isZh ? '后续可在这里放一张图、一个公式模块或一个阶段性结论。' : 'Reserve this page for one figure, equation panel, or conclusion step.',
  })),
];

  const summarySlides: Slide[] = [
  {
    id: 'summary-outlook',
    part: isZh ? '第四部分' : 'Part IV',
    title: isZh ? '总结与展望' : 'Summary & Outlook',
    subtitle: isZh ? '整场绪论展示的收束部分。' : 'Closing section for the introduction deck.',
    note: isZh ? '总结绪论内容，并过渡到答辩后续章节。' : 'Wrap up the introduction and transition to the rest of the defense.',
  },
  {
    id: 'summary-outlook-2',
    part: isZh ? '第四部分' : 'Part IV',
    title: isZh ? '核心结论' : 'Take-home Messages',
    subtitle: isZh ? '用于放置最终总结要点的占位页。' : 'Placeholder for final summary points.',
    note: isZh ? '可以在这里集中呈现最后的精简结论。' : 'Use this page for the final condensed message list.',
  },
  {
    id: 'summary-outlook-3',
    part: isZh ? '第四部分' : 'Part IV',
    title: isZh ? '未来工作' : 'Future Directions',
    subtitle: isZh ? '用于展望与未来动机的占位页。' : 'Placeholder for outlook and forward-looking motivation.',
    note: isZh ? '可在这里放未来工作并过渡到答疑。' : 'Use this page for future work and transition to Q&A.',
  },
];

  return [
  {
    id: 'showcase-home',
    part: isZh ? '开场' : 'Opening',
    title: isZh ? 'AGN光变答辩展示' : 'AGN Variability Presentation',
    subtitle: isZh ? '一个适用于答辩场景、基于全屏滚动切换的网页展示。' : 'A slide-like web presentation with scroll snapping between full-screen sections.',
    note: isZh ? '这是展示模式下的首页。' : 'This is the landing page for the defense mode.',
  },
  ...agnSlides,
  ...qpoSlides,
  ...stochasticSlides,
  ...summarySlides,
];
};

const getSectionHref = (id: string, lang: Language) => withShowcaseLanguage(`#/showcase/${id}`, lang);

const majorSectionIds = new Set([
  'agn-background-1',
  'qpo',
  'stochastic-variability',
  'summary-outlook',
]);

const slideAccent: Record<string, string> = {
  Opening: 'from-cosmic-blue/18 via-sky-400/10 to-transparent',
  'Part I': 'from-cosmic-blue/16 via-cyan-400/10 to-transparent',
  'Part II': 'from-emerald-400/16 via-teal-400/10 to-transparent',
  'Part III': 'from-amber-400/14 via-orange-400/10 to-transparent',
  'Part IV': 'from-fuchsia-400/14 via-rose-400/10 to-transparent',
};


const ShowcasePage: React.FC = () => {
  const [lang, setLang] = React.useState<Language>(() => getShowcaseLanguage());
  const slides = React.useMemo(() => getLocalizedSlides(lang), [lang]);
  const isZh = lang === 'zh';

  React.useEffect(() => {
    const syncLang = () => setLang(getShowcaseLanguage());
    window.addEventListener('hashchange', syncLang);
    syncLang();
    return () => window.removeEventListener('hashchange', syncLang);
  }, []);

  const switchLanguage = (nextLang: Language) => {
    const currentHash = window.location.hash;
    const baseHash = currentHash.includes('?') ? currentHash.slice(0, currentHash.indexOf('?')) : currentHash;
    window.location.hash = `${baseHash || '#/showcase'}?lang=${nextLang}`;
  };

  return (
    <div className="relative h-screen overflow-hidden bg-void text-slate-100">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[-5%] h-[28rem] w-[28rem] rounded-full bg-cosmic-blue/10 blur-[150px]" />
        <div className="absolute right-[-8%] top-[18%] h-[26rem] w-[26rem] rounded-full bg-sky-400/8 blur-[170px]" />
        <div className="absolute bottom-[-12%] left-[26%] h-[30rem] w-[30rem] rounded-full bg-cosmic-accent/8 blur-[170px]" />
      </div>

      <header className="pointer-events-none fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-void/60 backdrop-blur-xl">
        <div className="pointer-events-auto mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.28em] text-cosmic-blue">
              {isZh ? '答辩展示' : 'Defense Presentation'}
            </div>
            <div className="mt-1 text-sm text-slate-400">
              {isZh ? '基于全屏滚动切换的展示模式。' : 'Scroll-snap layout with screen-sized sections.'}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="inline-flex rounded-full border border-white/10 bg-white/5 p-1">
              <button
                type="button"
                onClick={() => switchLanguage('zh')}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${isZh ? 'bg-cosmic-blue text-white' : 'text-slate-300 hover:text-white'}`}
              >
                中文
              </button>
              <button
                type="button"
                onClick={() => switchLanguage('en')}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${!isZh ? 'bg-cosmic-blue text-white' : 'text-slate-300 hover:text-white'}`}
              >
                EN
              </button>
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-cosmic-blue/40 hover:bg-white/10"
            >
              <ArrowLeft size={16} />
              {isZh ? '返回主页' : 'Back Home'}
            </a>
          </div>
        </div>
      </header>

      <aside className="fixed left-2 top-1/2 z-30 hidden -translate-y-1/2 lg:block xl:left-3">
        <div className="relative pl-7">
          <div className="absolute left-3 top-4 bottom-0 w-px bg-gradient-to-b from-cosmic-blue/0 via-cosmic-blue/55 to-cosmic-blue/0" />
          <div className="space-y-2">
            {slides.map((slide) => (
              <a
                key={slide.id}
                href={getSectionHref(slide.id, lang)}
                className="group relative block"
                title={slide.title}
              >
                {majorSectionIds.has(slide.id) ? (
                  <>
                    <span className="absolute left-[-20px] top-1 h-4 w-4 rounded-full border-2 border-cosmic-blue bg-void shadow-[0_0_0_4px_rgba(14,165,233,0.08),0_0_18px_rgba(14,165,233,0.65)] transition-transform duration-300 group-hover:scale-110" />
                    <span className="block h-6 w-3" />
                  </>
                ) : (
                  <>
                    <span className="absolute left-[-13px] top-2.5 h-px w-2.5 bg-slate-500/70 transition-colors duration-300 group-hover:bg-cosmic-blue/90" />
                    <span className="block h-2 w-3" />
                  </>
                )}
              </a>
            ))}
          </div>
        </div>
      </aside>

      <main className="relative z-10 h-screen overflow-y-auto scroll-smooth snap-y snap-mandatory">
        {slides.map((slide, index) => (
          <section
            key={slide.id}
            id={slide.id}
            className="relative snap-start min-h-screen flex items-center"
          >
            <div className="pointer-events-none absolute bottom-6 right-8 z-20 text-sm font-mono tracking-[0.28em] text-white/35 md:bottom-8 md:right-12 md:text-base">
              {String(index + 1).padStart(2, '0')}
            </div>
            {slide.id === 'agn-background-1' ? (
              <div className="mx-auto w-full max-w-[90rem] px-8 pt-28 pb-12 md:px-12 lg:px-16 xl:px-20">
                <div className="grid gap-10 xl:grid-cols-[0.92fr_1.08fr] xl:items-center">
                  <div>
                    <h1 className="max-w-4xl text-5xl font-semibold leading-[1.18] tracking-[-0.05em] text-white md:text-[5.4rem]">
                      {isZh ? '活动星系核' : 'Active Galactic Nuclei'}
                    </h1>
                    <div className="mt-12 space-y-8">
                      <p className="text-2xl leading-10 text-slate-200 md:text-[2rem] md:leading-[3.35rem]">
                        {isZh ? <>核区<span className="text-cosmic-blue font-semibold">异常明亮</span>。</> : <>The nucleus is <span className="text-cosmic-blue font-semibold">extraordinarily bright</span>.</>}
                      </p>
                      <p className="text-2xl leading-10 text-slate-300 md:text-[2rem] md:leading-[3.35rem]">
                        {isZh ? <>中心超大质量黑洞处于<span className="text-cosmic-blue font-semibold">活跃吸积</span>状态，从而释放出强烈辐射。</> : <>The central supermassive black hole is undergoing <span className="text-cosmic-blue font-semibold">active accretion</span>, releasing intense radiation.</>}
                      </p>
                      <p className="text-2xl leading-10 text-slate-300 md:text-[2rem] md:leading-[3.35rem]">
                        {isZh ? <>它是研究<span className="text-cosmic-blue font-semibold">黑洞吸积过程</span>最重要的系统之一。</> : <>It is one of the most important systems for <span className="text-cosmic-blue font-semibold">studying</span> <span className="text-cosmic-blue font-semibold">black hole accretion processes</span>.</>}
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
            ) : isPart1Slide(slide.id) ? (
              <Part1Slides slide={slide} lang={lang} />
            ) : (
              <div className="mx-auto w-full max-w-[90rem] px-8 pt-28 pb-12 md:px-12 lg:px-16 xl:px-20">
                <div className="grid gap-10 xl:grid-cols-[1.1fr_0.9fr] xl:items-end">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-mono uppercase tracking-[0.28em] text-cosmic-blue">
                      {slide.part}
                    </div>
                    <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[1.02] tracking-[-0.05em] text-white md:text-7xl xl:text-[5.6rem]">
                      {slide.title}
                    </h1>
                    <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-2xl md:leading-10">
                      {slide.subtitle}
                    </p>
                  </div>

                  <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_30px_120px_rgba(2,6,23,0.42)] backdrop-blur-md">
                    <div className="text-xs font-mono uppercase tracking-[0.24em] text-cosmic-blue">
                      {isZh ? '页面提示' : 'Slide Cue'}
                    </div>
                    <p className="mt-4 text-base leading-7 text-slate-300">
                      {slide.note}
                    </p>
                    <div className={`mt-6 h-40 rounded-[1.6rem] border border-white/10 bg-gradient-to-br ${slideAccent[slide.part] ?? 'from-cosmic-blue/14 via-sky-400/10 to-transparent'}`} />
                  </div>
                </div>

                <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    <div className="rounded-[1.6rem] border border-white/10 bg-slate-950/55 p-6">
                      <div className="text-xs font-mono uppercase tracking-[0.22em] text-cosmic-blue">
                        {isZh ? '图像占位' : 'Figure Placeholder'}
                      </div>
                      <p className="mt-4 text-sm leading-7 text-slate-300">
                        {isZh ? '后续可以在这里放置本页的主要图像或关键概念。' : 'Reserve this area for the main visual or the key concept of this screen.'}
                      </p>
                    </div>
                    <div className="rounded-[1.6rem] border border-white/10 bg-slate-950/55 p-6">
                      <div className="text-xs font-mono uppercase tracking-[0.22em] text-cosmic-blue">
                        {isZh ? '讲述重点' : 'Talking Point'}
                      </div>
                      <p className="mt-4 text-sm leading-7 text-slate-300">
                        {isZh ? '建议每页只保留一个主要信息点，让听众始终知道当前焦点。' : 'Keep one major message per page so the audience always knows the current focus.'}
                      </p>
                    </div>
                    <div className="rounded-[1.6rem] border border-dashed border-cosmic-blue/25 bg-cosmic-blue/[0.03] p-6">
                      <div className="text-xs font-mono uppercase tracking-[0.22em] text-cosmic-blue">
                        {isZh ? `页面 ${String(index + 1).padStart(2, '0')}` : `Screen ${String(index + 1).padStart(2, '0')}`}
                      </div>
                      <p className="mt-4 text-sm leading-7 text-slate-400">
                        {isZh ? '用于后续详细内容填充的全屏占位区域。' : 'Full-screen placeholder block for future detailed content.'}
                      </p>
                    </div>
                </div>
              </div>
            )}
          </section>
        ))}
      </main>
    </div>
  );
};

export default ShowcasePage;
