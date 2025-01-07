import { url } from 'inspector';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface ProjectProps {
  image: StaticImageData;
  imageAlt: string;
  title: string;
  tags: string;
  description?: string;
  url: string;
}

export default function Project({
  title,
  tags,
  description,
  image,
  imageAlt,
  url
}: ProjectProps) {
  return (
    <Link href={url} className='rounded-3xl p-4 active:bg-slate-100'>
      <figure className='group'>
        <div className='inline-block w-full overflow-hidden rounded-3xl'>
          <Image
            src={image}
            alt={imageAlt}
            placeholder='blur'
            width={image.width}
            height={image.height}
            quality={100}
            // sizes='100%'
            className={`w-full duration-500 group-hover:scale-110 h-[20rem] object-cover`}
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
