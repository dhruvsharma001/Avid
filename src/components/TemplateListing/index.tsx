import MaxWidthWrapper from "@/app/MaxWidthWrapper";
import TemplateCard from "./templateCard";
import { TTemplateWithId } from "@/models/Template";

type TProps = {
  templates: TTemplateWithId[];
};
export default function TemplateListing(props: TProps) {
  return (
    <MaxWidthWrapper className="pt-3 md:pt-3 max-w-full flex gap-3 flex-wrap justify-center">
      {props.templates.map(
        (template) =>
          (process.env.NEXT_PUBLIC_APP_ENV === "development" ||
            template.listed) && (
            <TemplateCard
              key={template.id}
              template={template}
              templateId={template.id}
            ></TemplateCard>
          )
      )}
    </MaxWidthWrapper>
  );
}
