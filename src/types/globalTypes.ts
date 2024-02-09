export interface CategoryInterface {
  _id: string,
  name: string
}

export interface UserInterface {
  _id: string,
  name: string,
  email: string,
  password: string,
  role: string
}

export interface DonationInterface {
  _id: string,
  title: string,
  description: string,
  goal: number,
  raised: number,
  picture: string,
  category: CategoryInterface,
  organizer: UserInterface,
  startDate: string,
  endDate: string,
  location: string,
}