export default interface User {
  username: string;
  email: string;
  level: number;
  xp: number;
  gold: number;
  gems: {
    common: number;
    uncommon: number;
    rare: number;
    super: number;
    secret: number;
    mythic: number;
  };
  hasSelectedStarters: boolean;
}
