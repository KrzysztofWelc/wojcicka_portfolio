import Message from '@/components/Message';
import Image from 'next/image';

export default function GuardGo() {
    return (
        <main>
            <header className='flex py-10'>
                <div className='flex h-[500px] w-1/2 flex-col items-start justify-center'>
                    <div className='mb-8 flex align-middle'>
                        <h1 className='inline text-5xl tracking-wider'>
                            Hi, i&apos;m <b>Magdalena</b>
                        </h1>
                    </div>

                    <p className='mb-8 text-2xl leading-10 tracking-wide'>
                        A wearable application to increase the users&apos; sense of security.
                    </p>
                    <button
                        className='delay-50 rounded-full border-2 border-primary px-3 py-2 text-2xl text-primary transition-all ease-in-out hover:bg-sky-50 hover:font-bold hover:tracking-wide'
                    >
                        Explore casy study
                    </button>
                </div>
                <div className='relative w-1/2'>
                    <Image
                        src='/guardGo2.png'
                        width='0'
                        height='0'
                        sizes='100%'
                        className='absolute right-0 h-full w-auto'
                        alt='Abstract 3D pastel-colored shapes flowing out from a computer screen with keyboard and stylus on the desk, representing digital creativity.'
                    />
                </div>
            </header>
            <section className="py-5 grid grid-cols-3 gap-4">
                <div className='col-span-2'>
                    <h2 className='text-4xl font-semibold mb-4'>Overview</h2>
                    <p className='text-2xl mb-4 leading-10'>Security is one of the basic human needs, it is often classified also as an existential need. Providing it is essential for the human organism to develop properly. Guardgo is an app designed for smartwatches and aims to provide a quick and efficient way to call for help in emergency situations.</p>
                    <p className='text-2xl leading-10'> GuardgGo was developed as part of my bachelor project and I was responsible for every stage of it.</p>
                </div>
                <div className='*:text-2xl '>
                    <div className='mb-10'>
                        <h3 className='font-semibold mb-4'>Role</h3>
                        <p>UX Researcher, UX/UI Designer</p>
                    </div>
                    <div>
                        <h3 className='font-semibold mb-4'>Toolkit</h3>
                        <p>Figma, FigJam, Pencil and paper</p>
                    </div>
                </div>
            </section>
            <section>
                <h2 className="text-4xl">UX Reasearch</h2>
                <section className='mx-10'>
                    <div className='flex justify-center my-24'>
                        <Message text='text me when you get home' />
                    </div>
                    <div>
                        <h3 className='h3'>Initial Observations</h3>
                        <p>During my studies and interactions with fellow students, I noticed a concern regarding personal safety, especially during late hours. Many students shared stories of feeling vulnerable while walking home or navigating poorly lit areas. These conversations highlighted a significant gap in available solutions for real-time, accessible safety measures.</p>
                    </div>

                    <div className='highlightedCard'>
                        <h3 className='h3'>Research goals</h3>
                        <ul className='list-disc pl-9'>
                            <li>Understand the safety concerns and behaviors of Krakow's young adults population.</li>
                            <li>Identify factors that influence their sense of security.</li>
                            <li>Explore the usability and effectiveness of wearable technology in enhancing personal safety.</li>
                        </ul>
                    </div>

                    <div className='mb-20'>
                        <h3 className='h3'>Methodologies</h3>
                        <ul className='list-disc pl-9'>
                            <li><mark className='text-primary bg-transparent tracking-widest font-semibold'>Literature Review</mark> on psychological and biological reactions to stress and fear</li>
                            <li><mark className='text-primary bg-transparent tracking-widest font-semibold'>Qualitative interviews</mark> with students to gather insights into their safety concerns and behaviors.</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="h3">Research key findings</h3>
                        <div className="py-10 mx-10 flex-col">
                            <div className="flex items-center gap-7 mb-10">
                                <Image src='/man.svg' width={70} height={70} alt='a man figure' />
                                <p>There are two responses to stress in the body: either by elevating or lowering physiological indicators such as heart rate or blood pressure.</p>
                            </div>
                            <div className="flex items-center gap-7 mb-10">
                                <Image src='/clock.svg' width={70} height={70} alt='a clock' />
                                <p>Real-time updates give a sense of easier help in case of need.</p>
                            </div>

                            <div className="flex items-center gap-7 mb-10">
                                <Image src='/pin.svg' width={70} height={70} alt='a pocation pin' />
                                <p>Updates about location are important for young people and help them feel secure.</p>
                            </div>
                            <div className="flex items-center gap-7 ">
                                <Image src='/hand.svg' width={70} height={70} alt='a hand' />
                                <p>A disadvantage of using a phone is that hands are not free and might be needed for self-defense.</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-16 flex justify-center items-center">
                        <Image src='/arrow.svg' width={70} height={70} alt='a dow arrow' />
                    </div>

                    <div className='mb-20'>
                        <h3 className='h3'>Mission Statement</h3>
                        <p>To enhance personal safety through innovative technology, ensure that users can move around the city with confidence and peace of mind.</p>
                    </div>

                    <div className='mb-20'>
                        <h3 className='h3'>Attributes</h3>
                        <p>Reliable, Intuitive, Discreet, Simple, Glanceable</p>
                    </div>
                </section>
            </section>
        </main>
    )
}