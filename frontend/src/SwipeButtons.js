import React from "react";
import "./SwipeButtons.css";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import StarRateIcon from "@mui/icons-material/StarRate";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { IconButton } from "@mui/material";
function SwipeButtons() {
  return (
    <div className="SwipeButtons ui_Icons">
      <IconButton className="swipeButton_repeat">
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButton_left ui_Icons">
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButton_star ui_Icons">
        <StarRateIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButton_right ui_Icons">
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButton_lightning ui_Icons">
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
