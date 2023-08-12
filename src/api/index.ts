import axios from "axios";
import { DefaultApi } from "@custom-ai-assistant/sdk";

const transport = axios.create();

export const api = new DefaultApi(
  undefined,
  import.meta.env.VITE_BASE_URL,
  transport
);
