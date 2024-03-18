import React from "react";
import Button from "../../components/button/button";
import userImg from "../../assets/images/user.jpg";
import { loadState, saveState } from "../../lib/local";
import { Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [content, setContent] = useState("Elshod");
  const [editing, setEditing] = useState(false);
  const [newText, setNewText] = useState("");
  const navigate = useNavigate();
  const token = loadState("user");

  const handleEdit = () => {
    setEditing(true);
    setNewText(content);
    saveState("something", newText);
  };

  const handleSave = () => {
    setContent(newText);
    setEditing(false);
    loadState("something");
  };

  const DeleteToken = () => {
    localStorage.clear("user");
  };

  React.useEffect(() => {
    if (!token) {
      navigate("/login");
    } else {
      console.log("Token bor");
    }
  }, []);

  return (
    <>
      <main className=" bg-[#F7F7F7]">
        {token ? (
          <>
            <section className="py-4 bg-[url('.../../assets/images/profile-bg.jpg')] bg-no-repeat bg-center bg-cover h-[700px]">
              <div className="container btns flex items-center justify-between py-4">
                <Button className="flex items-center gap-2">
                  <Link
                    to="/"
                    className="flex items-center gap-2 hover:text-[#767676]"
                  >
                    <IoMdArrowBack className="text-xl" />
                    <span className="font-bold text-[24px]">Back to home</span>
                  </Link>
                </Button>
                <Button variant="log out" onClick={DeleteToken}>
                  <Link to="/" className="flex items-center gap-2">
                    Log out
                    <MdLogout />
                  </Link>
                </Button>
              </div>

              <div className="container">
                <h1 className="font-bold text-3xl mt-[40px] text-center">
                  Profile page
                </h1>

                <div className="profile-card flex items-center gap-10 mx-auto w-[1000px] h-[350px] p-5 bg-[#ffffff] my-3 rounded-lg ">
                  <img
                    className="w-[250px] h-[250px] rounded-full"
                    src={userImg}
                  />

                  <div className="content  w-[100%] flex  justify-between flex-col gap-10">
                    <h2 className="text-start font-medium text-[40px]">
                      My informations
                    </h2>
                    <div>
                      {editing ? (
                        <input
                          className="edit-input"
                          type="text"
                          value={newText}
                          onChange={(e) => setNewText(e.target.value)}
                        />
                      ) : (
                        <div className="flex items-center justify-between editable text-2xl">
                          {content}
                          <button className="edit-button" onClick={handleEdit}>
                            <CiEdit />
                          </button>
                        </div>
                      )}
                      {editing && (
                        <button className="save-button" onClick={handleSave}>
                          Save
                        </button>
                      )}

                      <p className="text-lg flex gap-4 mt-4">
                        Your email:
                        <span className="underline text-[20px] font-medium">
                          {token?.user.email}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        ) : (
          <div className="flex flex-col items-center gap-5 my-10">
            <p>Siz ro'yxatdan o'tmagansiz !!!</p>
            <Button variant="addvert">
              <Link to="/login" className="flex items-center">
                <IoMdArrowBack />
                Ro'yxatdan o'tish
              </Link>
            </Button>
          </div>
        )}
      </main>
    </>
  );
};
export default Profile;
