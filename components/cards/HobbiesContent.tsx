import Image from "next/image";

const slides = [
  {
    id: "backpacking",
    src: "/hobby-backpacking.jpg",
    caption: "Backpacking. This is Timberline Trail, Mt Hood.",
  },
  {
    id: "trick-or-treat",
    src: "/hobby-trick-or-treat.jpg",
    caption: "Trick or treating with my son, Chet (he loves peanut butter on banana)",
  },
  {
    id: "haleakala",
    src: "/hobby-haleakala.jpg",
    caption: "Traveling with friends. Here we're on top of Haleakala.",
  },
  {
    id: "frankie",
    src: "/hobby-frankie.jpg",
    caption: "Carb loading with my daughter Frankie",
  },
  {
    id: "triathlon",
    src: "/hobby-triathlon.jpg",
    caption: "Triathlons",
  },
  {
    id: "travel-kids",
    src: "/hobby-travel-kids.jpg",
    caption: "Taking the kids new places",
  },
  {
    id: "horses",
    src: "/hobby-horses.jpg",
    caption: "Finding horses with my daughter (she wants one, but I'm not there yet)",
  },
  {
    id: "college-football",
    src: "/hobby-college-football.jpg",
    caption: "Going to college football games",
  },
  {
    id: "breakfast",
    src: "/hobby-breakfast.jpg",
    caption: "Making Saturday breakfast for my kids",
  },
  {
    id: "smores",
    src: "/hobby-smores.jpg",
    caption: "S'mores",
  },
  {
    id: "ferry-puzzle",
    src: "/hobby-ferry-puzzle.jpg",
    caption: "Doing the puzzles on the WA State ferries",
  },
  {
    id: "building-chet",
    src: "/hobby-building-chet.jpg",
    caption: "Building things with Chet",
  },
  {
    id: "old-friends",
    src: "/hobby-old-friends.jpg",
    caption: "Catching up with old friends. Greg and Paddy, high school friends from London.",
  },
  {
    id: "leavenworth",
    src: "/hobby-leavenworth.jpg",
    caption: "I love magical places; here is Leavenworth on Christmas Eve.",
  },
  {
    id: "rice-krispy",
    src: "/hobby-rice-krispy.jpg",
    caption: "Making rice krispy treats (Yes, I made that!)",
  },
  {
    id: "hiking",
    src: "/hobby-hiking.jpg",
    caption: "Hiking with my kids",
  },
  {
    id: "bierstadt",
    src: "/hobby-bierstadt.jpg",
    caption: "I love art; this is an original from Albert Bierstadt I got to see in DC.",
  },
];

export default function HobbiesContent() {
  return (
    <div className="pt-3 relative">
      <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-1">
        {slides.map((slide) => (
          <div key={slide.id} className="flex-shrink-0 w-52">
            <Image
              src={slide.src}
              alt={slide.caption}
              width={400}
              height={300}
              className="rounded-lg shadow w-full h-44 object-cover"
            />
            <p className="text-[#222725]/70 text-xs mt-2 leading-snug text-center">
              {slide.caption}
            </p>
          </div>
        ))}
      </div>
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#a1c5ce] to-transparent pointer-events-none rounded-r-2xl" />
    </div>
  );
}
