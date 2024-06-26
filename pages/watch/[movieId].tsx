import React from "react";
import { useRouter } from "next/router";
import useMovies from "@/hooks/useMovies";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Watch = () => {
  const router = useRouter();
  const { movieId } = router.query;
  const { data } = useMovies(movieId as string);
  return (
    <div className="h-screen w-screen bg-black">
      <nav className="fixd w-full p-4 z-10 flex flex-row items-center bg-black gap-8 bg-opacity-70">
        <AiOutlineArrowLeft
          className="text-white cursor-pointer"
          size={40}
          onClick={() => {
            router.push("/");
          }}
        />
        <p className="text-white text-1xl md:text-3xl font-bold">
          <span className="font-light">Watching: </span>
          {data?.title}
        </p>
      </nav>
      <video
        className="w-full h-full "
        autoPlay
        controls
        src={data?.videoUrl}
      ></video>
    </div>
  );
};

export default Watch;
