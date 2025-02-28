import React from "react";

const User = ({ userData }) => {
  const { avatar_url, bio, name, login, location, public_repos, created_at } =
    userData;

  const date = new Date(created_at);

  return (
    <div className="flex flex-col items-center justify-center text-lg font-medium mt-8">
      <div className="inline-flex items-center gap-10">
        <img
          className="w-28 rounded-full"
          src={avatar_url}
          alt="profile-image"
        />
        <div className="inline-flex flex-col items-start text-base">
          <p>Name: {name ? name : "Not Available"}</p>
          <p>Username: {login} </p>
          <p>
            User Profile: &nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer" // added for security
              className="text-sm text-red-600 font-bold underline"
              href={`https://github.com/${login}`}
            >
              Click here
            </a>
          </p>
        </div>
      </div>

      <div className="mt-5 inline-flex flex-col items-start">
        <p className="mt-2">Bio: {bio ? bio : "Not Available"}</p>
        <p className="mt-2">
          Location: {location ? location : "Not Available"}
        </p>
        <p className="mt-2">
          User joined on:{" "}
          {`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`}
        </p>
        <p className="mt-2">Public Posts: {public_repos}</p>
      </div>
    </div>
  );
};

export default User;
