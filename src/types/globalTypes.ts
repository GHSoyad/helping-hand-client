export type TCategory = {
  _id: string,
  name: string,
}

export type TUser = {
  _id: string,
  name: string,
  email: string,
  password: string,
  role: string,
}

export type TDonation = {
  _id: string,
  title: string,
  description: string,
  goal: number,
  raised: number,
  picture: string,
  category: TCategory,
  organizer: TUser,
  startDate: string,
  endDate: string,
  location: string,
}

export type TGetResponse<T> ={
  message: string,
  success: boolean,
  content: T,
}