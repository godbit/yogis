export const DATAPATH = '/api/data/';
export const DATAFORMAT = 'json';
export const IMGFORMAT = 'jpg';

export enum ProfileState {
    Void,
    Loading,
    Found,
    NotFound
  }

export class Profile {
  key: string;
  imgUrl: string;

  achivements: string[];
  description: string[];
  name: string;
  nickname: string;
  surname: string;
  traits: string[];

  constructor() { }

  static fromResponse(response): Profile {
      const p = new Profile();
      p.achivements = response['achivements'];
      p.description = response['description'];
      p.name = response['name'];
      p.nickname = response['nickname'];
      p.surname = response['surname'];
      p.traits = response['traits'];
      p.key = this.getSafeName(p.name);
      p.imgUrl = this.getImgUrl(p.key);
      return p;
  }

  private static getImgUrl(key: string): string {
    return DATAPATH + key + '.' + IMGFORMAT;
  }

  private static getSafeName(s: string) {
    s = s.toLowerCase();
    s = s.replace(/[áàäâãå]/, 'a');
    s = s.replace(/[óòöôõ]/, 'o');
    return s;
  }
}
