import winston from 'winston'
import DailyRotateFile from 'winston-daily-rotate-file'

const timezoned = () => {
  return new Date().toLocaleString('ko-KR', {
    timeZone: 'Asia/Seoul',
  })
}

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp({ format: timezoned }),
    winston.format.json(),
  ),
  transports: [
    new winston.transports.Console({
      level: 'debug',
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.printf(({ level, message, timestamp }) => {
          return `[${timestamp}][${level}] : ${message}`
        }),
      ),
    }),
    new DailyRotateFile({
      filename: `logs/application-%DATE%.log`,
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
      format: winston.format.combine(
        winston.format.timestamp({ format: timezoned }),
        winston.format.printf(({ level, message, timestamp }) => {
          return `[${timestamp}][${level}] : ${message}`
        }),
      ),
    }),
  ],
})

export default logger
