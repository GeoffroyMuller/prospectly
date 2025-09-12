import { Injectable } from '@nestjs/common';
import type { CompanyRepository } from '../domain/ports/company.repository';
import { Company } from 'src/domain/entities/entities';
import { SearchCriteria } from 'src/domain/search-criteria.type';

@Injectable()
export class FindCompaniesUseCase {
  constructor(private readonly companyRepository: CompanyRepository) {}

  async execute(criteria: SearchCriteria): Promise<Company[]> {
    return this.companyRepository.findCompanies(criteria);
  }
}
