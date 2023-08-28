import { usePathname } from 'next/navigation';
import Link from 'next-intl/link';

export const LanguageSelect = () => {
    const pathname = usePathname()!.replace(/^\/(en|ru)/i, '/');

    return (
        <div>
            <Link locale="en" href={pathname}>English</Link>
            <Link locale="ru" href={pathname}>Russian</Link>
        </div>
    );
};
