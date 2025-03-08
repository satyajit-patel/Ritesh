import { PlaceholdersAndVanishInput } from "./placeholders-and-vanish-input";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import axios from "axios";

export function PlaceholdersAndVanishInputDemo() {
  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];

  const [isLoading, setIsLoading] = useState(false);
  const [markdownText, setMarkdownText] = useState("");
  const [text, setText] = useState("");

  async function getLLMResponse(text) {
    try {
      const res = await axios.post("/api/v1/chat", { text });
      return res.data.reply;
    } catch (error) {
      console.error("Error:", error);
      return "Error fetching response.";
    }
  }

  const handleChange = (e) => {
    // console.log(e.target.value);
    setText(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("submitted", text);
    setIsLoading(true);
    setMarkdownText(await getLLMResponse(text));
    setIsLoading(false);
  };
  return (
    <div className="h-[40rem] flex flex-col justify-center  items-center px-4">
      <h2
        className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
        Ask Ritesh Anything
      </h2>
      <PlaceholdersAndVanishInput placeholders={placeholders} onChange={handleChange} onSubmit={onSubmit} />
      {markdownText.length > 0 && (
        <>
        <div className="bg-black text-white h-max w-max p-4">
          {isLoading ? <p>Please wait Ritesh is thinking...</p> : <ReactMarkdown>{markdownText}</ReactMarkdown>}
        </div>
        <button onClick={() => setMarkdownText("")} className="bg-slate-800 mt-2 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
            <span>
              Clear
            </span>
            <svg
              fill="none"
              height="16"
              viewBox="0 0 24 24"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.75 8.75L14.25 12L10.75 15.25"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
        </button>
        </>
      )}
    </div>
  );
}
