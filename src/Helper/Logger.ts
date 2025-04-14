import pino from "pino";
import path from "path";
import fs from "fs";

// Garante que a pasta 'logs' existe
const logsDir = path.join(__dirname, '../logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}

const logFilePath =  path.join(logsDir, 'server.log');

export const pinoLogger = pino({
  transport: {
    targets: [
      {
        target: 'pino-pretty', 
        options: {
          colorize: true,
          translateTime: 'yyyy-mm-dd HH:MM:ss.l',
          ignore: 'pid,hostname',
        },
        level: 'info',
      },
      {
        target: 'pino/file',
        options: { destination: logFilePath },
        level: 'info',
      },
    ],
  },
});
