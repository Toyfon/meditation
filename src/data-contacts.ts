
type ResponseStatus = 'success' | 'error';

export interface CommonContact<T> {
  data: T;
  status: ResponseStatus
}


export interface Meditation {
  id: number;
  created_at: string;
  updated_at: string;
  title: string;
  description: string;
  duration_min: number;
}
