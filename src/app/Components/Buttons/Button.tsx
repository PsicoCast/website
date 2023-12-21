type ButtonProps = {
    name: string;
    className: string;
    clicking: () => void;
};

export default function Button({ name, className, clicking }: ButtonProps) {
  return (
    <button
        className={className}
        onClick={() => clicking()}
    >
       {name}
    </button>
  )
}
