import { defineStore } from "pinia";
import { get_request } from "./services/request_http";

export const useProcessStore = defineStore("process", {
  /**
   * Store state.
   * @returns {object} State object.
   */
  state: () => ({
    processes: [],
    dataLoaded: false,
  }),

  getters: {
    /**
     * Get process by ID.
     * @param {object} state - State.
     * @returns {function} - Function to find process by ID.
     */
    processById: (state) => (processId) => {
      return state.processes.find((process) => process.id === processId);
    },
  },

  actions: {
    /**
     * Initialize store by fetching data if not already loaded.
     */
    async init() {
      if (!this.dataLoaded) await this.fetchProcessesData();
    },

    /**
     * Fetch processes data from backend.
     */
    async fetchProcessesData() {
      if (this.dataLoaded) return;

      try {
        let response = await get_request("processes/");
        let jsonData = response.data;

        if (jsonData && typeof jsonData === "string") {
          try {
            jsonData = JSON.parse(jsonData);
          } catch (error) {
            console.error("JSON parse error:", error.message);
            jsonData = [];
          }
        }

        this.processes = jsonData ?? [];
        this.dataLoaded = true;
      } catch (error) {
        console.error("Error fetching processes data:", error.message);
        this.processes = [];
        this.dataLoaded = false;
      }
    },
  },
});
