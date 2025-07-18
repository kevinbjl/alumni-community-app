import React from "react";

const mockProfiles = [
  {
    name: "Jane Doe",
    gradYear: "Class of 2015",
    job: "Software Engineer at Google",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    story:
      "From UConn to Silicon Valley, Jane's journey is a testament to perseverance and passion for technology.",
  },
  {
    name: "John Smith",
    gradYear: "Class of 2012",
    job: "Product Manager at Meta",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    story:
      "John leveraged his UConn network to break into tech and now leads teams building impactful products.",
  },
  {
    name: "Emily Chen",
    gradYear: "Class of 2018",
    job: "UX Designer at Spotify",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    story:
      "Emily's creative journey started at UConn and took her to designing experiences for millions of users.",
  },
];

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Search Alumni Stories
        </h1>
        <div className="mb-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
          <input
            type="text"
            placeholder="Search by name, company, or year..."
            className="w-full sm:w-80 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            disabled
          />
          <button
            className="w-full sm:w-auto px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition disabled:opacity-50"
            disabled
          >
            Search
          </button>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {mockProfiles.map((profile, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow p-6 flex flex-col sm:flex-row items-center gap-6"
            >
              <img
                src={profile.image}
                alt={profile.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-blue-100 shadow-md"
              />
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {profile.name}
                  </h2>
                  <span className="text-sm text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-full">
                    {profile.gradYear}
                  </span>
                </div>
                <div className="text-gray-500 text-sm mt-1 mb-2">
                  {profile.job}
                </div>
                <p className="text-gray-700 mb-4">{profile.story}</p>
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition">
                    View Story
                  </button>
                  <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition">
                    Connect
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
