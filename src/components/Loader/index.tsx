"use client";
import React from "react";
import { Card, Navbar, Skeleton, Spinner } from "@nextui-org/react";
type TProps = {
  fullPage?: boolean;
  type?: "spinner" | "skeleton-long-bar" | "skeleton-card";
};

export default function Loader(props: TProps) {
  if (props.type === "skeleton-long-bar")
    return (
      <div
        className={`flex justify-center items-center ${
          props.fullPage ? "h-screen" : ""
        }`}
      >
        <Navbar>
          <Skeleton className="w-full"></Skeleton>
        </Navbar>
      </div>
    );
  else if (props.type === "skeleton-card")
    return (
      <div
        className={`flex justify-center items-center ${
          props.fullPage ? "h-screen" : ""
        }`}
      >
        <Card className="w-[200px] space-y-5 p-4" radius="lg">
          <Skeleton className="rounded-lg">
            <div className="h-24 rounded-lg bg-default-300"></div>
          </Skeleton>
          <div className="space-y-3">
            <Skeleton className="w-3/5 rounded-lg">
              <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-4/5 rounded-lg">
              <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-2/5 rounded-lg">
              <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
            </Skeleton>
          </div>
        </Card>
      </div>
    );
  else
    return (
      <div
        className={`flex justify-center items-center ${
          props.fullPage ? "h-screen" : ""
        }`}
      >
        <Spinner size="lg" />
      </div>
    );
}
