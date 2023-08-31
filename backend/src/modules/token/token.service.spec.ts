import { Test, TestingModule } from '@nestjs/testing';
import { TokenService } from './token.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { JwtPayload } from './types';

describe('TokenService', () => {
    let tokenService: TokenService;
    let jwtService: JwtService;
    let configService: ConfigService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                TokenService,
                {
                    provide: JwtService,
                    useValue: {
                        signAsync: jest.fn(),
                        verifyAsync: jest.fn(),
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

        tokenService = module.get<TokenService>(TokenService);
        jwtService = module.get<JwtService>(JwtService);
        configService = module.get<ConfigService>(ConfigService);
    });

    describe('generateJwtToken', () => {
        it('should be defined', () => {
            expect(tokenService.generateJwtToken).toBeDefined();
        });

        it('should call jwtService.signAsync with correct arguments', async () => {
            const payload: JwtPayload = {
                id: 1,
                roles: [],
                sex: 'male',
                avatar: '',
                email: 'email',
            };
            const expiresIn = 3600;
            const token = 'generated-token';

            jwtService.signAsync = jest.fn().mockResolvedValue(token);
            configService.get = jest.fn().mockReturnValue('secret-key');

            const result = await tokenService.generateJwtToken(
                payload,
                expiresIn,
            );

            expect(jwtService.signAsync).toHaveBeenCalledWith(
                payload,
                expect.objectContaining({
                    secret: 'secret-key',
                    expiresIn,
                }),
            );
            expect(result).toEqual(token);
        });
    });

    describe('verifyToken', () => {
        it('should be defined', () => {
            expect(tokenService.verifyToken).toBeDefined();
        });

        it('should return verified payload when token is valid', async () => {
            const token = 'valid-token';
            const payload = { userId: 1 };

            jwtService.verifyAsync = jest.fn().mockResolvedValue(payload);
            configService.get = jest.fn().mockReturnValue('secret-key');

            const result = await tokenService.verifyToken(token);

            expect(jwtService.verifyAsync).toHaveBeenCalledWith(token, {
                secret: 'secret-key',
            });
            expect(result).toEqual({ payload, verified: true });
        });

        it('should return verification failure when token is invalid', async () => {
            const token = 'invalid-token';

            jwtService.verifyAsync = jest
                .fn()
                .mockRejectedValue(new Error('Invalid token'));
            configService.get = jest.fn().mockReturnValue('secret-key');

            const result = await tokenService.verifyToken(token);

            expect(jwtService.verifyAsync).toHaveBeenCalledWith(token, {
                secret: 'secret-key',
            });
            expect(result).toEqual({ payload: null, verified: false });
        });
    });
});
