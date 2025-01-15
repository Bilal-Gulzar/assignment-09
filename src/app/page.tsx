import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-[100vh]  flex justify-center flex-col gap-10 items-center">
      <Link href="/">
        <h1 className="text-3xl text-center leading-normal text-black flex flex-col items-center gap-y-2 font-semibold tracking-wider">
          Client Side And Server Side <span> Data Fetching with Dynamic Route </span>
        </h1>
      </Link>

      <div className="  flex flex-col justify-center px-5 gap-10  relative rounded-lg">
        <Link href="/server-side-code">
          <div className="  bg-[#1879B9] hover:bg-[#115f93] w-[92vw] sm:w-[380px] rounded-lg text-white py-3 tracking-wider text-lg flex justify-center items-center">
            Server Side
          </div>
        </Link>

        <Link href="/client-side-code">
          <div className="  bg-[#1879B9] hover:bg-[#115f93]  w-[92vw] sm:w-[380px] text-white rounded-lg py-3 tracking-wider text-lg flex justify-center items-center">
            Client Side
          </div>
        </Link>
      </div>
    </div>
  );
}
