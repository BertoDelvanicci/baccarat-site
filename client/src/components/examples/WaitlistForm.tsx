import WaitlistForm from '../WaitlistForm';

export default function WaitlistFormExample() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <WaitlistForm onSuccess={() => console.log('Form submitted successfully')} />
      </div>
    </div>
  );
}
