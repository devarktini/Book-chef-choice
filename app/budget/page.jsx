"use client";

import { useState, useEffect } from "react";
import Container from "../../Components/Container";
import { IoMdRadioButtonOn, IoMdRadioButtonOff } from "react-icons/io";
import { useStore } from "../stores/useStore";
import { toast, ToastContainer } from "react-toastify";
import FormNavigate from "../../Components/FormNavigate";

function ServicesBudget() {
  const { addUserInputData, userInputData } = useStore();

  const [budgetOptions, setBudgetOptions] = useState([
    { id: 1, title: "Budget Friendly", setActiv: false },
    { id: 2, title: "Mid-Range", setActiv: false },
    { id: 3, title: "Premium", setActiv: false },
    { id: 4, title: "Luxury", setActiv: false },
  ]);

  const budgetdata = {
    title: "What's your budget per person ?",
    hintText: "This will help us curate the best menu for you!",
  };

  // Restore previously selected budget
  useEffect(() => {
    const selectedBudget = userInputData.find((item) => item.id === "budget");
    if (selectedBudget) {
      setBudgetOptions((prev) =>
        prev.map((budget) => ({
          ...budget,
          setActiv: budget.title === selectedBudget.data,
        }))
      );
    }
  }, [userInputData]);

  function handleBudgetClick(id) {
    setBudgetOptions((prev) =>
      prev.map((budget) => ({
        ...budget,
        setActiv: budget.id === id,
      }))
    );
  }

  function onNextBtnClick() {
    const selectedBudget = budgetOptions.find((budget) => budget.setActiv);
    if (!selectedBudget) {
      toast("Select a budget!");
      return false;
    }
    addUserInputData({ id: "budget", data: selectedBudget.title });
    return true;
  }

  return (
    <Container>
      <div>
        <p className="text-center font-bold text-xl my-5" style={{ color: 'var(--text-primary)' }}>
          {budgetdata.title}
        </p>
        <p className="text-center" style={{ color: 'var(--text-primary)' }}>{budgetdata.hintText}</p>
      </div>
      <div className="grid md:grid-cols-2 md:grid-rows-2 space-y-2 w-2/5 mx-auto">
        {budgetOptions.map((item) => (
          <div
            className="flex cursor-pointer items-center m-2 space-x-2"
            onClick={() => handleBudgetClick(item.id)}
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
          navigateTo="/people"
        >
          <span className="text-white">Previous</span>
        </FormNavigate>
        <FormNavigate
          bgColor="bg-green-500"
          hoverColor="hover:bg-green-400"
          navigateTo="/restriction"
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

export default ServicesBudget;
