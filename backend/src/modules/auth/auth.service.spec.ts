import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { TokenService } from '../token/token.service';
import { ConfigService } from '@nestjs/config';

describe('AuthService', () => {
    let authService: AuthService;
    let tokenService: TokenService;

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
        tokenService = module.get<TokenService>(TokenService);
    });

    it('should be defined', () => {
        expect(authService).toBeDefined();
    });

    describe('verify', () => {
        it('should verify the token', async () => {
            const token = 'some-token';
            const verifiedToken = {
                verified: true,
                payload: {
                    id: 1,
                    name: 'Denis',
                    surname: 'Zhukov',
                    email: 'email@gmail.com',
                    roles: [],
                    sex: null,
                    avatar: null,
                },
            };
            jest.spyOn(tokenService, 'verifyToken').mockImplementation(
                async () => verifiedToken,
            );

            const result = await authService.verify(token);

            expect(result).toBe(true);
        });
    });
});
