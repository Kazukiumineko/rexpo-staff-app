import { CONFIG, BannerItem } from "./data";
import { ReactNode } from "react";

interface BaseEventItem {
    id: string;
    venueIndex: number;
    title: ReactNode;
    start: string;
    end: string;
    colorId?: number;
}

interface EventGridProps {
    venues: string[];
    events: BaseEventItem[];
    categoryColors: Record<number, string>;
    config?: typeof CONFIG;
    banners?: BannerItem[];
}

export default function EventGrid({ venues, events, categoryColors, config = CONFIG, banners = [] }: EventGridProps) {
    const { START_HOUR, END_HOUR, HOUR_HEIGHT, GRID_INTERVAL = 10 } = config;

    // 時間文字列 ("HH:MM") を 分（startからの経過時間）に変換するヘルパー関数
    const timeToMinutes = (timeStr: string) => {
        const [h, m] = timeStr.split(":").map(Number);
        return (h - START_HOUR) * 60 + m;
    };

    return (
        <div
            className="relative"
            style={{
                width: `calc(${venues.length} * var(--col-width))`,
                height: `calc(${END_HOUR - START_HOUR} * var(--hour-height))`
            }}
        >
            {/* グリッド背景 (横線) */}
            <div className="absolute top-0 left-0 w-full pointer-events-none z-0">
                {Array.from({ length: Math.floor((END_HOUR - START_HOUR) * 60 / GRID_INTERVAL) + 1 }, (_, i) => {
                    const startMinutes = START_HOUR * 60;
                    const currentTotalMinutes = Math.round(startMinutes + i * GRID_INTERVAL);
                    const minute = currentTotalMinutes % 60;
                    const isHourOrHalf = minute === 0 || minute === 30;
                    const offset = i;
                    return { offset, isHourOrHalf };
                }).map(({ offset, isHourOrHalf }) => (
                    <div
                        key={`grid-${offset}`}
                        className={`absolute w-full border-t border-gray-300 print:border-gray-300 solid ${offset === 0 ? "print:hidden" : ""}`}
                        style={{
                            top: `calc(${offset} * ${GRID_INTERVAL} * var(--hour-height) / 60)`,
                            opacity: isHourOrHalf ? 1 : 0.5, // 10分刻みは少し薄く
                        }}
                    />
                ))}
            </div>

            {/* 縦線 */}
            {venues.map((_, i) => (
                <div
                    key={i}
                    className="absolute border-r border-gray-200 h-full top-0 print:hidden"
                    style={{
                        left: `calc(${i + 1} * var(--col-width))`,
                    }}
                />
            ))}

            {/* 特別な横断イベント: 一般公開開始 & 終了 */}
            {banners.map((item, idx) => {
                const startMins = timeToMinutes(item.start);
                const endMins = timeToMinutes(item.end);
                const durationMins = endMins - startMins;

                // 範囲外なら表示しない (簡易チェック)
                if (startMins < 0 && endMins < 0) return null;
                // 他の配置ロジックによっては表示制御が必要かもしれない

                return (
                    <div
                        key={`banner-${idx}`}
                        className="absolute px-0 py-1 z-10 print:z-[70] pointer-events-none"
                        style={{
                            left: 0,
                            width: `calc(${venues.length} * var(--col-width))`,
                            top: `calc(${startMins} * var(--hour-height) / 60)`,
                            height: `calc(${durationMins} * var(--hour-height) / 60)`,
                        }}
                    >
                        <div className="w-full h-full bg-gray-600/90 flex items-center justify-around shadow-md">
                            {[...Array(3)].map((_, i) => (
                                <span
                                    key={i}
                                    className="text-white font-bold tracking-widest whitespace-nowrap print-public-banner-text"
                                    style={{ fontSize: 'var(--fs-banner)' }}
                                >
                                    {item.text}
                                </span>
                            ))}
                        </div>
                    </div>
                );
            })}

            {/* イベントカード */}
            {events.map((evt) => {
                const startMins = timeToMinutes(evt.start);
                const endMins = timeToMinutes(evt.end);
                const durationMins = endMins - startMins;

                // colorId が無いときはデフォルト色 or 黒
                const accentColor = (evt.colorId && categoryColors[evt.colorId]) ? categoryColors[evt.colorId] : "#092040";

                return (
                    <div
                        key={evt.id}
                        className="absolute px-1 py-[2px] z-20 print:z-[65]"
                        style={{
                            left: `calc(${evt.venueIndex} * var(--col-width))`,
                            top: `calc(${startMins} * var(--hour-height) / 60)`,
                            width: `var(--col-width)`,
                            height: `max(calc(${durationMins} * var(--hour-height) / 60), var(--min-card-height))`,
                        }}
                    >
                        <div
                            className="w-full h-full rounded-md shadow-md p-2 overflow-hidden flex flex-col justify-start hover:brightness-105 transition-all text-white"
                            style={{ backgroundColor: accentColor }}
                        >
                            <p
                                className="text-white/90 font-mono mb-0.5 leading-none print-event-time"
                                style={{ fontSize: 'var(--fs-event-time)' }}
                            >
                                {evt.start} - {evt.end}
                            </p>
                            <h3
                                className="font-bold leading-tight whitespace-pre-wrap print-event-title"
                                style={{ fontSize: 'var(--fs-event-title)' }}
                            >
                                {evt.title}
                            </h3>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
