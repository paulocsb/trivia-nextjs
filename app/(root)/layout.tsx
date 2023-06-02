import { QuestionsProvider } from '@/context/questionContext'
import { cn } from '@/lib/utils'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <div className={cn('container mx-auto')}>
        <QuestionsProvider>{children}</QuestionsProvider>
      </div>
    </main>
  );
}
