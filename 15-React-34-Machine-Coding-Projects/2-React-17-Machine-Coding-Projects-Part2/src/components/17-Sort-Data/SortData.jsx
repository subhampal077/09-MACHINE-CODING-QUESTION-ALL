import React, { useEffect, useState } from "react";

const SortData = () => {
  const [users, setUsers] = useState([]);
  const [sortValue, setSortValue] = useState("");

  async function fetchUsers() {
    const res = await fetch("https://dummyjson.com/users");
    const result = await res.json();
    // console.log(result);

    sortValue ? setUsers(handleSort(result.users)) : setUsers(result.users);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  function handleSort(getUsers) {
    let copyUsers = [...getUsers];

    if (sortValue === "ascending") {
      copyUsers = copyUsers.sort((a, b) =>
        a.firstName.localeCompare(b.firstName)
      );
    } else if (sortValue === "descending") {
      copyUsers = copyUsers.sort((a, b) =>
        b.firstName.localeCompare(a.firstName)
      );
    }
    return copyUsers;
  }

  useEffect(() => {
    setUsers(handleSort(users));
  }, [sortValue]);

  return (
    <div>
      <h1>Sort Data</h1>

      <select
        value={sortValue}
        onChange={(e) => {
          setSortValue(e.target.value);
        }}
      >
        <option value="">Select Sort</option>
        <option value="ascending">Sort by A - Z</option>
        <option value="descending">Sort by Z - A</option>
      </select>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
        {users?.length > 0 &&
          users.map((user) => (
            <p key={user.id}>
              {user.firstName} {user.lastName}
            </p>
          ))}
      </div>
    </div>
  );
};

export default SortData;
