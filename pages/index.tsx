// import Image from 'next/image'
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <h1 className='text-zinc-200 bg-primary-500'>Hello World!</h1>
    </main>
  );
}
