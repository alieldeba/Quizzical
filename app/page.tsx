"use client";

import { ModeToggle } from "@/components/ModeToggle";
import Questions from "@/components/Questions";
import Start from "@/components/Start";
import { useState } from "react";

export default function App() {
  const [showQuestions, setShowQuestions] = useState<boolean>(false);

  return (
    <>
      <ModeToggle />
      {showQuestions ? <Questions /> : <Start state={setShowQuestions} />}
    </>
  );
}
