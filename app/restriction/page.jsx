"use client";

import { useState, useEffect } from "react";
import Container from "../../Components/Container";
import { IoMdRadioButtonOn, IoMdRadioButtonOff } from "react-icons/io";
import { useStore } from "../stores/useStore";
import { toast, ToastContainer } from "react-toastify";
import FormNavigate from "../../Components/FormNavigate";

function ServicesRestriction() {
  const { addUserInputData, userInputData } = useStore();

  const [restrictionOptions, setRestrictionOptions] = useState([
    { id: 1, title: "Vegetarian", setActiv: false },
    { id: 2, title: "Vegan", setActiv: false },
    { id: 3, title: "Halal", setActiv: false },
    { id: 4, title: "Kosher", setActiv: false },
    { id: 5, title: "Gluten-Free", setActiv: false },
    { id: 6, title: "No Restrictions", setActiv: false },
  ]);

  const restrictiondata = {
    title: "Any dietary restrictions ?",
    hintText: "Select all that apply",
  };

  // Restore previously selected restrictions
  useEffect(() => {
    const selectedRestrictions = userInputData.find(
      (item) => item.id === "restriction"
    );
    if (selectedRestrictions && selectedRestrictions.data) {
      setRestrictionOptions((prev) =>
        prev.map((restriction) => ({
          ...restriction,
          setActiv: selectedRestrictions.data.includes(restriction.title),
        }))
      );
    }
  }, [userInputData]);

  function handleRestrictionOptClick(id) {
    setRestrictionOptions((prev) =>
      prev.map((restriction) => ({
        ...restriction,
        setActiv:
          restriction.id === id ? !restriction.setActiv : restriction.setActiv,
      }))
    );
  }

  function onNextBtnClick() {
    const selectedRestrictions = restrictionOptions
      .filter((restriction) => restriction.setActiv)
      .map((restriction) => restriction.title);
    if (selectedRestrictions.length === 0) {
      toast("Select at least one restriction!");
      return false;
    }
    addUserInputData({ id: "restriction", data: selectedRestrictions });
    return true;
  }

  return (
    <Container>
      <div>
        <p className="text-center font-bold text-xl my-5 text-white">
          {restrictiondata.title}
        </p>
        <p className="text-center text-white">{restrictiondata.hintText}</p>
      </div>
      <div className="grid md:grid-cols-2 md:grid-rows-3 space-y-2 w-2/5 mx-auto">
        {restrictionOptions.map((item) => (
          <div
            className="flex cursor-pointer items-center m-2 space-x-2"
            onClick={() => handleRestrictionOptClick(item.id)}
            key={item.id}
          >
            {item.setActiv ? (
              <IoMdRadioButtonOn className="text-xl text-orange-500" />
            ) : (
              <IoMdRadioButtonOff className="text-xl text-orange-500" />
            )}
            <p className="text-xl text-white">{item.title}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10 space-x-5">
        <FormNavigate
          bgColor="bg-red-500"
          hoverColor="hover:bg-red-400"
          navigateTo="/budget"
        >
          <span className="text-white">Previous</span>
        </FormNavigate>
        <FormNavigate
          bgColor="bg-green-500"
          hoverColor="hover:bg-green-400"
          navigateTo="/select/restriction"
          handleBtnClick={onNextBtnClick}
          navigationDisabled={false}
        >
          <span className="text-white">Next</span>
        </FormNavigate>
      </div>
      <ToastContainer />
    </Container>
  );
}

export default ServicesRestriction;
