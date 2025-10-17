"use client";

import DatePicker from "react-datepicker";
import { useState, useEffect, forwardRef } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Container from "../../Components/Container";
import FormNavigate from "../../Components/FormNavigate";
import { ToastContainer, toast } from "react-toastify";
import { useStore } from "../stores/useStore";

function DateSelector() {
  const { addUserInputData, userInputData } = useStore();
  const dateSelectorDate = { title: "When is the event ?" };

  const [InputDate, setInputDate] = useState({
    startDate: null,
    endDate: null,
    formattedStartDate: "",
    formattedEndDate: "",
  });

  useEffect(() => {
    const savedDate = userInputData.find((item) => item.id === "date-select");
    if (savedDate) {
      const { startDate, endDate } = savedDate.data;
      setInputDate({
        startDate: startDate ? new Date(startDate) : null,
        endDate: endDate ? new Date(endDate) : null,
        formattedStartDate: startDate ? formatDate(new Date(startDate)) : "",
        formattedEndDate: endDate ? formatDate(new Date(endDate)) : "",
      });
    }
  }, [userInputData]);

  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <input
      className="border p-2 cursor-pointer w-68 text-white bg-black"
      ref={ref}
      onClick={onClick}
      value={value}
      placeholder="Select a date range"
      readOnly
    />
  ));

  function formatDate(date) {
    if (!date) return "";
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(date);
  }

  function handleChange(dates) {
    const [newStartDate, newEndDate] = dates;
    setInputDate({
      startDate: newStartDate,
      endDate: newEndDate,
      formattedStartDate: formatDate(newStartDate),
      formattedEndDate: formatDate(newEndDate),
    });
  }

  function onNextBtnClick() {
    if (InputDate.startDate && InputDate.endDate) {
      addUserInputData({
        id: "date-select",
        data: {
          startDate: InputDate.startDate,
          endDate: InputDate.endDate,
        },
      });
      return true;
    } else {
      toast("Select a date!");
      return false;
    }
  }

  return (
    <div className="mb-40 text-white">
      <Container>
        <div>
          <p className="my-5 font-bold text-xl text-center">
            {dateSelectorDate.title}
          </p>
        </div>
        <div className="mt-4 justify-self-center">
          <DatePicker
            selectsRange
            startDate={InputDate.startDate}
            endDate={InputDate.endDate}
            dateFormat="MMM d, yyyy"
            onChange={handleChange}
            minDate={new Date()}
            isClearable
            customInput={<CustomInput />}
          />
        </div>
        <div className="flex justify-center mt-10 space-x-5">
          <FormNavigate
            bgColor="bg-red-500"
            hoverColor="hover:bg-red-400"
            navigateTo="/location"
          >
            Previous
          </FormNavigate>
          <FormNavigate
            bgColor="bg-green-500"
            hoverColor="hover:bg-green-400"
            navigateTo="/schedule/service"
            handleBtnClick={onNextBtnClick}
            navigationDisabled={false}
          >
            Next
          </FormNavigate>
        </div>
        <ToastContainer />
      </Container>
    </div>
  );
}

export default DateSelector;
