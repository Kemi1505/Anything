export interface Session {
  id?: number;
  user_id: number;  
  valid?: boolean;
  session_id: string;
  created_at?: Date;
  expires_at: Date;
}

