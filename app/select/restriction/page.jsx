"use client";

import { useState, useEffect } from "react";
import Container from "../../../Components/Container";
import { IoMdRadioButtonOn, IoMdRadioButtonOff } from "react-icons/io";
import { useStore } from "../../stores/useStore";
import { toast, ToastContainer } from "react-toastify";
import FormNavigate from "../../../Components/FormNavigate";

function ServicesSelectRestriction() {
  const { addUserInputData, userInputData } = useStore();

  const [restrictionOptions, setRestrictionOptions] = useState([
    { id: 1, title: "Chicken", setActiv: false },
    { id: 2, title: "Beef", setActiv: false },
    { id: 3, title: "Pork", setActiv: false },
    { id: 4, title: "Fish", setActiv: false },
    { id: 5, title: "Shellfish", setActiv: false },
    { id: 6, title: "Eggs", setActiv: false },
    { id: 7, title: "Dairy", setActiv: false },
    { id: 8, title: "Nuts", setActiv: false },
    { id: 9, title: "Soy", setActiv: false },
    { id: 10, title: "Wheat", setActiv: false },
    { id: 11, title: "None", setActiv: false },
  ]);

  const restrictiondata = {
    title: "Any specific food restrictions ?",
    hintText: "Select all that apply",
  };

  // Restore previously selected restrictions
  useEffect(() => {
    const selectedRestrictions = userInputData.find(
      (item) => item.id === "select-restriction"
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

  function updateRestrictionOpt(id) {
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
    addUserInputData({ id: "select-restriction", data: selectedRestrictions });
    return true;
  }

  return (
    <Container>
      <div>
        <p className="text-center font-bold text-xl my-5" style={{ color: 'var(--text-primary)' }}>
          {restrictiondata.title}
        </p>
        <p className="text-center" style={{ color: 'var(--text-primary)' }}>{restrictiondata.hintText}</p>
      </div>
      <div className="grid md:grid-cols-3 md:grid-rows-4 space-y-2 w-3/5 mx-auto">
        {restrictionOptions.map((item) => (
          <div
            className="flex cursor-pointer items-center m-2 space-x-2"
            onClick={() => updateRestrictionOpt(item.id)}
            key={item.id}
          >
            {item.setActiv ? (
              <IoMdRadioButtonOn className="text-xl text-orange-500" />
            ) : (
              <IoMdRadioButtonOff className="text-xl text-orange-500" />
            )}
            <p className="text-xl" style={{ color: 'var(--text-primary)' }}>{item.title}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10 space-x-5">
        <FormNavigate
          bgColor="bg-red-500"
          hoverColor="hover:bg-red-400"
          navigateTo="/restriction"
        >
          <span className="text-white">Previous</span>
        </FormNavigate>
        <FormNavigate
          bgColor="bg-green-500"
          hoverColor="hover:bg-green-400"
          navigateTo="/summary"
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

export default ServicesSelectRestriction;
