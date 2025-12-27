import React from 'react';

export const NeuralOrb: React.FC = () => {
    return (
        <div className="relative w-[200px] h-[200px] flex items-center justify-center">
            <div className="relative w-[120px] h-[120px] rounded-full shadow-[0_0_60px_rgba(249,115,22,0.4)] z-10 animate-[orb-breathe_4s_ease-in-out_infinite]">
                <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,#fb923c,#c2410c)] blur-[2px]"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary-30 shadow-[0_0_15px_rgba(249,115,22,0.1)] w-[180px] h-[180px] animate-[ring-spin_10s_linear_infinite] border-dashed"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary-30 shadow-[0_0_15px_rgba(249,115,22,0.1)] w-[240px] h-[240px] animate-[ring-spin_15s_linear_infinite_reverse] opacity-50 border-primary-10"></div>
                <div className=""></div>
            </div>
            <div className="absolute bottom-[30px] left-1/2 -translate-x-1/2 text-[10px] text-primary tracking-[2px] flex items-center gap-1.5 opacity-80 whitespace-nowrap">
                <span className="w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_8px_var(--engram-primary)] animate-[blink_2s_infinite]"></span>
                SYSTEM ONLINE
            </div>
        </div>
    );
};
