import React, { useEffect, useRef, useState } from "react";
import "./about.css";

const terminalLines = [
  {
    prompt: "fahad@fadii:~$",
    command: "boot fadiiOS...",
    output: ["> Initializing personality modules..."],
  },
  {
    prompt: "fahad@fadii:~$",
    command: "cat about.txt",
    output: [
      "> I'm Fahad Iqbal — a backend engineer. I build secure, scalable systems that don't just function — they endure.",
    ],
  },
  {
    prompt: "fahad@fadii:~$",
    command: "cat philosophy.txt",
    output: [
      "> Security isn't a feature. It's the foundation.",
      "> Speed matters, but resilience lasts longer.",
      "> Open source isn't a trend — it's a trust contract.",
    ],
  },
  {
    prompt: "fahad@fadii:~$",
    command: "cat mission.txt",
    output: [
      "> To engineer robust systems.",
      "> To contribute to open-source tools that empower.",
      "> To educate and inspire through community-driven innovation.",
    ],
  },
  {
    prompt: "fahad@fadii:~$",
    command: "cat services.txt",
    output: ["services"],
  },
  {
    prompt: "fahad@fadii:~$",
    command: "cat skills.txt",
    output: [
      "> Node.js",
      "> MySql",
      "> Postgresql",
      "> Express.js",
      "> Fastify.js",
      "> Queue Management",
      "> Git",
    ],
  },
  {
    prompt: "fahad@fadii:~$",
    command: "cat contact.txt",
    output: ["> email: fahadiqbalhbd@gmail.com", "> contact: +923232724453"],
  },
  {
    prompt: "fahad@fadii:~$",
    command: "cat final_thoughts.txt",
    output: [
      "> If you're building for scale, for trust, or for something bigger than yourself...",
      "> Let's talk.",
    ],
  },
];

const services = [
  {
    text: "🔒 Secure API & backend architecture",
    className: "about-service about-service-blue",
  },
  {
    text: "🛡️ Security reviews & threat modeling",
    className: "about-service about-service-blue",
  },
  {
    text: "🧠 System design & scalability consulting",
    className: "about-service about-service-pink",
  },
];

function useTypeLines(lines, services) {
  const [typedLines, setTypedLines] = useState([]);
  const [isDone, setIsDone] = useState(false);
  const [blinker, setBlinker] = useState(true);
  const typingRef = useRef({
    line: 0,
    char: 0,
    output: 0,
    outputChar: 0,
    isOutput: false,
    isService: false,
  });

  useEffect(() => {
    let timeout;
    // Typing speed settings
    const charDelay = 55;
    const outputCharDelay = 25;
    const afterCommandDelay = 350;
    const afterOutputDelay = 350;
    const afterLineDelay = 650;

    if (typingRef.current.line < lines.length) {
      const curr = lines[typingRef.current.line];
      let currTyped = typedLines.slice();
      if (!currTyped[typingRef.current.line]) {
        currTyped[typingRef.current.line] = {
          prompt: "",
          command: "",
          output: [],
        };
      }
      if (!typingRef.current.isOutput) {
        // Typing command
        if (typingRef.current.char < curr.command.length) {
          currTyped[typingRef.current.line].prompt = curr.prompt;
          currTyped[typingRef.current.line].command = curr.command.slice(
            0,
            typingRef.current.char + 1
          );
          setTypedLines(currTyped);
          typingRef.current.char++;
          timeout = setTimeout(() => setTypedLines([...currTyped]), charDelay);
        } else {
          typingRef.current.isOutput = true;
          typingRef.current.output = 0;
          typingRef.current.outputChar = 0;
          timeout = setTimeout(
            () => setTypedLines([...currTyped]),
            afterCommandDelay
          );
        }
      } else {
        // Typing output
        if (curr.output[typingRef.current.output] === "services") {
          // Special case for services
          currTyped[typingRef.current.line].output = ["services"];
          setTypedLines(currTyped);
          typingRef.current.line++;
          typingRef.current.char = 0;
          typingRef.current.isOutput = false;
          timeout = setTimeout(
            () => setTypedLines([...currTyped]),
            afterLineDelay
          );
        } else if (typingRef.current.output < curr.output.length) {
          if (
            !currTyped[typingRef.current.line].output[typingRef.current.output]
          ) {
            currTyped[typingRef.current.line].output[typingRef.current.output] =
              "";
          }
          if (
            typingRef.current.outputChar <
            curr.output[typingRef.current.output].length
          ) {
            currTyped[typingRef.current.line].output[typingRef.current.output] =
              curr.output[typingRef.current.output].slice(
                0,
                typingRef.current.outputChar + 1
              );
            setTypedLines(currTyped);
            typingRef.current.outputChar++;
            timeout = setTimeout(
              () => setTypedLines([...currTyped]),
              outputCharDelay
            );
          } else {
            typingRef.current.output++;
            typingRef.current.outputChar = 0;
            timeout = setTimeout(
              () => setTypedLines([...currTyped]),
              afterOutputDelay
            );
          }
        } else {
          typingRef.current.line++;
          typingRef.current.char = 0;
          typingRef.current.isOutput = false;
          timeout = setTimeout(
            () => setTypedLines([...currTyped]),
            afterLineDelay
          );
        }
      }
    } else {
      setIsDone(true);
    }
    return () => clearTimeout(timeout);
  }, [typedLines, lines]);

  // Blinker
  useEffect(() => {
    if (isDone) {
      const interval = setInterval(() => setBlinker((b) => !b), 500);
      return () => clearInterval(interval);
    }
  }, [isDone]);

  return [typedLines, isDone, blinker];
}

export default function About() {
  const [typedLines, isDone, blinker] = useTypeLines(terminalLines, services);

  return (
    <div id="about" className="about-container">
      <h1 className="about-main-heading">About Me</h1>
      <div className="about-terminal-container">
        <div className="about-terminal-header">
          <span className="about-dot about-dot-red"></span>
          <span className="about-dot about-dot-yellow"></span>
          <span className="about-dot about-dot-green"></span>
          <span className="about-terminal-title">
            Terminal — Accessing Fahad Iqbal
          </span>
        </div>
        <div className="about-terminal-body">
          {typedLines.map((line, idx) => (
            <div className="about-terminal-row" key={idx}>
              <span className="about-terminal-user">
                {terminalLines[idx].prompt}
              </span>{" "}
              <span className="about-terminal-cmd">{line.command}</span>
              {line.command.length === terminalLines[idx].command.length &&
                line.output &&
                line.output.length > 0 && (
                  <>
                    {line.output[0] === "services" ? (
                      <div className="about-terminal-services">
                        {services.map((s, i) => (
                          <span className={s.className} key={i}>
                            {s.text}
                          </span>
                        ))}
                      </div>
                    ) : line.output[0] &&
                      line.output[0].startsWith("> Node.js") ? (
                      <div className="about-terminal-skills">
                        <div className="about-skill about-skill-node">
                          Node.js
                        </div>
                        <div className="about-skill about-skill-mysql">
                          MySql
                        </div>
                        <div className="about-skill about-skill-postgresql">
                          Postgresql
                        </div>
                        <div className="about-skill about-skill-express">
                          Express.js
                        </div>
                        <div className="about-skill about-skill-fastify">
                          Fastify.js
                        </div>
                        <div className="about-skill about-skill-queue">
                          Queue Management
                        </div>
                        <div className="about-skill about-skill-git">Git</div>
                      </div>
                    ) : (
                      <div className="about-terminal-desc">
                        {line.output.map((out, i) => (
                          <div key={i}>{out}</div>
                        ))}
                      </div>
                    )}
                  </>
                )}
            </div>
          ))}
        </div>
        {isDone && (
          <div className="about-cv-container">
            <button
              className="about-cv-button"
              onClick={() => window.open("/files/Fahad-Iqbal-CV.pdf", "_blank")}
            >
              View My CV
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
