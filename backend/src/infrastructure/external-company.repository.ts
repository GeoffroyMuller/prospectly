import { Company } from 'src/domain/entities/entities';
import { SearchCriteria } from 'src/domain/search-criteria.type';
import { CompanyRepository } from './../domain/ports/company.repository';
export class ExternalCompanyRepository implements CompanyRepository {
  async findCompanies(criteria: SearchCriteria): Promise<Company[]> {
    return new Promise((resolve) => {
      resolve([new Company('La Super Entreprise', '09876789098HHJJ', 100)]);
    });
  }
}
