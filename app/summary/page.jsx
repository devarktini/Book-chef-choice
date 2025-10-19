"use client";

import { useState, useEffect } from "react";
import Container from "../../Components/Container";
import { useStore } from "../stores/useStore";
import { toast, ToastContainer } from "react-toastify";
import FormNavigate from "../../Components/FormNavigate";

function ServicesSummary() {
  const { userInputData } = useStore();
  const [summaryData, setSummaryData] = useState({});

  const summarydata = {
    title: "Summary of your event",
  };

  useEffect(() => {
    const data = {};
    userInputData.forEach((item) => {
      data[item.id] = item.data;
    });
    setSummaryData(data);
  }, [userInputData]);

  function handlesummaryData() {
    // Validation or additional logic can be added here
    return true;
  }

  return (
    <Container>
      <div>
        <p className="text-center font-bold text-xl my-5" style={{ color: 'var(--text-primary)' }}>
          {summarydata.title}
        </p>
      </div>
      <div className="space-y-4">
        {Object.keys(summaryData).map((key) => (
          <div key={key} className="border p-4 rounded-md text-white">
            <p className="font-semibold capitalize">{key.replace("-", " ")}:</p>
            <p>{JSON.stringify(summaryData[key])}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10 space-x-5">
        <FormNavigate
          bgColor="bg-red-500"
          hoverColor="hover:bg-red-400"
          navigateTo="/select/restriction"
        >
          <span className="text-white">Previous</span>
        </FormNavigate>
        <FormNavigate
          bgColor="bg-green-500"
          hoverColor="hover:bg-green-400"
          navigateTo="/thanks"
          handleBtnClick={handlesummaryData}
          navigationDisabled={false}
        >
          <span className="text-white">Submit</span>
        </FormNavigate>
      </div>
      <ToastContainer />
    </Container>
  );
}

export default ServicesSummary;
