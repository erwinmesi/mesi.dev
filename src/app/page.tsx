import HomeHeader from '@/components/home/HomeHeader';
import HomeIntro from '@/components/home/HomeIntro';
import HomeWorkExperience from '@/components/home/HomeWorkExperience';

function page() {
  return (
    <main className="site__container pb-28">
      <HomeHeader className="mb-16" />
      <HomeIntro className="mb-16" />
      <HomeWorkExperience />
    </main>
  );
}

export default page;
