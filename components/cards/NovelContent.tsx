import Image from "next/image";

const books = [
  { title: "The Watchmaker", src: "/watchmaker-cover.png", width: 400, height: 600 },
  { title: "Power", src: "/power-cover.png", width: 400, height: 600 },
];

export default function NovelContent() {
  return (
    <div className="pt-3">
      <div className="grid grid-cols-2 gap-3">
        {books.map((book) => (
          <div key={book.title} className="rounded-xl border border-[#222725]/20 bg-[#222725]/8 p-4 flex flex-col items-center">
            <p className="text-[#222725] font-bold text-sm text-center mb-3 italic">{book.title}</p>
            <Image
              src={book.src}
              alt={`${book.title} book cover`}
              width={book.width}
              height={book.height}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
