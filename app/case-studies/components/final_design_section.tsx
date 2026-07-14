import Image from "next/image";

type Props = {
  bg?: string;
  image?: string;
  images?: string[];
  imageAlt?: string;
};

export default function FinalDesignSection({
  bg = "bg-foreground",
  image,
  images,
  imageAlt = "Final design",
}: Props) {
  return (
    <section className="bg-background border-t border-border">
      <div className="max-w-full md:max-w-[80%] mx-auto px-4 md:px-6 py-12 md:py-20 space-y-8">
        <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
          Final Design
        </p>

        {image ? (
          <Image
            src={image}
            alt={imageAlt}
            width={1360}
            height={480}
            sizes="90vw"
            className="w-full h-auto rounded-3xl"
          />
        ) : images ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {images.map((src, i) => (
              <div
                key={src}
                className="relative rounded-3xl aspect-4/3 overflow-hidden"
              >
                <Image
                  src={src}
                  alt={`${imageAlt} ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[1, 2, 3].map((i) => (
              <div key={i} className={`${bg} rounded-3xl aspect-4/3`} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
