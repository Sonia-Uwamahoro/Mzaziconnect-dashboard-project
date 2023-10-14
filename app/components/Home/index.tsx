import Link from 'next/link';

const HomeScreen = () => {
  return (
    <div className="bg-homescreen bg-no-repeat bg-cover h-screen w-screen text-white">
      <img src="/media/logo.png" alt="logo" className="float-right mt-10 mr-10 w-32" />

      <div className="flex flex-col justify-center items-center w-screen">
        <div className="text-center mt-20">
          <p className="mb-10">
            <span className="text-md bg-lwhite border-l-4 border-mainblue pt-3 pb-3 pl-6 pr-6">
              Welcome to MzaziConnect Dashboard
            </span>
          </p>
          <h1 className="font-bold text-6xl">
            MzaziConnect is your partner in
          </h1>
          <h1 className="font-bold text-6xl mt-5">
            ensuring every childs success
          </h1>
          <p className="mt-8 font-light">Our mission is to create an inclusive educational ecosystem where schools, teachers, and parents collaborate for students&apos; success.</p>
        </div>

        <div className="mt-14">
          <Link href="https://mzaziconnect.netlify.app/">
            <button className="border-2 border-white text-white font-bold hover:text-hwhite hover:border-hwhite px-16 py-4 rounded-md mr-3">About Us</button>
          </Link>

          <Link href="/login">
            <button className="border-2 border-mainblue text-white font-bold bg-mainblue hover:bg-hblue hover:border-hblue hover:text-white px-8 py-4 rounded-md ml-3">Go to Dashboard</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;