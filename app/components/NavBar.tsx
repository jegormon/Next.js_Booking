import Link from "next/link";
import AuthModal from "./AuthModal";

export default function NavBar() {
  return (
    <nav className='bg-white p-2 flex justify-between'>
      <Link href='/' className='font-bold text-gray-700 text-2xl'>
        Booking App
      </Link>
      <div>
        <div className='flex'>
          <AuthModal isSignin={true} />
          <AuthModal isSignin={false} />
        </div>
      </div>
    </nav>
  );
}
