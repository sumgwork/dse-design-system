import React from 'react';
import '@ds.e/scss/lib/Button.css';
import '@ds.e/scss/lib/Utilities.css';
import Spacing from '../../foundation/Spacing.js';

const Color = ({ hexCode, height = Spacing.sm, width = Spacing.sm, }) => {
    const className = `dse-height-${height} dse-width-${width}`;
    return (React.createElement("div", { className: className, style: {
            background: hexCode,
        } }));
};

export { Color as default };
//# sourceMappingURL=Color.js.map
