import React, { useState } from "react";
import { Switch } from "@headlessui/react";
import { classNames } from "../../static/static_data";
import Notification from "../Notification/Notification";
import { useSelector, useDispatch } from "react-redux";
import { toogleNotification } from "../../features/notification/notification";

const DynamicForm = ({ formJson }) => {
  const [enabled, setEnabled] = useState(false);
  const [formData, setFormData] = useState({});
  const notification = useSelector((state) => state.notification.data);
  const dispatch = useDispatch();

  const handleInputChange = (jsonKey, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [jsonKey]: value,
    }));
  };

  const renderFormElement = (element) => {
    const { uiType, label, jsonKey, validate, defaultValue, subParameters, placeholder } = element; // Destructure all the elements of the form. 

    switch (uiType) {
      case "Input":
        return (
          <>
            <div key={jsonKey}>
              <div class="relative mb-4">
                <label for="email" class="leading-7 text-sm text-gray-600">
                  {label}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="w-full h-12 bg-gray-100 rounded border outline-none focus:border-red-200 focus:ring-red-100 text-base  text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  value={formData[jsonKey] || ""}
                  onChange={(e) => handleInputChange(jsonKey, e.target.value)}
                  placeholder={placeholder}
                />
              </div>
            </div>
          </>
        );

      case "Select":
        return (
          <>
            <div key={jsonKey} className="mt-4">
              <div>
                <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900">
                  {label}
                </label>
                <select
                  id="location"
                  name="location"
                  className="mt-2 block h-12 w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900    outline-none sm:text-sm sm:leading-6"
                  defaultValue="Medium"
                  value={formData[jsonKey] || defaultValue}
                  onChange={(e) => handleInputChange(jsonKey, e.target.value)}
                >
                  {validate.options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </>
        );

      case "Group":
        return (
          <div key={jsonKey}>
            <label>{label}</label>
            {subParameters.map((subElement) => renderFormElement(subElement))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      {notification.showData == true && <Notification formData={formData} />}

      <div className=" p-4 min-h-screen">
        {typeof formJson === "object" && formJson?.map((formElement) => <>{formElement.validate.required === true && renderFormElement(formElement)}</>)}

        <div className=" flex flex-row mt-8 mb-8">
          <div className="flex items-center pr-4">Advanced settings</div>
          <div>
            <Switch
              checked={enabled}
              onChange={setEnabled}
              className={classNames(
                enabled ? "bg-red-400" : "bg-gray-200",
                " relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-2"
              )}
            >
              <span className="sr-only">Use setting</span>

              <span
                aria-hidden="true"
                className={classNames(
                  enabled ? "translate-x-5" : "translate-x-0",
                  "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                )}
              />
            </Switch>
          </div>
        </div>

        {enabled === true && (
          <>
            {typeof formJson === "object" &&
              formJson?.map((formElement) => <>{(!("required" in formElement.validate) || formElement.validate.required === false) && renderFormElement(formElement)}</>)}
          </>
        )}

        <button
          class="flex mx-auto text-white mt-8 bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg"
          onClick={(e) => {
            dispatch(toogleNotification({ present: notification.showData }));
          }}
        >
          Button
        </button>
      </div>
    </>
  );
};

export default DynamicForm;
