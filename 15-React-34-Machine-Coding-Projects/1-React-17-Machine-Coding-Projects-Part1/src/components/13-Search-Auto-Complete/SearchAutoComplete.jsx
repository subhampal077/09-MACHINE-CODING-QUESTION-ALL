import React, { useEffect, useState } from "react";

const SearchAutoComplete = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [users, setUsers] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [dropdown, setDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  async function fetchUsers() {
    setLoading(true);
    try {
      const data = await (await fetch("https://dummyjson.com/users")).json();
      //   console.log(data);
      setUsers(data.users.map((item) => item.firstName));
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  function handleChange(e) {
    const query = e.target.value.toLowerCase();
    setSearchInput(query);

    if (query.length > 1) {
      const filteredValue =
        users?.length > 0 &&
        users.filter((item) => item.toLowerCase().includes(query));

      setFilteredUsers(filteredValue);
      setDropdown(true);
    } else {
      setDropdown(false);
    }
  }

  function handleClick(e) {
    setSearchInput(e.target.innerText);
    setDropdown(false);
    setFilteredUsers([]);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center my-5">
      {loading && <p className="font-semibold my-4">Loading....</p>}
      {error && <p className="font-semibold my-4">Error: {error}</p>}

      <input
        className="outline-none px-4 py-2 border border-gray-700 rounded mb-5"
        type="text"
        placeholder="Search Users Here..."
        value={searchInput}
        onChange={(e) => handleChange(e)}
      />

      {dropdown && (
        <div className=" text-center w-60 rounded border border-gray-600">
          {filteredUsers?.length > 0
            ? filteredUsers.map((user, i) => (
                <p
                  key={i}
                  onClick={(e) => handleClick(e)}
                  className="py-1 border-b font-medium cursor-pointer"
                >
                  {user}
                </p>
              ))
            : null}
        </div>
      )}

      {/* for reference here i am displaying all the users */}

      <p className="mt-10 mb-4 text-sm font-semibold">
        Take the below names for searching..
      </p>
      <div className="grid grid-cols-3 gap-y-1 gap-x-10 ">
        {users.map((item, i) => (
          <p key={i}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default SearchAutoComplete;
