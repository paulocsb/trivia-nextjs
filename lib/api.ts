import { TRIVIA_BASE_URL } from "@/constants";

export const fetchJsonServerData = async (endpoint: String) => {
  const response = await fetch(`${TRIVIA_BASE_URL}/api${endpoint}`);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response;
};
