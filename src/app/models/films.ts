import { Character } from './character';
export class Films {
  title?: string;
  episode_id?: number;
  opening_crawl?: string;
  director?: string;
  producer?: string;
  release_date?: string;
  count?: number;
  idFilme?: string;
  characters: string[] = [];
  planets: string[] = [];
  starships: string[] = [];

  constructor(obj: Partial<Films>) {
    Object.assign(this, obj);
  }
}
