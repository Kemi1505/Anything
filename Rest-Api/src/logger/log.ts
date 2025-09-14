import logger from 'pino'
import dayjs from 'dayjs'

const log = logger({
    base: {
        pid: false
    },
    timestamp: () => `,"time":"${dayjs().format()}"`,
    transport: {
        target: "pino-pretty", // pretty printing
        options: { colorize: true },
    }
});

export default log;
