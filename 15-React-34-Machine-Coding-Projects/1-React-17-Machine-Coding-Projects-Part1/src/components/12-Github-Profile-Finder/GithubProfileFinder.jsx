import React, { useEffect, useState } from "react";
import User from "./User";

const GithubProfileFinder = () => {
  const [userName, setUserName] = useState("subhampal077");

  const [userData, setUserData] = useState([]);

  async function fetchGithubUser() {
    const response = await fetch(`https://api.github.com/users/${userName}`);

    const data = await response.json();
    // console.log(data);
    setUserData(data);
  }

  useEffect(() => {
    fetchGithubUser();
  }, []);

  return (
    <div className="px-5 h-screen flex items-center justify-center mt-[-30px] py-5 font-medium">
      <div className="max-w-xl w-full bg-slate-200 px-3 py-8 rounded text-center border-red-500 border">
        <div className="inline-flex items-center gap-2">
          <input
            type="text"
            placeholder="Search Github Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="px-2 py-2 border rounded border-gray-700 outline-none"
          />
          <button
            className="bg-cyan-400 px-4 py-2 rounded"
            onClick={() => {
              fetchGithubUser();
              setUserName("");
            }}
          >
            Search
          </button>
        </div>

        <div>{userData && <User userData={userData} />}</div>
      </div>
    </div>
  );
};

export default GithubProfileFinder;
