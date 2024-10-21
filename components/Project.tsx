import Image from 'next/image'

interface ProjectProps {
    image: string
    imageAlt: string
    title: string
    tags: string
    description?: string
}

export default function Project({ title, tags, description, image, imageAlt }: ProjectProps) {
    return (
        <figure>
            <div className="inline-block overflow-hidden rounded-3xl">
                <Image src={image} alt={imageAlt}
                    width="0"
                    height="0"
                    quality={100}
                    sizes="100%"
                    className="w-full hover:scale-110 duration-500" />
            </div>
            <figcaption>
                <h3 className='text-4xl mt-7'>{title}</h3>
                <div className='text-2xl mt-5 text-secondary tracking-wider'>{tags}</div>
                <p className='text-2xl mt-6'>{description}</p>
            </figcaption>
        </figure>
    )
}