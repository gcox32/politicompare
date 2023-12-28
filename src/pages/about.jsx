import Head from 'next/head';
import RootLayout from '../app/layouts/layout';

export default function About() {
  return (
    <RootLayout>
      <Head>
        <title>About | PolitiCompare</title>
      </Head>

      <main className="container mx-auto p-4">
        <h1 className="text-center text-3xl font-bold text-gray-800 my-6">About PolitiCompare</h1>

        <div className="bg-white shadow rounded p-6">
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="text-gray-700">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </main>
    </RootLayout>
  );
}
