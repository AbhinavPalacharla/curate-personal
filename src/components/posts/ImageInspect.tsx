import * as Dialog from "@radix-ui/react-dialog";
import { useState, useRef } from "react";
import { useClickAway } from "react-use";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Image from "next/image";

const ImageInspect = ({
  children,
  url,
}: {
  children: React.ReactNode;
  url: string;
}) => {
  const [open, setOpen] = useState(false);

  const ref = useRef(null);

  useClickAway(ref, () => {
    setOpen(false);
  });
  return (
    <div>
      <div className="py-10" />
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger>{children}</Dialog.Trigger>
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-80" />
        <Dialog.Content className="fixed inset-0 flex items-center justify-center">
          <div ref={ref}>
            <TransformWrapper initialScale={1}>
              {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                <div className="flex flex-row items-center justify-center">
                  <TransformComponent>
                    <Image
                      src={url}
                      alt="test"
                      width={4096}
                      height={4096}
                      className="rounded-sm h-full lg:max-h-[44rem] w-auto"
                    />
                  </TransformComponent>
                </div>
              )}
            </TransformWrapper>
            <div></div>
          </div>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  );
};

export { ImageInspect };
