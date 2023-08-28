import { retry } from '@reduxjs/toolkit/query';
import { isReturnStatement } from 'tsutils';

export class DateTimeUtils {
    static formatTime(seconds: number) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);

        const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : `${remainingSeconds}`;

        return `${formattedMinutes}:${formattedSeconds}`;
    }

    static dateAndTimeStringToTime(dateAndTime: string) {
        const date = new Date(dateAndTime);

        return date.toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        });
    }

    static getNextDays(count: number) {
        const currentDate = new Date();
        const days = [];

        for (let i = 0; i < count; i += 1) {
            const nextDate = new Date(currentDate);
            nextDate.setDate(currentDate.getDate() + i);
            days.push({
                day: nextDate.getDate(),
                month: nextDate.getMonth() + 1,
            });
        }
        return days;
    }

    static formatDate(dateAndTime: string) {
        const date = new Date(dateAndTime);

        const months = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December',
        ];

        const day = date.getDate();
        const month = months[date.getMonth()];
        const year = date.getFullYear();

        return `${month} ${day}, ${year}`;
    }
}
