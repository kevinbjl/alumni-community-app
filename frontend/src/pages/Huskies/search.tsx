import { useState } from "react";
import {
  IoNotificationsOutline,
  IoMailOutline,
  IoPersonCircleSharp,
  IoSearchOutline,
  IoLogInOutline,
} from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { BsSliders } from "react-icons/bs";

const tabs = [
  { name: "Recruiting", active: false },
  { name: "Huskies", active: true },
  { name: "Activities", active: false },
];

// TODO: Profiles are mocked for now, will be replaced with actual profiles
const mockProfiles = [
  {
    name: "David Lane",
    title: "UI/UX Designer",
    location: "London, England",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    tags: ["Mentor", "Google", "Technology Field"],
  },
  {
    name: "Kathryn Murphy",
    title: "Software Developer",
    location: "London, England",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    tags: ["Mentor", "Google", "Technology Field"],
  },
  {
    name: "Elena Pena",
    title: "UI/UX Designer",
    location: "London, England",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    tags: ["Mentee", "Amazon", "Technology Field"],
  },
  {
    name: "Floyd Miles",
    title: "UI/UX Designer",
    location: "London, England",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
    tags: ["Mentee", "Facebook", "Technology Field"],
  },
  {
    name: "John Cooper",
    title: "UI/UX Designer",
    location: "London, England",
    image: "https://randomuser.me/api/portraits/men/34.jpg",
    tags: ["Looking For Mentor", "TD Bank", "Finance Field"],
  },
  {
    name: "Jacob Jones",
    title: "Full-Stack Developer",
    location: "London, England",
    image: "https://randomuser.me/api/portraits/men/35.jpg",
    tags: ["Open To Mentees", "Microsoft", "Technology Field"],
  },
  {
    name: "Ronald Richards",
    title: "QA Engineer",
    location: "London, England",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
    tags: ["Looking For Mentor", "Amazon", "Technology Field"],
  },
  {
    name: "Kristina Watson",
    title: "UI/UX Designer",
    location: "London, England",
    image: "https://randomuser.me/api/portraits/women/69.jpg",
    tags: ["Mentee", "Amazon", "Technology Field"],
  },
  {
    name: "Sara Wilson",
    title: "UI/UX Designer",
    location: "London, England",
    image: "https://randomuser.me/api/portraits/women/70.jpg",
    tags: ["Mentor", "Oracle", "Technology Field"],
  },
  {
    name: "Jenny Fox",
    title: "UI/UX Designer",
    location: "London, England",
    image: "https://randomuser.me/api/portraits/women/71.jpg",
    tags: ["Looking For Mentor", "BC Hospital", "Healthcare Field"],
  },
  {
    name: "Cody Fisher",
    title: "UI/UX Designer",
    location: "London, England",
    image: "https://randomuser.me/api/portraits/men/37.jpg",
    tags: ["Open To Mentees", "Oracle", "Technology Field"],
  },
  {
    name: "Giulia Edwards",
    title: "UI/UX Designer",
    location: "London, England",
    image: "https://randomuser.me/api/portraits/women/72.jpg",
    tags: ["Mentee", "Oracle University", "Technology Field"],
  },
];

// TODO: Use responsive design
export default function SearchPage() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navigation bar */}
      <nav className="w-full flex items-center justify-between px-8 py-4 border-b border-gray-200">
        <div className="flex items-center gap-6 ml-[8%]">
          <p className="text-2xl font-bold text-emphasis">N</p>
        </div>
        <div className="flex items-center gap-6 mr-[8%]">
          {/* TODO: Those icons should take the user to the corresponding page or pop the modal/dropdown */}
          <button>
            <IoNotificationsOutline className="size-6" />
          </button>
          <button>
            <IoMailOutline className="size-6" />
          </button>
          <button>
            <IoPersonCircleSharp className="text-emphasis size-6" />
          </button>
        </div>
      </nav>
      {/* Tab bar */}
      <div className="w-full flex justify-center border-b border-gray-200 bg-white">
        <div className="flex gap-12 mt-2 mb-2">
          {/* TODO: Set up navigation for those tabs */}
          {tabs.map((tab) => (
            <span
              key={tab.name}
              className={`text-lg font-lightmedium cursor-pointer ${
                tab.active ? "text-emphasis" : "text-gray-500"
              }`}
            >
              {tab.name}
            </span>
          ))}
        </div>
      </div>
      {/* Main content */}
      <div className="max-w-7xl w-full mx-auto flex-1 px-4 md:px-8 py-8">
        {/* TODO: The back button should return to the previous page */}
        <button className="flex items-center gap-2 text-gray-700 mb-6">
          <IoIosArrowBack />
          <span className="text-medium">Huskies</span>
        </button>
        {/* Search bar and map mode */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
          <div className="flex-1 flex items-center bg-gray-100 rounded-full px-4 py-2 border border-gray-200">
            <IoSearchOutline className="mr-2" />
            {/* TODO: Should do a search upon hitting enter */}
            <input
              type="text"
              placeholder="Search by Huskies Skills, Titles, Industries"
              className="bg-transparent outline-none flex-1 text-gray-700 placeholder-gray-400"
            />
            {/* TODO: Should be able to filter alumni based on criteria */}
            <button>
              <BsSliders />
            </button>
          </div>
          {/* TODO: How this map mode will be implemented needs further discussion */}
          <button className="bg-emphasis text-white font-semibold rounded-full px-8 py-2 shadow hover:bg-red-800 transition w-full md:w-auto">
            Map Mode
          </button>
        </div>
        {/* Profile grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockProfiles.map((profile, idx) => {
            const isHovered = hoveredIdx === idx;

            return (
              <div
                key={idx}
                className="border rounded-sm bg-white p-5 flex flex-col gap-3 relative border-gray-300 hover:border-black"
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={profile.image}
                    alt={profile.name}
                    className="w-14 h-14 rounded-full object-cover border border-black"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {profile.name}
                    </div>
                    <div className="text-sm text-gray-500">{profile.title}</div>
                    <div className="text-xs text-gray-400">
                      {profile.location}
                    </div>
                  </div>
                </div>
                {/* Tags or view button */}
                {
                  // If hovered, show button
                  isHovered ? (
                    <button className="flex items-center gap-1 border border-emphasis text-emphasis rounded-full px-4 py-1 text-sm font-semibold mt-2 bg-white shadow hover:bg-emphasis hover:text-white transition">
                      <IoLogInOutline />
                      View
                    </button>
                  ) : (
                    // Else, show tags
                    <div className="flex flex-wrap gap-2 mt-2">
                      {profile.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="bg-gray-100 text-gray-600 text-xs rounded-full px-3 py-1 border border-gray-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )
                }
              </div>
            );
          })}
        </div>
        {/* Pagination */}
        <div className="flex justify-center mt-8 gap-2">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <span
              key={n}
              className={`w-6 h-6 flex items-center justify-center rounded text-sm font-semibold cursor-pointer ${
                n === 1 ? "text-emphasis" : "text-gray-400"
              }`}
            >
              {n}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
