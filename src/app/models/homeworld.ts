export class Homeword {

  name?:string;
  rotation_period?: number;
  orbital_period?: number;
  diameter?: number;
  climate?: string;
  gravity?: string;

  constructor(obj?: Partial<Homeword>){
    Object.assign(this , obj);
  }

}
