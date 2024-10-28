import Image from 'next/image';
import Link from 'next/link';

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
                <div className='flex justify-center my-10'>
                    <div className='bg-primary text-white text-2xl rounded-full p-5'>text me when you get home</div>
                </div>

            </section>
        </main>
    )
}