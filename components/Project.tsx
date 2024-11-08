import Image from 'next/image';
import Link from 'next/link';

interface ProjectProps {
  image: string;
  imageAlt: string;
  title: string;
  tags: string;
  description?: string;
}

export default function Project({
  title,
  tags,
  description,
  image,
  imageAlt,
}: ProjectProps) {
  return (
    <Link href='/' className='rounded-3xl p-4 active:bg-slate-100'>
      <figure className='group'>
        <div className='inline-block w-full overflow-hidden rounded-3xl'>
          <Image
            src={image}
            alt={imageAlt}
            width='0'
            height='0'
            quality={100}
            sizes='100%'
            className='w-full duration-500 group-hover:scale-110'
          />
        </div>
        <figcaption>
          <h3 className='mt-7 text-3xl transition-all group-hover:font-bold group-hover:tracking-wide'>
            {title}
          </h3>
          <div className='mt-5 text-2xl tracking-wider text-secondary'>
            {tags}
          </div>
          <p className='mt-6 text-2xl'>{description}</p>
        </figcaption>
      </figure>
    </Link>
  );
}
