import React from "react";
import type { Metadata } from "next";
import { ImageGrid } from "app/components/image-grid";

export const metadata: Metadata = {
  title: "Photos",
  description: "My Photos",
};

export default function Photos() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Photos</h1>
      <ImageGrid
        columns={3}
        images={[
          {
            src: "/photos/dog.jpg",
            alt: "Posing well",
            href: "https://ableton.com",
          },
          {
            src: "/photos/pic1.jpg",
            alt: "Home Studio",
            href: "https://mixcult.bandcamp.com/album/self-object-id-ep",
          },
          {
            src: "/photos/pic2.jpg",
            alt: "djing",
            href: "https://",
          },
          {
            src: "/photos/pic3.jpg",
            alt: "Leto",
            href: "https://",
          },
          {
            src: "/photos/ivan.png",
            alt: "i'm",
            href: "https://",
          },
          {
            src: "/photos/tree.png",
            alt: "Colosseum",
            href: "https://unsplash.com/photos/brown-concrete-building-under-blue-sky-during-daytime-3cyBR1rIJmA?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
          },
        ]}
      />

      <ImageGrid
        columns={2}
        images={[
          { src: "/photos/dog.jpg", alt: "Posing" },
          { src: "/photos/tree.png", alt: "Tree" },
          { src: "/photos/pic1.jpg", alt: "Studio" },
          { src: "/photos/ivan.png", alt: "Nice Guy" },
        ]}
      />

      <ImageGrid
        columns={4}
        images={[
          { src: "/photos/pic1.jpg", alt: "Roman columns" },
          { src: "/photos/pic2.jpg", alt: "Big Ben" },
          { src: "/photos/dog.jpg", alt: "Dog" },
          { src: "/photos/pic3.jpg", alt: "EQ" },
          { src: "/photos/ivan.png", alt: "Glases" },
          { src: "/photos/tree.png", alt: "Tree" },
        ]}
      />
    </section>
  );
}
