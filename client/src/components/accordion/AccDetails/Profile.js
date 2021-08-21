import React, { useState } from "react";
import { updateProfileData } from "../../../redux/actions/index";
import { useDispatch } from "react-redux";
//material ui
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { Button } from "@material-ui/core";

const Profile = () => {
  const [profile, setProfile] = useState("");
  const dispatch = useDispatch();
  const onSaveClick = () => {
    dispatch(updateProfileData(profile));
  };
  return (
    <div>
      <TextareaAutosize
        aria-label="minimum height"
        minRows={3}
        placeholder="Profile Information"
        name="profile"
        value={profile}
        onChange={(e) => {
          setProfile(e.target.value);
        }}
      />
      <div>
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{ float: "right" }}
          onClick={onSaveClick}
        >
          save
        </Button>
      </div>
    </div>
  );
};

export default Profile;
