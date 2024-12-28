'use client';

import Footer from '@/components/Footer';
import useLightbox, { LightboxItem } from '@/hooks/useLightbox';
import Image from 'next/image';

import Header from '@/public/motion_animation/header.png'
import Moodboard from '@/public/motion_animation/moodboard.png'
import Drawing from '@/public/motion_animation/drawing.png'
import Badge1 from '@/public/motion_animation/unity-creative-core.png'
import Badge2 from '@/public/motion_animation/unityessentials_badge.png'

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
                                Motion visualisation
                            </h1>
                        </div>

                        <p className='mb-8'>
                            Motion visualization created using Unity 3D, inspired by the luxury and elegance of Mercedes-Benz vehicles.
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
                            This project is a real-time motion visualization, inspired by the luxury and elegance of Mercedes-Benz vehicles, where I worked at the time. It was created in Unity 3D with models designed in Blender.                         </p>
                        <p>While NDA restrictions required using a different car model in the final video, the concept and mood board remain true to Mercedes-Benz’s style. The project also served as a playground to apply and expand my Unity skills.</p>
                    </div>
                    <div className='flex flex-row gap-8 lg:flex-col'>
                        <div className='mb-10'>
                            <h3 className='mb-4 font-semibold'>Role</h3>
                            <p>Real-Time 3D Designer, 3D Artist</p>
                        </div>
                        <div>
                            <h3 className='mb-4 font-semibold'>Toolkit</h3>
                            <p>Unity 3D, Blender, Pencil and paper</p>
                        </div>
                    </div>
                </section>
                <h2 className='mb-20 text-4xl'>Preparation</h2>
                <section className="mx-10">
                    <div className='mb-20'>
                        <h3 className="h3">Idea</h3>
                        <p>The concept was to create a minimalist yet luxurious animation that embodies the elegance and sophistication of Mercedes-Benz. The visualization focuses on smooth, loopable camera movements and dynamic lighting that accentuate the car's form and textures.</p>
                    </div>
                    <div className='mb-20'>
                        <h3 className="h3">Moodboard</h3>                        <figure>
                            <figcaption>
                                <p>To define the visual direction, I developed a moodboard that reflects the essence of the project.</p>                            </figcaption>
                            <Image
                                src={Moodboard}
                                placeholder='blur'
                                width={Moodboard.width}
                                height={Moodboard.height}
                                alt=''
                                className='mb-8 w-full'
                            />
                        </figure>
                    </div>
                    <div className='mb-20'>
                        <h3 className="h3">Keywords</h3>
                        <ul className='list-disc pl-9'>
                            <li>Minimalistic</li>
                            <li>Elegant & luxurious</li>
                            <li>Soft lighting</li>
                            <li>Varied textures</li>
                            <li>Dynamic</li>
                            <li>Fluid camera movements</li>
                        </ul>
                    </div>
                    <div className='mb-20'>
                        <h3 className="h3">Sketch</h3>
                        <p>Before beginning development, I created a detailed plan outlining the project's structure. The focus was on ensuring a seamless experience, with the animation designed to loop perfectly.</p>
                        <p>Later on, I discovered that I couldn’t execute this idea in the exact form I had envisioned. I hadn’t accounted for differences in lighting, which made it impossible to create a seamless loop. As a result, the animation starts and ends in a different position than originally planned.</p>
                        <Image
                            src={Drawing}
                            width={Drawing.width}
                            height={Drawing.height}
                            alt=''
                            placeholder='blur'
                            className='mx-auto'
                        />
                    </div>
                </section>
                <h2 className='mb-20 text-4xl'>Unity 3D</h2>
                <section className="mx-10">
                    <p>Although I had prior experience learning Unity, this project served as a playground for applying and testing my knowledge in a practical setting. To further refine my skills, I completed two official Unity certifications before starting the project: <span className='highlightedText'>Unity Essentials</span> and <span className='highlightedText'>Unity Creative Core</span>.These courses expanded my understanding of Unity’s tools and workflows, providing the foundation needed to confidently tackle this visualization.</p>
                    <div className="flex justify-around">
                        <Image
                            src={Badge1}
                            width={Badge1.width}
                            height={Badge1.height}
                            alt=''
                            placeholder='blur'
                        />
                        <Image
                            src={Badge2}
                            width={Badge2.width}
                            height={Badge2.height}
                            alt=''
                            placeholder='blur'
                        />
                    </div>
                </section>
                <h2 className='mb-20 text-4xl'>Final Video</h2>
                <section className="mx-10">
                    <p>Due to NDA restrictions, I had to use a different 3D car model in the final animation. Credits to
                        <a className='font-bold' href='https://sketchfab.com/3d-models/mercedes-benz-maybach-2022-979f37a878f04b2a8d888b62ea6027e9'> MPGS.STUDIOS </a>
                        for the model used in this project.</p>
                    <div className="flex">
                        <video />
                    </div>
                </section>
                <h2 className='mb-20 text-4xl'>Key Takeaways</h2>
                <section className="mx-10">
                    <div className="highlightedCard">
                        <ul className='list-disc pl-9'>
                            <li>While designing the animation, I learned the importance of accounting for “real-world” factors like lighting differences and their impact on the overall visual flow, especially when aiming for seamless effects like loops.</li>
                            <li>Even with a well-thought-out plan, unexpected challenges , such as lighting discrepancies, required me to rethink and adapt my initial idea.</li>
                        </ul>
                    </div>
                </section>
                <section className='mb-20 flex items-center justify-center'>
                    <button className='delay-50 rounded-full border-2 border-primary px-3 py-2 text-primary transition-all ease-in-out hover:bg-sky-50 hover:font-bold hover:tracking-wide'>
                        Explore other projects
                    </button>
                </section>
                <Footer />
            </main></div>
    )
}