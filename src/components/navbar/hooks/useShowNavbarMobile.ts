import React from "react";

const useShowNavbarMobile = (): {
  open: boolean;
  handleOpen: () => void;
} => {
  const [open, setOpen] = React.useState<boolean>(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return {
    open,
    handleOpen,
  };
};

export default useShowNavbarMobile;
