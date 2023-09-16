"use client";

import React from "react";
import { Button } from "./ui/button";

export default function Start({ state }: any) {
  return (
    <>
      {/* <Image
        src="/blob.svg"
        alt="blob"
        className="absolute bottom-0 left-0 hidden md:block"
        width="200"
        height="200"
      /> */}
      <div className="relative flex flex-col gap-5 items-center justify-center h-screen container text-center">
        <h3 className="text-4xl font-semibold">Quizzical</h3>
        <p className="w-full sm:w-[400px]">
          Try to answer all the questions right to get the prize at the end,
          Good luck.
        </p>
        <Button
          variant="outline"
          className="flex gap-2"
          onClick={() => state(true)}
        >
          <p>Let&apos;s Go</p>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </Button>
        <p className="absolute bottom-5 container text-center">
          only 3% who could make it till the end
        </p>
      </div>
    </>
  );
}
