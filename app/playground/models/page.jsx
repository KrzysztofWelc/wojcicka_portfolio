'use client';

import Footer from '@/components/Footer';
import useLightbox, { LightboxItem } from '@/hooks/useLightbox';
import Image from 'next/image';

import Header from '@/public/3d_graphic/header.png'
import Emotion from '@/public/3d_graphic/3d_model_emotion.png'
import Abstract from '@/public/3d_graphic/3d_model_abstract.png'
import ProjectsBtn from '@/components/ProjectsBtn';

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
                                3D Models
                            </h1>
                        </div>

                        <p className='mb-8'>
                            Discover the beauty of abstraction in my 3D model collection!
                        </p>
                        <button className='delay-50 rounded-full border-2 border-primary px-3 py-2 text-primary transition-all ease-in-out hover:bg-sky-50 hover:font-bold hover:tracking-wide'>
                            Explore models
                        </button>
                    </div>
                    <div className='flex flex-1 flex-col'>
                        <Image
                            src={Header}
                            placeholder='blur'
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
                            I transform ideas into three-dimensional visuals that captivate and inspire. From product designs to imaginative concepts, each project showcases my skills in modeling, texturing, and rendering. Dive in to see how I blend creativity with technology to create unique visual experiences!
                        </p>
                    </div>
                    <div className='flex flex-row gap-8 lg:flex-col'>
                        <div className='mb-10'>
                            <h3 className='mb-4 font-semibold'>Role</h3>
                            <p>Graphic designer, 3D Artist</p>
                        </div>
                        <div>
                            <h3 className='mb-4 font-semibold'>Toolkit</h3>
                            <p>Blender</p>
                        </div>
                    </div>
                </section>
                <h2 className='mb-20 text-4xl'>UX Reaserch</h2>
                <section className="mx-10">
                    <div className='mb-20'>
                        <h3 className="h3">Anger – A Visualization of Emotion</h3>
                        <figure>
                            <Image
                                src={Emotion}
                                placeholder='blur'
                                width={951}
                                height={1050}
                                alt=''
                                className='mb-8 w-full'
                            />
                            <figcaption>
                                <p className='mb-10'>Through its spiky, aggressive form and deep, intense shades of red, I aimed to capture the volatility and unpredictability of the emotion of anger. The sharp edges symbolize aggression and defensiveness, while the dark red hue conveys the intensity and inner heat often associated with anger.</p>
                                <p>Translating something intangible and internal into a visual experience was a challenge. The result is an exploration of anger’s layered nature, inviting viewers to feel its complexity.</p>
                            </figcaption>
                        </figure>
                    </div>
                    <div className='mb-20'>
                        <h3 className="h3">Loop animation – A Play of Light and Form</h3>                        <figure>
                            <Image
                                src={Abstract}
                                placeholder='blur'
                                width={951}
                                height={1050}
                                alt=''
                                className='mb-8 w-full'
                            />
                            <figcaption>
                                <p>This 3D model reflects my love for nature’s forms. Shaped like a vessel, it evokes my passion for kayaking, while its angular &rdquo;sails&rdquo; symbolize both freedom and the mountains that bring me peace. The glassy, fluid material mirrors my connection to water, embodying a clean, minimalist aesthetic that celebrates natural elegance. This abstract piece blends personal experiences with universal shapes, inviting viewers to find their own meaning in my world.</p>
                            </figcaption>
                        </figure>
                    </div>
                    <div className='mb-20'>
                        <h3 className="h3">Loop animation – A Play of Light and Form</h3>
                        <figure>
                            <video controls loop autoPlay preload="auto" muted className='mx-auto mb-3'>
                                <source src="/3d_graphic/3d_animation.mp4" type="video/mp4" />

                                Your browser does not support the video tag.
                            </video>
                            <figcaption>
                                <p>This seamless loop animation is an exploration of light interacting with simple, geometric shapes. This piece embodies the hypnotic beauty of minimalism in motion. By focusing on clean rectangular and circular forms and carefully crafted lighting, I aimed to create a calming, satisfying experience that draws viewers in with its subtle rhythm and balance.</p>
                            </figcaption>
                        </figure>
                    </div>
                </section>
                <h2 className='mb-20 text-4xl'>Key Takeaways</h2>
                <section className="mx-10">
                    <div className="highlightedCard">
                        <p>Each shape carries personal emotions and symbolism — from the feeling of freedom to a deep connection with nature. Translating intangible emotions and experiences into a visual form that allows viewers to create their own interpretations is challenging. Yet, it’s incredibly freeing, as it requires diving deeply into these emotions and truly understanding them. This form of abstraction also opens up space to discover the beauty of everyday shapes, which, through creative interpretation, take on entirely new meanings.</p>
                    </div>
                </section>
                <section className='mb-20 flex items-center justify-center'>
                    <ProjectsBtn />
                </section>
                <Footer />
            </main></div>
    )
}