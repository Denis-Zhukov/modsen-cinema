import { redirect } from 'next/navigation';

const Page = ({ searchParams }: { searchParams?: { from?: string } }) => {
    if (searchParams?.from) redirect(searchParams.from);
    else redirect('/');
};

export default Page;
