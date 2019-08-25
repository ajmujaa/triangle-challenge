import React from "react";
import "./App.css";
import { TriangleForm } from "./containers/traingle-form";

const App: React.FC = () => {
  return (
    <div className="triangle-form">
      <div data-ts="Board">
        <div data-ts="Panel">
          <TriangleForm />
        </div>
      </div>
    </div>
  );
};

export default App;
