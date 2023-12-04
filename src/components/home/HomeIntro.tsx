import cn from 'classnames';

function HomeAbout({ className }: { className?: string }) {
  return (
    <section className={cn(className, 'max-w-xl mx-auto')}>
      <h2 className="mb-3 font-semibold text-base">About</h2>
      <div className="about__content text-grey-300 space-y-6">
        <p>
          Full-Stack Web and Hybrid Mobile Developer with vast experience in
          coding different Web Frameworks.
        </p>

        <p>I handle both ends of the development from the ground up.</p>
      </div>
    </section>
  );
}

export default HomeAbout;
