import HomeHeader from '@/components/home/HomeHeader';
import HomeIntro from '@/components/home/HomeIntro';
import HomeWorkExperience from '@/components/home/HomeWorkExperience';
import HomeFeaturedWorks from '@/components/home/HomeFeaturedWorks';
import HomeReviews from '@/components/home/HomeReviews';
import HomeServices from '@/components/home/HomeServices';
import HomeSkills from '@/components/home/HomeSkills';

function page() {
  return (
    <main className="site__container pt-8 pb-28 space-y-16">
      <HomeHeader />
      <HomeIntro />
      <HomeServices />
      <HomeSkills />
      <HomeWorkExperience />
      <HomeFeaturedWorks />
      <HomeReviews />
    </main>
  );
}

export default page;
