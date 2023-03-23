import { Button } from "@mui/material";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import { NextRouter } from "next/router";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/store";
import { updateCollect } from "../../../store/photoQuickView/quickViewAciton";

export interface CollectButtonProps {
  filenameString: string | string[] | undefined;
  collected: boolean;
  userCollects: number;
  router: NextRouter;
  isAuthenticated: boolean;
}

//Toggle collect button and add/delete collect
const CollectButton = ({
  isAuthenticated,
  userCollects,
  collected,
  filenameString,
  router,
}: CollectButtonProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const addToCollection = () => {
    if (!isAuthenticated) router.push("/login");
    if (isAuthenticated) {
      dispatch(updateCollect(filenameString));
    }
  };

  return (
    <>
      <Button
        variant="outlined"
        sx={{
          opacity: { xs: 0, sm: 0, md: 1 },
          color: collected ? "orange" : "primary.main",
        }}
        onClick={addToCollection}
        startIcon={<AddToPhotosIcon />}
      >
        {collected
          ? "Collected" + " " + `${userCollects}`
          : "Collect" + " " + `${userCollects}`}
      </Button>
    </>
  );
};

export default CollectButton;
