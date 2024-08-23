import type { ProgressBarProps } from 'react-aria-components'
import { ProgressBar, Label } from 'react-aria-components'

interface LfProgressBarProps extends ProgressBarProps {
  label?: string
}

const LfProgressBar = ({ label, ...props }: LfProgressBarProps) => {
  return (
    <ProgressBar {...props} className={'flex flex-col gap-1'}>
      {({ percentage, valueText, isIndeterminate }) => (
        <>
          <div className="flex justify-between gap-2">
            <Label>{label}</Label>
            <span className="text-sm text-gray-600 dark:text-zinc-400">
              {valueText}
            </span>
          </div>
          <div className="w-64 h-2 rounded-full bg-gray-300 dark:bg-zinc-700 outline outline-1 -outline-offset-1 outline-transparent relative overflow-hidden">
            <div
              className={`absolute top-0 h-full rounded-full bg-blue-600 dark:bg-blue-500 forced-colors:bg-[Highlight] ${isIndeterminate ? 'animate-ping repeat-infinite' : 'left-0'}`}
              style={{ width: (isIndeterminate ? 60 : percentage) + '%' }}
            />
          </div>
        </>
      )}
    </ProgressBar>
  )
}

export default LfProgressBar
