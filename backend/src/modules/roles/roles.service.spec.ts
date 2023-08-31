import { Test, TestingModule } from '@nestjs/testing';
import { RolesService } from './roles.service';
import { Repository } from 'typeorm';
import { RolesEntity } from './roles.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('RolesService', () => {
    let rolesService: RolesService;
    let rolesRepository: Repository<RolesEntity>;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                RolesService,
                {
                    provide: getRepositoryToken(RolesEntity),
                    useClass: Repository,
                },
            ],
        }).compile();

        rolesService = module.get<RolesService>(RolesService);
        rolesRepository = module.get<Repository<RolesEntity>>(
            getRepositoryToken(RolesEntity),
        );
    });

    it('should be defined', () => {
        expect(rolesService).toBeDefined();
    });

    describe('findByName', () => {
        it('should return a role by name', async () => {
            const roleName = 'admin';
            const role: RolesEntity = {} as RolesEntity;
            jest.spyOn(rolesRepository, 'findOne').mockResolvedValue(role);

            const result = await rolesService.findByName(roleName);

            expect(result).toBe(role);
        });
    });
});
