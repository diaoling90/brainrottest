import Loading from '@/components/Loading';

export default function ResultLoading() {
  return (
    <div className="min-h-screen pt-16 flex items-center justify-center">
      <Loading text="Generating your brainrot result..." size="lg" />
    </div>
  );
}