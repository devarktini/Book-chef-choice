"use client";

import { useState, useEffect } from "react";
import Container from "../../Components/Container";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useStore } from "../stores/useStore";
import { toast, ToastContainer } from "react-toastify";
import FormNavigate from "../../Components/FormNavigate";

function ServicesPeople() {
  const { addUserInputData, userInputData } = useStore();
  const [servicePeople, setServicePeople] = useState([
    { category: "Adult", text: "Over 16 years of age", count: 0 },
    { category: "Teens", text: "12-15 years of age", count: 0 },
    { category: "Children", text: "2-11 years of age", count: 0 },
  ]);

  const servicespeopledata = { title: "We are..." };

  // Restore previous selection on mount
  useEffect(() => {
    const saved = userInputData.find((item) => item.id === "service-people");
    if (saved && saved.data) {
      setServicePeople(saved.data);
    }
  }, [userInputData]);

  function handleCountBtnClick(operation, category) {
    setServicePeople((prev) =>
      prev.map((people) => {
        if (people.category !== category) return people;
        if (operation === "minus")
          return { ...people, count: Math.max(people.count - 1, 0) };
        return { ...people, count: people.count + 1 };
      })
    );
  }

  function onNextBtnClick() {
    const total = servicePeople.reduce((sum, person) => sum + person.count, 0);
    if (total < 2) {
      toast("At least 2 people must be selected!");
      return false;
    }
    addUserInputData({ id: "service-people", data: servicePeople });
    return true;
  }

  return (
    <Container>
      <div>
        <p className="text-2xl my-5 font-bold text-center text-white">
          {servicespeopledata.title}
        </p>
      </div>
      <div className="space-y-5">
        {servicePeople.map((people, index) => (
          <div
            className="border w-1/2 mx-auto rounded-md p-2"
            key={index}
            style={{ borderColor: "#fff" }}
          >
            <p className="text-lg text-white">{people.category}</p>
            <p className="text-white">{people.text}</p>
            <div className="flex mt-4 justify-between items-center">
              <span
                onClick={() => handleCountBtnClick("minus", people.category)}
                className="p-4 rounded-md cursor-pointer border border-white text-white"
              >
                <FaMinus />
              </span>
              <span className="text-xl text-white">{people.count}</span>
              <span
                onClick={() => handleCountBtnClick("plus", people.category)}
                className="p-4 rounded-md cursor-pointer border border-white text-white"
              >
                <FaPlus />
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10 space-x-5">
        <FormNavigate
          bgColor="bg-red-500"
          hoverColor="hover:bg-red-400"
          navigateTo="/schedule/service"
        >
          <span className="text-white">Previous</span>
        </FormNavigate>
        <FormNavigate
          bgColor="bg-green-500"
          hoverColor="hover:bg-green-400"
          navigateTo="/budget"
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

export default ServicesPeople;
