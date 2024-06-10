import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddJobForm from "./components/AddJobForm";
import App from "./App";
import "../tailwind.min.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(_jsx(BrowserRouter, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(App, {}) }), _jsx(Route, { path: "/add-job", element: _jsx(AddJobForm, {}) })] }) }));
