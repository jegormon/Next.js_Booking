import Header from "./components/Header";

export const metadata = {
  title: "Restaurant",
  description: "Restaurant Booking App",
};

export default function RestaurantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main>
        <Header />
        <div className='flex m-auto w-2/3 justify-between items-start 0 -mt-11'>
          <div className='bg-white w-[100%] rounded p-3 shadow'>{children}</div>
        </div>
      </main>
    </>
  );
}
