import { ClientComponentOne } from "../../components/client-component-one";
import { ServerComponentOne } from "@/components/server-component-one";

export default function InterleavingPage() {
  return (
    <main className="max-w-2xl mx-auto p-6 space-y-4">
      <h1 className="text-3xl font-extrabold">Interleaving Demo Page</h1>

      <ClientComponentOne>
        <ServerComponentOne />
      </ClientComponentOne>
    </main>
  );
}