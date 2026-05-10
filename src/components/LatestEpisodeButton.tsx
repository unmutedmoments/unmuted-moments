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
      className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 bg-rust text-white text-sm font-semibold rounded-md hover:bg-rust-dark transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rust focus-visible:ring-offset-2"
    >
      Watch Latest Episode
    </button>
  );
}
