import { config as dotenv } from 'dotenv';
dotenv();

export const config = {
    server: {
        port: process.env.PORT || 3000,
        mode: process.env.NODE_ENV,
    },

}