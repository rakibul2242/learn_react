import React, { useState } from "react";
import { useLoaderData } from "react-router";

function Github() {
  //   const [userData, setUserData] = useState(null);

  //   const getGitHubData = async () => {
  //     try {
  //       const response = await fetch("https://api.github.com/users/rakibul2242");
  //       const data = await response.json();
  //       setUserData(data);
  //       console.log(data);
  //     } catch (error) {
  //       console.error("Error fetching GitHub data:", error);
  //     }
  //   };

  //   console.log("fetch data", userData);

  //   useEffect(() => {
  //     getGitHubData();
  //   }, []);

  /**
   * use loader function from react-router to fetch data
   */
  // const userData = useLoaderData();
  const initialData = useLoaderData();
  const [userData, setUserData] = useState(initialData);

  /**
   * Form submit handler, fetch user data from GitHub API
   */
  const fetchUserData = async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    setUserData(data);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target[0].value;
    const searchInput = event.target[0];

    // return if search is empty
    if (!username.trim()) {
      searchInput.classList.add("focus:ring-red-500");
      searchInput.focus();
      return;
    } else {
      searchInput.classList.remove("focus:ring-red-500");
    }

    console.log("Submitted username:", username);

    fetchUserData(username);
  };

  return (
    <div className="flex flex-col items-center justify-center h-100 bg-gray-100 p-6">
      <form onSubmit={handleSubmit} className="mb-6 w-full max-w-md">
        <div className="flex gap-2 relative">
          {/* focus-within wrapper */}
          <div className="flex-1 relative group">
            <input
              type="text"
              placeholder="Enter GitHub username"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg
                   focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Dropdown */}
            {/* <div
              className="absolute top-full left-0 right-0 mt-1 bg-white
                   border border-gray-300 rounded-lg shadow-lg z-10
                   max-h-60 overflow-y-auto
                   hidden group-focus-within:block"
            >
              <div className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer transition">
                <img
                  src="https://avatars.githubusercontent.com/u/1?v=4"
                  alt="octocat"
                  className="w-8 h-8 rounded-full"
                />
                <span className="font-medium text-gray-800">octocat</span>
              </div>

              <div className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer transition">
                <img
                  src="https://avatars.githubusercontent.com/u/2?v=4"
                  alt="user"
                  className="w-8 h-8 rounded-full"
                />
                <span className="font-medium text-gray-800">github-user</span>
              </div>
            </div> */}
          </div>

          <button
            type="submit"
            className="px-6 py-2 cursor-pointer bg-blue-600 text-white rounded-lg
                 hover:bg-blue-700 transition"
          >
            Search
          </button>
        </div>
      </form>

      <div className="bg-white p-6 rounded-xl shadow-lg flex items-center gap-4">
        {/* Avatar */}
        <img
          src={
            userData?.avatar_url ??
            "https://avatars.githubusercontent.com/u/583231?v=4"
          }
          alt={userData?.name ?? "GitHub Avatar"}
          className="w-48 h-48 rounded-full shadow-md"
        />

        <div>
          {/* Name */}
          <h2 className="text-xl font-bold text-gray-800">
            {userData?.name ?? "GitHub User"}
          </h2>

          {/* Followers */}
          <p className="text-gray-600 font-medium">
            Followers:{" "}
            <span className="text-blue-600">{userData?.followers ?? 0}</span>
          </p>

          <p>{userData?.bio ?? ""}</p>
          <p>{userData?.location ?? ""}</p>
          <a
            className="text-blue-500 hover:underline"
            href={userData?.blog ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
          >
            {userData?.blog ?? ""}
          </a>
        </div>
        {/* GitHub button */}
        <a
          href={userData?.html_url ?? "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
        >
          Visit GitHub
        </a>
      </div>
    </div>
  );
}

export default Github;

export const githubLoader = async () => {
  const response = await fetch("https://api.github.com/users/rakibul2242");
  return response.json();
};
