
import axios, { AxiosInstance } from "axios";
import { BASE_URL } from "./config";
import { MovieService } from "./services/Movie.service";

export type ApiHeaders = {
    Authorization: string;
};

export class LotrApiClient {
    private accessToken: string;
    private serverUrl: string;
    private client: AxiosInstance;
  

    public readonly movieService: MovieService;
  
    constructor(accessToken: string) {
      this.accessToken = accessToken;
      this.serverUrl = BASE_URL;
      this.client = axios.create({
        baseURL: this.serverUrl,
        headers: this.getHeaders(),
      });
  
      this.movieService = new MovieService(this.client);
    }
  
    private getHeaders(): ApiHeaders {
      const headers: ApiHeaders = {
          Authorization: ""
      };
      if (this.accessToken) {
        headers["Authorization"] = `Bearer ${this.accessToken}`;
      }
      return headers;
    }
  }