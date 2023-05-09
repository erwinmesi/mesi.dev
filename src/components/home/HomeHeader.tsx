import { useCallback } from 'react';
import { ExternalLink } from 'react-feather';
import { URL_UPWORK } from '@/config/site';
import Image from 'next/image';
import image from '@/assets/images/mesi.webp';
import Pipe from '@/components/home/SkillPipe';

const majorTools = [
  'PHP',
  'Laravel',
  'Vue.js',
  'Nuxt.js',
  'React.js',
  'Next.js',
];

function HomeHeader() {
  const renderSkills = useCallback(
    () =>
      majorTools.map((item, index) => (
        <>
          {item} {index < majorTools.length - 1 && <Pipe />}
        </>
      )),
    []
  );

  return (
    <section className="flex gap-y-6 sm:gap-x-8 items-center my-12 flex-col sm:flex-row max-w-2xl mx-auto">
      <span>
        <Image
          src={image}
          width="128"
          height="128"
          alt="Erwin Mesias"
          loading="eager"
        />
      </span>
      <div className="space-y-1">
        <h1 className="text-center sm:text-left text-2xl">Erwin Mesias</h1>
        <p className="text-center sm:text-left text-grey-200 text-base">
          Full-Stack Web & Mobile Developer
        </p>
        <p className="text-center sm:text-left text-grey-300 hover:text-grey-300 hover:underline flex items-center justify-center sm:justify-start">
          <a href={URL_UPWORK} target="_blank">
            Upwork Freelancer <ExternalLink className="ml-1 inline" size="14" />
          </a>
        </p>
        <p className="text-center sm:text-left text-sm">{renderSkills()}</p>
      </div>
    </section>
  );
}

export default HomeHeader;
