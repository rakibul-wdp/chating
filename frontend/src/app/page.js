import { SigninForm } from "@/components/forms/SigninForm";

export default async function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <SigninForm />
    </main>
  );
}
