import { Footer } from '@/widgets/ui/Footer';
import { Header } from '@/widgets/ui/Header';

export const HeaderFooterLayout = ({ children }: { children: React.ReactNode }) => (
    <>
        <Header/>
        {children}
        <Footer/>
    </>
);
