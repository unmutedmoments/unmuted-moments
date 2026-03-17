"use client";
import { useRouter } from "next/navigation";

interface Props {
  latestVideoId?: string;
}

export default function LatestEpisodeButton({ latestVideoId }: Props) {
  const router = useRouter();

  const handleClick = () => {
    if (latestVideoId) {
      router.push(`/episodes/${latestVideoId}`);
    } else {
      window.open("https://www.youtube.com/@UnmutedMoments", "_blank");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="w-full sm:w-auto px-6 py-3 bg-rust text-white font-semibold rounded-md hover:bg-rust-dark transition-colors duration-200 text-center"
    >
      Watch Latest Episode
    </button>
  );
}
