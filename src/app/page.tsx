

export default function Home() {
  // const keys = [
  //   "ESC", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "+", "`", "|",  "HOME",
  //   "TAB", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "DELETE", "END",
  //   "CAPS", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "ENTER", "PG UP",
  //   "SHIFT", "Z", "X", "C", "V", "B", "N", "M", ",", ".", ";", "SHIFT", "▲", "PG DN",
  //   "CTRL", "ALT", "SUPER", "SPACE", "ALT", "FN", "◄", "▼", "►"
  // ]


  const keyboardLayout = [
    // Row 1
    ["ESC", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "+", "`", "|",  "HOME"],
    // Row 2
    ["TAB", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "DELETE", "END"],
    // Row 3
    ["CAPS", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "ENTER", "PGUP"],
    // Row 4
    ["SHIFT1", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "SHIFT2", "▲", "PGDN"],
    // Row 5
    ["CTRL", "ALT1", "SUPER", "SPACE", "ALT2", "FN", "◄", "▼", "►"],
  ]

  const specialKeys : { [key: string]: string } = {
    // "ESC" : "ESC",
    "HOME" : "HOME",
    "TAB" : "TAB",
    "DELETE" : "DELETE",
    "END" : "END",
    "CAPS" : "CAPSLOCK",
    "ENTER": "ENTER",
    "PGUP" : "PGUP",
    "SHIFT1":"SHIFT",
    "SHIFT2" : "SHIFT",
    "PGDN":"PGDN",
    "CTRL" : "CTRL",
    "ALT1" : "ALT",
    "ALT2":"ALT",
    "SUPER":"SUPER",
    "SPACE":"SPACE",
    "FN":"FN"
  }


  const characterKeys: { [key: string]: string } = {
    "1": "!",
    "2": "@",
    "3": "#",
    "4": "$",
    "5": "%",
    "6": "^",
    "7": "&",
    "8": "*",
    "9": "(",
    "0": ")",
    "-" : "_",
    "+": "=",
    "`" : "~",
    "|" : "\\",
    "[" : "{", 
    "]": "}",
     ";":":", 
     "'":"\"",
    ",": "<",
    ".": ">",
    "/" : "?"
  }
    

  const getKeyWidth = (key:string) => {
    switch (key) {
      case "SPACE":
        return "flex-[5.5]";
      case "ENTER":
      case "SHIFT1":
        return "flex-[2]";
      case "SHIFT2":
        return "flex-[1.5]";
      case "CAPS":
        return "flex-[1.75]";
      case "TAB":
      case "DELETE":
      case "CTRL":
      case "FN":
      case "SUPER":
      case "ALT1":
      case "ALT2":
      case "SHIFT2":
        return "flex-[1.5]";
      default:
        return "flex-1";
    }
  };

  return (
//     <div className="bg-white grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen w-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <div className="border w-full h-full bg-red-200">
// hi
//           </div>
//     </div>
  <div className="bg-white flex flex-col items-center justify-center h-svh w-screen p-20 text-gray-700">
  <div className="flex w-full h-2/3 bg-gradient-to-r from-gray-50 via-gray-50 to-zinc-300 border border-1 rounded-2xl shadow-[0px_11px_0px_0px_rgba(0,_0,_0,_0.1)] ">
      {/* Add content here to make it visible */}
      <div className="w-full h-full rounded-2xl shadow-[10px_20px_19px_0px_rgba(0,_0,_0,_0.1)] p-8">
          <div className="w-full h-full p-1  bg-gradient-to-b from-zinc-300 via-gray-200 to-gray-200 shadow-inner rounded-2xl">
          {/* <div className="w-full h-full grid grid-cols-16 gap-1 rounded-xl p-2 bg-gray-700">
          {keys.map((key, index) => (
            <div
          key={index}
          className={`flex items-center justify-center bg-white rounded-xl 
                 shadow-md border
                text-lg   ${getKeyWidth(key)}`}
           >
            <div className="w-full h-full bg-white rounded-xl 
                      shadow-inner shadow-gray-400 
                      drop-shadow-[inset_3px_3px_4px_rgba(0,0,0,0.08)]">
            {key}
            </div>
          </div>
          ))}
          </div> */}
          <div className="w-full h-full flex flex-col gap-1 p-1 bg-gray-700 rounded-xl">
      {keyboardLayout.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-1 w-full h-full">
          {row.map((key, index) =>{
            const isControlKey = ["ESC", "◄", "▼", "►", "▲"].includes(key);
            const isSpecialKey = Object.keys(specialKeys).includes(key);
            const bgColor = isControlKey ? "bg-orange-500" : isSpecialKey ? "bg-gray-500" : "bg-white";
            const shadowEffect = isControlKey? "shadow-orange-700"  : isSpecialKey ? "shadow-gray-700" : "shadow-gray-400";
            const borderEffect = isControlKey? "border-orange-400"  : isSpecialKey ? "border-gray-500" : "border";
            return  (
              <div
                key={index}
                className={`flex items-center justify-center ${bgColor} rounded-lg shadow-md border ${borderEffect} ${getKeyWidth(key)}`}
              >
                <div className={`w-full h-full flex flex-col justify-center items-center ${bgColor} rounded-lg shadow-inner ${shadowEffect} drop-shadow-[inset_3px_3px_4px_rgba(0,0,0,0.08)]`}>
                {characterKeys[key] && <span className="text-sm font-mono font-medium">{characterKeys[key]}</span>}
                <span>{isSpecialKey? specialKeys[key]: key}</span>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
          </div>
      </div>
  </div>
  </div>

  );
}
