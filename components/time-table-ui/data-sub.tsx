// ▼ イベントデータ型定義
import { ReactNode } from "react";
import { SPACER, BannerItem } from "./data";

export { SPACER };
export type { BannerItem };

export const CATEGORY_COLORS_SUB = {
    1: "#48c97e", // グローバル
    2: "#48cae4", // アカデミック
    3: "#f29e4c", // エンターテイメント
    4: "#0077b6", // コラボレーション
} as const;

export type EventItemSub = {
    id: string;
    venueIndex: number; // venues配列のインデックス
    title: string | ReactNode;
    start: string; // "HH:MM"
    end: string;   // "HH:MM"
    colorId?: keyof typeof CATEGORY_COLORS_SUB;
};



// ▼ 設定定数（レイアウト調整用）
export const CONFIG = {
    START_HOUR: 8,       // 8:00開始
    END_HOUR: 19.5,      // 19:30終了
    HOUR_HEIGHT: 160,    // 1時間あたりの高さ(px) - 少し短く
    HEADER_HEIGHT: 60,   // ヘッダーの高さ
    COLUMN_WIDTH: 200,   // 各会場カラムの幅
    TIME_COL_WIDTH: 60,  // 時間軸カラムの幅
    GRID_INTERVAL: 30,   // グリッドの間隔(分)
};

// ▼ 会場データ (15会場)
// ここは控室の数に合わせて変更される可能性がありますが、テンプレートとして同じ構造を維持します。
export const venuesSub = [
    "101", //0
    "102", //1
    "103", //2
    "106", //3
    "203", //4
    "205", //5
    "主催者室1", //6
    "主催者室2", //7
    "主催者室3", //8
    "楽屋1", //9
    "楽屋2", //10
    "BR", //11
    "応接1", //12
    "応接2", //13
    "控室1(北側）", //14
    "控室2(南側）", //15
    "控室(特別会議場内）", //16
    "特別控室1", //17
    "特別控室2", //18
    "特別控室3", //19
];

// ▼ タイムテーブルデータ
// 控室用のダミーデータです。後で編集してください。
export const eventsSub: EventItemSub[] = [
    // --- 101 (Index 0) ---
    { id: "101-1", venueIndex: 0, title: "協賛企業控室", start: "8:30", end: "19:00", colorId: 1 },

    // --- 102 (Index 1) ---
    { id: "102-1", venueIndex: 1, title: "大学チア部控室", start: "8:30", end: "11:30", colorId: 3 },
    { id: "102-2", venueIndex: 1, title: "北昴控室", start: "12:00", end: "15:30", colorId: 4 },

    // --- 103 (Index 2) ---
    { id: "103-1", venueIndex: 2, title: "資材置き場", start: "8:30", end: "19:00", colorId: 4 },

    // --- 106 (Index 3) ---
    { id: "106-1", venueIndex: 3, title: "立命館附属校控室", start: "8:30", end: "19:00", colorId: 4 },

    // --- 203 (Index 4) ---
    { id: "203-1", venueIndex: 4, title: "APU控室", start: "9:00", end: "14:00", colorId: 4 },

    // --- 205 (Index 5) ---
    { id: "205-1", venueIndex: 5, title: "SSHタイ生徒控室", start: "8:30", end: "15:00", colorId: 4 },

    // --- 主催者室1 (Index 6) ---
    { id: "6-1", venueIndex: 6, title: "業者控室", start: "8:30", end: "19:00", colorId: 4 },

    // --- 主催者室2 (Index 7) ---
    { id: "7-1", venueIndex: 7, title: "バレーボールチーム控室・更衣室", start: "8:30", end: "19:00", colorId: 4 },

    // --- 主催者室3 (Index 8) ---
    { id: "8-1", venueIndex: 8, title: "行事部控室", start: "8:30", end: "19:00", colorId: 4 },

    // --- 楽屋1 (Index 9) ---
    { id: "9-1", venueIndex: 9, title: "ゲスト控室", start: "8:30", end: "19:00", colorId: 4 },

    // --- 楽屋2 (Index 10) ---
    { id: "10-1", venueIndex: 10, title: "ゲスト控室", start: "8:30", end: "19:00", colorId: 4 },

    // --- BR (Index 11) ---
    { id: "11-1", venueIndex: 11, title: "教員控室", start: "8:30", end: "19:00", colorId: 4 },

    // --- 応接1 (Index 12) ---
    { id: "12-1", venueIndex: 12, title: "救護室", start: "8:30", end: "19:00", colorId: 4 },

    // --- 応接2 (Index 13) ---
    { id: "13-1", venueIndex: 13, title: "Progate加藤氏控室", start: "11:00", end: "13:30", colorId: 4 },
    { id: "13-2", venueIndex: 13, title: "文部科学省控室", start: "14:00", end: "17:00", colorId: 4 },

    // --- 控室1(北側） (Index 14) ---
    { id: "14-1", venueIndex: 14, title: "男性更衣室", start: "8:30", end: "19:00", colorId: 4 },

    // --- 控室2(南側） (Index 15) ---
    { id: "15-1", venueIndex: 15, title: "女性更衣室", start: "8:30", end: "19:00", colorId: 4 },

    // --- 控室(特別会議場内） (Index 16) ---
    { id: "16-1", venueIndex: 16, title: "北大関係者控室", start: "8:30", end: "19:00", colorId: 4 },

    // --- 特別控室1 (Index 17) ---
    { id: "17-1", venueIndex: 17, title: "学園関係者控室", start: "8:30", end: "19:00", colorId: 4 },

    // --- 特別控室2 (Index 18) ---
    { id: "18-1", venueIndex: 18, title: "北大関係者控室", start: "8:30", end: "19:00", colorId: 4 },

    // --- 特別控室3 (Index 19) ---
    { id: "19-1", venueIndex: 19, title: "北大関係者控室", start: "8:30", end: "19:00", colorId: 4 },
];

export const bannersSub: BannerItem[] = [
    { start: "08:30", end: "08:40", text: "控室利用可能時間 8:30 - 19:00" },
];
