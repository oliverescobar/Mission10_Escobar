export type Bowler = {
  bowlerID: number;
  bowlerFirstName: string;
  bowlerMiddleInit: string;
  bowlerLastName: string;
  teamID: number;
  bowlerAddress: string;
  bowlerCity: string;
  bowlerState: string;
  bowlerZip: string;
  bowlerPhoneNumber: string;
  team: Team;
};

export type Team = {
  teamID: number;
  teamName: string;
  captainID: number;
};
