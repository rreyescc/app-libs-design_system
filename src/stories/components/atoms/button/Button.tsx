import './button.css'
interface ButtonProps {
  text: string
}

export const Button = ({ text }: ButtonProps) => {
  return (
    <button type="button" className="button">{text}</button>
  )
}