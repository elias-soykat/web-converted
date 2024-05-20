export default function Loading() {
  return (
    <div className="fixed inset-0 flex h-screen items-center justify-center bg-black opacity-50">
      <div className="h-20 w-20 animate-spin rounded-full border-8 border-gray-300 border-t-black" />
    </div>
  );
}
