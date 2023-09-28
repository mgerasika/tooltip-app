import React from 'react';
import { Demo } from './components/demo.component';
import { TooltipPanel } from './tooltips/tooltip.panel';
export const App = () => {
    return (
        <TooltipPanel>
            <Demo />
        </TooltipPanel>
    );
};
