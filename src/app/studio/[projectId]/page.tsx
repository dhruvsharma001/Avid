import Navbar from "@/components/Navbar";
import StudioComponents from "@/components/StudioComponents";

type TProps = {
  params: { projectId: string };
};

export default async function page(props: TProps) {
  const { projectId } = props.params;
  if (!projectId) return null;
  return (
    <>
      <Navbar className="bg-avid-main-500" />
      <main className="bg-avid-main-500">
        <StudioComponents projectId={projectId} />
      </main>
    </>
  );
}
