import Image from "next/image"

export default function ESBoarding() {
    return (
        <div>
            <main>
                <header className='flex flex-col py-10 pt-24 md:flex-row md:pt-0'>
                    <div className='flex h-screen flex-1 flex-col items-start justify-center'>
                        <div className='mb-8 flex align-middle'>
                            <h1 className='inline text-5xl font-semibold tracking-wider'>
                                ESBoarding
                            </h1>
                        </div>

                        <p className='mb-8'>
                            Gamified app to enhance onboarding experience for international students.
                        </p>
                        <button className='delay-50 rounded-full border-2 border-primary px-3 py-2 text-primary transition-all ease-in-out hover:bg-sky-50 hover:font-bold hover:tracking-wide'>
                            Explore casy study
                        </button>
                    </div>
                    <div className='flex flex-1 flex-col'>
                        <Image
                            src='/esb/headerImage.png'
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
                            The ESBoarding app was developed as a serious game to streamline the onboarding process for International Management students entering a new educational environment at ESB Business School in Reutlingen, Germany. The goal was to reduce stress and anxiety by providing clear, accessible information and resources while incorporating an element of fun.
                        </p>
                    </div>
                    <div className='flex flex-row gap-8 lg:flex-col'>
                        <div className='mb-10'>
                            <h3 className='mb-4 font-semibold'>Role</h3>
                            <p>UX Researcher, UX/UI Designer, UX Tester</p>
                        </div>
                        <div>
                            <h3 className='mb-4 font-semibold'>Toolkit</h3>
                            <p>Figma, FigJam, Canva, Pencil and paper</p>
                        </div>
                    </div>
                </section>
                <h2 className="text-4xl mb-20">UX Reaserch</h2>
                <section className="mx-10">
                    <h3 className="h3">
                        Background
                    </h3>
                    <div className="*:mb-6">
                        <p>Serious games use entertainment to convey knowledge, train skills or promote behavioral change. These games are increasingly used in HR processes, including onboarding, and are especially appealing to Generation Y and Z, who find gamified applications more engaging and enjoyable.</p>
                        <p>Each year, new students face the challenge of transitioning to higher education, often resulting in increased stress. Research indicates that students feel less comfortable during their first semester, highlighting the critical need for effective onboarding processes to help them adapt smoothly.</p>
                        <p>ESB Business School at Reutlingen University offers the International Management Double Degree (IMX) program, which combines international education with intercultural exchange. Through partnerships with universities in 13 countries, the program enables students to earn dual degrees and gain experience in international environments.</p>
                        <p>As a graduate of this program, I am well aware of the stress that comes with moving to a new country, starting studies and adapting to life in a foreign environment, and doing so in a foreign language. Drawing on my personal experiences, expertise in management and passion for UX, I developed the idea to improve the onboarding process for IMX international students by incorporating an engaging and entertaining element.</p>
                    </div>

                    <div className='highlightedCard'>
                        <h3 className='h3'>Research goals</h3>
                        <ul className='list-disc pl-9'>
                            <li>
                                Identify the key challenges students encounter during onboarding.
                            </li>
                            <li>
                                Identify the most essential information students need and when it is most beneficial.
                            </li>
                            <li>
                                Understand the design principles and best practices for serious games, ensuring a balanced integration of educational and entertainment elements.
                            </li>
                            <li>
                                Explore how digital tools can effectively support new students.
                            </li>
                        </ul>
                    </div>

                    <div className="mb-10">
                        <h3 className="h3">
                            Methodologies
                        </h3>
                        <ul className="list-disc pl-9">
                            <li>Literature Review on Human-Centered Design, User Experience and Serious Games to establish a foundational understanding of the key concepts and design principles relevant to the project.</li>
                            <li>
                                In-depth qualitative interviews with international students at ESB Business School to gather detailed insights into their onboarding experiences and to identify their specific needs, challenges and expectations.
                            </li>
                            <li>Developed personas to represent different types of students, highlighting their unique needs and preferences during the onboarding process, to ensure the design solutions are tailored to diverse user profiles.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className='text-4xl'>Research key findings</h2>
                        <div className='mx-2 flex-col py-10 md:mx-10'>
                            <div className='mb-10 flex flex-col items-center gap-7 md:flex-row'>
                                <Image
                                    src='/esb/keyFindings/i.svg'
                                    width={70}
                                    height={70}
                                    alt='a man figure'
                                />
                                <p>
                                    Students often feel overwhelmed by the amount of information provided at the start.
                                </p>
                            </div>
                            <div className='mb-10 flex flex-col items-center gap-7 md:flex-row'>
                                <Image
                                    src='/esb/keyFindings/phone.svg'
                                    width={70}
                                    height={70}
                                    alt='a clock'
                                />
                                <p>
                                    A mobile-first approach is essential since students rely heavily on their smartphones for accessing information and managing their daily tasks.
                                </p>
                            </div>

                            <div className='mb-10 flex flex-col items-center gap-7 md:flex-row'>
                                <Image
                                    src='/esb/keyFindings/man.svg'
                                    width={70}
                                    height={70}
                                    alt='a pocation pin'
                                />
                                <p>
                                    There is a need for easy peer connections and social integration to help students feel more connected and supported in their new environment.
                                </p>
                            </div>
                            <div className='mb-10 flex flex-col items-center gap-7 md:flex-row'>
                                <Image src='/esb/keyFindings/puzzle.svg' width={70} height={70} alt='a hand' />
                                <p>
                                    Learning through play, as seen in serious games, can make the onboarding process more engaging and effective by combining education with entertainment.
                                </p>
                            </div>
                            <div className='flex flex-col items-center gap-7 md:flex-row'>
                                <Image src='/esb/keyFindings/lang.svg' width={70} height={70} alt='a hand' />
                                <p>
                                    Vocabulary challenges are particularly problematic for international students, especially during the initial phase of their studies and life in Germany.                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center justify-center p-16'>
                        <Image
                            src='/arrow.svg'
                            width={70}
                            height={70}
                            alt='a dow arrow'
                        />
                    </div>

                    <div>
                        <h3 className="h3">Persona developmemnt</h3>
                        <p>Based on the research and insights from students starting their studies in Reutlingen, two personas were created. These personas represent the key characteristics, goals, motivations, frustrations, and interests of 5th-semester IMX students who come to Reutlingen to continue their studies.</p>


                    </div>
                </section>
            </main></div>
    )
}