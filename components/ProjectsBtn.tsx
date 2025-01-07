import Link from "next/link";

export default function ProjectsBtn() {
    return (
        <Link href='/#projects'
            className='delay-50 rounded-full border-2 border-primary px-3 py-2 text-primary transition-all ease-in-out hover:bg-sky-50 hover:font-bold hover:tracking-wide'
        >
            Explore other projects
        </Link >
    )
}