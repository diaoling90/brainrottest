import Loading from '@/components/Loading';

export default function QuizLoading() {
  return (
    <div className="min-h-screen pt-16 flex items-center justify-center">
      <Loading text="Loading quiz questions..." size="lg" />
    </div>
  );
}