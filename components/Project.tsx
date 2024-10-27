import Image from 'next/image'
import Link from 'next/link'

interface ProjectProps {
    image: string
    imageAlt: string
    title: string
    tags: string
    description?: string
}

export default function Project({ title, tags, description, image, imageAlt }: ProjectProps) {
    return (
        <Link href='/' className='active:bg-slate-100 p-4 rounded-3xl'>
            <figure className='group'>
                <div className="inline-block overflow-hidden rounded-3xl w-full">
                    <Image src={image} alt={imageAlt}
                        width="0"
                        height="0"
                        quality={100}
                        sizes="100%"
                        className="w-full group-hover:scale-110 duration-500" />
                </div>
                <figcaption>
                    <h3 className='text-4xl mt-7 transition-all group-hover:font-bold group-hover:tracking-wide'>{title}</h3>
                    <div className='text-2xl mt-5 text-secondary tracking-wider'>{tags}</div>
                    <p className='text-2xl mt-6'>{description}</p>
                </figcaption>
            </figure>
        </Link>
    )
}