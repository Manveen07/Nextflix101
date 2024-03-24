import Billboard from "@/components/Billboard";
import MoviesList from "@/components/MoviesList";
import InfoModal from "@/components/infoModal";
import Navbar from "@/components/navbar";
import useFavorites from "@/hooks/useFavorites";
import useInfoModal from "@/hooks/useInfoModal";
import useMovieList from "@/hooks/useMovieList";
import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";

export async function getServerSideProps(context: NextPageContext) {
  try {
    const session = await getSession(context);

    if (!session) {
      return {
        redirect: {
          destination: "/auth",
          permanent: false,
        },
      };
    }

    return {
      props: {},
    };
  } catch (error) {
    console.error("Error getting session:", error);
    return { props: {} };
  }
}

export default function Home() {
  const { data: movies = [] } = useMovieList();
  const { data: fovorites = [] } = useFavorites();
  const { isOpen, closeModal } = useInfoModal();

  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal} />
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <MoviesList title="Trending Now" data={movies} />
        <MoviesList title="My list" data={fovorites} />
      </div>
    </>
  );
}
