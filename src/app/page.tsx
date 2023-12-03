import HomeHeader from '@/components/home/HomeHeader';
import HomeIntro from '@/components/home/HomeIntro';
import HomeWorkExperience from '@/components/home/HomeWorkExperience';
import HomeFeaturedWorks from '@/components/home/HomeFeaturedWorks';

function page() {
  return (
    <main className="site__container pt-8 pb-28 space-y-16">
      <HomeHeader />
      <HomeIntro />
      <HomeWorkExperience />
      <HomeFeaturedWorks />
    </main>
  );
}

export default page;
