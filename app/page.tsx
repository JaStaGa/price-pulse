export default function Home() {
  return (
    <main className="min-h-screen p-8 sm:p-12">
      <h1 className="text-3xl font-bold mb-6">📊 PricePulse</h1>
      <p className="text-lg text-gray-600 mb-10">
        Today's top market movers with AI-powered explanations.
      </p>
      <div className="grid gap-8 sm:grid-cols-3">
        <section>
          <h2 className="text-xl font-semibold mb-2">Stocks</h2>
          <div className="bg-white p-4 border rounded">Coming soon...</div>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">ETFs</h2>
          <div className="bg-white p-4 border rounded">Coming soon...</div>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">Crypto</h2>
          <div className="bg-white p-4 border rounded">Coming soon...</div>
        </section>
      </div>
    </main>
  );
}
