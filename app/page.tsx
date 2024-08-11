import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <header className='flex'>
        <div className='flex flex-col h-[500px] justify-center items-start w-1/2'>
          <div className='flex align-middle mb-8'>
            <h1 className='inline text-5xl tracking-wider'>Hi, i&apos;m <b>Magdalena</b></h1>
          </div>
          
          <p className='text-lg mb-8 tracking-wide'>I am a passionate <b className='text-secondary'>UX/UI Designer</b> who loves new <b className='text-primary'>technologies</b> and art.<br/> I use my <b className='text-primary'>creativity</b> to design the best products and services for <b className='text-primary'>users</b>.</p>
          <button className='border-2 border-primary text-primary rounded-full py-1 px-3'>Explore my work</button>
        </div>
        <div className='w-1/2 relative'>
          <Image  
            src='/computer.png'
            width="0"
            height="0"
            sizes="100%"
            className="w-auto h-full absolute right-0"
            alt='Abstract 3D pastel-colored shapes flowing out from a computer screen with keyboard and stylus on the desk, representing digital creativity.'/>
        </div>
      </header>      
    </main>
  );
}
