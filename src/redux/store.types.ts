export interface IUser {
  login: string
  avatar_url: string
  html_url: string
}

export interface IAppState {
  logged: boolean
  user: IUser
}

export interface IUserAction {
  type: string
  payload: { login: string }
}

export interface IAppReturn {
  user: IUserAction
}
