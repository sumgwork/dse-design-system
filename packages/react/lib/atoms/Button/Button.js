import React from 'react';
import '@ds.e/scss/lib/Button.css';

const Button = ({ label }) => {
    return (React.createElement("button", { "aria-label": label, className: "dse-button-container" }, label || "Click"));
};

export { Button as default };
//# sourceMappingURL=Button.js.map
