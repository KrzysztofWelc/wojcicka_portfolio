export default function ExploreBtn({ text, sectionId }: { text: string, sectionId: string }) {
    return (<button
        onClick={() => {
            const section = document.querySelector('#' + sectionId)

            if (section)
                section.scrollIntoView({
                    behavior: 'smooth',
                })
        }
        }
        className='delay-50 rounded-full border-2 border-primary px-3 py-2 text-primary transition-all ease-in-out hover:bg-sky-50 hover:font-bold hover:tracking-wide'>
        {text}
    </button>)
}