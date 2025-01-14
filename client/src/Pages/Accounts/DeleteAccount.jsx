import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const DeleteUser = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  // Get user and perform the delete CRUD operation
  const handleDeleteUser = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:1111/users/${id}`)
      .then(() => {
        setLoading(false);
        localStorage.removeItem("token");
        navigate("/log-in");
        enqueueSnackbar("User Deleted Successfully", { variant: "success" });
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };

  const handleCancelDelete = () => {
    enqueueSnackbar("Cancelled User Deletion", { variant: "success" });
    navigate(-1);
  };


  return (
    <div className="p-4  min-h-screen dark:bg-gray-900">
      <div className="flex flex-col items-center bg-emerald-200 dark:bg-emerald-400 border-2 border-emerald-300 dark:border-emerald-500 dark:text-gray-300 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-2xl">
          Are You Sure You want to delete your account?
        </h3>

        <button
          className="flex-1 bg-red-500 dark:bg-red-700 hover:bg-red-600 dark:hover:bg-red-800 text-white dark:text-gray-300 font-bold text-xl text-center py-2 px-4 rounded-md mt-2 mr-4 w-full"
          onClick={handleDeleteUser}
        >
          Yes, Delete it
        </button>
        <button
          className="flex-1 bg-emerald-500 dark:bg-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-800 text-white dark:text-gray-300 font-bold text-xl text-center py-2 px-4 rounded-md mt-2 mr-4 w-full"
          onClick={handleCancelDelete}
        >
          No. Go Back
        </button>
      </div>
    </div>
  );
};

export default DeleteUser;
