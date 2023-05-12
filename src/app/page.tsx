import HomeHeader from '@/components/home/HomeHeader';
import HomeIntro from '@/components/home/HomeIntro';

function page() {
  return (
    <main className="site__container pb-28">
      <HomeHeader />
      <HomeIntro />
    </main>
  );
}

export default page;
