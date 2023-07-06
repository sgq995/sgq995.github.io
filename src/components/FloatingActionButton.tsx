import { JSX, ParentComponent, children } from "solid-js";

export type FloatingActionButtonProps =
  JSX.ButtonHTMLAttributes<HTMLButtonElement> & {
    onClick: JSX.EventHandler<HTMLButtonElement, MouseEvent>;
  };

const FloatingActionButton: ParentComponent<FloatingActionButtonProps> = (
  props
) => {
  const icon = children(() => props.children);

  return (
    <button
      {...props}
      class="fixed bottom-8 left-8 z-50 rounded-full bg-sky-500 p-4 text-white shadow-lg"
    >
      {icon()}
    </button>
  );
};

export default FloatingActionButton;
