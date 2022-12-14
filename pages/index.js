import Head from 'next/head';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'
import Image from 'next/image';
import HeroImage from '../public/developer-hero-image.png';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Anurag Gaur - Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-white px-10'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl'>webdevgaur</h1>
            <ul className='flex items-center'>
              <li><BsFillMoonStarsFill className='cursor-pointer'/></li>              
              <li >
                <a className='bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 text-white rounded-md ml-8' 
                href="#">Resume</a>
              </li>              
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='py-2 font-medium text-5xl text-teal-600'>Anurag Gaur</h2>
            <h3 className='text-2xl py-2'>Front end developer</h3>
            <p className='py-5 text-lg text-gray-800 leading-8'>Ambitious web developer proficient in frontend web technologies like HTML, CSS, JavaScript - specifically the Angular framework. Currently working with TCS and helping our client - an industry leader in the communications domain - modernize their risk management solution from legacy infrastructure to a lean angular web application built from scratch. </p>
          </div>
          <div className='flex text-5xl justify-center gap-20 py-3'>
            <a href="https://twitter.com/webdevgaur" target="_blank" rel="noopener noreferrer" className=' text-blue-400'><AiFillTwitterCircle /></a>
            <a href="https://www.linkedin.com/in/webdevgaur/" target="_blank" rel="noopener noreferrer" className=' text-blue-700'><AiFillLinkedin /></a>
            <a href="https://www.youtube.com/c/anurag2402" target="_blank" rel="noopener noreferrer" className=' text-red-700'><AiFillYoutube /></a>
          </div>
          <div className='relative mx-auto w-96 h-72 px-8 py-10 mt-16 bg-gradient-to-tl from-teal-500 to-cyan-500 rounded-2xl'>
            <Image src={HeroImage}  />
            {/* <a className='text-xs text-gray-400 ' href="https://www.freepik.com/free-vector/development-concept-illustration_11683643.htm?query=programmer" target="_blank" rel="noopener noreferrer">Image by storyset on Freepik</a>  */}            
          </div>
          <div>
            <p>Some text</p>
          </div>
        </section>
      </main>

    </div>
  )
}
