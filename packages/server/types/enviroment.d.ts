declare namespace NodeJS {
  interface ProcessEnv {
    SECRET: string;
    SERVER_URL: string;
    PORT: number;
  }
}
