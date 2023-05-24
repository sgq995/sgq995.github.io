import { JSX, ParentComponent, children } from "solid-js";

export type FloatingActionButtonProps = {
  onClick: JSX.EventHandler<HTMLButtonElement, MouseEvent>;
};

const FloatingActionButton: ParentComponent<FloatingActionButtonProps> = (
  props
) => {
  const icon = children(() => props.children);

  return (
    <button
      class="fixed bottom-8 left-8 z-10 rounded-full bg-sky-500 p-4 text-white shadow-lg"
      onClick={props.onClick}
    >
      {icon()}
    </button>
  );
};

export default FloatingActionButton;
