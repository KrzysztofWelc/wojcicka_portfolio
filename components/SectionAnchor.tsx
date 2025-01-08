export default function SectionAnchor({ id, ref }: { id: string, ref?: React.RefObject<HTMLAnchorElement> }) {
    return (
        <a id={id} ref={ref} aria-hidden className='relative -top-20' />
    )

}