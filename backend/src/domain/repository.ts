import { Company } from './entity';

export interface CompanyRepository {
  findCompanies(): Promise<Company[]>;
}
