"use client";
import { Button } from "@nextui-org/react";
import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";

function Error() {
  return (
    <MaxWidthWrapper>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4"> Error </h2>
          <p className="text-gray-600 mb-4">
            {" "}
            Something went wrong.Please try again later.
          </p>
          <Button color="primary">Try Again</Button>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

export default Error;
