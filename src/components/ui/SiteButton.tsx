import { useMemo } from 'react';
import cn from 'classnames';

function AppButton({
  className,
  children,
  disabled,
  onClick,
  rounded = true,
  size = 'md',
  type = 'button',
  variant = 'primary'
}: any) {
  const borderRadiusClass = useMemo(() => {
    if (!rounded) {
      return 'rounded-none';
    }

    switch (size) {
      case '2xs':
        return 'rounded';

      case 'xs':
        return 'rounded';

      case 'sm':
        return 'rounded-md';

      case 'md':
        return 'rounded-md';

      case 'lg':
        return 'rounded-md';

      default:
        return 'rounded-md';
    }
  }, [rounded, size]);

  const colorClass = useMemo(() => {
    switch (variant) {
      case 'primary':
        return 'bg-primary text-grey-950 hover:bg-primary-800 active:bg-primary-700 disabled:bg-primary-700';

      case 'secondary':
        return 'bg-primary-700 text-grey-950 hover:bg-primary-600 active:bg-primary-500 disabled:bg-primary-500';

      default:
        return 'bg-white text-grey-950 ring-gray-300 hover:bg-gray-100 active:bg-gray-200 disabled:bg-gray-200';
    }
  }, [variant]);

  const sizeClass = useMemo(() => {
    switch (size) {
      case '2xs':
        return 'py-1 px-2 text-xs';

      case 'xs':
        return 'py-1 px-2 text-sm';

      case 'sm':
        return 'py-1.5 px-2.5 text-sm';

      case 'md':
        return 'py-2 px-3 text-sm';

      case 'lg':
        return 'py-2.5 px-3.5 text-sm';

      default:
        return 'py-2 px-3 text-sm';
    }
  }, [size]);

  return (
    <button
      className={cn(
        className,
        colorClass,
        borderRadiusClass,
        sizeClass,
        'rounded shadow-sm inline-flex items-center justify-center gap-2 disabled:cursor-not-allowed site__text'
      )}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}

export default AppButton;
