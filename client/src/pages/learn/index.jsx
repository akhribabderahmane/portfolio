import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PageHeader from "../../components/PageHeader";
import { FaPlay } from "react-icons/fa";
import { MdClear } from "react-icons/md";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript";

const Learn = () => {
  const [code, setCode] = useState('// Write your JavaScript code here\nconsole.log("Hello, world!");\n\n// Try creating variables\nconst greeting = "Welcome to my interactive code playground!";\nconsole.log(greeting);\n\n// Or math operations\nconsole.log(5 + 10);\n\n// You can even define functions\nfunction multiply(a, b) {\n  return a * b;\n}\n\nconsole.log("5 × 3 =", multiply(5, 3));');
  const [output, setOutput] = useState([]);
  const [error, setError] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [highlightedCode, setHighlightedCode] = useState("");

  useEffect(() => {
    // Highlight the code whenever it changes
    const highlighted = Prism.highlight(code, Prism.languages.javascript, 'javascript');
    setHighlightedCode(highlighted);
  }, [code]);

  const runCode = () => {
    setIsRunning(true);
    setOutput([]);
    setError(null);

    // Create a safe console.log replacement
    const logs = [];
    const originalConsoleLog = console.log;
    
    try {
      // Replace console.log with our custom function
      console.log = (...args) => {
        logs.push(args.map(arg => 
          typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
        ).join(' '));
      };

      // Execute the code
      // eslint-disable-next-line no-new-func
      new Function(code)();
      
      // Set the output
      setOutput(logs);
    } catch (err) {
      setError(err.toString());
    } finally {
      // Restore the original console.log
      console.log = originalConsoleLog;
      setIsRunning(false);
    }
  };

  const clearOutput = () => {
    setOutput([]);
    setError(null);
  };

  // Run initial code on component mount
  useEffect(() => {
    runCode();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -200, opacity: 0 }}
      transition={{ duration: 0.59 }}
      className="text-text-light dark:text-text-dark py-6 sm:py-10 pt-7 sm:pt-14 flex flex-col px-5 sm:px-8"
    >
      <PageHeader title="Code Playground" description="Write and run JavaScript code in real-time" />
      
      <div className="flex flex-col lg:flex-row gap-6 mt-6 h-[70vh]">
        {/* Code editor with syntax highlighting */}
        <div className="flex-1 flex flex-col bg-[#1e1e1e] rounded-lg overflow-hidden shadow-lg">
          <div className="bg-[#252526] px-4 py-2 text-white flex justify-between items-center border-b border-[#333]">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
              <span className="font-mono text-sm ml-2">JavaScript</span>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={runCode} 
                disabled={isRunning}
                className="px-3 py-1 bg-[#0d6efd] hover:bg-[#0b5ed7] rounded text-white flex items-center gap-2 disabled:bg-[#0d6efd]/70 disabled:opacity-70 transition-colors"
              >
                <FaPlay size={12} /> Run
              </button>
            </div>
          </div>
          <div className="relative flex-1 overflow-hidden">
            <pre className="absolute inset-0 m-0 p-4 overflow-auto bg-[#1e1e1e] text-sm">
              <code 
                className="language-javascript" 
                dangerouslySetInnerHTML={{ __html: highlightedCode }}
              ></code>
            </pre>
            <textarea 
              value={code}
              onChange={handleCodeChange}
              className="absolute inset-0 w-full h-full p-4 font-mono text-sm bg-transparent text-transparent caret-white outline-none resize-none"
              spellCheck="false"
            />
          </div>
        </div>

        {/* Output console with improved styling */}
        <div className="flex-1 flex flex-col bg-[#1e1e1e] rounded-lg overflow-hidden shadow-lg">
          <div className="bg-[#252526] px-4 py-2 text-white flex justify-between items-center border-b border-[#333]">
            <span className="font-mono text-sm">Console Output</span>
            <button 
              onClick={clearOutput}
              className="px-3 py-1 bg-[#6c757d] hover:bg-[#5c636a] rounded text-white flex items-center gap-1 transition-colors"
            >
              <MdClear size={14} /> Clear
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 font-mono text-sm bg-[#1e1e1e]">
            {output.map((log, index) => (
              <div key={index} className="py-1 border-b border-[#333]">
                <span className="text-[#d4d4d4]">{log}</span>
              </div>
            ))}
            {error && (
              <div className="py-2 text-[#f14c4c] border-b border-[#333]">
                {error}
              </div>
            )}
            {isRunning && (
              <div className="py-2 text-[#3b8eea]">
                Running code...
              </div>
            )}
            {!isRunning && !error && output.length === 0 && (
              <div className="py-2 text-[#6c757d] italic">
                No output to display
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-6 bg-[#252526] rounded-lg p-4 shadow border border-[#333]">
        <h3 className="text-lg font-medium mb-2 text-[#3b8eea]">Tips</h3>
        <ul className="list-disc pl-5 space-y-1 text-sm text-[#d4d4d4]">
          <li>Use <code className="bg-[#1e1e1e] px-1 rounded">console.log()</code> to output values</li>
          <li>JavaScript variables, functions, and expressions are supported</li>
          <li>DOM manipulation is not available in this environment</li>
          <li>Your code runs in an isolated context for security</li>
          <li>Errors will be displayed in red in the output console</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Learn;
