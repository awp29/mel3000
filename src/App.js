/** @jsxImportSource @emotion/react */

import { NOTES_MAP } from "./notesMap";

const NOTES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const D_MAJOR = ["D3", "A3", "F#4"];

const COLUMN_WIDTH = 80;
const SVG_WIDTH = 800;
const NUMBER_OF_COLUMNS = SVG_WIDTH / COLUMN_WIDTH;

const line = [
  { note: "A3", word: "we" },
  { note: "B3", word: "are" },
  { note: "F#4", word: "young" },
  { note: "A3", word: "we" },
  { note: "B3", word: "run" },
  { note: "F#4", word: "green" },
];

const chords = ["D", "D"];

function App() {
  const renderDebugGrid = () => {
    const columns = [];
    for (let i = 0; i < NUMBER_OF_COLUMNS; i++) {
      columns.push(
        <rect
          x={COLUMN_WIDTH * i}
          y={0}
          width={80}
          height="100%"
          fill={i % 2 === 0 ? "whitesmoke" : "Gainsboro"}
        />
      );
    }
    return columns;
  };

  const renderPolyLine = () => {
    const points = [];

    for (let i = 0; i < line.length; i++) {
      const x = COLUMN_WIDTH / 2 + COLUMN_WIDTH * i;

      const notes = [
        "A3",
        "A3#",
        "B3",
        "C4",
        "C#4",
        "D4",
        "D#4",
        "E4",
        "F4",
        "F#4",
      ];
      const positionIndex = notes.indexOf(line[i].note);
      const fontSizeOffset = 6;
      const noteY = 50 - (50 / 10) * positionIndex - fontSizeOffset;

      points.push(`${x} ${noteY}`);
    }

    return (
      <polyline
        points={points.join(" ")}
        stroke="black"
        strokeWidth={"2px"}
        fill="none"
      />
    );
  };

  return (
    <>
      <div>
        <span>C,</span>
        <span>C#,</span>
        <span>D,</span>
        <span>D#,</span>
        <span>E,</span>
        <span>F,</span>
        <span>F#,</span>
        <span>G,</span>
        <span>G#,</span>
        <span>A,</span>
        <span>A#,</span>
        <span>B,</span>
      </div>
      <div css={{ display: "flex", padding: "40px" }}>
        <svg width="800px" height="400px">
          {renderDebugGrid()}
          <g transform="translate(0 20)">
            {renderPolyLine()}

            {line.map((note, index) => {
              const x = COLUMN_WIDTH / 2 + COLUMN_WIDTH * index;

              const notes = [
                "A3",
                "A3#",
                "B3",
                "C4",
                "C#4",
                "D4",
                "D#4",
                "E4",
                "F4",
                "F#4",
              ];
              const positionIndex = notes.indexOf(note.note);
              const noteY = 50 - (50 / 10) * positionIndex;

              return (
                <>
                  <rect
                    x={x - 14}
                    y={noteY - 12}
                    width={28}
                    height={16}
                    fill={D_MAJOR.includes(note.note) ? "#55efc4" : "white"}
                  />
                  <text
                    css={{ fontSize: "12px" }}
                    x={x}
                    y={noteY}
                    textAnchor="middle"
                  >
                    {note.note}
                  </text>
                  <text x={x} y={70} textAnchor="middle">
                    {note.word}
                  </text>
                </>
              );
            })}
          </g>

          {chords.map((chord, index) => {
            // NEED TO KNOW HOW MANY WORDS/SYLABLES THE CHORDS IS PLAYED OVER
            // HARDCODED TO 3
            const width = COLUMN_WIDTH * 3;

            return (
              <g transform={`translate(${COLUMN_WIDTH * 3 * index} 110)`}>
                <rect
                  x={4}
                  y={0}
                  width={width - 4}
                  height={20}
                  fill="#55efc4"
                />
                <text x={width / 2} y={16} textAnchor="middle">
                  {chord}
                </text>
              </g>
            );
          })}

          {/* <g transform="translate(20 380)">
            <circle cx="0" cy="0" r={15} fill="white" stroke="black" />
            <text fill="black" stroke="black" textAnchor="middle" x={0} y={5}>
              A
            </text>
          </g>

          <g transform="translate(60 300)">
            <circle cx="0" cy="0" r={15} fill="white" stroke="black" />
            <text fill="black" stroke="black" textAnchor="middle" x={0} y={5}>
              B
            </text>
          </g>

          <g transform="translate(100 20)">
            <circle cx="0" cy="0" r={15} fill="white" stroke="black" />
            <text fill="black" stroke="black" textAnchor="middle" x={0} y={5}>
              F#
            </text>
          </g>

          <g transform="translate(140 380)">
            <circle cx="0" cy="0" r={15} fill="white" stroke="black" />
            <text fill="black" stroke="black" textAnchor="middle" x={0} y={5}>
              A
            </text>
          </g>

          <g transform="translate(180 300)">
            <circle cx="0" cy="0" r={15} fill="white" stroke="black" />
            <text fill="black" stroke="black" textAnchor="middle" x={0} y={5}>
              B
            </text>
          </g>

          <g transform="translate(220 20)">
            <circle cx="0" cy="0" r={15} fill="white" stroke="black" />
            <text fill="black" stroke="black" textAnchor="middle" x={0} y={5}>
              F#
            </text>
          </g> */}
        </svg>
      </div>
    </>
  );
}

export default App;
