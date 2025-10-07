import { useState } from 'react';
import SuccessModal from '../SuccessModal';
import { Button } from '@/components/ui/button';

export default function SuccessModalExample() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <Button onClick={() => setOpen(true)} data-testid="button-open-modal">
        Open Success Modal
      </Button>
      <SuccessModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
