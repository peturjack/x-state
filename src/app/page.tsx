"use client";
import React from "react";
import { useMachine } from "@xstate/react";
import { TodoMachine } from "@/machines/todoAppMachine";

const Page = () => {
  const [state, send] = useMachine(TodoMachine);
  return (
    <>
      <div>
        {JSON.stringify(state.value)}
        <button
          className="px-4 py-3 bg-blue-700 text-white rounded-full"
          onClick={() => {
            send({ type: "Todos Loaded", todos: ["take bins out"] });
          }}
        >
          Todos Loaded
        </button>

        <button
          className="px-4 py-3 bg-blue-700 text-white rounded-full"
          onClick={() => {
            send({ type: "Loading Todos Failed", errorMessage: "Oh no!" });
          }}
        >
          Loading Todos Failed
        </button>
      </div>
    </>
  );
};

export default Page;
