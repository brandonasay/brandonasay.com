import Image from "next/image";

const slides = [
  {
    id: "breakfast",
    src: "/hobby-breakfast.jpg",
    caption: "Making Saturday breakfast for my kids",
  },
  {
    id: "bierstadt",
    src: "/hobby-bierstadt.jpg",
    caption: "I love art; this is an original from Albert Bierstadt I got to see in DC.",
  },
  {
    id: "hiking",
    src: "/hobby-hiking.jpg",
    caption: "Hiking with my kids",
  },
  {
    id: "frankie",
    src: "/hobby-frankie.jpg",
    caption: "Carb loading with my daughter Frankie",
  },
  {
    id: "leavenworth",
    src: "/hobby-leavenworth.jpg",
    caption: "I love magical places; here is Leavenworth on Christmas Eve.",
  },
  {
    id: "ferry-puzzle",
    src: "/hobby-ferry-puzzle.jpg",
    caption: "Doing the puzzles on the WA State ferries",
  },
  {
    id: "horses",
    src: "/hobby-horses.jpg",
    caption: "Finding horses with my daughter (she wants one, but I'm not there yet)",
  },
  {
    id: "old-friends",
    src: "/hobby-old-friends.jpg",
    caption: "Catching up with old friends. Greg and Paddy, high school friends from London.",
  },
  {
    id: "trick-or-treat",
    src: "/hobby-trick-or-treat.jpg",
    caption: "Trick or treating with my son, Chet (he loves peanut butter on banana)",
  },
  {
    id: "smores",
    src: "/hobby-smores.jpg",
    caption: "S'mores",
  },
  {
    id: "travel-kids",
    src: "/hobby-travel-kids.jpg",
    caption: "Taking the kids new places",
  },
  {
    id: "building-chet",
    src: "/hobby-building-chet.jpg",
    caption: "Building things with Chet",
  },
  {
    id: "rice-krispy",
    src: "/hobby-rice-krispy.jpg",
    caption: "Making rice krispy treats (Yes, I made that!)",
  },
  {
    id: "triathlon",
    src: "/hobby-triathlon.jpg",
    caption: "Triathlons",
  },
  {
    id: "haleakala",
    src: "/hobby-haleakala.jpg",
    caption: "Traveling with friends. Here we're on top of Haleakala.",
  },
  {
    id: "college-football",
    src: "/hobby-college-football.jpg",
    caption: "Going to college football games",
  },
  {
    id: "backpacking",
    src: "/hobby-backpacking.jpg",
    caption: "Backpacking. This is Timberline Trail, Mt Hood.",
  },
];

export default function HobbiesContent() {
  return (
    <div className="pt-3">
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
    </div>
  );
}
