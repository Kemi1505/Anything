export interface Url {
  id?: number;
  user_id: number; 
  long_url: string;
  short_code: string;
  created_at?: Date;
  updated_at?: Date;
}