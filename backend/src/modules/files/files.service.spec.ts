import { Test, TestingModule } from '@nestjs/testing';
import { FilesService } from './files.service';
import { extname } from 'path';

describe('FilesService', () => {
    let filesService: FilesService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [FilesService],
        }).compile();

        filesService = module.get<FilesService>(FilesService);
    });

    it('should be defined', () => {
        expect(filesService).toBeDefined();
    });

    describe('addPreview', () => {
        it('should save a film preview and return the endpoint', async () => {
            const film = 'test-film';
            const previewFile: Express.Multer.File = {
                originalname: 'preview.png',
                buffer: Buffer.from('fake-file-content'),
            } as Express.Multer.File;

            const result = await filesService.addPreview(film, previewFile);

            expect(result.endpoint).toContain(
                `static/films/${film}/preview${extname(
                    previewFile.originalname,
                )}`,
            );
        });
    });

    describe('addTrailer', () => {
        it('should save a film trailer and return the endpoint', async () => {
            const film = 'test-film';
            const trailerFile: Express.Multer.File = {
                originalname: 'trailer.mp4',
                buffer: Buffer.from('fake-file-content'),
            } as Express.Multer.File;

            const result = await filesService.addTrailer(film, trailerFile);

            expect(result.endpoint).toContain(
                `static/films/${film}/trailer${extname(
                    trailerFile.originalname,
                )}`,
            );
        });
    });
});
