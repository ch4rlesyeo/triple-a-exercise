import { Check, Loader2 } from 'lucide-react';
import { useMemo } from 'react';
import { useWatch } from 'react-hook-form';

import { Button } from '@/components/ui/button';

import { useCreateAccountFormContext } from './hooks';

const CreateAccountActions: FC = () => {
  const {
    formState: { isSubmitting },
    control
  } = useCreateAccountFormContext();

  const success = useWatch({ name: 'success', control });

  const buttonLabel = useMemo(() => {
    if (isSubmitting) {
      return <Loader2 className="animate-spin" />;
    }

    if (success) {
      return <Check />;
    }

    return <>Create</>;
  }, [isSubmitting, success]);

  return (
    <Button type="submit" className="w-full">
      {buttonLabel}
    </Button>
  );
};

export default CreateAccountActions;
