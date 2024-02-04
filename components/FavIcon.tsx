import Image from 'next/image';

export default function FavIcon() {
  return (
    <Image
      className="saturate-150 dark:brightness-100 brightness-125"
      src="/favicon.png"
      alt="favicon"
      width={32}
      height={32}
    />
  );
}
