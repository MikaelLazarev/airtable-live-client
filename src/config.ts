/*
 * Lean tool - hypothesis testing application
 *
 * https://github.com/MikaelLazarev/lean-tool/
 * Copyright (c) 2020. Mikhail Lazarev
 *
 */

export const BACKEND_ADDR =
  process.env.NODE_ENV === "development"
    ? "http://localhost:4000"
    : "https://airtablelive-server.herokuapp.com";

export const SSO_ADDR =
  process.env.NODE_ENV === "development"
    ? "http://localhost:4000"
    : "https://airtablelive-server.herokuapp.com";

export const GA_TRACKER = "UA-171397157-1";

