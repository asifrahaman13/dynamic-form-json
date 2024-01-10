import React from "react";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { useSelector, useDispatch } from "react-redux";
import { toogleNotification } from "../../features/notification/notification";

const Notification = ({ formData }) => {
  const notification = useSelector((state) => state.notification.data);
  const dispatch = useDispatch();

  return (
    <>
      {notification.showData == true && (
        <div className="rounded-md bg-green-50  p-4 fixed top-0 w-full z-50">
          <div className="flex">
            <div className="flex-shrink-0">
              <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-green-800">The details are as follows:</h3>
              <div className="mt-2 text-sm text-green-700">
                {Object.keys(formData).map((key, index) => (
                  <>
                    <div key={key}>
                      <strong>{key}:</strong> {formData[key]}
                    </div>
                  </>
                ))}
              </div>
              <div className="mt-4">
                <div className="-mx-2 -my-1.5 flex">
                  <button
                    type="button"
                    className="rounded-md bg-green-50 px-2 py-1.5 text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
                  >
                    View status
                  </button>
                  <button
                    type="button"
                    className="ml-3 rounded-md bg-green-50 px-2 py-1.5 text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
                    onClick={(e) => {
                      dispatch(toogleNotification({ present: notification.showData }));
                    }}
                  >
                    Dismiss
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Notification;
