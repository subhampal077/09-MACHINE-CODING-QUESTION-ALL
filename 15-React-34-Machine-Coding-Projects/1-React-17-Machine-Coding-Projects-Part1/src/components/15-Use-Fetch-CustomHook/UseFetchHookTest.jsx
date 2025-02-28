import React from "react";
import useFetchHook from "./UseFetchHook";

const UseFetchHookTest = () => {
  const { data, loading, error } = useFetchHook("https://dummyjson.com/users");

  // console.log(data, error, loading);

  return (
    <div className="text-center">
      <h1 className="my-5 text-3xl font-bold">Custom Use Fetch Hook</h1>

      {loading && <p className="my-4 font-semibold">Loading...</p>}
      {error && <p className="my-4 font-semibold">{error}</p>}

      <div className="grid grid-cols-3">
        {data?.users &&
          data.users.map((item, i) => <p key={i}>{item.firstName}</p>)}
      </div>
    </div>
  );
};

export default UseFetchHookTest;
