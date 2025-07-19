import { useState, useEffect } from "react";
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

// Calculate profiles per page
function useProfilesPerPage() {
  const [profilesPerPage, setProfilesPerPage] = useState(12);

  // Adjust profiles per page depending on screen size
  useEffect(() => {
    function updateProfilesPerPage() {
      if (window.innerWidth < 640) {
        setProfilesPerPage(4);
      } else if (window.innerWidth < 1024) {
        setProfilesPerPage(8);
      } else {
        setProfilesPerPage(12);
      }
    }
    updateProfilesPerPage();
    window.addEventListener("resize", updateProfilesPerPage);
    return () => window.removeEventListener("resize", updateProfilesPerPage);
  }, []);
  return profilesPerPage;
}

// TODO: Use responsive design
export default function SearchPage() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const profilesPerPage = useProfilesPerPage();
  const totalPages = Math.ceil(mockProfiles.length / profilesPerPage);

  // Reset to page 1 if profilesPerPage changes and currentPage is out of range
  useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(1);
  }, [currentPage, profilesPerPage, totalPages]);

  // Get the set of profiles that'll be displayed for the current page
  const paginatedProfiles = mockProfiles.slice(
    (currentPage - 1) * profilesPerPage,
    currentPage * profilesPerPage
  );

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
          <div className="flex-1 flex items-center bg-white rounded-full px-4 py-2 border border-gray-300">
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
          {paginatedProfiles.map((profile, idx) => {
            const isHovered =
              hoveredIdx === idx + (currentPage - 1) * profilesPerPage;
            return (
              <div
                key={idx + (currentPage - 1) * profilesPerPage}
                className="border rounded-sm bg-white flex flex-col min-h-[120px] relative border-gray-300 group hover:border-black"
                onMouseEnter={() =>
                  setHoveredIdx(idx + (currentPage - 1) * profilesPerPage)
                }
                onMouseLeave={() => setHoveredIdx(null)}
              >
                <div className="flex flex-3 items-center gap-3 m-5">
                  <img
                    src={profile.image}
                    alt={profile.name}
                    className="w-14 h-14 rounded-full object-cover border border-black"
                  />
                  <div>
                    <div className="font-semibold text-gray-800">
                      {profile.name}
                    </div>
                    <div className="text-sm text-black">{profile.title}</div>
                    <div className="text-xs text-gray-600">
                      {profile.location}
                    </div>
                  </div>
                </div>
                <div className="border-b border-gray-300 group-hover:border-black" />
                {/* Tags or view button */}
                <div className="flex flex-1 items-center justify-center min-h-[48px] my-2">
                  {isHovered ? (
                    // TODO: The view button should take the user to the alumni's profile page
                    <button className="flex mx-5 items-center w-full justify-center gap-1 border border-emphasis text-emphasis rounded-full py-1 text-sm font-semibold bg-white hover:bg-emphasis hover:text-white transition">
                      <IoLogInOutline />
                      View
                    </button>
                  ) : (
                    <div className="w-full items-center justify-center grid grid-cols-3 divide-x divide-solid divide-gray-300">
                      {profile.tags.map((tag, i) => (
                        <span
                          key={i}
                          className=" text-black h-full text-xs flex items-center justify-center text-center"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        {/* Pagination */}
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`w-6 h-6 flex items-center justify-center rounded text-sm font-semibold cursor-pointer ${
                currentPage === i + 1 ? "text-emphasis" : "text-gray-400"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
