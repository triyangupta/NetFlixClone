import * as React from "react";
import Dialog from "@mui/material/Dialog";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../redux/movieSlice";
import VideoBackground from "./VideoBackground";

export default function MovieDialog() {
  const { open, selectedMovieId } = useSelector((store) => store.movie);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setOpen({ open: false, movieId: null }));
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="lg"
      fullWidth
      PaperProps={{
        style: {
          backgroundColor: "black",
          borderRadius: "16px",
          overflow: "hidden",
          height: "100vh"
        },
      }}
      BackdropProps={{
        style: { backgroundColor: "rgba(0,0,0,0.85)" },
      }}
    >

     <div className="relative w-full h-full">
        <VideoBackground movieId={selectedMovieId} isModal={true} />

        <button
          onClick={handleClose}
          className="absolute top-3 right-3 bg-black/70 hover:bg-black text-white px-3 py-1 rounded-md"
        >
          ✕
        </button>
      </div>
    </Dialog>
  );
}
