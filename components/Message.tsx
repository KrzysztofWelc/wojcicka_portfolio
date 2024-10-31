interface MessageProps {
  text: string;
}

export default function Message({ text }: MessageProps) {
  return (
    <div className='rounded-full bg-primary p-5 text-2xl text-white'>
      {text}
    </div>
  );
}
