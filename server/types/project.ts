export interface Project {
  id: number;
  categoryId: number;
  categoryKr?: string;
  categoryEn?: string;
  endpoint?: string;
  testType?: string;
  testName?: string;
  criteria?: string;
  result?: number;
  status?: number;
  priority?: number;
  notes?: string;
}
