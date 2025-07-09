
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-6">
      <div className="text-center max-w-xl">
        <h1 className="text-4xl font-bold mb-4 text-blue-600">Welcome to PrintHub</h1>
        <p className="text-lg text-gray-700 mb-6">
          PrintHub is an online marketplace where customers connect with trusted printing companies
          for document printing, posters, stickers, and more.
        </p>
        <p className="text-md text-gray-600">
          We charge customers at checkout and printing companies receive payment automatically.
        </p>
      </div>
    </main>
  );
}
