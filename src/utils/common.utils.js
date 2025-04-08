import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

// Create formatter (English).
TimeAgo.addLocale(en);
export const timeAgo = new TimeAgo('en-US');