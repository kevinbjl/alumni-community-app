import {
  IoNotificationsOutline,
  IoMailOutline,
  IoPersonCircleSharp,
} from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const tabs = [
  { name: "Recruiting", active: true },
  { name: "Huskies", active: false },
  { name: "Activities", active: false },
];

export default function RecruitingSearchPage() {
  const navigate = useNavigate();

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
      <nav className="w-full flex justify-center border-b bg-white border-gray-200">
        <div className="flex gap-12 mt-2 mb-2">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              className={`text-lg font-lightmedium cursor-pointer focus:outline-none ${
                tab.active ? "text-emphasis" : "text-gray-500"
              }`}
              onClick={() => {
                if (tab.name === "Recruiting") navigate("/recruiting/search");
                if (tab.name === "Huskies") navigate("/huskies/search");
                if (tab.name === "Activities") navigate("/activities/search");
              }}
              type="button"
            >
              {tab.name}
            </button>
          ))}
        </div>
      </nav>
      {/* Main content */}
      <div className="max-w-7xl w-full mx-auto flex-1 px-4 md:px-8 py-8">
        Placeholder
      </div>
    </div>
  );
}
