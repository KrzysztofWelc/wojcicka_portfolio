"use client"

import Footer from "@/components/Footer"
import Gallery from "@/components/Gallery"
import useLightbox, { LightboxItem } from "@/hooks/useLightbox";
import Image from "next/image"

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
                                    Students often feel overwhelmed by the <span className="highlightedText">amount of information</span> provided at the start.
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
                                    A mobile-first approach is essential since students rely heavily on their <span className="highlightedText">smartphones</span> for accessing information and managing their daily tasks.
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
                                    There is a need for easy peer connections and <span className="highlightedText">social integration</span> to help students feel more connected and supported in their new environment.
                                </p>
                            </div>
                            <div className='mb-10 flex flex-col items-center gap-7 md:flex-row'>
                                <Image src='/esb/keyFindings/puzzle.svg' width={70} height={70} alt='a hand' />
                                <p>
                                    Learning through play, as seen in <span className="highlightedText">serious games</span>, can make the onboarding process more engaging and effective by combining education with entertainment.
                                </p>
                            </div>
                            <div className='flex flex-col items-center gap-7 md:flex-row'>
                                <Image src='/esb/keyFindings/lang.svg' width={70} height={70} alt='a hand' />
                                <p>
                                    <span className="highlightedText">Vocabulary challenges</span> are particularly problematic for international students, especially during the initial phase of their studies and life in Germany.
                                </p>
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

                        <Gallery>
                            <Image
                                src='/esb/personas/migel.png'
                                width={870}
                                height={1231}
                                alt="persona card of Migel"
                            />
                            <Image
                                src='/esb/personas/anna.png'
                                width={870}
                                height={1231}
                                alt="persona card of Anna"
                            />
                        </Gallery>
                        <div className="my-10">
                            <h3 className="h3">Mission Statement</h3>
                            <p className="mb-10">
                                “To make the transition to a new educational environment as smooth and stress-free as possible, empowering students with the tools and information they need to succeed.”
                            </p>

                            <h3 className="h3">Attributes</h3>
                            <p>Reliable, supportive, fun, international,  user-friendly</p>
                        </div>
                    </div>
                </section>
                <h2 className="text-4xl mb-20">UX Design</h2>
                <section className="mx-10">
                    <div className="mb-10">
                        <h3 className="h3">Prioritization</h3>
                        <ul className='list-disc pl-9'>
                            <li>Features that addressed immediate student concerns, such as orientation schedules, campus maps, and contact information for student services.</li>
                            <li>Features that would engage students beyond the initial onboarding phase, such as social integration tools and personalized onboarding checklists.</li>
                        </ul>
                    </div>

                    <div className="mb-10">
                        <h3 className="h3">Feature roadmap</h3>
                    </div>

                    <div className="mb-10">
                        <h3 className="h3">Information architecture</h3>
                        <p>The information architecture of the ESBoarding app is designed for easy and intuitive access to essential information. The main categories include:</p>
                        <ol className='list-disc pl-9 mb-4'>
                            <li>Before the Journey</li>
                            <li>In Reutlingen</li>
                            <li>ESB Business School</li>
                            <li>Language Learning</li>
                        </ol>
                        <p>Since users can start using the application at different times, it is possible to work on tasks from multiple phases at the same time.</p>
                    </div>
                    <LightboxItem
                        width={1051}
                        height={784}
                        className={lightBoxItemClass}
                        url='/esb/chart.png'
                    >
                        <Image
                            src='/esb/chart.png'
                            width={1051}
                            height={784}
                            alt="ESBoarding flow chart"
                            className={`mb-10`}

                        /></LightboxItem>


                    <div className="mb-10">
                        <h3 className="h3">Early wireframes</h3>
                        <Gallery>
                            <Image
                                src='/esb/earlyWireframes/1.png'
                                width={1087}
                                height={753}
                                alt=""
                            />
                            <Image
                                src='/esb/earlyWireframes/2.png'
                                width={1087}
                                height={753}
                                alt=""
                            />
                            <Image
                                src='/esb/earlyWireframes/3.png'
                                width={1087}
                                height={753}
                                alt=""
                            />
                            <Image
                                src='/esb/earlyWireframes/4.png'
                                width={1087}
                                height={753}
                                alt=""
                            />
                            <Image
                                src='/esb/earlyWireframes/5.png'
                                width={1087}
                                height={753}
                                alt=""
                            />
                            <Image
                                src='/esb/earlyWireframes/6.png'
                                width={1087}
                                height={753}
                                alt=""
                            />
                        </Gallery>
                    </div>

                </section>
                <h2 className="text-4xl mb-20">UI Design</h2>
                <section className="mx-10">
                    <div className="mb-10">
                        <h3 className="h3">UI Library Conponents</h3>
                        <LightboxItem
                            width={1050}
                            height={568}
                            className={lightBoxItemClass}
                            url='/esb/UIComponents.png'
                        >
                            <Image
                                src='/esb/UIComponents.png'
                                width={1050}
                                height={568}
                                alt=""
                            />
                        </LightboxItem>

                    </div>
                    <div className="mb-10">
                        <h3 className="h3">Final Designs</h3>
                        <Gallery>
                            <Image
                                src='/esb/finalDesigns/1.png'
                                width={1068}
                                height={800}
                                alt=""
                            />
                            <Image
                                src='/esb/finalDesigns/2.png'
                                width={1068}
                                height={800}
                                alt=""
                            />
                            <Image
                                src='/esb/finalDesigns/3.png'
                                width={1068}
                                height={800}
                                alt=""
                            />
                            <Image
                                src='/esb/finalDesigns/4.png'
                                width={1068}
                                height={800}
                                alt=""
                            />
                        </Gallery>
                    </div>
                </section>
                <h2 className="text-4xl mb-20">Usability Testing</h2>
                <section className="mx-10">
                    <div className="*:mb-6 mb-16">
                        <p>One of the final steps in the ESBoarding project was usability testing through a <span className="highlightedText">heuristic analysis</span>  specifically tailored for serious games. This evaluation, based on a set of heuristics developed by Fitchat and Jordan, played a critical role in verifying that the app met usability standards and fulfilled user needs, ensuring a positive onboarding experience for international IMX students.</p>
                        <p>Key findings from the analysis included:</p>
                        <ul className="list-disc pl-9">
                            <li>ESBoarding’s mobile design allows students to <span className="highlightedText">conveniently</span> access information anytime, supporting seamless navigation.</li>
                            <li>Visual highlights and reminders maintain user <span className="highlightedText">engagement and motivation</span>.</li>
                            <li>Language terms are subtly integrated, helping students <span className="highlightedText">learn naturally</span> without extra effort.</li>
                            <li><span className="highlightedText">Rewards</span> like badges encourage progress, providing positive feedback.</li>
                            <li>Clear indicators and progress bars enable students to <span className="highlightedText">track their achievements.</span></li>
                            <li>The app provides <span className="highlightedText">in-task guidance</span> and customizable avatars, fostering a <span className="highlightedText">personalized experience</span>.</li>
                        </ul>
                        <p>Additionally, a <span className="highlightedText">formative evaluation</span> was conducted with three current IMX students from the 6th and 8th semesters at ESB Business School in Reutlingen, who tested the prototype and provided feedback. The response was very positive, with students appreciating that &rdquo;all information is in one place, and the structure is very clear.&rdquo;</p>
                        <p>They valued the inclusion of basic vocabulary, saying it helped them prepare for studying in a foreign language. Suggestions for further development included adding more interactive language games and options for direct communication with peers.</p>
                        <p>Overall, students were enthusiastic about the app&rsquo;s potential, viewing it as a valuable tool for easing the transition to Reutlingen and ESB Business School. One student summarized.</p>
                    </div>
                    <div className="mb-10 flex justify-end gap-8">
                        <span className="text-5xl text-primary">&#x275D;</span>
                        <q className="italic text-3xl">I would definitely use it. It would be helpful before and even during my studies.</q>
                    </div>
                </section>
                <h2 className="text-4xl mb-20">Key Takeaways</h2>
                <section className="mx-10">
                    <div className='highlightedCard'>
                        <div className='mb-10'>
                            <h3 className='h3'>Challenge</h3>
                            <ul className='list-disc pl-9'>
                                <li>
                                    Making sure the app included all necessary information without overwhelming users was a major challenge. The design had to balance being clear and simple while still keeping users engaged.
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='h3'>Lesson Learned</h3>
                            <ul className='list-disc pl-9'>
                                <li>
                                    Regular user testing and updates were essential. Feedback directly led to design improvements, showing how important it is to focus on user needs in UX/UI design.
                                </li>
                                <li>
                                    Creating a game that was both fun and informative required careful planning. As my first project incorporating game elements, it involved extensive research and a steep learning curve, and I gained valuable insights into how to balance education with engaging design.
                                </li>

                            </ul>
                        </div>
                    </div></section>
            </main>
            <Footer />
        </div>
    )
}