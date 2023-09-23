import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import DataTable from "./components/table/DataTable";
import UserForm from "./components/userform/UserForm";
import DeleteModal from "./components/table/DeleteModal";

const App = () => {
  const [isFormModal, setIsFormModal] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [deleteUserName, setDeleteUserName] = useState("");

  return (
    <>
      <Navbar setIsFormModal={setIsFormModal} />
      <DataTable
        setIsDeleteModal={setIsDeleteModal}
        setDeleteUserName={setDeleteUserName}
      />
      {!isFormModal ? <></> : <UserForm setIsFormModal={setIsFormModal} />}
      {!isDeleteModal ? (
        <></>
      ) : (
        <DeleteModal
          setIsDeleteModal={setIsDeleteModal}
          username={deleteUserName}
        />
      )}
    </>
  );
};

export default App;
