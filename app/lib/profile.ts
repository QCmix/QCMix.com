export type IndustryRole =
  | "owner"
  | "bartender"
  | "worker"
  | "distributor"
  | "musician"
  | "patron";

export type AccountState =
  | "starter"
  | "verified"
  | "trusted"
  | "restricted";

export type IndustryProfile = {
  role: IndustryRole;
  state: AccountState;
};
