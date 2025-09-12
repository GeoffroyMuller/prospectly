export type RangeFilter<T> = {
  min?: T;
  max?: T;
};

export type SearchCriteria = {
  founded?: RangeFilter<number>;
  employees?: RangeFilter<number>;
  location?: string;
  industry?: string;
};
