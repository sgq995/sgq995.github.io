import { TbMenu, TbX } from "solid-icons/tb";
import {
  Accessor,
  ParentComponent,
  Show,
  Signal,
  children,
  createSignal,
  onCleanup,
  onMount,
} from "solid-js";
import FloatingActionButton from "../FloatingActionButton";

function clickOutside(el: HTMLElement, value: Accessor<Signal<boolean>>) {
  const [visible, setVisible] = value();

  const onClick = (event: MouseEvent) => {
    console.log("directive click", visible());
    if (visible() && !el.contains(event.target as Node | null)) {
      event.stopPropagation();
      event.stopImmediatePropagation();
      event.preventDefault();
      setVisible(false);
    }
  };

  document.body.addEventListener("click", onClick);
  onCleanup(() => document.body.removeEventListener("click", onClick));
}

declare module "solid-js" {
  namespace JSX {
    interface Directives {
      clickOutside: Signal<boolean>;
    }
  }
}

export type AsideProps = {};

const Aside: ParentComponent<AsideProps> = (props) => {
  const content = children(() => props.children);
  const [isMediumUp, setIsMediumUp] = createSignal(false);
  const [visible, setVisible] = createSignal(false);

  const handleMediaQueryChange = (event: MediaQueryListEvent) => {
    if (event.matches) {
      setVisible(false);
    }

    setIsMediumUp(event.matches);
  };

  const handleShowClick = () => {
    setVisible(true);
  };

  const handleHideClick = () => {
    setVisible(false);
  };

  let mediaQueryList: MediaQueryList | undefined;

  onMount(() => {
    mediaQueryList = matchMedia("(min-width: 768px)");
    mediaQueryList.addEventListener("change", handleMediaQueryChange);
    setIsMediumUp(mediaQueryList.matches);
  });

  onCleanup(() => {
    mediaQueryList?.removeEventListener("change", handleMediaQueryChange);
  });

  return (
    <>
      <div
        class="absolute inset-0 -z-10 bg-gray-200 opacity-0 transition-opacity md:hidden"
        classList={{ ["opacity-100"]: visible() }}
      ></div>
      <aside
        class="absolute bottom-0 left-0 top-0 z-0 flex w-80 -translate-x-80 transform-gpu flex-col items-end bg-white px-3 py-8 transition-transform will-change-transform md:sticky md:translate-x-0 md:bg-transparent md:transition-none"
        classList={{ ["translate-x-0"]: visible() }}
        use:clickOutside={[visible, setVisible]}
      >
        {content()}
      </aside>
      <Show when={!isMediumUp()}>
        <Show when={!visible()}>
          <FloatingActionButton onClick={handleShowClick}>
            <TbMenu />
          </FloatingActionButton>
        </Show>
        <Show when={visible()}>
          <FloatingActionButton onClick={handleHideClick}>
            <TbX />
          </FloatingActionButton>
        </Show>
      </Show>
    </>
  );
};

export default Aside;
