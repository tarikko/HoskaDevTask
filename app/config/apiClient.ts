// /config/apiClient.ts
import axios from "axios";

const apiClient = axios.create({
	baseURL: "https://test-api.mapiner.tech/",
	headers: { "Content-Type": "application/json" },
});

export default apiClient;
