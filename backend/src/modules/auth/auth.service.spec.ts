import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { TokenService } from '../token/token.service';
import { ConfigService } from '@nestjs/config';

describe('AuthService', () => {
    let authService: AuthService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AuthService,
                {
                    provide: UsersService,
                    useValue: {
                        getByEmail: jest.fn(),
                        create: jest.fn(),
                        getById: jest.fn(),
                        setRefreshToken: jest.fn(),
                    },
                },
                {
                    provide: TokenService,
                    useValue: {
                        verifyToken: jest.fn(),
                        generateJwtToken: jest.fn(),
                    },
                },
                {
                    provide: ConfigService,
                    useValue: {
                        get: jest.fn(),
                    },
                },
            ],
        }).compile();

        authService = module.get<AuthService>(AuthService);
    });

    it('should be defined', () => {
        expect(authService).toBeDefined();
    });
});
