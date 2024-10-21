import { getSignedUrl } from "@/firebase/utils";
import { TRender } from "@/models/Render";
import { Button, Card, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
type TProps = {
  render: TRender;
};
function RenderCard(prop: TProps) {
  const { render } = prop;
  const [signedURL, setSignedURL] = useState<string>("");
  const getSignedURL = async () => {
    if (render.previewUrl) {
      const res = await getSignedUrl(render.previewUrl);
      setSignedURL(res);
    }
  };
  useEffect(() => {
    getSignedURL();
  });
  return (
    <Card isFooterBlurred radius="lg" className="border-none hover:scale-110">
      <Image
        alt={render.projectId ? render.projectId : "Untitled"}
        className="object-cover"
        height={200}
        src={signedURL}
        width={400}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">
          {render.projectId ? render.projectId : "Untitled"}
        </p>
        <Button
          className="text-tiny text-white bg-black/20"
          variant="flat"
          color="default"
          radius="lg"
          size="sm"
        >
          {render.progress === 100 ? "Download" : render.progress + "%"}
        </Button>
      </CardFooter>
    </Card>
  );
}

export default RenderCard;
