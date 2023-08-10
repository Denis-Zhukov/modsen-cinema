import { Header } from '@/widgets/ui/Header';

export const HeaderLayout = ({ children }: { children: React.ReactNode }) => (
    <>
        <Header/>
        {children}
    </>
);
