import { AxiosError, AxiosInstance } from "axios";
import { BASE_URL } from "../config";
import { IApiResponse } from "../interfaces/IApiResponse";
import { IMovie } from "../interfaces/IMovie";
import { IQuote } from "../interfaces/IQuote";

export class MovieService {
    private readonly client: AxiosInstance;
  
    public constructor(client: AxiosInstance) {
      this.client = client;
    }
  
    async getList(): Promise<IApiResponse<IMovie[]>> {
        const response = await this.client
          .get(`${BASE_URL}/movie`)
          .catch((error: AxiosError) => {
            console.log(error);
          });
        if (response) {
            return response?.data;
        }
        return {} as IApiResponse<IMovie[]>;
      }

    async getById(id: string): Promise<IApiResponse<IMovie>> {
      const response = await this.client
        .get(`${BASE_URL}/movie/${id}`)
        .catch((error: AxiosError) => {
          console.log(error);
        });
      if (response) {
        return response?.data;
      }
      return {} as IApiResponse<IMovie>;
    }

    async getQuoteById(id: string): Promise<IApiResponse<IQuote[]>> {
        const response = await this.client
          .get(`${BASE_URL}/movie/${id}/quote`)
          .catch((error: AxiosError) => {
            console.log(error);
          });
        if (response) {
          return response?.data;
        }
        return {} as IApiResponse<IQuote[]>;
      }

  }