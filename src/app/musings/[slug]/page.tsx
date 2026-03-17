import { redirect } from "next/navigation";

export default function MusingSlugPage({ params }: { params: { slug: string } }) {
  redirect(`/reflections/${params.slug}`);
}
