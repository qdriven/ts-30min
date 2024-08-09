export interface IndexedList<T> {
    [x: string]: T;
  }
  
  export interface GithubClientOption {
    readonly path: string;
    readonly method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
    readonly data: any;
  }
  
  export interface IGithubClient {
    baseUrl: string;
    accessToken: string;
    oauthClientId: string;
    oauthClientSecret: string;
    fetch: (url: string, options?: IndexedList<any>) => Promise<any>;
  }
  
  export class GithubClient {
    baseUrl: string = "https://api.github.com";
    accessToken: string = "";
    oauthClientId: string = "";
    oauthClientSecret: string = "";
    fetch: (url: string, options?: IndexedList<any>) => Promise<any>;
    private headers: IndexedList<string>;
  
    constructor({ baseUrl, oauthClientSecret, fetch }: IGithubClient) {
      this.baseUrl = baseUrl;
      this.fetch = fetch;
      this.oauthClientSecret = oauthClientSecret;
      this.headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Content-Type": "application/json",
        Accept: "application/vnd.github.v3.full+json",
      };
  
      if (this.oauthClientSecret) {
        this.headers.Authorization = `Bearer ${this.oauthClientSecret}`;
      }
  
      return this;
    }
  
    public get({ path }: Pick<GithubClientOption, "path">): Promise<any> {
      return this.call({ method: "GET", path, data: null });
    }
  
    public delete({ path }: Pick<GithubClientOption, "path">): Promise<any> {
      return this.call({ method: "DELETE", path, data: null });
    }
  
    public post({
      path,
      data,
    }: Omit<GithubClientOption, "method">): Promise<any> {
      return this.call({ method: "POST", path, data });
    }
  
    public put({ path, data }: Omit<GithubClientOption, "method">): Promise<any> {
      return this.call({ method: "PUT", path, data });
    }
  
    public patch({
      path,
      data,
    }: Omit<GithubClientOption, "method">): Promise<any> {
      return this.call({ method: "PATCH", path, data });
    }
  
    private async call({ method, path, data }: GithubClientOption): Promise<any> {
      const response = await this.fetch(this.baseUrl + path, {
        method,
        headers: this.headers,
        body: data !== null ? JSON.stringify(data) : null,
      });
  
      if (response.ok) {
        return response.json();
      } else {
        return {
          status: response.status,
          statusText: response.statusText,
          url: response.url,
        };
      }
    }
  }
  