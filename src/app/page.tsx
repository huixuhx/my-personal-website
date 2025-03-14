import Image from "next/image";
import {HERO} from"@/app/const"
export default function Home() {
  return (
    <>
    <div className="hero-section">
    <div className=" grid grid-cols-1 gap-6 pr-4 pl-4 sm:grid-cols-6 md:grid-cols-6 ">
        {/* First Element (Left Side) */}
        <div className="container col-span-full sm:col-span-2 md:col-span-2">
          <h2 className="hero-content-left-title float-up">{HERO.HERO_CONTENT_LEFT_TITLE}</h2>
          <h1 className="hero-name float-up-text sm:hidden">{HERO.HERO_TITLE}</h1>
        </div>
        <div className="col-span-full hidden sm:block md:hidden">
          <h1 className="hero-name float-up-text">{HERO.HERO_TITLE}</h1>
        </div>
        <div className="flex flex-col gap-6 col-span-full sm:flex-row sm:justify-between md:col-span-4">
          <div className="container ">
            <h2 className="hero-content-right-title float-up">
             {HERO.HERO_CONTENT_RIGHT_TITLE_ONE}
            </h2>
            <p className="float-up-text">{HERO.HERO_CONTENT_RIGHT_CONTENT_ONE}</p>
          </div>

          <div className="container sm:ml-auto">
            <h2 className="hero-content-right-title float-up">
            {HERO.HERO_CONTENT_RIGHT_TITLE_TWO}
            </h2>
            <p className="float-up-text">{HERO.HERO_CONTENT_RIGHT_CONTENT_TWO}</p>
          </div>
        </div>
        <div className="col-span-full hidden md:block">
          <h1 className="hero-name float-up-text">{HERO.HERO_TITLE}</h1>
        </div>
        {/* Image Inside Grid - Full Width Span
        <div className="col-span-full relative w-full h-auto aspect-[16/9] float-up-hero">
          <Image
            src="/hero-2.png"
            alt="photo"
            fill
            className="object-cover" // Makes sure the image covers the full grid area
          />
        </div> */}
      </div>
      <div className="relative w-screen h-auto aspect-[16/9] mt-6 float-up-hero">
        <Image
          src={HERO.HERO_IMAGE}
          alt="photo"
          fill
          className="object-cover" // Makes sure the image covers the full grid area
        />
      </div>
    </div>
    
      {/* <div className="project-section">
        <h2 className="common-title text-center">Recent Projects</h2>

      </div> */}
    </>
  );
}
