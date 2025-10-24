export interface Club {
  id: number;
  name: string;
  shortName: string;
  tla: string;
  crest: string;
  area: { name: string };
  address?: string;      // optional
  website?: string;      // 👈 add this line
}
