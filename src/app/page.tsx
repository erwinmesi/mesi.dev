import HomeHeader from '@/components/home/HomeHeader';
import HomeIntro from '@/components/home/HomeIntro';
import HomeWorkExperience from '@/components/home/HomeWorkExperience';
import HomeFeaturedWorks from '@/components/home/HomeFeaturedWorks';

function page() {
  return (
    <main className="site__container pb-28">
      <HomeHeader className="mb-16" />
      <HomeIntro />
      <hr className="max-w-2xl mx-auto border-grey-600 my-16" />
      <HomeWorkExperience />
      <hr className="max-w-2xl mx-auto border-grey-600 my-16" />
      <HomeFeaturedWorks />
    </main>
  );
}

export default page;
