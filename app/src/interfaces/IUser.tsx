import { ReactNode } from "react";

export interface IRecentUsers {
  avatar_url?: string;
  login?: string;
  name?: string;
}

export interface IUser extends IRecentUsers{
  bio?: string;
  blog?: string;
  company?: string;
  created_at?: string;
  email?: string;
  events_url?: string
  followers?: number;
  followers_url?: string;
  following?: number;
  following_url?: string;
  gists_url?: string;
  gravatar_id?: string;
  hireable?: string;
  html_url?: string;
  id?:number;
  location?: string;
  node_id?: string,
  organizations_url?: string;
  public_gists?: number;
  public_repos?: number;
  received_events_url?: string;
  repos_url?: string;
  site_admin?: boolean;
  starred_url?: string;
  subscriptions_url?: string;
  twitter_username?: string;
  type?: string;
  updated_at?: string;
  url?: string;
}

export interface IContext {
  user?: IUser;
  getUser: (username: string) => void;
  recents?: object[];
  getRecents?: (user: never) => void;
  isSelected?: boolean;
  getIsSelected: () => void;
}

export interface IProvider {
  children: ReactNode;
}