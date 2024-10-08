import { Model } from 'mongoose';

export type IManagement = {
  title: string;
};

export type ManagementModel = Model<IManagement, Record<string, unknown>>;

export type IManagementFilters = {
  searchTerm?: string;
  title?: string;
};
