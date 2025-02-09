import { useState } from "react";
import "./App.css";
import image from "../src/assets/Capture.jpg";
import copy from "copy-html-to-clipboard";

function App() {
  const [todos, setTodos] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [backgroundColor, setBackgroundColor] = useState("");
  const [textColor, setTextColor] = useState("#000000");
  const [fontStyle, setFontStyle] = useState("");
  const [borderWidth, setBorderWidth] = useState(1);

  const items = [
    {
      id: 1,
      content: "Item 1",
      innerHTML: (
        <div className={`flex ${backgroundColor}`}>
          <h3 className={`font-bold inline ${fontStyle} text-3xl underline mb-4`}>Settings</h3>
          <p>ajksdhbajks</p>
          <img
            className="w-[200px] inline h-[100px] object-cover"
            src={image}
            alt=""
          />
        </div>
      ),
    },
    {
      id: 2,
      content: "Item 2",
      innerHTML: <p>Item 2 Content</p>,
    },
    {
      id: 3,
      content: "Item 3",
      innerHTML: <p>Item 3 Content</p>,
    },
  ];

  const handleSelectItem = (item) => {
    if (!selectedItems.includes(item)) {
      setSelectedItems([...selectedItems, item]);
      setTodos([...todos, item.innerHTML]);
    }
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
    const newSelectedItems = selectedItems.filter((_, i) => i !== index);
    setSelectedItems(newSelectedItems);
  };

  const copyToClipboard = () => {
    const divContent = document.getElementById("myDiv").innerHTML;

    // Use the copy-html-to-clipboard library to copy the HTML
    copy(divContent, {
      asHtml: true, // Ensure the content is copied as HTML
    });

    alert("HTML copied to clipboard!");
  };

  return (
    <>
      <div className={`flex justify-center ${fontStyle}`}>
        <div className="w-[20%] bg-[#adcbe3] h-screen text-center p-[20px]">
          <h3 className="font-bold text-3xl underline mb-4">Settings</h3>
          <ul className="space-y-4">
            <li className="text-start underline">Basic</li>
            <li className="flex gap-4 items-center">
              <p className="text-start">Select Background Color:</p>
              <input
                type="color"
                value={backgroundColor}
                onChange={(e) => setBackgroundColor(e.target.value)}
                className="p-1 border rounded"
              />
            </li>
            <li className="flex gap-4 items-center">
              <p className="text-start">Select Text Color:</p>
              <input
                type="color"
                value={textColor}
                onChange={(e) => setTextColor(e.target.value)}
                className="p-1 border rounded"
              />
            </li>
            <li className="flex gap-4 items-center">
              <p className="text-start">Select Text Style:</p>
              <select
                value={fontStyle}
                onChange={(e) => setFontStyle(e.target.value)}
                className="p-1 border rounded"
              >
                <option value={`text-Russo`}>Russo One</option>
                <option value={`text-Poppins`}>Poppins</option>
                <option value={`text-EB-Garamond`}>EB Garamond</option>
                <option value={`text-Roboto`}>Roboto</option>
              </select>
            </li>
            <li className="flex gap-4 items-center">
              <p className="text-start">Select Border Width:</p>
              <input
                type="number"
                value={borderWidth}
                onChange={(e) => setBorderWidth(Number(e.target.value))}
                className="p-1 border rounded"
              />
            </li>
          </ul>
          <h1 className="text-2xl font-bold mb-5">Select Header</h1>
          <div className="flex space-x-4 mb-5">
            {items.map((item) => (
              <div
                key={item.id}
                onClick={() => handleSelectItem(item)}
                className="cursor-pointer border p-4 bg-gray-100 hover:bg-gray-200"
              >
                {item.content}
              </div>
            ))}
          </div>
        </div>
        <div className="div-1 w-[40%] bg-[#63ace5] h-screen p-[20px]">
          <ul>
            {todos.map((todo, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gray-100 p-2 mb-2"
              >
                <span>{todo}</span>
                <button
                  onClick={() => removeTodo(index)}
                  className="bg-red-500 text-white p-1"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="div-2 w-[40%] bg-[#e7eff6] h-screen p-[20px]">
          <div id="myDiv">
            <ul>
              {todos.map((todo, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center bg-[#111111] p-2 mb-2"
                  style={{
                    backgroundColor,
                    color: textColor,
                    borderWidth: `${borderWidth}px`,
                  }}
                >
                  <span>{todo}</span>
                </li>
              ))}
            </ul>
          </div>
          <button
            onClick={copyToClipboard}
            className="bg-blue-500 text-white p-2 mb-4 rounded"
          >
            Copy Template
          </button>
        </div>
      </div>
    </>
  );
}

export default App;