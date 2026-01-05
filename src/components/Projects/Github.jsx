import React, { useEffect, useState } from "react";

function Github() {
  const [userData, setUserData] = useState(null);

  const getGitHubData = async () => {
    try {
      const response = await fetch("https://api.github.com/users/rakibul2242");
      const data = await response.json();
      setUserData(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching GitHub data:", error);
    }
  };

  console.log("fetch data", userData);

  useEffect(() => {
    getGitHubData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-100 bg-gray-100 p-6">
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
          href="https://github.com/rakibul"
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
