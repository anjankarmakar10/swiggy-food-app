import { useState } from "react";

const Section = ({ title, dise, isVisible, setIsVisible }) => {
  return (
    <div className=" text-slate-900  my-2 rounded-sm border p-2">
      <div className="flex justify-between items-center ">
        <h1 className="text-xl font-bold">{title}</h1>
        <span
          onClick={() => setIsVisible(true)}
          className="text-sm  cursor-pointer bg-[#FC8112] py-0 px-2 rounded-sm"
        >
          {isVisible ? "hide" : "show"}
        </span>
      </div>
      {isVisible && (
        <p className="text-base font-normal mt-2 text-slate-800">{dise}</p>
      )}
    </div>
  );
};

const Instamart = () => {
  const [isVisibleSection, setIsVisibleSection] = useState("");
  const checkSection = (name) => isVisibleSection === name;

  return (
    <div>
      <h1 className="bg-[#FC8112] text-white py-8 font-bold text-3xl text-center mb-8">
        Instamart
      </h1>
      <section className="w-2/4  full-height mx-auto">
        <Section
          setIsVisible={() =>
            checkSection("about")
              ? setIsVisibleSection("")
              : setIsVisibleSection("about")
          }
          isVisible={checkSection("about")}
          title={"About Instamart"}
          dise={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
          }
        />
        <Section
          setIsVisible={() =>
            checkSection("team")
              ? setIsVisibleSection("")
              : setIsVisibleSection("team")
          }
          isVisible={checkSection("team")}
          title={"Team Instamart"}
          dise={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
          }
        />
        <Section
          setIsVisible={() =>
            checkSection("details")
              ? setIsVisibleSection("")
              : setIsVisibleSection("details")
          }
          isVisible={checkSection("details")}
          title={"Details Instamart"}
          dise={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
          }
        />
        <Section
          setIsVisible={() =>
            checkSection("careers")
              ? setIsVisibleSection("")
              : setIsVisibleSection("careers")
          }
          isVisible={checkSection("careers")}
          title={"Careers"}
          dise={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
          }
        />
      </section>
    </div>
  );
};

export default Instamart;
