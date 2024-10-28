interface MessageProps {
    text: string
}

export default function Message({ text }: MessageProps) {
    return (
        <div className='bg-primary text-white text-2xl rounded-full p-5 '>{text}</div>

    )
}