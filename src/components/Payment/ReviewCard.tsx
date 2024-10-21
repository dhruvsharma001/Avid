import React from "react";
import { Card, CardBody, Avatar } from "@nextui-org/react";

type TProps = {
  name: string;
  company: string;
  position: string;
  review: string;
  avatar: string;
};
function ReviewCard(props: TProps) {
  const { name, review, company, position } = props;
  return (
    <Card>
      <CardBody>
        <div className="flex gap-4 ">
          <div>
            <Avatar isBordered radius="full" size="md" src="/assets/logo.png" />
          </div>

          <div className="flex text-gray-600 flex-col">
            <p className="text-gray-100">{review}</p>
            <div className="mt-10">
              <p className="text-gray-300">{name}</p>
              <p>{company}</p>
              <p>{position}</p>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default ReviewCard;
