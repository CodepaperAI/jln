import { cn } from "@/utils/cn";

export default function Container({ as: Tag = "div", className = "", children }) {
  return <Tag className={cn("container-x", className)}>{children}</Tag>;
}
