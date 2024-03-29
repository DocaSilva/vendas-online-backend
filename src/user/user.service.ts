import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserEntity } from './entities/user.entity';
import { hash } from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async createUser(creatUserDto: CreateUserDto): Promise<UserEntity> {
    const user = await this.findUserByEmail(creatUserDto.email).catch(
      () => undefined,
    );
    const saltOrRounds = 10;
    const passwordHashed = await hash(creatUserDto.password, saltOrRounds);

    if (user) {
      throw new BadRequestException('email registred in system');
    }
    return this.userRepository.save({
      ...creatUserDto,
      typeUser: 1,
      password: passwordHashed,
    });
  }

  async getUserByIdUsingRelations(user_id: number): Promise<UserEntity> {
    return this.userRepository.findOne({
      where: {
        id: user_id,
      },
      relations: {
        addresses: {
          city: {
            state: true,
          },
        },
      },
    });
  }

  async getAllUser(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  async findUserById(user_id: number): Promise<UserEntity> {
    const user = await this.userRepository.findOne({
      where: {
        id: user_id,
      },
    });
    if (!user) {
      throw new NotFoundException(`user_id:${user_id}  not found`);
    }
    return user;
  }

  async findUserByEmail(email: string): Promise<UserEntity> {
    const user = await this.userRepository.findOne({
      where: {
        email,
      },
    });
    if (!user) {
      throw new NotFoundException(`email:${email}  not found`);
    }
    return user;
  }
}
