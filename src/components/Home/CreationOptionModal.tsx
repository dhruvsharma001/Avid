import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/react";



import { useMemo, useState } from "react";

type TProps = {
  isOpen: boolean;
  onOpen: () => void;
  onOpenChange: (isOpen: boolean) => void;
  prompt: string;
  onCreate: (
    prompt: string,
    options: { targetPlatform: Set<string>; targetUser: Set<string> }
  ) => void;
};
export default function CreationOptionModal(props: TProps) {
  const { isOpen, onOpen, onOpenChange, prompt, onCreate } = props;
  const [selectedKeys, setSelectedKeys] = useState(new Set(["Instagram"]));
  const [targetUser, setTargetUser] = useState(new Set(["Genz"]));

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );
  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="4xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Additional Information
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-col gap-4">
                  <div className="grid grid-cols-2 mb-6 md:mb-0 gap-4">
                    <div>
                      <Input
                        label="prompt"
                        value={prompt}
                        variant="flat"
                      ></Input>
                    </div>
                    <div className="flex items-center ">
                      <label className="text-sm font-medium text-gray-200">
                        Target Platform
                      </label>
                      <Dropdown>
                        <DropdownTrigger>
                          <Button variant="bordered" className="capitalize">
                            {selectedValue}
                          </Button>
                        </DropdownTrigger>
                        <DropdownMenu
                          aria-label="Platform"
                          title="Select Target Platform"
                          variant="flat"
                          disallowEmptySelection
                          selectionMode="single"
                          selectedKeys={selectedKeys}
                          onSelectionChange={(keys) =>
                            setSelectedKeys(keys as Set<string>)
                          }
                        >
                          <DropdownItem key="Instagram">Instagram</DropdownItem>
                          <DropdownItem key="LinkedIn">LinkedIn</DropdownItem>
                          <DropdownItem key="Youtube">Youtube</DropdownItem>
                          <DropdownItem key="Facebook">Facebook</DropdownItem>
                          <DropdownItem key="Amazon">Amazon</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 mb-6 md:mb-0 gap-4">
                    <div className="flex items-center ">
                      <label className="text-sm font-medium text-gray-200">
                        Target Audience
                      </label>
                      <Dropdown>
                        <DropdownTrigger>
                          <Button variant="bordered" className="capitalize">
                            {Array.from(targetUser).join(", ")}
                          </Button>
                        </DropdownTrigger>
                        <DropdownMenu
                          aria-label="Target User"
                          title="Select Target User"
                          variant="flat"
                          disallowEmptySelection
                          selectionMode="multiple"
                          selectedKeys={targetUser}
                          onSelectionChange={(keys) =>
                            setTargetUser(keys as Set<string>)
                          }
                        >
                          {[
                            "Genz",
                            "millennials",
                            "young",
                            "adult",
                            "seniors",
                          ].map((tc) => (
                            <DropdownItem key={tc}>{tc}</DropdownItem>
                          ))}
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button
                  color="primary"
                  onPress={() => {
                    onCreate(prompt, {
                      targetPlatform: selectedKeys,
                      targetUser: targetUser,
                    });
                  }}
                >
                  Create
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
