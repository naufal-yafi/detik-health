import React from "react";

const useChangeTab = (): {
  tab: string;
  handleTab: (tab: string) => void;
} => {
  const [tab, setTab] = React.useState<string>("artikel");

  const handleTab = (tab: string) => {
    setTab(tab);
  };

  return {
    handleTab,
    tab,
  };
};

export default useChangeTab;
