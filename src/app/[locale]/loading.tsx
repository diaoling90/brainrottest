import Loading from '@/components/Loading';

export default function LoadingPage() {
  return (
    <div className="min-h-screen pt-16 flex items-center justify-center">
      <Loading text="Loading your brainrot experience..." size="lg" />
    </div>
  );
}