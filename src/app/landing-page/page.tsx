import Navbar from "@/components/navbar";

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl font-extrabold mb-3">Landing Page</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Notice how the page and Navbar remain Server Components, while only the search input runs on the client.
        </p>
      </div>
    </main>
  );
}