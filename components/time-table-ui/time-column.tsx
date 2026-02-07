"use client";

import { CONFIG } from "./data";

export default function TimeColumn({ config = CONFIG }: { config?: typeof CONFIG }) {
    const { START_HOUR, END_HOUR, HOUR_HEIGHT, GRID_INTERVAL = 10 } = config;

    return (
        <div
            className="flex-shrink-0 border-r border-gray-200 z-40 sticky left-0 print-time-column"
            style={{
                width: `var(--time-col-width)`,
                height: `calc(${END_HOUR - START_HOUR} * var(--hour-height))`, // var(--hour-height) is controlled by parent style usually, but here calculation uses config
                // Actually the parent style sets --hour-height based on BASE_SIZES which is hardcoded 420.
                // However here we use the calculation for height.
                // The style uses CSS variable --hour-height. The multiplication factor depends on hours.
                backgroundColor: "var(--table-bg)",
            }}
        >
            <div className="relative w-full h-full border-r border-gray-300 print:border-none">
                {Array.from({ length: Math.floor((END_HOUR - START_HOUR) * 60 / GRID_INTERVAL) + 1 }, (_, i) => {
                    const startMinutes = START_HOUR * 60;
                    const currentTotalMinutes = Math.round(startMinutes + i * GRID_INTERVAL);
                    const hour = Math.floor(currentTotalMinutes / 60);
                    const minute = currentTotalMinutes % 60;
                    const offset = i;
                    const isHourStart = minute === 0;

                    return { hour, minute, offset, isHourStart };
                }).map(({ hour, minute, offset, isHourStart }) => (
                    <div key={`${hour}-${minute}`}>
                        <div
                            className={`absolute w-full text-right pr-2 font-bold text-gray-800 transform -translate-y-1/2 print-time-label`}
                            style={{
                                top: `calc(${offset} * ${GRID_INTERVAL} * var(--hour-height) / 60)`,
                                fontSize: isHourStart ? 'var(--fs-time-col)' : 'calc(var(--fs-time-col) * 0.85)',
                                color: isHourStart ? '#1f2937' : '#6b7280',
                            }}
                        >
                            {`${hour}:${minute.toString().padStart(2, '0')}`}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
