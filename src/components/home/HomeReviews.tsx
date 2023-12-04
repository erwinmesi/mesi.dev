'use client';

import { reviews } from '@/contents/reviews';

function HomeReviews() {
  return (
    <section className="max-w-xl mx-auto">
      <div className="mb-4">
        <h2 className="font-semibold text-base">Reviews</h2>
        <p className="text-sm text-gray-400">From my previous freelancing clients</p>
      </div>
      <div className="space-y-12 text-grey-200">
        {reviews.map((review) => (
          review.published &&
            <blockquote key={review.id} className="border-l-[3px] pl-4 italic border-gray-800">
              {review.message}
              <br />
              <br />
              <strong className="text-gray-500">&mdash; {review.firstname} {review.lastname}</strong>
            </blockquote>
        ))}
      </div>
    </section>
  );
}

export default HomeReviews;
