import { Check, Loader2 } from 'lucide-react';
import { useMemo } from 'react';
import { useWatch } from 'react-hook-form';

import { Button } from '@/components/ui/button';

import { useTransferFundsFormContext } from './hooks';

const FundsTransferActions: FC = () => {
  const {
    formState: { isSubmitting },
    control
  } = useTransferFundsFormContext();

  const success = useWatch({ name: 'success', control });

  const buttonLabel = useMemo(() => {
    if (isSubmitting) {
      return <Loader2 className="animate-spin" />;
    }

    if (success) {
      return <Check />;
    }

    return <>Transfer</>;
  }, [isSubmitting, success]);

  return (
    <Button type="submit" className="w-full">
      {buttonLabel}
    </Button>
  );
};

export default FundsTransferActions;
