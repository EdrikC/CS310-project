import { reviews } from '../constants';
import ReviewCard from '../components/ReviewCard';
import { Fade } from 'react-awesome-reveal';

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <Fade direction='down'>
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our
        <span className="text-indigo-600"> Customers </span>
        Say?
      </h3>
      </Fade>
      <Fade direction='up'>
      <p className="info-text m-auto mt-4 max-w-lg text-center">Here geuine stories from our satisfied customers about their exceptional experiences with us.</p>
      </Fade>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review, index) => (
          <Fade key={review.customerName} direction="left" delay={index * 100} duration={2500}>
          <ReviewCard
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
            />
          </Fade>
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews;