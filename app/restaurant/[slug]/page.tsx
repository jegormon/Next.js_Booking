import RestaurantNavBar from "./components/RestaurantNavBar";
import Title from "./components/Title";
import Rating from "./components/Rating";
import Description from "./components/Description";
import Images from "./components/Images";
import Reviews from "./components/Reviews";
import ReservationCard from "./components/ReservationCard";

export default function RestaurantDetails() {
  return (
    <>
      <RestaurantNavBar />
      <Title />
      <Rating />
      <Description />
      <Images />
      <Reviews />
      <div className='w-[27%] relative text-reg'>
        <ReservationCard />
      </div>
    </>
  );
}
