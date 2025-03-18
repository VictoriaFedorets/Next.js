import AddCompanyButton from '@/app/components/add-company-button';

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-3xl">Welcome to the TruScape Dashboard!</h1>
        <p className="text-2xl mb-5">Manage all your companies and keep track of important information in one place.</p>
        <AddCompanyButton />
      </div>
    </main>
  );
}
