import { HeadlineAnalyzer } from "@/components/headline-analyzer"
import { HeadlineList } from "@/components/headline-list"
import { ThemeToggle } from "@/components/theme-toggle"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container flex items-center justify-between py-4">
          <h1 className="text-2xl font-bold">News Analyzer</h1>
          <ThemeToggle />
        </div>
      </header>
      <main className="container py-8">
        <div className="grid gap-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Analyze Headlines</h2>
            <HeadlineAnalyzer />
          </section>
          <section>
            <h2 className="mb-4 text-xl font-semibold">Existing Headlines</h2>
            <HeadlineList />
          </section>
        </div>
      </main>
    </div>
  )
}

