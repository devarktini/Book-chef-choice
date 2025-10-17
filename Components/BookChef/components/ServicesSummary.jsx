import { useState } from "react";
import Container from "./Container";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import FormNavigate from "./FormNavigate";
import { toast, ToastContainer } from "react-toastify";
import { useStore } from "../../useStore.js";

function ServicesSummary() {
  const { userInputData, addUserInputData } = useStore();

  const [summaryData, setSummaryData] = useState({
    name: "",
    email: "",
    phno: "",
    appliances: [], // NEW FIELD
    how_you_hear_us: "",
  });

  const servicesummaryData = {
    title: "That's it",
    text: "Now, just add your contact info, and we’ll send you personalized menu proposals for free in less than 20 minutes.",
  };

  function handlesummaryData(e, field) {
    setSummaryData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  }

  function formatSchedule(schedule) {
    return schedule
      .map(
        (item) =>
          `${item.date} - Breakfast: ${item.breakfast ? "Yes" : "No"}, Lunch: ${
            item.lunch ? "Yes" : "No"
          }, Dinner: ${item.dinner ? "Yes" : "No"}, Evening Snacks: ${
            item.eveningSnacks ? "Yes" : "No"
          }, Notes: ${item.additionalNote || ""}`
      )
      .join("\n");
  }

  function formatPeople(people) {
    return people.map((p) => `${p.category}: ${p.count}`).join("\n");
  }

  function formatRestricted(restricted) {
    if (!restricted || !restricted.length) return "None";
    return restricted.map((r) => `${r.label}: ${r.value}`).join("\n");
  }

  async function onNextBtnClick() {
    if (
      summaryData.name &&
      summaryData.email &&
      summaryData.phno &&
      summaryData.appliances.length > 0 &&
      summaryData.how_you_hear_us
    ) {
      if (!userInputData.find((item) => item.id === "service-summary")) {
        addUserInputData({
          id: "service-summary",
          data: { ...summaryData },
        });
      }

      const formatSectionName = (id) =>
        id
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");

      const plainTextData = userInputData
        .map((item) => {
          let value = "";
          if (item.id === "services-schedule") {
            value = formatSchedule(item.data);
          } else if (item.id === "service-people") {
            value = formatPeople(item.data);
          } else if (item.id === "services-restricted") {
            value = formatRestricted(item.data);
          } else if (typeof item.data === "object") {
            value = Object.entries(item.data)
              .map(([k, v]) => `${k}: ${v}`)
              .join("\n");
          } else {
            value = item.data;
          }
          return `${formatSectionName(item.id)}:\n${value}`;
        })
        .join("\n\n");

      const messageBody = `
New Booking Request

${plainTextData}

Submitted: ${new Date().toLocaleString("en-GB", { hour12: true })}
      `;

      try {
        await fetch("https://formspree.io/f/xldlywdl", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: summaryData.name,
            email: summaryData.email,
            _replyto: summaryData.email,
            message: messageBody,
            _subject: `New Booking Request from ${summaryData.name}`,
          }),
        });

        toast.success("Form submitted! Check your email.", {
          position: "top-right",
          autoClose: 5000,
        });

        setSummaryData({
          name: "",
          email: "",
          phno: "",
          appliances: [],
          how_you_hear_us: "",
        });
      } catch (err) {
        toast.error("Error submitting form. Try again later.", {
          position: "top-right",
        });
        console.error(err);
      }

      return true;
    } else {
      toast.warning("Fill all the required fields!", {
        position: "top-right",
      });
      return false;
    }
  }

  return (
    <Container>
      <div className="my-5 text-white">
        <p className="font-bold text-2xl mx-4 my-2">
          {servicesummaryData.title}
        </p>
        <p className="mx-4">{servicesummaryData.text}</p>
      </div>

      <div className="space-y-5 mx-4 text-white">
        {/* Name */}
        <div>
          <p>Name</p>
          <input
            onChange={(e) => handlesummaryData(e, "name")}
            className="border p-2 w-full bg-transparent text-white placeholder-white"
            value={summaryData.name}
            placeholder="John Doe"
          />
        </div>

        {/* Email */}
        <div>
          <p>Email</p>
          <input
            onChange={(e) => handlesummaryData(e, "email")}
            className="border p-2 w-full bg-transparent text-white placeholder-white"
            value={summaryData.email}
            placeholder="email@example.com"
          />
        </div>

        {/* Phone */}
        <div>
          <p>Phone</p>
          <PhoneInput
            defaultCountry="in"
            value={summaryData.phno}
            onChange={(value) =>
              setSummaryData((prev) => ({ ...prev, phno: value }))
            }
            className="w-full [&_.react-international-phone-input]:bg-transparent [&_.react-international-phone-input]:w-full [&_.react-international-phone-input]:border [&_.react-international-phone-input]:p-2 [&_.react-international-phone-input]:text-white"
          />
        </div>

        {/* Appliances Available (Checkboxes) */}
        <div>
          <p>Appliances Available</p>
          <div className="flex flex-wrap gap-4 mt-2">
            {[
              "Oven",
              "Microwave",
              "OTG",
              "Gas Burner / stove",
              "Toaster / Sandwich Maker",
              "Grinder / Blender",
            ].map((appliance) => (
              <label key={appliance} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value={appliance}
                  checked={summaryData.appliances.includes(appliance)}
                  onChange={(e) => {
                    const isChecked = e.target.checked;
                    setSummaryData((prev) => {
                      const updated = isChecked
                        ? [...prev.appliances, appliance]
                        : prev.appliances.filter((a) => a !== appliance);
                      return { ...prev, appliances: updated };
                    });
                  }}
                  className="accent-red-500"
                />
                <span>{appliance}</span>
              </label>
            ))}
          </div>
        </div>

        {/* How did you hear about us */}
        <div>
          <p>How did you hear about us?</p>
          <select
            className="w-full SelectOption border p-2 bg-transparent text-white"
            value={summaryData.how_you_hear_us}
            onChange={(e) =>
              setSummaryData((prev) => ({
                ...prev,
                how_you_hear_us: e.target.value,
              }))
            }
          >
            <option value="" className="bg-black text-white">
              Select an option
            </option>
            <option value="Someone Recommended" className="bg-black text-white">
              Someone Recommended
            </option>
            <option value="Google" className="bg-black text-white">
              Google
            </option>
            <option value="Facebook" className="bg-black text-white">
              Facebook
            </option>
            <option value="LinkedIn" className="bg-black text-white">
              LinkedIn
            </option>
            <option value="Bing" className="bg-black text-white">
              Bing
            </option>
            <option value="Instagram" className="bg-black text-white">
              Instagram
            </option>
            <option
              value="I was at a dinner party"
              className="bg-black text-white"
            >
              I was at a dinner party
            </option>
            <option value="other" className="bg-black text-white">
              Other
            </option>
          </select>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center mt-7 space-x-5">
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
          handleBtnClick={onNextBtnClick}
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
