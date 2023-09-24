import React from "react";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

const DeleteModal = ({ setIsDeleteModal, username, index, dataArray }) => {
  const handleDelete = () => {
    dataArray.splice(index, 1);
    setIsDeleteModal(false);
  };
  return (
    <div
      className="delete_modal_container"
      onClick={() => {
        setIsDeleteModal(false);
      }}
    >
      <div className="delete_modal" onClick={(e) => e.stopPropagation()}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <DeleteRoundedIcon className="delete_modal_icon" />
        </div>
        <p>
          Are you sure? Do you want to delete user <b>{username}</b>?
        </p>
        <div className="buttons">
          <button
            type="button"
            className="cancel"
            onClick={() => {
              setIsDeleteModal(false);
            }}
          >
            Cancel
          </button>
          <button
            type="button"
            className="delete"
            onClick={() => {
              handleDelete();
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
