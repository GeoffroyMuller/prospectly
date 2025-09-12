import type { SearchCriteria } from '../search-criteria.type';
import { Company } from '../entities/entities';

export interface CompanyRepository {
  findCompanies(criteria: SearchCriteria): Promise<Company[]>;
}
