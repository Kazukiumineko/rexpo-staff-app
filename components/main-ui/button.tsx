import React from 'react';
import Link from 'next/link';

interface MenuButtonProps {
    name: string;
    href: string;
    // Icon prop can be added later
}

const buttons: MenuButtonProps[] = [
    { name: 'タイムテーブル', href: '/timetable' },
    { name: 'Page Name 2', href: '/' },
    { name: 'Page Name 3', href: '/' },
    { name: 'Page Name 4', href: '/' },
];

export default function MenuButtons() {
    return (
        <div className="w-full max-w-4xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {buttons.map((btn, index) => (
                    <Link
                        key={index}
                        href={btn.href}
                        className="flex items-center justify-start gap-6 bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-zinc-700 h-24"
                    >
                        {/* Placeholder for Icon */}
                        <div className="w-12 h-12 bg-gray-200 dark:bg-zinc-600 rounded-full flex items-center justify-center shrink-0">
                            <span className="text-xs text-gray-500 dark:text-gray-300">Icon</span>
                        </div>

                        {/* Page Name */}
                        <span className="text-xl font-medium tracking-wide">
                            {btn.name}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    );
}
