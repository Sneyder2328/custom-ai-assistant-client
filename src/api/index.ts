import axios from "axios";
import { DefaultApi } from "@Sneyder2328/custom-ai-assistant-sdk";

const transport = axios.create();

export const api = new DefaultApi(
  undefined,
  import.meta.env.VITE_BASE_URL,
  transport
);
