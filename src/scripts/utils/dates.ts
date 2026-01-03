import dayjs from "dayjs";

export const TIME_12_FORMAT = "h:mm A";

type Format = typeof TIME_12_FORMAT;

export const getFormattedDateString = (date: Date, format: Format) => dayjs(date).format(format);
