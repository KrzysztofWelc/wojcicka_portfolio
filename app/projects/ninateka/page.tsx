'use client';

import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';
import useLightbox, { LightboxItem } from '@/hooks/useLightbox';
import Image from 'next/image';

export default function ESBoarding() {
    const containerId = 'containerId';
    const lightBoxItemClass = 'lightboxItem';
    useLightbox({ slideSelector: `#${containerId} .${lightBoxItemClass}` });

    return (
        <div id={containerId}>
            <main>
                <header className='flex flex-col py-10 pt-24 md:flex-row md:pt-0'>
                    <div className='flex h-screen flex-1 flex-col items-start justify-center'>
                        <div className='mb-8 flex align-middle'>
                            <h1 className='inline text-5xl font-semibold tracking-wider'>
                                Ninateka
                            </h1>
                        </div>

                        <p className='mb-8'>
                            Have fun watching movies from Ninateka on SmartTV
                        </p>
                        <button className='delay-50 rounded-full border-2 border-primary px-3 py-2 text-primary transition-all ease-in-out hover:bg-sky-50 hover:font-bold hover:tracking-wide'>
                            Explore casy study
                        </button>
                    </div>
                    <div className='flex flex-1 flex-col'>
                        <Image
                            src='/ninateka/tv.png'
                            width='0'
                            height='0'
                            sizes='100%'
                            className='my-auto w-full'
                            alt='A smartphone showing part of ASBoarding app.'
                        />
                    </div>
                </header>
                <section className='mb-10 grid grid-cols-1 gap-4 py-5 lg:grid-cols-3'>
                    <div className='lg:col-span-2'>
                        <h2 className='mb-4 text-4xl font-semibold'>Overview</h2>
                        <p className='mb-4'>
                            The Ninateka app is a concept project I developed independently,
                            inspired by the National Film Archive and National Audiovisual
                            Institute&rsquo;s mission to promote Polish culture. The aim of this
                            project is to make over 6,000 films, documentaries, and theatrical
                            performances more accessible to a broader audience via Smart TV.
                            This project envisions a modern solution for engaging with Polish
                            cultural content through digital innovation.{' '}
                        </p>
                    </div>
                    <div className='flex flex-row gap-8 lg:flex-col'>
                        <div className='mb-10'>
                            <h3 className='mb-4 font-semibold'>Role</h3>
                            <p>UI Designer</p>
                        </div>
                        <div>
                            <h3 className='mb-4 font-semibold'>Toolkit</h3>
                            <p>Figma, FigJam, Canva, Pencil and paper</p>
                        </div>
                    </div>
                </section>

                <section className='mx-10'>
                    <h3 className='h3'>Background</h3>
                    <div className='mb-4 *:mb-6'>
                        <p>
                            Animations, documentaries, theatrical performances, and
                            concerts—works are part of Poland&rsquo;s high cultural heritage.
                            Ninateka.pl is a video-on-demand service that distinguishes itself
                            by offering a collection of iconic Polish works, from classic
                            animations and documentaries to theatre performances and concerts.
                            The platform is entirely free, with its primary mission focused on
                            spreading Polish culture and supporting educational efforts, both
                            for local citizens and international audiences interested in
                            Polish heritage.{' '}
                        </p>
                        <p>
                            The Ninateka project is conducted by the National Film Archive
                            (Filmoteka Narodowa) and its division, the National Audiovisual
                            Institute (Narodowy Instytut Audiowizualny).
                        </p>
                    </div>

                    <div className='mb-10'>
                        <div className='highlightedCasd'>
                            <ul className='list-disc pl-9'>
                                <li>
                                    Create a highly interactive, user-friendly application
                                    tailored for Smart TVs on one of the following platforms:
                                    Samsung TV, Android TV, or tvOS (Apple){' '}
                                </li>
                                <li>
                                    Provide seamless access to cultural content for audiences
                                    residing in smaller cities and towns
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='mb-10'>
                        <h3 className='h3'>Target Audience</h3>
                        <div className='*:mb-6'>
                            <p>
                                The primary target audience for the Ninateka app is Polish
                                citizens between the ages of 25 and 70, specifically those
                                living in smaller towns and rural areas. This demographic often
                                lacks access to diverse cultural resources, especially in
                                regions with limited entertainment options. By focusing on this
                                group, the app aims to bridge the cultural gap and provide
                                high-quality entertainment and educational content via easily
                                accessible technology (Smart TVs).
                            </p>
                            <p>
                                These viewers are likely to appreciate a service that allows
                                them to explore and engage with Polish cinema, theatre, and
                                music without the need for subscriptions or additional costs,
                                making the Ninateka app an appealing and valuable cultural
                                resource.
                            </p>
                        </div>
                    </div>

                    <div className='mb-10'>
                        <h3 className='h3'>Benchmarking</h3>
                        <div>
                            <p className='mb-10'>
                                While Ninateka faces no direct competition in terms of offering
                                a comprehensive archive of Polish cultural content on Smart TV
                                platforms, there are similar services that provide digital
                                entertainment and video-on-demand (VOD) on Smart TVs. Some of
                                the closest alternatives include:
                            </p>
                            <ul className='*:highlightedText list-disc pl-9'>
                                <li>TVP VOD</li>
                                <li>Netflix tvOS</li>
                                <li>Netflix Android TV</li>
                                <li>Amazon Prime Video</li>
                                <li>TED TV</li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <h3 className='h3'>Assumptions and Key Requirements</h3>
                        <div className='mx-2 flex-col py-10 md:mx-10'>
                            <div className='mb-10 flex flex-col items-center gap-7 md:flex-row'>
                                <Image
                                    src='/ninateka/assumptions/1.svg'
                                    width={70}
                                    height={70}
                                    alt='a man figure'
                                />
                                <p>
                                    The app must prioritize a high level of{' '}
                                    <span className='highlightedText'>interactivity</span> and
                                    deliver a fast, seamless user experience, given the technical
                                    demands of modern Smart TVs.
                                </p>
                            </div>
                            <div className='mb-10 flex flex-col items-center gap-7 md:flex-row'>
                                <Image
                                    src='/ninateka/assumptions/2.svg'
                                    width={70}
                                    height={70}
                                    alt='a clock'
                                />
                                <p>
                                    The app&rsquo;s categorization must mirror that of the Ninateka
                                    website, ensuring{' '}
                                    <span className='highlightedText'>
                                        consistency across platforms
                                    </span>
                                    .{' '}
                                </p>
                            </div>

                            <div className='mb-10 flex flex-col items-center gap-7 md:flex-row'>
                                <Image
                                    src='/ninateka/assumptions/3.svg'
                                    width={70}
                                    height={70}
                                    alt='a pocation pin'
                                />
                                <p>
                                    The app should have a{' '}
                                    <span className='highlightedText'>
                                        flat information architecture
                                    </span>
                                    , with no more than three navigation levels.{' '}
                                </p>
                            </div>
                            <div className='mb-10 flex flex-col items-center gap-7 md:flex-row'>
                                <Image
                                    src='/ninateka/assumptions/4.svg'
                                    width={70}
                                    height={70}
                                    alt='a hand'
                                />
                                <p>
                                    Users should navigate the app using a{' '}
                                    <span className='highlightedText'>standard TV remote</span>{' '}
                                    with four directional arrows, an OK button, and a Back button.{' '}
                                </p>
                            </div>
                            <div className='flex flex-col items-center gap-7 md:flex-row'>
                                <Image
                                    src='/ninateka/assumptions/5.svg'
                                    width={70}
                                    height={70}
                                    alt='a hand'
                                />
                                <p>
                                    For search and other{' '}
                                    <span className='highlightedText'>text input</span>, a virtual
                                    keyboard will appear on-screen, allowing users to type using
                                    their remote.{' '}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <h2 className='mb-20 text-4xl'>Project description</h2>
                <section className='mx-10'>
                    <h3 className='h3'>Designing for SmartTVs</h3>
                    <p>
                        To prepare thoroughly for the NinatekaTV project and understand the
                        principles of Smart TV design, I began with extensive{' '}
                        <span className='highlightedText'>desk research</span>. By analyzing
                        information from a wide range of online sources, I developed a
                        comprehensive base of over{' '}
                        <span className='highlightedText'>150 insights</span> and guidelines
                        specific to designing for Smart TV platforms.
                    </p>
                    <p>
                        This foundational research ensured that the NinatekaTV app would
                        deliver an optimal viewing and navigation experience, aligning with
                        the unique requirements and user expectations of Smart TV users,
                        particularly in promoting accessible Polish cultural content.
                    </p>
                </section>
                <div className='flex items-center justify-center p-16'>
                    <Image src='/arrow.svg' width={70} height={70} alt='a dow arrow' />
                </div>

                <h2 className='mb-20 text-4xl'>UX Design</h2>
                <section className='mx-10'>
                    <h3 className='h3'>Information Architecture</h3>
                    <p className='mb-6'>
                        Based on the desk research findings, I learned that a{' '}
                        <span className='highlightedText'>
                            flat information architecture
                        </span>{' '}
                        is essential for Smart TV design, as it simplifies navigation and
                        enhances user experience. Following this principle, I structured the
                        UX design to minimize layers and ensure ease of access to content.
                        Additionally, I aimed to mirror as closely as possible the structure
                        of the official{' '}
                        <span className='highlightedText'>Ninateka website</span> to provide
                        users with a familiar and intuitive experience. These efforts
                        resulted in the following information architecture:
                    </p>
                    <LightboxItem
                        className={lightBoxItemClass}
                        url='/ninateka/chart.png'
                        width={1063}
                        height={465}
                    >
                        <Image src='/ninateka/chart.png' width={1063} height={465} alt='' />
                    </LightboxItem>
                </section>
                <h2 className='mb-20 text-4xl'>UX Design</h2>
                <section className='mx-10'>
                    <h3 className='h3'>Final Design</h3>
                    <Gallery>
                        <Image
                            src='/ninateka/final/1.png'
                            width={1180}
                            height={885}
                            alt=''
                        />
                        <Image
                            src='/ninateka/final/2.png'
                            width={1180}
                            height={885}
                            alt=''
                        />

                        <Image
                            src='/ninateka/final/3.png'
                            width={1180}
                            height={885}
                            alt=''
                        />

                        <Image
                            src='/ninateka/final/4.png'
                            width={1180}
                            height={885}
                            alt=''
                        />

                        <Image
                            src='/ninateka/final/5.png'
                            width={1180}
                            height={885}
                            alt=''
                        />
                    </Gallery>
                </section>
                <h2 className='mb-20 text-4xl'>Key Takeaways</h2>
                <section className='mx-10'>
                    <div className='highlightedCard'>
                        <h3 className='h3'>Challenge</h3>
                        <p className='mb-10'>
                            Adapting the design for a Smart TV, where navigation relies on
                            remote controls instead of touch interactions, was challenging.
                            This required rethinking standard UX practices and prioritizing
                            simplicity to make the app user-friendly with limited navigation
                            options.
                        </p>
                        <h3 className='h3'>Lessons learned</h3>
                        <ul className='list-disc pl-9'>
                            <li>
                                This project highlighted the importance of intuitive navigation
                                when designing for non-touch devices. Simplifying the user
                                journey with a flat architecture and minimal clicks proved
                                essential for creating a smooth viewing experience on Smart TVs.
                            </li>
                            <li>
                                Conducting in-depth desk research before starting the design
                                phase provided critical insights and practical guidelines,
                                particularly around the unique requirements of Smart TV design.{' '}
                            </li>
                        </ul>
                    </div>
                </section>
                <section className='mb-20 flex items-center justify-center'>
                    <button className='delay-50 rounded-full border-2 border-primary px-3 py-2 text-primary transition-all ease-in-out hover:bg-sky-50 hover:font-bold hover:tracking-wide'>
                        Explore other projects
                    </button>
                </section>
            </main>

            <Footer />
        </div>
    );
}
