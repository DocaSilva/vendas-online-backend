import { Injectable } from '@nestjs/common';
import { StateEntity } from './entities/state.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CacheService } from 'src/cache/cache.service';

@Injectable()
export class StateService {
  constructor(
    @InjectRepository(StateEntity)
    private readonly stateRepository: Repository<StateEntity>,
    private readonly cahceService: CacheService,
  ) {}

  async getAllState(): Promise<StateEntity[]> {
    return this.cahceService.getCache<StateEntity[]>('state_all', () =>
      this.stateRepository.find({}),
    );
  }
}
