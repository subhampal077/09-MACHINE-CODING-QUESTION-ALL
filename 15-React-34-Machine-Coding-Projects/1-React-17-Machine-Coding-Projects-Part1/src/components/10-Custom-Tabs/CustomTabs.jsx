// Custom Tabs :::

import React, { useState } from "react";

const CustomTabs = () => {
  const [tabsIndex, setTabsIndex] = useState(0);

  function RandomTabContent() {
    return <h1>This is Random TAB ###</h1>;
  }
  const tabsContent = [
    {
      label: "Tab 1",
      content: "This is TAB 1 content !!!",
    },
    {
      label: "Tab 2",
      content: "This is TAB 2 content @@@",
    },
    {
      label: "Tab 3",
      content: <RandomTabContent />,
    },
  ];

  return (
    <div className="my-10 text-center">
      <div className="inline-flex gap-4">
        {tabsContent.map((item, i) => {
          return (
            <div
              onClick={() => setTabsIndex(i)}
              className="px-4 py-2 border rounded-md bg-sky-400 font-medium text-xl cursor-pointer"
              key={item.label}
            >
              {item.label}
            </div>
          );
        })}
      </div>

      <div className="mt-5 text-xl font-medium">
        {tabsContent[tabsIndex] && tabsContent[tabsIndex].content}
      </div>
    </div>
  );
};

export default CustomTabs;
