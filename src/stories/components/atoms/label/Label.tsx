import './label.css'

interface LabelProps {
  text: string;
  color?: 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'danger' | 'info' | 'base';
}

export const Label = ({ text, color='base' }: LabelProps) => {
  return (
    <label className={`label label--color-${color}`}>{ text }</label>
  )
}