import {Input} from "@heroui/input";

export default function DataInput() {
  return (
     <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Input label="Email" type="email" />
      <Input label="Email" placeholder="Enter your email" type="email" />
    </div>
  );
}
